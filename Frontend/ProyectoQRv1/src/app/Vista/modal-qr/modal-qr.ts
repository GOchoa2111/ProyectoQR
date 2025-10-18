import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-qr',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-qr.html',
  styleUrl: './modal-qr.css'
})
export class ModalQr {
  @Input() qrImagen: string | null = null;
  @Input() visible: boolean = false;
  @Input() nombre: string = '';
  @Input() apellido: string = '';
  @Input() correo: string = ''; // ✅ Nuevo input
  @Output() cerrar = new EventEmitter();

  constructor(private http: HttpClient) {}

  descargarQR() {
    if (!this.qrImagen) return;
    const link = document.createElement('a');
    link.href = this.qrImagen;
    link.download = 'codigoQR_estudiante.png';
    link.click();
  }

  enviarQR() {
    if (!this.qrImagen || !this.correo) {
      alert('No se puede enviar el QR. Verifica que el correo esté disponible.');
      return;
    }

    const payload = {
      correo: this.correo,
      nombre: this.nombre,
      apellido: this.apellido,
      imagenQR: this.qrImagen
    };

    this.http.post('http://109.199.118.104:5111/api/Email/enviar-correo', payload).subscribe({
      next: () => alert('QR enviado por correo exitosamente.'),
      error: () => alert('Error al enviar el QR por correo.')
    });
  }

  cerrarModal() {
    this.cerrar.emit();
  }
}