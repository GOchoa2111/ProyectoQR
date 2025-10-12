import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { RegistroEstudiante } from '../../Interface/registro-estudiante';
import { RegistroEstudianteService } from '../../Service/registro-estudiante.service';
import { link } from 'fs';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css']
})
export class Registro {
  estudiante: RegistroEstudiante = {
    nombre: '',
    apellido: '',
    numeroCarnet: '',
    telefono: '',
    direccion: '',
    anio: '',
    sede: ''
  };

  qrGenerado: string | null = null;
  qrVisible = false;
  private qrFileName = 'QR_estudiante.png';

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

    // Guarda nombre de archivo antes de limpiar el modelo
    const carnetParaArchivo = this.estudiante.numeroCarnet?.trim();
    this.qrFileName = carnetParaArchivo ? `QR_${carnetParaArchivo}.png` : 'QR_estudiante.png';

    this.servicio.registrar(this.estudiante).subscribe({
      next: (respuesta: any) => {
        this.qrGenerado = respuesta?.imagenQR ?? null;
        this.qrVisible = !!this.qrGenerado;

        // Forzar que el toast se muestre (posición arriba derecha y dentro de zona Angular)
        this.zone.run(() => {
        setTimeout(() => {
        this.toastr.success('Estudiante registrado correctamente', 'Éxito', {
         // positionClass: 'toast-buttom-center'
        });
          }, 100);

        });

        // Limpia valores + estado del formulario
        form.resetForm();
      },
      error: (error: any) => {
        console.error('Error al registrar:', error);
        if (error.status === 400 && error.error) {
          this.toastr.error(error.error);
        } else {
          this.toastr.error('Error inesperado al registrar estudiante');
        }
        // No limpiamos el form en error: que el usuario corrija.
      }
    });
  }

  cerrarQR() {
    this.qrVisible = false;
  }

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
