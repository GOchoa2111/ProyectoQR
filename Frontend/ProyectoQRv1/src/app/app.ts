import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Componentes usados en el template (Ajusta las rutas si es necesario)
import { Menu } from '../app/Vista/menu/menu'; 
import { Footer } from '../app/Vista/footer/footer'; 

// Módulos de Material
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 

@Component({
  selector: 'app-root',
  standalone: true,
  // IMPORTANTE: Asegúrate de que todos los componentes usados en app.html estén aquí.
  imports: [CommonModule, Menu, MatProgressSpinnerModule, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  // Usamos OnPush para mejor rendimiento, pero requiere ChangeDetectorRef para el splash.
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class App implements OnInit {
  // Estado para controlar la visibilidad del splash screen
  showSplash: boolean = true;
  
  // URL del logo de la universidad
  logoUrl: string = "https://static.wixstatic.com/media/8a2cdc_fb088ff4add94711854b569553889689~mv2.png/v1/fill/w_164,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/logo%20blanco%20con%20l%C3%ADnea%20naranja.png";

  // Inyectamos ChangeDetectorRef para forzar la actualización del DOM
  constructor(private cdr: ChangeDetectorRef) {} 

  ngOnInit(): void {
    // Simula una carga de 3 segundos
    setTimeout(() => {
      this.showSplash = false;
      // Forzamos la detección de cambios para asegurar que el DOM se actualice
      // y se muestre el contenido del bloque @else.
      this.cdr.detectChanges(); 
    }, 3000); 
  }

  /**
   * Método para mostrar el splash temporalmente, útil para transiciones
   * como después de un login o al cargar una ruta pesada.
   * @param duration Duración en milisegundos del splash.
   */
  triggerSplash(duration: number = 1500): void {
    // 1. Mostrar el splash
    this.showSplash = true; 
    this.cdr.detectChanges(); 
    
    // 2. Ocultar el splash después de la duración
    setTimeout(() => {
      this.showSplash = false;
      this.cdr.detectChanges(); 
    }, duration);
  }
}
