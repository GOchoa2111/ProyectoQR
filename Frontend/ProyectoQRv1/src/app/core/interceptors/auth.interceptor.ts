// src/app/core-interceptors/auth.interceptor.ts
import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { environment } from '../../../environments/environments';

/**
 * Interceptor que:
 * 1) Adjunta Authorization: Bearer <token> a peticiones del API (excepto /auth/login)
 * 2) Si recibe 401/403, limpia sesión y redirige a /login
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  // Evitar adjuntar token al endpoint de login
  const isLogin = req.url.toLowerCase().includes('/auth/login');

  // Solo añadimos token a llamadas contra nuestro API (opcional pero recomendado)
  const isApiUrl =
    req.url.startsWith(environment.apiBaseUrl) ||
    req.url.startsWith(environment.apiBaseUrl.replace(/\/api$/, ''));

  let request: HttpRequest<unknown> = req;

  if (!isLogin && isApiUrl) {
    const token = auth.token;
    if (token) {
      request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  }

  return next(request).pipe(
    catchError((err) => {
      if (err?.status === 401 || err?.status === 403) {
        // Sesión inválida/expirada: limpiar y mandar al login
        auth.logout();
        // (si ya estás en /login, Router ignorará navegación duplicada)
        router.navigate(['/login']);
      }
      return throwError(() => err);
    })
  );
};
