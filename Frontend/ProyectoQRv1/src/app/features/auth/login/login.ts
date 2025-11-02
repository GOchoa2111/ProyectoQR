// src/app/features-auth-login/login.ts
import { Component, signal, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

// Angular Material (ajusta según lo que uses)
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }      from '@angular/material/input';
import { MatButtonModule }     from '@angular/material/button';
import { MatIconModule }       from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { timeout, finalize } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);

  loading = signal(false);
  hide = signal(true);
  errorMsg = signal<string | null>(null);

  // ===== NUEVA VARIABLE PARA EL GIF =====
  showSuccessAnimation = signal(false);
  // ======================================

  form = this.fb.nonNullable.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  submit(): void {
    this.errorMsg.set(null);
    if (this.form.invalid || this.loading()) return;

    this.loading.set(true);

    const payload = this.form.getRawValue(); // { username, password }
    this.auth.login(payload)
      .pipe(
        // evita que la UI quede colgada si el backend no responde
        timeout(10000),
        // garantiza que loading vuelva a false tanto en success como error
        // AHORA MOVEMOS 'finalize' PARA QUE NO OCULTE EL SPINNER DEL BOTÓN
      )
      .subscribe({
        next: (resp) => {
          // DEBUG: loguea información útil sin exponer el token
          try { console.debug('[Login] resp.rol=', resp?.rol, 'usuario=', resp?.usuario); } catch (e) {}

          // ===== CAMBIO EN LA LÓGICA DE ÉXITO =====

          // 1. Mostramos la animación del GIF
          this.showSuccessAnimation.set(true);
          // 2. Ocultamos el spinner del botón
          this.loading.set(false);

          // 3. Esperamos 5 segundos (5000ms) antes de navegar
          setTimeout(() => {
            try {
              // 4. Navegamos (esto está dentro de handleLoginSuccess)
              this.auth.handleLoginSuccess(resp);
            } catch (e) {
              console.error('[Login] handleLoginSuccess failed', e);
              this.errorMsg.set('Respuesta inválida del servidor. Intenta nuevamente.');
            }
            // 5. Ocultamos la animación por si el usuario vuelve
            this.showSuccessAnimation.set(false);
          }, 3200); // <-- Ajusta este tiempo (en ms) a la duración de tu GIF

          // ==========================================
        },
        error: (err) => {
          // En caso de error, sí detenemos el spinner
          this.loading.set(false); 

          // mensajes comunes
          if (err?.name === 'TimeoutError') {
            this.errorMsg.set('El servidor tardó demasiado en responder. Intenta de nuevo.');
            return;
          }

          if (err?.status === 401) {
            this.errorMsg.set('Usuario o contraseña incorrectos.');
          } else if (err?.status === 0) {
            this.errorMsg.set('No hay conexión con el servidor.');
          } else {
            this.errorMsg.set('Ocurrió un error. Intenta nuevamente.');
          }
        }
      });
  }

  // helpers de template
  get f() { return this.form.controls; }


  // ===== FUNCIÓN DE PRUEBA TEMPORAL AÑADIDA =====
  
  // /**
  //  * Función temporal SÓLO para probar la animación del GIF.
  //  * Llama a esta función desde un botón de prueba.
  //  */
  // probarAnimacion(): void {
  //   console.log('Mostrando animación de prueba...');
  //   
  //   // 1. Mostramos la animación del GIF
  //   this.showSuccessAnimation.set(true);
  //
  //   // 2. Esperamos el tiempo que dura tu GIF (ajusta los 2000ms)
  //   setTimeout(() => {
  //     console.log('Ocultando animación de prueba.');
  //     // 3. Ocultamos la animación
  //     this.showSuccessAnimation.set(false);
  //   }, 3200); // 2000ms = 2 segundos
  // }
  // ==========================================
}