import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QrService {
  constructor(private http: HttpClient) {}

  // Llama al endpoint protegido y devuelve un Blob (image/png)
  async getMyQrBlob(): Promise<Blob> {
    const url = 'http://109.199.118.104:5111/api/Estudiantes/me/qr';
    console.debug('[QrService] llamando a', url);
    return firstValueFrom(this.http.get(url, { responseType: 'blob' }));
  }
}
