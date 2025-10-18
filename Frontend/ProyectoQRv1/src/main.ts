// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Standalone: usar providers, no módulos.
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { authInterceptorProvider } from './app/core/interceptors/auth.interceptor';

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
}).catch(err => console.error(err));
