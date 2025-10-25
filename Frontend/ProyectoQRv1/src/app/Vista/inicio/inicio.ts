import { Component, signal, effect } from '@angular/core';
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
export class Inicio { 
  
  // Lógica del carrusel (Se mantiene tu arreglo de imágenes)
  imagenes = [
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsLYhNpGPpeu5RTOh8VL9EggGnee6fgW5QvxHN9FVFUnYqYF-IU1w4SHIHV_yUvLMopgua1YoYiyidZ9S0lvABoK8VBMYS3WuqWZoZPt0ZJ-0mQtnQYBqCo4_0QvV6yEQ7OsIdkpKpEC_K/s1600/DJI_0040.jpg',
    'https://uregional.online/pluginfile.php/1/theme_academi/mspotmedia/1739474848/Logo%202.jpg',
      'assets/img/alumnos.jpg',
      'assets/img/alumnos2.jpg',
      'assets/img/asistencia.jpg'
  ];
  imagenActual = signal(0);

  constructor() {
    // Efecto del carrusel
    effect(() => {
      setInterval(() => {
        this.imagenActual.update(i => (i + 1) % this.imagenes.length);
      }, 4000); 
    });
  }
}