import {
  Component, OnInit, AfterViewInit, ViewChild, OnDestroy, inject, ChangeDetectorRef
} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { debounceTime, distinctUntilChanged, filter, Subscription } from 'rxjs';

import { HistorialMarcaje } from '../../Interface/historial-marcajes';
import { HistorialService } from '../../Service/historial-marcajes.service';
import { AuthService } from '../../core/services/auth.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [
    CommonModule, HttpClientModule, DatePipe, ReactiveFormsModule,
    MatTableModule, MatPaginatorModule, MatSortModule,
    MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule,
    MatMenuModule, MatDatepickerModule, MatNativeDateModule
  ],
  templateUrl: './historial.html',
  styleUrls: ['./historial.css'],                // ✅ era styleUrl
  providers: [HistorialService]
})
export class Historial implements OnInit, AfterViewInit, OnDestroy {
  // ====== Tabla Material ======
  displayedColumns: string[] = ['numeroCarnet', 'nombreCompleto', 'fechaHora', 'tipo'];
  dataSource = new MatTableDataSource<HistorialMarcaje>([]); // ✅ única fuente de datos

  // Estado UI
  cargando = true;
  errorCarga: string | null = null;

  // Filtro
  searchCtrl = new FormControl<string>('', { nonNullable: true });
  // controles de rango de fecha
  startDateCtrl = new FormControl<Date | null>(null);
  endDateCtrl = new FormControl<Date | null>(null);

  // ViewChilds
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // DI
  private historialService = inject(HistorialService);
  private auth = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private cd = inject(ChangeDetectorRef);

  // Subs
  private subs = new Subscription();

  ngOnInit(): void {
    // 1) Predicate que combina texto (carnet/nombre) y filtro por rango de fechas
    this.dataSource.filterPredicate = (dato: HistorialMarcaje, filtro: string) => {
      const f = (filtro ?? '').trim().toLowerCase();
      const carnet = String(dato.numeroCarnet ?? '').toLowerCase();
      const nombre = String(dato.nombreCompleto ?? '').toLowerCase();
      const textMatch = !f || carnet.includes(f) || nombre.includes(f);

      // Rango de fechas (si se han seleccionado)
      const itemDate = dato.fechaHora ? new Date(dato.fechaHora) : null;
      const sd = this.startDateCtrl?.value ? new Date(this.startDateCtrl.value) : null;
      const ed = this.endDateCtrl?.value ? new Date(this.endDateCtrl.value) : null;
      if (sd) sd.setHours(0,0,0,0);
      if (ed) ed.setHours(23,59,59,999);

      let dateOk = true;
      if ((sd || ed) && !itemDate) dateOk = false; // no hay fecha en el dato
      if (sd && itemDate) dateOk = dateOk && (itemDate >= sd);
      if (ed && itemDate) dateOk = dateOk && (itemDate <= ed);

      return textMatch && dateOk;
    };

    // 2) Filtro con debounce
    this.subs.add(
      this.searchCtrl.valueChanges.pipe(debounceTime(250), distinctUntilChanged())
        .subscribe(value => {
          this.dataSource.filter = (value ?? '').trim().toLowerCase();
          // Reiniciar a la primera página tras filtrar
          if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
          }
          try { this.cd.detectChanges(); } catch {}
        })
    );

    // cuando cambian las fechas, re-evaluar el filtro para que predicate considere el nuevo rango
    this.subs.add(this.startDateCtrl.valueChanges.subscribe(() => {
      this.dataSource.filter = (this.searchCtrl.value ?? '').trim().toLowerCase();
      if (this.paginator) this.paginator.firstPage();
    }));
    this.subs.add(this.endDateCtrl.valueChanges.subscribe(() => {
      this.dataSource.filter = (this.searchCtrl.value ?? '').trim().toLowerCase();
      if (this.paginator) this.paginator.firstPage();
    }));

    // 3) Si tienes resolver, úsalo; si no, carga por HTTP
    const resolved = this.route.snapshot.data['historialData'] as HistorialMarcaje[] | undefined | null;
    if (resolved && Array.isArray(resolved)) {
      this.setData(resolved);
    } else {
      this.cargarHistorial();
    }

    // 4) Si quieres recargar al volver a /historial (opcional)
    this.subs.add(
      this.router.events.pipe(filter(e => e instanceof NavigationEnd))
        .subscribe((e: any) => {
          if (e.urlAfterRedirects?.startsWith('/historial')) {
            this.cargarHistorial();
          }
        })
    );
  }

  // Exponer en template si el usuario actual es ADMIN
  get isAdmin(): boolean {
    try { return this.auth.hasRole('ADMIN'); } catch { return false; }
  }

  ngAfterViewInit(): void {
    // Enlazar paginator/sort una sola vez, aquí ya existen
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // (Opcional) Logs para depuración
    this.subs.add(this.paginator.page.subscribe(() => {
      console.log('[historial] page', {
        index: this.paginator.pageIndex,
        size: this.paginator.pageSize,
        length: this.paginator.length
      });
    }));
    this.subs.add(this.sort.sortChange.subscribe(() => {
      console.log('[historial] sort', this.sort.active, this.sort.direction);
      // Al cambiar sort, vuelve a la primera página para UX mejor
      this.paginator.firstPage();
    }));
  }

  /** Limpia los filtros de fecha y vuelve a aplicar el filtro de texto actual */
  clearDates(): void {
    try {
      this.startDateCtrl.setValue(null);
      this.endDateCtrl.setValue(null);
      // re-aplicar filtro de texto para que el predicate se re-evalúe
      this.dataSource.filter = (this.searchCtrl.value ?? '').trim().toLowerCase();
      if (this.paginator) this.paginator.firstPage();
    } catch (e) {
      // noop
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  /** Carga desde el servicio y normaliza orden (más recientes primero) */
  cargarHistorial(): void {
    this.cargando = true;
    this.errorCarga = null;

    this.subs.add(
      this.historialService.obtenerHistorial().subscribe({
        next: (data) => {
          const rows = Array.isArray(data) ? data : (data ? [data] : []);
          rows.sort((a: any, b: any) => new Date(b.fechaHora).getTime() - new Date(a.fechaHora).getTime());
          this.setData(rows);
          console.log('[historial] datos cargados:', rows.length);
        },
        error: (err) => {
          this.cargando = false;
          this.errorCarga = 'Error al cargar el historial. Verifique la URL del túnel y la configuración CORS.';
          console.error('Error al obtener historial:', err);
        }
      })
    );
  }

  /** Aplica datos a la tabla y sincroniza paginator */
  private setData(rows: HistorialMarcaje[]) {
    this.dataSource.data = rows;
    this.cargando = false;

    // Actualiza length del paginator (usar filteredData para reflejar filtros)
    if (this.paginator) {
      this.paginator.firstPage();
      this.paginator.length = this.dataSource.filteredData.length;
    }
    try { this.cd.detectChanges(); } catch {}
  }

  /** Devuelve la lista en el mismo orden visible que la tabla */
  private getRenderedData(): HistorialMarcaje[] {
    // 1) Filtrado actual
    let data = this.dataSource.filteredData ?? this.dataSource.data;

    // 2) Orden actual
    if (this.sort?.active && this.sort?.direction) {
      data = this.dataSource.sortData(data.slice(), this.sort);
    }

    // 3) Página actual
    if (this.paginator) {
      const start = this.paginator.pageIndex * this.paginator.pageSize;
      const end = start + this.paginator.pageSize;
      data = data.slice(start, end);
    }

    return data;
  }

  /**
   * Exporta a Excel. Si exportAll === true solicita todos los registros al backend
   * (requiere permisos ADMIN) y genera el .xlsx en el cliente. Si exportAll === false
   * exporta únicamente los registros visibles en la página actual.
   */
  exportarAExcel(exportAll: boolean = false): void {
    if (exportAll) {
      if (!this.auth.hasRole('ADMIN')) {
        try { alert('No tienes permisos para exportar todos los registros.'); } catch {}
        return;
      }
      this.historialService.obtenerHistorial().subscribe({
        next: (allRows) => {
          this.saveRowsToExcel(allRows, 'historial_marcajes_todos');
        },
        error: (err) => {
          console.error('[historial] error obteniendo todos los registros para exportar', err);
          try { alert('Error al obtener todos los registros para exportar.'); } catch {}
        }
      });
      return;
    }

    try {
      const dataToExport = this.getRenderedData();
      this.saveRowsToExcel(dataToExport, `historial_marcajes_pagina_${(this.paginator?.pageIndex ?? 0)+1}`);
    } catch (e) {
      console.error('Error exportando a Excel:', e);
    }
  }

  private saveRowsToExcel(rows: HistorialMarcaje[], filenamePrefix: string) {
    try {
      const flat = (rows || []).map(r => ({
        Carnet: r.numeroCarnet ?? '',
        Nombre: r.nombreCompleto ?? '',
        FechaHora: r.fechaHora ? new Date(r.fechaHora).toLocaleString() : '',
        Tipo: r.tipo ?? ''
      }));

      const ws = XLSX.utils.json_to_sheet(flat);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Historial');

      const filename = `${filenamePrefix}_${new Date().toISOString().slice(0,10)}.xlsx`;
      XLSX.writeFile(wb, filename);
    } catch (e) {
      console.error('Error saving Excel:', e);
    }
  }
}
