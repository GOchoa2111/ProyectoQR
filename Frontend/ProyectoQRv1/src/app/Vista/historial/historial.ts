import { Component, OnInit, AfterViewInit, ViewChild, inject, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { HistorialMarcaje } from '../../Interface/historial-marcajes';
import { HistorialService } from '../../Service/historial-marcajes.service';
import { MatTableDataSource } from '@angular/material/table';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [
    CommonModule, HttpClientModule, DatePipe,
    ReactiveFormsModule,
    MatTableModule, MatPaginatorModule, MatSortModule,
    MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule
  ],
  templateUrl: './historial.html',
  styleUrl: './historial.css',
  providers: [HistorialService]
})
export class Historial implements OnInit, AfterViewInit {

  // Material table
  displayedColumns: string[] = ['numeroCarnet', 'nombreCompleto', 'fechaHora', 'tipo'];
  dataSource = new MatTableDataSource<HistorialMarcaje>([]);

  // Estado UI
  cargando = true;
  errorCarga: string | null = null;

  // Filtro (carnet o nombre)
  searchCtrl = new FormControl<string>('', { nonNullable: true });

  // ViewChilds Material
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // DI
  private historialService = inject(HistorialService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  // ChangeDetectorRef to force view refresh when needed
  private cd = inject(ChangeDetectorRef);

  // To unsubscribe router events
  private navigationSub: any = null;

  ngOnInit(): void {
    this.configurarFiltroPredicado();
    // If resolver provided data, use it to avoid an extra round-trip and ensure first-click load
    const resolved = this.route.snapshot.data['historialData'] as HistorialMarcaje[] | undefined | null;
    if (resolved && Array.isArray(resolved)) {
      this.dataSource.data = resolved;
      this.cargando = false;
      try { this.cd.detectChanges(); } catch (e) {}
    } else {
      this.cargarHistorial();
    }

    // Filtro con debounce
    this.searchCtrl.valueChanges
      .pipe(debounceTime(250), distinctUntilChanged())
      .subscribe(value => {
        this.dataSource.filter = (value ?? '').trim().toLowerCase();
        // Reinicia a primera página cuando se filtra
        if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // Re-cargar después de que la vista esté lista para asegurarnos que la tabla se actualiza
    // esto evita escenarios donde la navegación ocurre pero la tabla aún no está inicializada
    this.cargarHistorial();

    // Suscribir al evento 'page' solo para depuración (no modificamos nada)
    try {
      this.paginator.page.subscribe(evt => {
        try {
          console.log('[historial] paginator.page event', {
            pageIndex: this.paginator.pageIndex,
            pageSize: this.paginator.pageSize,
            length: this.paginator.length,
            dataLength: this.dataSource.data?.length,
            filteredLength: this.dataSource.filteredData?.length
          });
        } catch (e) {}
      });
    } catch (e) {
      // ignore
    }

    // No subscribimos manualmente al evento `paginator.page` —
    // MatTableDataSource gestiona la paginación automáticamente cuando se asigna
    // this.dataSource.paginator = this.paginator; (se hace más abajo y en cargarHistorial())

    // Escuchar eventos de navegación para recargar cuando la ruta /historial se active
    try {
      this.navigationSub = this.router.events.subscribe(evt => {
        if (evt instanceof NavigationEnd) {
          // si navegamos a /historial forzamos recarga
          if (evt.urlAfterRedirects?.startsWith('/historial')) {
            this.cargarHistorial();
          }
        }
      });
    } catch (e) {
      // ignore if Router not available
    }
  }

  ngOnDestroy(): void {
    try { if (this.navigationSub) this.navigationSub.unsubscribe?.(); } catch {}
  }

  private configurarFiltroPredicado(): void {
    this.dataSource.filterPredicate = (dato: HistorialMarcaje, filtro: string) => {
      const carnet = String(dato.numeroCarnet ?? '').toLowerCase();
      const nombre = String(dato.nombreCompleto ?? '').toLowerCase();
      return carnet.includes(filtro) || nombre.includes(filtro);
    };
  }

  cargarHistorial(): void {
    this.cargando = true;
    this.errorCarga = null;
    this.historialService.obtenerHistorial().subscribe({
      next: (data) => {
        this.dataSource.data = data ?? [];
        this.cargando = false;
        // fuerza actualización de paginator/sort si llegaron después
        if (this.paginator) this.dataSource.paginator = this.paginator;
        if (this.sort) this.dataSource.sort = this.sort;
        // Forzar actualización interna del datasource y log para depuración
        try {
          (this.dataSource as any)._updateChangeSubscription?.();
        } catch (e) {}
        try {
          console.log('[historial] cargarHistorial: data length', this.dataSource.data?.length, 'filtered', this.dataSource.filteredData?.length);
          if (this.paginator) console.log('[historial] paginator state', { pageIndex: this.paginator.pageIndex, pageSize: this.paginator.pageSize, length: this.paginator.length });
        } catch (e) {}
        try { this.cd.detectChanges(); } catch (e) {}
        console.log('Historial cargado correctamente:', data);
      },
      error: (err) => {
        this.cargando = false;
        this.errorCarga = 'Error al cargar el historial. Verifique la URL del túnel y la configuración CORS.';
        console.error('Error al obtener historial:', err);
      }
    });
  }

  // (Para la etapa de imprimir más adelante)
  // imprimirActual(): void {
  //   // Aquí tomaremos dataSource.filteredData y generaremos impresión/PDF.
  // }

  /**
   * Exporta la página actual (o todos si no hay paginador) a Excel (.xlsx)
   */
  exportarAExcel(): void {
    try {
      const rows = this.dataSource.filteredData ?? [];
      let dataToExport = rows;
      if (this.paginator) {
        const start = this.paginator.pageIndex * this.paginator.pageSize;
        const end = start + this.paginator.pageSize;
        dataToExport = rows.slice(start, end);
      }

      // Mapear a un formato plano para Excel
      const flat = (dataToExport || []).map(r => ({
        Carnet: r.numeroCarnet ?? '',
        Nombre: r.nombreCompleto ?? '',
        FechaHora: r.fechaHora ? new Date(r.fechaHora).toLocaleString() : '',
        Tipo: r.tipo ?? ''
      }));

      const ws = XLSX.utils.json_to_sheet(flat);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Historial');

      const filename = `historial_marcajes_${new Date().toISOString().slice(0,10)}.xlsx`;
      XLSX.writeFile(wb, filename);
    } catch (e) {
      console.error('Error exportando a Excel:', e);
    }
  }
}
