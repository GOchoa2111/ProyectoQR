// src/app/auth/auth.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { ROLE_ROUTE } from '../core/models/auth';

/**
 * Usa en rutas con: canActivate: [authGuard], data: { roles: ['ADMIN', 'DOCENTE', 'ESTUDIANTE'] }
 */
export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  // 1) ¿Hay sesión válida?
  if (!auth.isLoggedIn()) {
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  // 2) ¿La ruta exige roles?
  const roles = route.data?.['roles'] as string[] | undefined;
  if (roles && roles.length > 0) {
    const userRole = auth.getRole();
    if (!userRole || !roles.includes(userRole)) {
      // Sin permiso → redirigir a la home del rol actual
      const fallback = userRole ? ROLE_ROUTE[userRole as keyof typeof ROLE_ROUTE] : '/';
      router.navigate([fallback]);
      return false;
    }
  }

  return true;
};
