import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-modal-qr',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule, MatProgressSpinnerModule],
  templateUrl: './modal-qr.html',
  styleUrl: './modal-qr.css'
})
export class ModalQr {
  @Input() qrImagen: string | null = null;
  @Input() visible: boolean = false;
  @Input() nombre: string = '';
  @Input() apellido: string = '';
  @Input() correo: string = '';
  @Output() cerrar = new EventEmitter();

  enviando = false; 

  constructor(private snackBar: MatSnackBar) {}

  descargarQR() {
    if (!this.qrImagen) return;
    const link = document.createElement('a');
    link.href = this.qrImagen;
    link.download = 'codigoQR_estudiante.png';
    link.click();
  }

  // Envío por correo se realiza automáticamente al registrar el estudiante.
  // La función de enviar manualmente desde el modal fue eliminada para evitar duplicidad.

  cerrarModal() {
    this.cerrar.emit();
  }
}