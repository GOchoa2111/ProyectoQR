import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroEstudiante } from '../Interface/registro-estudiante';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroEstudianteService {
  private apiUrl = `${environment.apiUrl}/Estudiantes`;

  constructor(private http: HttpClient) {}

  registrar(estudiante: RegistroEstudiante): Observable<any> {
    return this.http.post(this.apiUrl, estudiante);
  }
}

