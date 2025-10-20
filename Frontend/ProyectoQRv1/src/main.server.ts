import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

// En el servidor debemos pasar los providers explícitamente a bootstrapApplication
// para proporcionar el contexto de arranque necesario para SSR.
// Exportar una función que acepte un 'context' (bootstrap context) y mezcle providers.
export default function bootstrap(context?: { providers?: any[] }) {
	const ctxProviders = context?.providers ?? [];
	const providers = [...(config?.providers ?? []), ...ctxProviders];
	return bootstrapApplication(App, { providers } as any);
}
