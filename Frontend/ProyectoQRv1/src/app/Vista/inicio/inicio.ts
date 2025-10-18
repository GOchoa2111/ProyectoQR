import { Component, signal, effect } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLinkWithHref } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    //RouterLinkWithHref, // Descomentar si se usa en la plantilla
    CommonModule
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  imagenes = [
    'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhsLYhNpGPpeu5RTOh8VL9EggGnee6fgW5QvxHN9FVFUnYqYF-IU1w4SHIHV_yUvLMopgua1YoYiyidZ9S0lvABoK8VBMYS3WuqWZoZPt0ZJ-0mQtnQYBqCo4_0QvV6yEQ7OsIdkpKpEC_K/s1600/DJI_0040.jpg',
    'https://uregional.online/pluginfile.php/1/theme_academi/mspotmedia/1739474848/Logo%202.jpg',
  ];

  imagenActual = signal(0);

  constructor() {
    effect(() => {
      setInterval(() => {
        this.imagenActual.update(i => (i + 1) % this.imagenes.length);
      }, 4000); // cambia cada 4 segundos
    });
  }
}


