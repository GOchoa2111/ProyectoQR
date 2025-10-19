// main.ts
// Zone.js is required by default for Angular's change detection when not using zoneless mode.
// Import it early before any Angular code runs.
import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Standalone: usar providers, no módulos.
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { authInterceptorProvider } from './app/core/interceptors/auth.interceptor';

try {
  console.log('[bootstrap] Starting application bootstrap');
  bootstrapApplication(App, {
    ...appConfig,
    providers: [
      ...(appConfig.providers ?? []),
      provideAnimations(), // reemplaza a BrowserAnimationsModule
      provideToastr({
        timeOut: 3500,
        positionClass: 'toast-bottom-center',
        preventDuplicates: true,
        progressBar: true,
        closeButton: false,
        newestOnTop: true,
      }),
      authInterceptorProvider,
    ],
  }).then(() => console.log('[bootstrap] Application bootstrapped')).catch(err => {
    console.error('[bootstrap] Error during bootstrap:', err);
    // Intentar mostrar el error en el DOM si el overlay global ya está disponible
    try { window && window.dispatchEvent(new ErrorEvent('error', { error: err, message: String(err) } as any)); } catch(e) {}
  });
} catch (err) {
  console.error('[bootstrap] Unexpected synchronous error:', err);
  try { window && window.dispatchEvent(new ErrorEvent('error', { error: err, message: String(err) } as any)); } catch(e) {}
}
