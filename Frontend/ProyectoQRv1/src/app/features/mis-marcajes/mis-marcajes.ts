import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core'; // [MODIFICADO] Añadimos OnDestroy
import { Router, NavigationEnd } from '@angular/router'; // [NUEVO] Importamos NavigationEnd para escuchar eventos del router
import { HistorialMarcaje } from '../../Interface/historial-marcajes';
import { HistorialMarcajesService } from '../../Service/historial-marcajes.service';
import { finalize, takeUntil, filter } from 'rxjs/operators'; // [NUEVO] Añadimos operadores de RxJS
import { Subject } from 'rxjs'; // [NUEVO] Subject para gestionar la desuscripción

@Component({
  selector: 'app-mis-marcajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-marcajes.html',
  styleUrls: ['./mis-marcajes.css']
})
export class MisMarcajesComponent implements OnInit, OnDestroy {
  // 'marcajes' es la lista maestra que contiene todos los registros del backend.
  marcajes: HistorialMarcaje[] = [];
  loading = false;
  error: string | null = null;

  /**
   * Estado de ordenamiento en el cliente.
   * - sortColumn: columna actualmente ordenada (fechaHora o tipo)
   * - sortDirection: dirección del orden ('asc' o 'desc')
   * Inicializamos por defecto en 'desc' para mostrar primero los marcajes más recientes.
   */
  sortColumn: 'fechaHora' | 'tipo' = 'fechaHora';
  sortDirection: 'asc' | 'desc' = 'desc';

  // --- Propiedades para el filtrado y la paginación ---
  /**
   * Almacena la fecha del input (en formato YYYY-MM-DD) para filtrar la tabla.
   */
  filtroFecha: string = '';
  /**
   * Contiene los marcajes después de aplicar el filtro de fecha.
   */
  marcajesFiltrados: HistorialMarcaje[] = [];
  /**
   * La lista final que se renderiza en la tabla, contiene solo los registros de la página actual.
   */
  marcajesPaginados: HistorialMarcaje[] = [];

  paginaActual: number = 1;
  registrosPorPagina: number = 5;

  // [NUEVO] Subject para gestionar la cancelación de suscripciones y evitar fugas de memoria.
  private destroy$ = new Subject<void>();

  constructor(private servicio: HistorialMarcajesService, private router: Router) { }

  /**
   * Al iniciar el componente, cargamos los marcajes y nos suscribimos a los eventos de navegación.
   */
  ngOnInit(): void {
    // [MODIFICADO] La carga inicial se hace a través de nuestro nuevo método centralizado.
    this.cargarMarcajes();

    // [NUEVO] Escuchamos los eventos del router.
    // Esto soluciona el problema de que los datos no se carguen al volver a navegar al mismo componente.
    this.router.events.pipe(
      // Filtramos solo los eventos de tipo NavigationEnd que corresponden a la URL de este componente.
      filter(event => event instanceof NavigationEnd && event.url.includes('/mis-marcajes')),
      // Nos desuscribimos automáticamente cuando el componente se destruye.
      takeUntil(this.destroy$)
    ).subscribe(() => {
      // Cada vez que la navegación a esta ruta termina, volvemos a cargar los marcajes.
      this.cargarMarcajes();
    });
  }

  /**
   * [NUEVO] Se ejecuta cuando el componente se destruye.
   * Limpia la suscripción a los eventos del router para prevenir fugas de memoria.
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * [NUEVO] Método centralizado para obtener los marcajes desde el servicio.
   * Contiene la lógica que antes estaba en ngOnInit.
   */
  cargarMarcajes(): void {
    this.loading = true;
    this.error = null; // Reseteamos el error en cada carga.
    this.servicio.getMyMarcajes()
      .pipe(finalize(() => { this.loading = false; }))
      .subscribe({
        next: data => {
          this.marcajes = data || [];
          this.ordenarLista();
          this.aplicarFiltrosYPaginacion();
          console.debug('[MisMarcajes] marcajes recibidos:', data);
        },
        error: err => {
          console.error('[MisMarcajes] error al cargar marcajes', err);
          if (err?.status === 401) {
            this.router.navigate(['/login']);
            return;
          }
          if (err?.name === 'TimeoutError') {
            this.error = 'El servidor tardó demasiado en responder.';
             return;
          }
          this.error = 'No se pudieron cargar los marcajes';
        }
      });
  }

  /**
   * [NUEVO] Método público para el botón de "Actualizar".
   * Simplemente vuelve a llamar a la función de carga principal.
   */
  actualizarDatos(): void {
    console.log('Actualizando datos manualmente...');
    this.cargarMarcajes();
  }

  /**
   * Alterna el orden de la columna solicitada y aplica el ordenamiento
   * directamente sobre el arreglo `marcajes` (ordenamiento en cliente).
   * - Si se pulsa la misma columna, alterna entre asc/desc
   * - Si se pulsa una columna nueva, la establece como 'desc' por defecto
   */
  sortBy(column: 'fechaHora' | 'tipo') {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'desc';
    }
    this.ordenarLista();
    this.aplicarFiltrosYPaginacion();
  }

  private ordenarLista() {
    this.marcajes.sort((a, b) => this.compare(a, b, this.sortColumn));
  }

  private compare(a: HistorialMarcaje, b: HistorialMarcaje, column: 'fechaHora' | 'tipo'): number {
    let res = 0;
    if (column === 'fechaHora') {
      res = new Date(a.fechaHora).getTime() - new Date(b.fechaHora).getTime();
    } else {
      res = (a.tipo || '').localeCompare(b.tipo || '');
    }
    return this.sortDirection === 'asc' ? res : -res;
  }

  /**
   * Formatea una fecha ISO para mostrarla en la UI.
   * - Intentamos parsear la cadena ISO y devolver una representación legible
   * - Si el valor no es una fecha válida, devolvemos el valor original para evitar romper la UI
   */
  formatDate(iso: string) {
    try {
      const d = new Date(iso);
      if (isNaN(d.getTime())) return iso;
      return d.toLocaleString('es-GT', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
    } catch {
      return iso;
    }
  }

  aplicarFiltrosYPaginacion() {
    if (this.filtroFecha) {
      this.marcajesFiltrados = this.marcajes.filter(m => m.fechaHora.startsWith(this.filtroFecha));
    } else {
      this.marcajesFiltrados = [...this.marcajes];
    }
    const indiceInicio = (this.paginaActual - 1) * this.registrosPorPagina;
    this.marcajesPaginados = this.marcajesFiltrados.slice(indiceInicio, indiceInicio + this.registrosPorPagina);
  }

  onFechaChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.filtroFecha = input.value;
    this.paginaActual = 1;
    this.aplicarFiltrosYPaginacion();
  }

  cambiarPagina(nuevaPagina: number) {
    if (nuevaPagina < 1 || nuevaPagina > this.getTotalPaginas()) return;
    this.paginaActual = nuevaPagina;
    this.aplicarFiltrosYPaginacion();
  }

  getTotalPaginas(): number {
    if (!this.marcajesFiltrados || this.marcajesFiltrados.length === 0) return 0;
    return Math.ceil(this.marcajesFiltrados.length / this.registrosPorPagina);
  }
}

