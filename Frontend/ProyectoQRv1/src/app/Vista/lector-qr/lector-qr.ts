import { Component, Inject } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { HttpClient } from '@angular/common/http';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-lector-qr',
  standalone: true,
  imports: [ZXingScannerModule, CommonModule, FormsModule],
  templateUrl: './lector-qr.html',
  styleUrls: ['./lector-qr.css'],
})
export class LectorQR {
  public qrResult: string | null = null;
  public availableDevices: MediaDeviceInfo[] = [];
  public selectedDevice: MediaDeviceInfo | undefined;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  // ✅ Esta función se puede usar directamente en el HTML
  public isRunningInBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  onCodeResult(result: string): void {
    this.qrResult = result;

    this.http.post('http://109.199.118.104:5111/api/marcaje', {
      codigoQR: result,
      tipo: 'Ingreso'
    }).subscribe({
      next: (respuesta: any) => {
        alert(respuesta.mensaje);
      },
      error: err => {
        console.error('Error al registrar marcaje:', err);
        alert('Error al registrar marcaje: ' + err.message);
      }
    });
  }

  onDevicesFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.selectedDevice = devices.find(d => d.label.includes('C920')) || devices[0];
  }
}