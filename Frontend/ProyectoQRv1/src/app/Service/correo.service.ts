import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  // Use environment.apiUrl so the base URL is consistent across environments
  private apiUrl = `${environment.apiUrl}/Correo/enviar`;

  constructor(private http: HttpClient) {}

  enviarQR(payload: {
    correo: string;
    nombre: string;
    apellido: string;
    imagenQR: string;
  }): Observable<any> {
    // No timeout here; caller can apply it if desired. Keep this simple.
    return this.http.post(this.apiUrl, payload);
  }
}
