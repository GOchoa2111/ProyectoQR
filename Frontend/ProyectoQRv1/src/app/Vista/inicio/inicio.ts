// --- IMPORTAMOS OnDestroy ---
import { Component, signal, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
// --- IMPLEMENTAMOS OnDestroy ---
export class Inicio implements OnDestroy { 
  
  imagenes = [
    'assets/img/alumnos3.jpg',
    'assets/img/san_raymundo1.jpg',
    'assets/img/alumnos.jpg',
    'assets/img/alumnos2.jpg',
    'assets/img/asistencia.jpg',
    'assets/img/muni.jpg',
    'assets/img/sanraymundo.jpg'
  ];
  imagenActual = signal(0);

  // --- Variable para guardar el ID del intervalo ---
  private intervalId: any;

  constructor() {
    // --- Iniciamos el carrusel de forma segura ---
    this.startCarousel();
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.imagenActual.update(i => (i + 1) % this.imagenes.length);
    }, 4000);
  }

  // --- Método para limpiar el intervalo cuando el componente se destruye ---
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}