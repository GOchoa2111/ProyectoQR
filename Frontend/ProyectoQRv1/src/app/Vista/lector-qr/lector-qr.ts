import { Component, ChangeDetectorRef } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lector-qr',
  standalone: true,
  imports: [
    ZXingScannerModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    
  ],
  templateUrl: './lector-qr.html',
  styleUrls: ['./lector-qr.css']
})
export class LectorQR {
  qrResult: string | null = null;
  availableDevices: MediaDeviceInfo[] = [];
  selectedDevice: MediaDeviceInfo | undefined;

  mensajeMarcaje = '';
  mensajeTipo: string | null = null;
  mensajeNombre: string | null = null;

  escaneoActivo = true;
  private autoCloseTimeout: any = null;

  constructor(
    private http: HttpClient,
    private cdr: ChangeDetectorRef
    , private snack: MatSnackBar
  ) {}

  onCodeResult(result: string) {
    if (!this.escaneoActivo) return;

    this.escaneoActivo = false;
    this.qrResult = result;

    const url = `${environment.apiUrl.replace(/\/+$/, '')}/marcaje`;
    const payload = { codigoQR: result };
    console.log('[lector-qr] Enviando POST a:', url, payload);

    this.http.post(url, payload).subscribe({
      next: (respuesta: any) => {
        console.log('[lector-qr] Respuesta del servidor:', respuesta);

        this.mensajeTipo = respuesta?.tipo ?? null;
        this.mensajeNombre = respuesta?.nombre ?? null;
        this.mensajeMarcaje =
          respuesta?.mensaje ??
          (respuesta?.tipo && respuesta?.nombre
            ? `Marcaje validado: ${respuesta.tipo} ${respuesta.nombre}`
            : 'Marcaje registrado correctamente');

        try { this.cdr.detectChanges(); } catch {}

  // Cerrar cualquier snackbar superior activo (si existe) para evitar duplicados
  try { this.snack.dismiss(); } catch(e) { /* no-op si snackbar no está disponible */ }

  // Mostrar sólo la tarjeta inferior (sin abrir nuevo snack)
  if (this.autoCloseTimeout) clearTimeout(this.autoCloseTimeout);
  // Mantener la tarjeta visible al menos 3s (usamos 3500ms para margen)
  this.autoCloseTimeout = setTimeout(() => this.closeMensaje(), 3500);

        this.playBeep();
      },
      error: (err) => {
        console.error('[lector-qr] Error al registrar marcaje:', err);
        alert('Error al registrar marcaje: ' + (err?.error?.mensaje ?? err.message));
        this.escaneoActivo = true;
      }
    });
  }

  getDetalle(): string {
    const tipo = this.mensajeTipo ?? '';
    const nombre = this.mensajeNombre ?? '';
    if (!tipo) return this.mensajeMarcaje || '';
    // Construye: "Su ingreso fue exitoso Pedro Moreno"
    return `Su ${tipo.toLowerCase()} fue exitoso${nombre ? ' ' + nombre : ''}`;
  }

  onDevicesFound(devices: MediaDeviceInfo[]) {
    this.availableDevices = devices;
    // Evita "Setting the same device is not allowed."
    const preferida = devices.find(d => d.label?.includes('C920')) ?? devices[0];
    if (this.selectedDevice?.deviceId !== preferida?.deviceId) {
      this.selectedDevice = preferida;
    }
  }

  playBeep() {
    const audio = new Audio('assets/img/beep-marcaje.mp3');
    audio.play().catch(err => console.error('Error al reproducir sonido:', err));
  }

  closeMensaje() {
    if (this.autoCloseTimeout) clearTimeout(this.autoCloseTimeout);
    this.autoCloseTimeout = null;

    this.qrResult = null;
    this.mensajeMarcaje = '';
    this.mensajeTipo = null;
    this.escaneoActivo = true;

    try { this.cdr.detectChanges(); } catch {}
  }
}
