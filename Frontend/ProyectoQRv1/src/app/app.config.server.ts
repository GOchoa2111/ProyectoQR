import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/ssr';
import { appConfig } from './app.config';

// Para evitar la extracción de rutas durante la construcción (que requiere
// un Bootstrap Context adicional), registramos provideServerRendering
// sin withRoutes. Esto habilita SSR sin forzar prerender/extract routes.
const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering()]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
