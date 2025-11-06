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

// Reintegrando el componente ModalQr: el modal seguirá disponible para enviar/descargar el QR desde la UI
import { ModalQr } from '../modal-qr/modal-qr';

import { RegistroEstudiante } from '../../Interface/registro-estudiante';
import { RegistroEstudianteService } from '../../Service/registro-estudiante.service';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    MatCardModule, MatFormFieldModule, MatInputModule,
  MatSelectModule, MatIconModule, MatButtonModule, MatDividerModule,
  ModalQr
  ],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class Registro {
  hide = true; // mostrar/ocultar contraseña
  submitting = false; // bandera UI para deshabilitar boton y mostrar spinner
  // Bandera que indica si el usuario editó manualmente el campo usuario.
  // Si es true, no sobreescribimos el valor automático al cambiar nombre/apellido.
  usuarioEdited = false;

  estudiante: RegistroEstudiante = {
    nombre: '',
    apellido: '',
    numeroCarnet: '',
    telefono: '',
    direccion: '',
    anio: '2025', // valor por defecto: año en curso
    sede: 'San Raymundo', // valor por defecto (editable)
    email: '',
    contrasena: '',
    rol: 'ESTUDIANTE',
    usuario: '' // opcional; puedes dejarlo vacío
  };

  qrGenerado: string | null = null;
  qrVisible = false;

  // La propiedad roles se mantiene intacta
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

    this.submitting = true; // UI: empezamos a enviar
  // Si el usuario se deja vacío, el backend lo autogenera
  if (!this.estudiante.usuario) delete (this.estudiante as any).usuario;

    this.servicio.registrar(this.estudiante).pipe(
      // evita que la UI quede bloqueada indefinidamente si el servidor no responde
      timeout(15000)
    ).subscribe({
      next: (respuesta: any) => {
        // Aceptar ambas formas (ImagenQR o imagenQR) según lo que devuelva el backend
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

        form.resetForm({
          rol: 'ESTUDIANTE',
          anio: '2025',
          sede: 'San Raymundo'
        });
        // Resetear la bandera de edición del usuario para futuras entradas
        this.usuarioEdited = false;
        this.submitting = false; // UI: terminado
      },
      error: (error: any) => {
        console.error('Error al registrar:', error);
        // detecta timeout del cliente
        if (error?.name === 'TimeoutError') {
          this.toastr.error('El servidor no respondió a tiempo. Intenta nuevamente más tarde.');
        } else if (error.status === 400 && error.error) {
          this.toastr.error(error.error);
        } else {
          this.toastr.error('Error inesperado al registrar estudiante');
        }
        this.submitting = false; // UI: terminado con error
      }
    });
  }

  // Se llama cuando el modal emite el evento (cerrar)
  cerrarQR() { 
    this.qrVisible = false; 
    this.qrGenerado = null; // Se limpia la imagen para la próxima vez
  }

  /**
   * Actualiza el campo 'usuario' por defecto combinando la primera letra
   * del nombre y el apellido (ej: "Juan" + "Pérez" -> "jperez").
   * No sobrescribe si el usuario ya fue editado manualmente.
   */
  onNombreApellidoChange(): void {
    try {
      // Si el usuario editó manualmente, no hacemos nada
      if (this.usuarioEdited) return;

      const nombre = (this.estudiante.nombre || '').trim();
      const apellido = (this.estudiante.apellido || '').trim();

      if (!nombre && !apellido) return; // nada que componer

  // Solo evitamos sobrescribir si el usuario editó manualmente el campo.
  // Si no lo editó (usuarioEdited === false), actualizamos incluso si
  // ya existe un valor anterior (p. ej. se generó al escribir sólo el nombre).
  const primeraLetra = nombre ? nombre.charAt(0) : '';
  const raw = (primeraLetra + apellido).toLowerCase();

      // Normalizar y eliminar acentos y caracteres no alfanuméricos
      const normalized = raw.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]/g, '');

      this.estudiante.usuario = normalized;
    } catch (e) {
      // no crítico; dejamos que el usuario escriba manualmente
      console.warn('[Registro] onNombreApellidoChange failed', e);
    }
  }

  // La función descargarQR() se elimina de aquí porque ahora está en el componente modal-qr.ts
}


