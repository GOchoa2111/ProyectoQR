import { Component } from '@angular/core';
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

  constructor(private http: HttpClient) {}

  onCodeResult(result: string) {
    if (!this.escaneoActivo) return;
    this.escaneoActivo = false;
    this.qrResult = result;

    this.http.post('https://localhost:44389/api/marcaje', { codigoQR: result })
      .subscribe({
        next: (respuesta: any) => {
          this.mensajeMarcaje = respuesta.mensaje; 
          this.playBeep(); 
          setTimeout(() => {
            this.qrResult = null;
            this.mensajeMarcaje = '';
            this.escaneoActivo = true;
          }, 3000);
        },
        error: err => {
          console.error('Error al registrar marcaje:', err);
          alert('Error al registrar marcaje: ' + err.message);
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
``