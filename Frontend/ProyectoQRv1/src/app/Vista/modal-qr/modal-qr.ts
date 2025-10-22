import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  descargarQR() {
    if (!this.qrImagen) return;
    const link = document.createElement('a');
    link.href = this.qrImagen;
    link.download = 'codigoQR_estudiante.png';
    link.click();
  }

  enviarQR() {
    if (!this.qrImagen || !this.correo) {
      this.toastr.error('No se puede enviar el QR. Verifica que el correo esté disponible.');
      return;
    }
    // Construir DTO que espera el backend: { Email, Asunto, Cuerpo }
    const asunto = 'Tu código QR - SGAE';
    const cuerpo = `
      <div style="font-family:Segoe UI,Arial,sans-serif;color:#222">
        <h2>¡Hola ${this.nombre} ${this.apellido}!</h2>
        <p>Adjuntamos tu código QR generado desde la plataforma.</p>
        <p><strong>Usuario:</strong> ${this.nombre || ''}</p>
        <p><img src="${this.qrImagen}" alt="QR" style="width:220px;height:auto;border:0;"/></p>
        <p>También puedes descargarlo desde la aplicación.</p>
        <hr/><small>Este es un mensaje automático, por favor no responder.</small>
      </div>`;

    const payload = {
      Email: this.correo,
      Asunto: asunto,
      Cuerpo: cuerpo
    };

    this.http.post(`${environment.apiUrl}/Email/enviar-correo`, payload).subscribe({
      next: () => {
        this.toastr.success('QR enviado por correo exitosamente.');
      },
      error: () => {
        this.toastr.error('Error al enviar el QR por correo.');
      }
    });
  }

  cerrarModal() {
    this.cerrar.emit();
  }
}