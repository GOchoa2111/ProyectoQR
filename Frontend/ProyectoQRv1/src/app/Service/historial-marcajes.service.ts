import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { HistorialMarcaje } from '../Interface/historial-marcajes';

@Injectable({ providedIn: 'root' })
export class HistorialMarcajesService {
  private base = `${environment.apiUrl}/marcaje`;

  constructor(private http: HttpClient) {}

  // Obtener los marcajes del usuario autenticado
  getMyMarcajes(): Observable<HistorialMarcaje[]> {
    // aplicamos un timeout para evitar requests infinitos en cliente
    return this.http.get<HistorialMarcaje[]>(`${this.base}/me`).pipe(timeout(10000));
  }

  // Obtener marcajes por carnet (para admin/docente)
  getMarcajesByCarnet(carnet: string): Observable<HistorialMarcaje[]> {
    return this.http.get<HistorialMarcaje[]>(`${this.base}/by-carnet/${encodeURIComponent(carnet)}`);
  }
}

@Injectable({
  // 'providedIn: root' hace que el servicio esté disponible en toda la aplicación
  providedIn: 'root'
})
export class HistorialService {

  
  // Endpoint.
  private baseUrl = `${environment.apiUrl}/Estudiantes`;

  constructor(private http: HttpClient) { }

  /**
   * Obtiene el historial de marcajes desde el endpoint GET /api/Estudiantes/marcaje-historial
   * @returns Observable<HistorialMarcaje[]>
   */
  obtenerHistorial(): Observable<HistorialMarcaje[]> {
    const url = `${this.baseUrl}/marcaje-historial`;
    console.log(`Llamando al endpoint de Historial: ${url}`);
    
    // Realizamos la llamada GET y tipamos la respuesta para que TypeScript la entienda.
    return this.http.get<HistorialMarcaje[]>(url);
  }
}
