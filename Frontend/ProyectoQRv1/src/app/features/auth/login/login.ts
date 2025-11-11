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
  // Referencia al audio que reproducimos junto al GIF
  private successAudio: HTMLAudioElement | null = null;
  // Timeout id usado para retrasar la reproducción del audio
  private successAudioTimeout: any = null;
  // Tiempos ajustables (ms)
  // Nota: aumentados ligeramente para asegurar que la reproducción del GIF
  // y del audio queden mejor sincronizados en dispositivos lentos o con
  // cargas de recursos pesadas. Ajusta según la duración real de tu GIF.
  private readonly successAudioDelay = 100; // antes: 1000
  private readonly successDisplayDuration = 3200; // antes: 3200
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
          // Reproducir el audio asociado al GIF (assets/marioGif.mp3) con un pequeño retraso
          // (se incrementó desde 1000ms para mejorar sincronía)
          try {
            // Limpiamos cualquier timeout previo
            if (this.successAudioTimeout) {
              clearTimeout(this.successAudioTimeout);
              this.successAudioTimeout = null;
            }
            this.successAudioTimeout = setTimeout(() => {
              try {
                this.successAudio = new Audio('assets/img/intro-sga-2.wav');
                this.successAudio.play().catch(err => {
                  console.warn('[Login] autoplay failed for successAudio:', err);
                });
              } catch (e) {
                console.error('[Login] Error al crear/reproducir successAudio (delayed):', e);
              }
            }, this.successAudioDelay);
          } catch (e) {
            console.error('[Login] Error preparando successAudio timeout:', e);
          }
          // 2. Ocultamos el spinner del botón
          this.loading.set(false);

          // 3. Esperamos un tiempo antes de navegar para que el usuario vea
          //    la animación completa y escuche el audio (delay aumentado).
          setTimeout(() => {
            try {
              // 4. Navegamos (esto está dentro de handleLoginSuccess)
              this.auth.handleLoginSuccess(resp);
            } catch (e) {
              console.error('[Login] handleLoginSuccess failed', e);
              this.errorMsg.set('Respuesta inválida del servidor. Intenta nuevamente.');
            }
            // 5. Ocultamos la animación por si el usuario vuelve
            // Paramos el audio si sigue sonando
            try {
              // Cancelar timeout si aún no se ejecutó
              if (this.successAudioTimeout) {
                clearTimeout(this.successAudioTimeout);
                this.successAudioTimeout = null;
              }
              if (this.successAudio) {
                this.successAudio.pause();
                this.successAudio.currentTime = 0;
                this.successAudio = null;
              }
            } catch (e) { /* no crítico */ }
            this.showSuccessAnimation.set(false);
          }, this.successDisplayDuration); // <-- Ajusta este tiempo (en ms) a la duración de tu GIF

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
  //   }, this.successDisplayDuration); // usa el valor centralizado arriba
  // }
  // ==========================================
}