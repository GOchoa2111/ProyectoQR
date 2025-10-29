import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorreoService } from '../../Service/correo.service';
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

  constructor(private correoService: CorreoService, private snackBar: MatSnackBar) {}

  descargarQR() {
    if (!this.qrImagen) return;
    const link = document.createElement('a');
    link.href = this.qrImagen;
    link.download = 'codigoQR_estudiante.png';
    link.click();
  }

  enviarQR() {
    if (!this.qrImagen || !this.correo) {
      this.snackBar.open('No se puede enviar el QR. Verifica el correo.', 'Cerrar', { duration: 9000 });
      return;
    }

    this.enviando = true; 
    const payload = {
      correo: this.correo,
      nombre: this.nombre,
      apellido: this.apellido,
      imagenQR: this.qrImagen
    };

    this.correoService.enviarQR(payload).subscribe({
      next: (respuesta) => {
        this.enviando = false;
        this.snackBar.open(respuesta?.mensaje || 'QR enviado por correo exitosamente.', 'Cerrar', { duration: 3000 });
      },
      error: (err) => {
        this.enviando = false;
        this.snackBar.open('Error al enviar el QR por correo.', 'Cerrar', { duration: 9000 });
        console.error('Error:', err);
      }
    });
  }

  cerrarModal() {
    this.cerrar.emit();
  }
}