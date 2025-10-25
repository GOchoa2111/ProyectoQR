import { Component } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
// Usar la configuración de entorno para apuntar al API correcto según dev/prod
import { environment } from '../../../environments/environment';
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

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  onCodeResult(result: string) {
    if (!this.escaneoActivo) return;
    this.escaneoActivo = false;
    this.qrResult = result;

    // Construir URL tomando en cuenta que en prod el archivo usa 'apiBaseUrl'
    // y en dev puede usar 'apiUrl'. Usamos el que exista.
    const base = (environment as any).apiBaseUrl ?? (environment as any).apiUrl ?? '';
    const url = `${base.replace(/\/$/, '')}/marcaje`;

    // Construir payload: incluir la hora local del dispositivo (fechaHora) para que el servidor
    // registre la hora del cliente en lugar de la hora del servidor.
    const pad = (n: number) => n.toString().padStart(2, '0');
    const d = new Date();
    // Fecha ISO sin zona (para preservar la hora local tal cual: YYYY-MM-DDTHH:mm:ss)
    const fechaLocalSinZona = `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    const payload: any = { codigoQR: result, fechaHora: fechaLocalSinZona };

    // Debug: mostrar en consola la URL y el cuerpo que vamos a enviar
    try { console.debug('[LectorQR] POST', url, payload); } catch (e) {}

    // Usamos observe: 'response' para poder inspeccionar el status y encabezados en debug
    this.http.post(url, payload, { observe: 'response' as const })
      .subscribe({
        next: (resp) => {
          // resp es HttpResponse<any>
          const body: any = resp.body;
          console.debug('[LectorQR] respuesta HTTP:', resp.status, body);
          // Aceptamos varias formas de respuesta: 'mensaje' o 'message'. Si no hay
          // texto legible, mostramos el JSON completo para depuración.
          const texto = body?.mensaje ?? body?.message ?? JSON.stringify(body ?? {});
          this.mensajeMarcaje = texto;
          // Mostrar notificación no intrusiva (toastr). Más elegante que alert().
          try { this.toastr.success(texto, 'Marcaje'); } catch (e) { console.debug('Toastr no disponible', e); }
          this.playBeep();
          setTimeout(() => {
            this.qrResult = null;
            this.mensajeMarcaje = '';
            this.escaneoActivo = true;
          }, 3000);
        },
        error: err => {
          console.error('[LectorQR] Error al registrar marcaje:', err);
          // Mostrar información más detallada cuando sea posible
          const msg = err?.error?.message ?? err?.message ?? String(err);
          try { this.toastr.error(msg, 'Error marcaje'); } catch (e) { alert('Error al registrar marcaje: ' + msg); }
          this.escaneoActivo = true;
        }
      });
  }

  onDevicesFound(devices: MediaDeviceInfo[]) {
    this.availableDevices = devices;
    // Seleccionar una cámara preferida (si existe) pero evitar reasignar
    // el mismo dispositivo repetidamente (provoca la advertencia de ZXing).
    const preferida = devices.find(d => d.label.includes('C920')) ?? devices[0];
    if (!this.selectedDevice || this.selectedDevice.deviceId !== preferida.deviceId) {
      this.selectedDevice = preferida;
    }
  }

  playBeep() {
    // Intento primario: usar Web Audio API para generar un beep corto (sin fichero).
    try {
      const AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = 880; // Hz
        gain.gain.value = 0.05; // volumen bajo
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        setTimeout(() => {
          try { osc.stop(); } catch (e) {}
          try { ctx.close(); } catch (e) {}
        }, 120);
        return;
      }
    } catch (err) {
      console.warn('Web Audio API no disponible, intentando fallback a archivo:', err);
    }

    // Fallback: reproducir archivo en assets (asegúrate de tener src/assets/beep.mp3)
    try {
      const audio = new Audio('assets/beep.mp3');
      audio.play().catch(err => console.error('Error al reproducir sonido (fallback):', err));
    } catch (err) {
      console.error('Error al intentar reproducir beep por fallback:', err);
    }
  }
}
``