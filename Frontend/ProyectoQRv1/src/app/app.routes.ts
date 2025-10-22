// src/app/app.routes.ts
import { Routes } from '@angular/router';

// Páginas existentes (standalone)
import { Inicio } from './Vista/inicio/inicio';
import { Registro } from './Vista/registro/registro';
import { Historial } from './Vista/historial/historial';
import { HistorialResolver } from './Vista/historial/historial.resolver';
import { LectorQR } from './Vista/lector-qr/lector-qr';
import { MisMarcajesComponent } from './features/mis-marcajes/mis-marcajes';
import { CarrerasComponent } from './features/carreras/carreras';
import { MiQrComponent } from './features/mi-qr/mi-qr';

// Login (standalone)
import { LoginComponent } from '../app/features/auth/login/login';

// Guard de autenticación/rol
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  /**
   * Diagnóstico / pruebas (comentar/activar según se necesite):
   *
   * 1) Forzar re-ejecución de guards y resolvers en cada navegación (útil
   *    si navegas repetidamente a la misma ruta y quieres forzar recarga):
   *
   *    { path: 'mis-marcajes', component: MisMarcajesComponent, canActivate: [authGuard], runGuardsAndResolvers: 'always', data: { roles: [...] } }
   *
   * 2) Alternativa: ejecutar carga automática en ngOnInit() del componente
   *    (ya hay una línea comentada en `mis-marcajes.ts` que puedes activar):
   *
   *    // this.cargarMarcajes(); // en ngOnInit
   */
  // Arranque en Inicio (público)
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },

  // Público
  { path: 'inicio', component: Inicio },
  { path: 'carreras', component: CarrerasComponent },
  { path: 'login', component: LoginComponent },


  // Protegidas por rol (ajusta si lo deseas)
  // Protegidas por rol
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
    data: { roles: ['ADMIN', 'DOCENTE'] },
    resolve: { historialData: HistorialResolver }
  },
  {
    path: 'mis-marcajes',
    component: MisMarcajesComponent,
    canActivate: [authGuard],
    data: { roles: ['ADMIN', 'DOCENTE', 'ESTUDIANTE'] }
  },
  {
    path: 'mi-qr',
    component: MiQrComponent,
    canActivate: [authGuard],
    data: { roles: ['ADMIN','DOCENTE','ESTUDIANTE'] }
  },

  // 404 → inicio
  { path: '**', redirectTo: 'inicio' }
];
