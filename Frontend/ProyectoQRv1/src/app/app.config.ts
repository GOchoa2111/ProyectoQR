// app.config.ts
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';

// withInterceptors y tu interceptor
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // HttpClient con soporte de fetch; el interceptor se registra globalmente en main.ts
    provideHttpClient(withFetch()),
      importProvidersFrom(HttpClientModule),
      provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withViewTransitions()
    ),
    provideClientHydration(withEventReplay()),
    provideAnimations()
  ]
};


