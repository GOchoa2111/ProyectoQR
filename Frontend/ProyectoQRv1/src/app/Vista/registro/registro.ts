// src/app/Vista/registro/registro.ts
import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { RegistroEstudiante } from '../../Interface/registro-estudiante';
import { RegistroEstudianteService } from '../../Service/registro-estudiante.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    MatCardModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatIconModule, MatButtonModule, MatDividerModule
  ],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class Registro {
  hide = true; // mostrar/ocultar contraseña

  estudiante: RegistroEstudiante = {
    nombre: '',
    apellido: '',
    numeroCarnet: '',
    telefono: '',
    direccion: '',
    anio: '',
    sede: '',
    email: '',
    contrasena: '',
    rol: 'ESTUDIANTE',
    usuario: '' // opcional; puedes dejarlo vacío
  };

  qrGenerado: string | null = null;
  qrVisible = false;
  private qrFileName = 'QR_estudiante.png';

  roles = ['ESTUDIANTE', 'DOCENTE', 'ADMIN'];

  constructor(
    private servicio: RegistroEstudianteService,
    private toastr: ToastrService,
    private zone: NgZone
  ) {}

  registrar(form: NgForm) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      this.toastr.warning('Por favor completa los campos resaltados.');
      return;
    }

    // Si el usuario se deja vacío, el backend lo autogenera
    if (!this.estudiante.usuario) delete (this.estudiante as any).usuario;

    // Nombre para el archivo de QR
    const carnet = this.estudiante.numeroCarnet?.trim();
    this.qrFileName = carnet ? `QR_${carnet}.png` : 'QR_estudiante.png';

    this.servicio.registrar(this.estudiante).subscribe({
      next: (respuesta: any) => {
        this.qrGenerado = respuesta?.imagenQR ?? null;
        this.qrVisible = !!this.qrGenerado;

        this.zone.run(() => {
          setTimeout(() => {
            this.toastr.success('Estudiante registrado correctamente', 'Éxito');
          }, 60);
        });

        form.resetForm({
          rol: 'ESTUDIANTE'
        });
      },
      error: (error: any) => {
        console.error('Error al registrar:', error);
        if (error.status === 400 && error.error) {
          this.toastr.error(error.error);
        } else {
          this.toastr.error('Error inesperado al registrar estudiante');
        }
      }
    });
  }

  cerrarQR() { this.qrVisible = false; }

  descargarQR() {
    if (!this.qrGenerado) return;
    const link = document.createElement('a');
    link.href = this.qrGenerado;
    link.download = this.qrFileName || 'QR_estudiante.png';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
