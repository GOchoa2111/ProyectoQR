import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgIf, CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialog } from '../../core/components/confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatIconModule, NgIf, MatDialogModule],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class Menu {
  isOpen = false;

  constructor(public auth: AuthService, private router: Router, private dialog: MatDialog) {}

  // Exponer si existe token en storage para la plantilla de debug (evita referenciar globales)
  get hasToken(): boolean {
    try { return !!localStorage.getItem('auth.token'); } catch { return false; }
  }

  toggle(): void { this.isOpen = !this.isOpen; }
  close(): void { this.isOpen = false; }

  // Navegar a la pantalla de login
  handleLogin(): void {
    this.router.navigate(['/login']);
  }

  // Cerrar sesión limpia storage y lleva a /login
  handleLogout(): void {
    // Open Material confirm dialog
    const ref = this.dialog.open(ConfirmDialog, {
      data: { title: 'Cerrar sesión', message: '¿Cerrar sesión? Se eliminarán los datos de la sesión en este dispositivo.' },
      width: '420px'
    });
    ref.afterClosed().subscribe(result => {
      if (result) {
        this.auth.logout(true);
      }
    });
  }
}
