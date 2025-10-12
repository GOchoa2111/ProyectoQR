import { Component, OnInit, AfterViewInit, ViewChild, inject } from '@angular/core';
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

  ngOnInit(): void {
    this.configurarFiltroPredicado();
    this.cargarHistorial();

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
