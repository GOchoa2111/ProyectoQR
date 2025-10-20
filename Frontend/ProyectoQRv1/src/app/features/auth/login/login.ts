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
        finalize(() => this.loading.set(false))
      )
      .subscribe({
        next: (resp) => {
          // DEBUG: loguea información útil sin exponer el token
          try { console.debug('[Login] resp.rol=', resp?.rol, 'usuario=', resp?.usuario); } catch (e) {}

          // guarda token/estado y redirige por rol — proteger contra respuestas inesperadas
          try {
            this.auth.handleLoginSuccess(resp);
          } catch (e) {
            console.error('[Login] handleLoginSuccess failed', e);
            this.errorMsg.set('Respuesta inválida del servidor. Intenta nuevamente.');
          }
        },
        error: (err) => {
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
}
