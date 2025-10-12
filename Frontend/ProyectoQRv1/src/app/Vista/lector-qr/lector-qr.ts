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
  styleUrl: './lector-qr.css'
})
export class LectorQR {
  qrResult: string | null = null;
  availableDevices: MediaDeviceInfo[] = [];
  selectedDevice: MediaDeviceInfo | undefined;

  constructor(private http: HttpClient) {}

  // Se ejecuta cuando se escanea un código QR
  onCodeResult(result: string) {
    this.qrResult = result;

    this.http.post('https://localhost:44389/api/marcaje', {
      codigoQR: result,
      tipo: 'Ingreso' // Puedes cambiar a 'Egreso' si lo deseas
    }).subscribe({
      next: (respuesta: any) => {
        alert(respuesta.mensaje); // Espera un JSON con { mensaje: "..." }
      },
      error: err => {
        console.error('Error al registrar marcaje:', err);
        alert('Error al registrar marcaje: ' + err.message);
      }
    });
  }

  // Se ejecuta cuando se detectan las cámaras disponibles
  onDevicesFound(devices: MediaDeviceInfo[]) {
    this.availableDevices = devices;
    // Selecciona la cámara que contenga "C920" en su nombre, o la primera disponible
    this.selectedDevice = devices.find(d => d.label.includes('C920')) || devices[0];
  }
}