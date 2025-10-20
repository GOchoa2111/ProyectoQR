import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-carreras',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './carreras.html',
  styleUrls: ['./carreras.css']
})
export class Carreras {
  // Por ahora mostramos una lista estática; más adelante podemos cargar desde la API
  carreras = [
    { nombre: 'Ingeniería en Sistemas', duracion: '5 años' },
    { nombre: 'Administración de Empresas', duracion: '4 años' },
    { nombre: 'Contaduría Pública', duracion: '4 años' },
    { nombre: 'Licenciatura en Educación', duracion: '4 años' }
  ];
}
