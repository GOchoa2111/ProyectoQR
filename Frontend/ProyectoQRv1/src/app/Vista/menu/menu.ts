import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
// Eliminamos importaciones de FontAwesomeModule, FaIconLibrary y los iconos
// ya que el código HTML ya no los usa.

@Component({
  selector: 'app-menu',
  standalone: true,
  // routerLinkActive se añade para prevenir posibles advertencias
  imports: [RouterLink, RouterLinkActive, MatIconModule], 
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class Menu {
  isOpen = false;

  constructor() {
    // Eliminamos la inyección y el código de FontAwesome
  }

  toggle(): void { this.isOpen = !this.isOpen; }
  close(): void { this.isOpen = false; }

  // Función para manejar el clic en el botón de Login
  handleLogin(): void {
    console.log('Botón de Login presionado. Navegando a /login...');
    // Aquí iría la lógica para navegar a la página de login (usando Router)
  }
}
