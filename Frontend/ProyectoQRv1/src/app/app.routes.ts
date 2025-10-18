// src/app/app.routes.ts
import { Routes } from '@angular/router';

// Páginas existentes (standalone)
import { Inicio } from './Vista/inicio/inicio';
import { Registro } from './Vista/registro/registro';
import { Historial } from './Vista/historial/historial';
import { LectorQR } from './Vista/lector-qr/lector-qr';

// Login (standalone)
import { LoginComponent } from '../app/features/auth/login/login';

// Guard de autenticación/rol
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  // Arranque en Inicio (público)
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },

  // Público
  { path: 'inicio', component: Inicio },
  { path: 'login', component: LoginComponent },
  {path: 'registro', component: Registro},//ruta para registro de usuarios pública para pruebas

  // Protegidas por rol (ajusta si lo deseas)
  {
    path: 'lector',
    component: LectorQR,
    canActivate: [authGuard],
    data: { roles: ['ADMIN', 'DOCENTE'] }
  },
  {
    path: 'registro',
    component: Registro,
    canActivate: [authGuard],
    data: { roles: ['ADMIN'] }
  },
  {
    path: 'historial',
    component: Historial,
    canActivate: [authGuard],
    data: { roles: ['ADMIN', 'DOCENTE','ESTUDIANTE'] }
  },

  // 404 → inicio
  { path: '**', redirectTo: 'inicio' }
];
