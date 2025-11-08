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
import { MatStepperModule } from '@angular/material/stepper'; // ✅ NUEVO

// Modal QR (standalone)
import { ModalQr } from '../modal-qr/modal-qr';

import { RegistroEstudiante } from '../../Interface/registro-estudiante';
import { RegistroEstudianteService } from '../../Service/registro-estudiante.service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    // Material
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatStepperModule, // ✅ NUEVO
    // Componentes
    ModalQr
  ],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class Registro {
  // ✅ Necesario para [linear] del mat-vertical-stepper
  isLinear = true;

  hide = true;         // Mostrar/ocultar contraseña
  submitting = false;  // Deshabilita botón y muestra spinner
  usuarioEdited = false;

  estudiante: RegistroEstudiante = {
    nombre: '',
    apellido: '',
    numeroCarnet: '',
    telefono: '',
    direccion: '',
    anio: '2025',
    sede: 'San Raymundo',
    email: '',
    contrasena: '',
    rol: 'ESTUDIANTE',
    usuario: '' // opcional
  };

  qrGenerado: string | null = null;
  qrVisible = false;

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

    this.submitting = true;

    // Si el usuario se deja vacío, el backend lo autogenera
    if (!this.estudiante.usuario) {
      delete (this.estudiante as any).usuario;
    }

    this.servicio.registrar(this.estudiante).pipe(
      timeout(15000)
    ).subscribe({
      next: (respuesta: any) => {
        // Imagen QR según backend (ImagenQR o imagenQR)
        this.qrGenerado = respuesta?.ImagenQR ?? respuesta?.imagenQR ?? null;
        this.qrVisible = !!this.qrGenerado;

        this.zone.run(() => {
          setTimeout(() => {
            this.toastr.success('Estudiante registrado correctamente', 'Éxito');
            if (respuesta?.EmailSent === true) {
              this.toastr.info('La información fue enviada a su correo electrónico.');
            }
          }, 60);
        });

        // Reset del formulario para nuevas entradas
        form.resetForm({
          rol: 'ESTUDIANTE',
          anio: '2025',
          sede: 'San Raymundo'
        });
        this.usuarioEdited = false;
        this.submitting = false;
      },
      error: (error: any) => {
        console.error('Error al registrar:', error);
        if (error?.name === 'TimeoutError') {
          this.toastr.error('El servidor no respondió a tiempo. Intenta nuevamente más tarde.');
        } else if (error?.status === 400 && error?.error) {
          this.toastr.error(error.error);
        } else {
          this.toastr.error('Error inesperado al registrar estudiante');
        }
        this.submitting = false;
      }
    });
  }

  cerrarQR() {
    this.qrVisible = false;
    this.qrGenerado = null;
  }

  /**
   * Autogenera 'usuario' con inicial del nombre + apellido (sin acentos/espacios),
   * salvo que el usuario ya haya sido editado manualmente.
   */
  onNombreApellidoChange(): void {
    try {
      if (this.usuarioEdited) return;

      const nombre = (this.estudiante.nombre || '').trim();
      const apellido = (this.estudiante.apellido || '').trim();
      if (!nombre && !apellido) return;

      const primeraLetra = nombre ? nombre.charAt(0) : '';
      const raw = (primeraLetra + apellido).toLowerCase();

      const normalized = raw
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '');

      this.estudiante.usuario = normalized;
    } catch (e) {
      console.warn('[Registro] onNombreApellidoChange failed', e);
    }
  }
}



