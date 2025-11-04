import { Component, ChangeDetectorRef } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lector-qr',
  standalone: true,
  imports: [ZXingScannerModule, CommonModule, FormsModule],
  templateUrl: './lector-qr.html',
  styleUrls: ['./lector-qr.css']
})
export class LectorQR {
  qrResult: string | null = null;
  availableDevices: MediaDeviceInfo[] = [];
  selectedDevice: MediaDeviceInfo | undefined;
  mensajeMarcaje: string = '';
  escaneoActivo: boolean = true;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  onCodeResult(result: string) {
    if (!this.escaneoActivo) return;
    this.escaneoActivo = false;
    this.qrResult = result;
    // --- LOG: mostrar en consola qué QR se detectó y a qué URL se enviará ---
    const url = `${environment.apiUrl.replace(/\/+$/,'')}/marcaje`;
    const payload = { codigoQR: result };
    // Añadimos logs para ver exactamente qué enviamos
    console.log('[lector-qr] Enviando POST a:', url);
    console.log('[lector-qr] Payload:', payload);

    // Realizamos la petición y loggeamos respuesta y errores para diagnóstico
    this.http.post(url, payload)
      .subscribe({
        next: (respuesta: any) => {
          // --- LOG: mostrar lo que el servidor devuelve ---
          console.log('[lector-qr] Respuesta del servidor:', respuesta);

          // La API típicamente devuelve { mensaje: '...' }.
          // Además manejamos si devuelve campos explícitos 'tipo' y 'nombre'.
          if (respuesta?.mensaje) {
            this.mensajeMarcaje = respuesta.mensaje;
          } else if (respuesta?.tipo || respuesta?.nombre) {
            const tipo = respuesta.tipo ?? '';
            const nombre = respuesta.nombre ?? '';
            this.mensajeMarcaje = `Marcaje: ${tipo} - ${nombre}`;
          } else {
            this.mensajeMarcaje = 'Marcaje registrado correctamente';
          }

          // Forzamos la detección de cambios por si el callback se ejecuta
          // fuera de la zona Angular (algunas APIs de hardware/eventos lo hacen).
          try { this.cdr.detectChanges(); } catch (e) { /* no crítico */ }

          this.playBeep();
          setTimeout(() => {
            // Limpiamos UI y permitimos nuevo escaneo
            this.qrResult = null;
            this.mensajeMarcaje = '';
            this.escaneoActivo = true;
          }, 3000);
        },
        error: err => {
          // LOG: error completo para depuración (incluye body si existe)
          console.error('[lector-qr] Error al registrar marcaje:', err);
          // Mostrar error al usuario de forma informativa
          const msg = err?.error?.mensaje ?? err?.message ?? JSON.stringify(err);
          alert('Error al registrar marcaje: ' + msg);
          try { this.cdr.detectChanges(); } catch (e) { /* no crítico */ }
          this.escaneoActivo = true;
        }
      });
  }

  onDevicesFound(devices: MediaDeviceInfo[]) {
    this.availableDevices = devices;
    this.selectedDevice = devices.find(d => d.label.includes('C920')) ?? devices[0];
  }

  playBeep() {
    const audio = new Audio('assets/beep.mp3');
    audio.play().catch(err => console.error('Error al reproducir sonido:', err));
  }
}