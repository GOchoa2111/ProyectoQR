import { Component, Inject } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { HttpClient } from '@angular/common/http';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLATFORM_ID } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';

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
    @Inject(PLATFORM_ID) private platformId: Object,
    private toastr: ToastrService
  ) {}

  // ✅ Esta función se puede usar directamente en el HTML
  public isRunningInBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  onCodeResult(result: string): void {
    this.qrResult = result;

    this.http.post(`${environment.apiUrl}/marcaje`, {
      codigoQR: result,
      tipo: 'Ingreso'
    }).subscribe({
      next: (respuesta: any) => {
        this.toastr.success(respuesta.mensaje || 'Marcaje registrado');
      },
      error: err => {
        console.error('Error al registrar marcaje:', err);
        this.toastr.error('Error al registrar marcaje: ' + (err?.message ?? '')); 
      }
    });
  }

  onDevicesFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.selectedDevice = devices.find(d => d.label.includes('C920')) || devices[0];
  }
}