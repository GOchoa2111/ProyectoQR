import { Routes } from '@angular/router';
import { Inicio } from './Vista/inicio/inicio';
import { Registro } from './Vista/registro/registro';
import { Historial } from './Vista/historial/historial';
import { LectorQR } from './Vista/lector-qr/lector-qr';
//import { LoginComponent } from './features/auth/login/login';

export const routes: Routes = [
  // OPCIONAL: si quieres que arranque en /login, usa esta línea y comenta la de Inicio:
  // { path: '', pathMatch: 'full', redirectTo: 'login' },

  // Tu ruta por defecto actual (déjala si quieres seguir entrando a Inicio)
  { path: '', component: Inicio },

  // NUEVO: Login (standalone, lazy)
  //{path: 'login', component: LoginComponent},

  { path: 'lector', component: LectorQR },
  { path: 'inicio', component: Inicio },
  { path: 'registro', component: Registro },
  { path: 'historial', component: Historial },

  // (opcional) 404
  // { path: '**', redirectTo: 'inicio' }
];
