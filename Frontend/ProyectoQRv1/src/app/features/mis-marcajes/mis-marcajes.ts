import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { HistorialMarcaje } from '../../Interface/historial-marcajes';
import { HistorialMarcajesService } from '../../Service/historial-marcajes.service';
import { finalize, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-mis-marcajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mis-marcajes.html',
  styleUrls: ['./mis-marcajes.css']
})
export class MisMarcajesComponent implements OnInit {
  // --- PROPIEDADES PRINCIPALES DEL COMPONENTE ---

  /**
   * 'marcajes' es la lista "maestra". Siempre contiene TODOS los registros
   * que se obtuvieron del backend sin ningún filtro o paginación.
   */
  marcajes: HistorialMarcaje[] = [];

  /**
   * 'loading' controla la visibilidad de los indicadores de carga (ej. "Cargando...").
   * Se pone en 'true' antes de llamar al servicio y en 'false' cuando la llamada termina.
   */
  loading = false;

  /**
   * 'error' almacena un mensaje de error para mostrarlo al usuario si la petición falla.
   * Es 'null' cuando no hay errores.
   */
  error: string | null = null;

  /**
   * 'busquedaIniciada' es un flag para controlar la UI. Se vuelve 'true' la primera vez
   * que el usuario presiona "Mostrar Historial", para ocultar el mensaje de bienvenida.
   */
  public busquedaIniciada = false;


  // --- PROPIEDADES PARA ORDENAMIENTO (SORTING) ---

  /**
   * Estado de ordenamiento en el cliente.
   * - sortColumn: columna actualmente ordenada ('fechaHora' o 'tipo').
   * - sortDirection: dirección del orden ('asc' o 'desc').
   * Inicializamos por defecto para mostrar primero los marcajes más recientes.
   */
  sortColumn: 'fechaHora' | 'tipo' = 'fechaHora';
  sortDirection: 'asc' | 'desc' = 'desc';


  // --- PROPIEDADES PARA FILTRADO Y PAGINACIÓN ---

  /**
   * 'filtroFecha' almacena la fecha seleccionada por el usuario en el input (formato YYYY-MM-DD).
   */
  filtroFecha: string = '';

  /**
   * 'marcajesFiltrados' contiene el resultado de aplicar el 'filtroFecha' a la lista maestra 'marcajes'.
   */
  marcajesFiltrados: HistorialMarcaje[] = [];

  /**
   * 'marcajesPaginados' es la lista final que se muestra en la tabla.
   * Es un "trozo" de 'marcajesFiltrados' que corresponde a la página actual.
   */
  marcajesPaginados: HistorialMarcaje[] = [];
  
  paginaActual: number = 1;
  registrosPorPagina: number = 5;

  /**
   * Constructor del componente. Inyectamos los servicios que necesitamos:
   * - HistorialMarcajesService: para hacer la petición a la API.
   * - Router: para redirigir al usuario (ej. si el token expira).
   */
  constructor(private servicio: HistorialMarcajesService, private router: Router, private cd: ChangeDetectorRef) { }

  /**
   * ngOnInit se ejecuta una vez cuando el componente es creado.
   * En esta versión, lo dejamos vacío porque la carga de datos es manual.
   */
  ngOnInit(): void {
    // El componente espera la acción del usuario para cargar datos.
    console.debug('[MisMarcajes] ngOnInit - componente inicializado');
    // DEBUG: si quieres probar carga automática en la navegación, descomenta la línea siguiente
    // this.cargarMarcajes();
  }

  /**
   * Método principal para obtener los datos desde el backend.
   */
  cargarMarcajes(): void {
    // 1. Activamos los flags para la UI.
    this.busquedaIniciada = true;
    this.loading = true;
    this.error = null; // Limpiamos cualquier error previo.

    // 2. Llamamos al servicio para obtener los marcajes.
    this.servicio.getMyMarcajes()
      .pipe(
        // Añadimos un timeout de 15 segundos. Si el servidor no responde, se genera un error.
        timeout(15000), 
        // El operador 'finalize' se ejecuta SIEMPRE, ya sea que la petición
        // tenga éxito, falle o caiga en timeout. Aquí desactivamos el 'loading'.
        finalize(() => { this.loading = false; })
      )
      .subscribe({
        // 3. Callback 'next': se ejecuta si la petición es exitosa.
        next: data => {
          this.marcajes = data || []; // Guardamos los datos en la lista maestra.
          this.ordenarLista(); // Aplicamos el orden por defecto.
          this.aplicarFiltrosYPaginacion(); // Mostramos la primera página.
          // Forzar actualización de la vista en caso de que change detection no se haya disparado
          // (esto soluciona el problema donde la respuesta 200 llega pero la UI no muestra los datos).
          try { this.cd.detectChanges(); } catch (e) {}
          console.debug('[MisMarcajes] marcajes recibidos:', data);
        },
        // 4. Callback 'error': se ejecuta si la petición falla o entra en timeout.
        error: err => {
          console.error('[MisMarcajes] error al cargar marcajes', err);
          if (err?.status === 401) { // Error de autenticación.
            this.router.navigate(['/login']);
            return;
          }
          if (err?.name === 'TimeoutError') { // El timeout se cumplió.
            this.error = 'El servidor tardó demasiado en responder. Inténtalo de nuevo.';
             return;
          }
          this.error = 'No se pudieron cargar los marcajes'; // Otro tipo de error.
        }
      });
  }

  /**
   * Este método es llamado por el botón "Mostrar Historial" en el HTML.
   */
  mostrarHistorial(): void {
    console.log('Cargando historial completo...');
    this.cargarMarcajes();
  }
  
  /**
   * Cambia la columna o dirección de ordenamiento y vuelve a ordenar la lista.
   */
  sortBy(column: 'fechaHora' | 'tipo') {
    if (this.sortColumn === column) {
      // Si se hace clic en la misma columna, se invierte la dirección.
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // Si es una columna nueva, se establece como la columna activa y se ordena descendente.
      this.sortColumn = column;
      this.sortDirection = 'desc';
    }
    // Después de cambiar la configuración, se re-ordena la lista maestra y se actualiza la vista.
    this.ordenarLista();
    this.aplicarFiltrosYPaginacion();
  }

  /**
   * Ordena el array maestro 'marcajes' usando la función de comparación.
   */
  private ordenarLista() {
    this.marcajes.sort((a, b) => this.compare(a, b, this.sortColumn));
  }

  /**
   * Lógica de comparación para dos objetos.
   * Compara por fecha (numéricamente) o por tipo (alfabéticamente).
   */
  private compare(a: HistorialMarcaje, b: HistorialMarcaje, column: 'fechaHora' | 'tipo'): number {
    let res = 0;
    if (column === 'fechaHora') {
      // Convertimos las fechas a milisegundos para una comparación numérica.
      res = new Date(a.fechaHora).getTime() - new Date(b.fechaHora).getTime();
    } else {
      // Usamos localeCompare para una comparación alfabética insensible a mayúsculas/minúsculas.
      res = (a.tipo || '').localeCompare(b.tipo || '');
    }
    // Invertimos el resultado si la dirección es descendente.
    return this.sortDirection === 'asc' ? res : -res;
  }
  
  /**
   * Formatea una fecha en formato ISO (ej. "2025-10-20T...") a un formato legible.
   */
  formatDate(iso: string) {
    try {
      const d = new Date(iso);
      if (isNaN(d.getTime())) return iso; // Si no es una fecha válida, devuelve el string original.
      // 'es-GT' formatea la fecha para Guatemala (ej. 20/10/2025, 12:01).
      return d.toLocaleString('es-GT', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
    } catch {
      return iso;
    }
  }

  /**
   * Orquesta la actualización de la vista. Se llama al cargar, ordenar, filtrar o paginar.
   */
  aplicarFiltrosYPaginacion() {
    // 1. Aplicar filtro: Si hay una fecha en 'filtroFecha', filtramos la lista maestra.
    if (this.filtroFecha) {
      this.marcajesFiltrados = this.marcajes.filter(m => m.fechaHora.startsWith(this.filtroFecha));
    } else {
      // Si no hay filtro, la lista filtrada es una copia de la lista maestra completa.
      this.marcajesFiltrados = [...this.marcajes];
    }

    // 2. Aplicar paginación: Cortamos el array filtrado para obtener solo los items de la página actual.
    const indiceInicio = (this.paginaActual - 1) * this.registrosPorPagina;
    this.marcajesPaginados = this.marcajesFiltrados.slice(indiceInicio, indiceInicio + this.registrosPorPagina);
  }

  /**
   * Se ejecuta cada vez que el usuario selecciona una fecha en el input.
   */
  onFechaChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.filtroFecha = input.value;
    this.paginaActual = 1; // Reseteamos a la primera página.

    // El filtro se aplica en tiempo real solo si ya se ha cargado el historial.
    if (this.busquedaIniciada) {
      this.aplicarFiltrosYPaginacion();
    }
  }

  /**
   * Se ejecuta cuando el usuario hace clic en los botones "Anterior" o "Siguiente".
   */
  cambiarPagina(nuevaPagina: number) {
    if (nuevaPagina < 1 || nuevaPagina > this.getTotalPaginas()) return; // Evita páginas inválidas.
    this.paginaActual = nuevaPagina;
    this.aplicarFiltrosYPaginacion();
  }

  /**
   * Función de ayuda para el HTML. Calcula el número total de páginas necesarias.
   */
  getTotalPaginas(): number {
    if (!this.marcajesFiltrados || this.marcajesFiltrados.length === 0) return 0;
    return Math.ceil(this.marcajesFiltrados.length / this.registrosPorPagina);
  }
}

