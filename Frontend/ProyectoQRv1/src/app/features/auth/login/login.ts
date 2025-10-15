import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';

import { AuthService } from '../../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, MatIconModule, MatProgressSpinnerModule,
    MatCheckboxModule, MatDividerModule, MatRippleModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  private toast = inject(ToastrService);

  loading = signal(false);
  hide = signal(true);
  toggle = () => this.hide.set(!this.hide());

  serverError = signal<string | null>(null);

  form = this.fb.group({
    usuario: ['', [Validators.required, Validators.minLength(3)]],
    contrasena: ['', [Validators.required, Validators.minLength(4)]],
    remember: [false]
  });

  // Helpers UI
  canSubmit = computed(() => !this.loading() && this.form.valid);

  onSubmit(): void {
    if (!this.canSubmit()) return;
    this.serverError.set(null);
    this.loading.set(true);

    this.auth.login({
      usuario: this.form.value.usuario!,
      contrasena: this.form.value.contrasena!
    }).subscribe({
      next: (res) => {
        this.auth.storeSession(res);
        this.toast.success(`¡Bienvenido, ${res.usuario}!`, 'Inicio de sesión');
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        const msg = (err?.error && typeof err.error === 'string')
          ? err.error
          : 'Usuario o contraseña inválidos';
        this.serverError.set(msg);
        this.toast.error(msg, 'Error');
        this.loading.set(false);
      }
    });
  }
}
