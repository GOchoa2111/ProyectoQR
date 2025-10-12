import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroEstudiante } from '../Interface/registro-estudiante';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroEstudianteService {
  private apiUrl = 'https://localhost:44389/api/estudiantes';

  constructor(private http: HttpClient) {}

  registrar(estudiante: RegistroEstudiante): Observable<any> {
    return this.http.post(this.apiUrl, estudiante);
  }
}

