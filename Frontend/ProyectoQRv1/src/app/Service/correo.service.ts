import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  private apiUrl = 'https://localhost:44389/api/Correo/enviar';

  constructor(private http: HttpClient) {}

  enviarQR(payload: {
    correo: string;
    nombre: string;
    apellido: string;
    imagenQR: string;
  }): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}
