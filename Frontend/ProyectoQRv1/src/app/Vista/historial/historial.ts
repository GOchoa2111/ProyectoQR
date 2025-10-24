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
}
