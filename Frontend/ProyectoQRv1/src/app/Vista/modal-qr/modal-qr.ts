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

    // Debug: mostrar en consola que la acción fue disparada
    console.debug('[ModalQr] enviarQR called for correo=', this.correo);

    this.enviando = true;
    const payload = {
      correo: this.correo,
      nombre: this.nombre,
      apellido: this.apellido,
      imagenQR: this.qrImagen
    };

    // Añadimos un timeout en el lado del cliente para evitar quedar "colgados" si el servidor no responde
    this.correoService.enviarQR(payload).subscribe({
      next: (respuesta) => {
        this.enviando = false;
        console.debug('[ModalQr] enviarQR success response:', respuesta);
        this.snackBar.open(respuesta?.mensaje || 'QR enviado por correo exitosamente.', 'Cerrar', { duration: 3000 });
      },
      error: (err) => {
        this.enviando = false;
        // Mostrar más información para depuración
        console.error('[ModalQr] Error al enviar QR:', err);
        const status = err?.status ?? 'N/A';
        const msg = err?.error?.mensaje ?? err?.message ?? JSON.stringify(err);
        this.snackBar.open(`No se puede enviar el QR. Estado: ${status}. ${msg}`, 'Cerrar', { duration: 10000 });
      }
    });
  }

  cerrarModal() {
    this.cerrar.emit();
  }
}