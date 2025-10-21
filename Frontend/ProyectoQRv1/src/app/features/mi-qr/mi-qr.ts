import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrService } from '../../core/services/qr.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mi-qr',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mi-qr.html',
  styleUrls: ['./mi-qr.css']
})
export class MiQrComponent implements OnDestroy {
  loading = true;
  error: string | null = null;
  qrUrl: string | null = null; // object URL

  constructor(private qrSvc: QrService, private sanitizer: DomSanitizer) {
    this.loadQr();
  }

  async loadQr() {
    this.loading = true;
    this.error = null;
    this.qrUrl = null;
    try {
      const blob = await this.qrSvc.getMyQrBlob();
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
