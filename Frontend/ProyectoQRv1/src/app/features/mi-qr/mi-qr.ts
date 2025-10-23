import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrService } from '../../core/services/qr.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-mi-qr',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './mi-qr.html',
  styleUrls: ['./mi-qr.css']
})
export class MiQrComponent implements OnDestroy {
  loading = true;
  error: string | null = null;
  qrUrl: string | null = null; // object URL
  // CSS variable for background image; used in template via inline style
  bgStyle = "url('/assets/img/fondo-mi-qr.jpg')";

  constructor(private qrSvc: QrService, private sanitizer: DomSanitizer) {
    console.debug('[MiQr] constructor');
    this.loadQr();
  }

  async loadQr() {
    this.loading = true;
    this.error = null;
    this.qrUrl = null;
    try {
      console.debug('[MiQr] solicitando QR...');
      const blob = await this.qrSvc.getMyQrBlob();
      console.debug('[MiQr] recibido blob, tamaño:', blob.size);
      const objectUrl = URL.createObjectURL(blob);
      this.qrUrl = objectUrl;
    } catch (err: any) {
      console.error('Error al obtener QR', err);
      if (err?.status === 401) {
        this.error = 'No autorizado. Inicia sesión de nuevo.';
      } else if (err?.status === 404) {
        this.error = 'QR no encontrado para este usuario.';
      } else {
        this.error = 'Error al cargar el QR. Intenta más tarde.';
      }
    } finally {
      this.loading = false;
    }
  }

  descargar() {
    if (!this.qrUrl) return;
    const a = document.createElement('a');
    a.href = this.qrUrl;
    a.download = 'mi-qr.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  ngOnDestroy(): void {
    if (this.qrUrl) URL.revokeObjectURL(this.qrUrl);
  }
}
