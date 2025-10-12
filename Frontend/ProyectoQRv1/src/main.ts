// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Standalone: usar providers, no módulos.
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

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
  ],
}).catch(err => console.error(err));
