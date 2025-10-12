import { Routes } from '@angular/router';
import { Inicio } from './Vista/inicio/inicio';
import { Registro } from './Vista/registro/registro';
import { Historial } from './Vista/historial/historial';
import { LectorQR } from './Vista/lector-qr/lector-qr';


export const routes: Routes = [
  { path: '', component: Inicio }, // Ruta por defecto
  { path: 'lector', component: LectorQR},
  { path: 'inicio', component: Inicio },
  { path: 'registro', component: Registro },
  { path: 'historial', component: Historial }
];