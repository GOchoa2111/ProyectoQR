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

// Se importa el componente del Modal para poder usarlo
import { ModalQr } from '../modal-qr/modal-qr'; // Ruta de importación corregida

import { RegistroEstudiante } from '../../Interface/registro-estudiante';
import { RegistroEstudianteService } from '../../Service/registro-estudiante.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    MatCardModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatIconModule, MatButtonModule, MatDividerModule,
    // Se añade el componente del Modal a los imports
    ModalQr
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

    // Si el usuario se deja vacío, el backend lo autogenera
    if (!this.estudiante.usuario) delete (this.estudiante as any).usuario;

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

  // Se llama cuando el modal emite el evento (cerrar)
  cerrarQR() { 
    this.qrVisible = false; 
    this.qrGenerado = null; // Se limpia la imagen para la próxima vez
  }

  // La función descargarQR() se elimina de aquí porque ahora está en el componente modal-qr.ts
}


