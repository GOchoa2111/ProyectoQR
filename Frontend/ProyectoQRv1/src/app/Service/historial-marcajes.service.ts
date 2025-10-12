import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Asegúrate de que esta ruta sea correcta para tu interfaz
import { HistorialMarcaje } from '../Interface/historial-marcajes'; 

@Injectable({
  // 'providedIn: root' hace que el servicio esté disponible en toda la aplicación
  providedIn: 'root'
})
export class HistorialService {

  
  // Endpoint.
  private baseUrl = 'https://localhost:44389/api/Estudiantes';

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
