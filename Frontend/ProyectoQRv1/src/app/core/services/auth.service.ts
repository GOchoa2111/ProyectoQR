// src/app/services/auth.service.ts
import { Injectable, signal, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import {
  LoginRequest,
  LoginResponse,
  Role,
  AuthState,
  AuthUser,
  AUTH_TOKEN_KEY,
  AUTH_USER_KEY,
  AUTH_EXP_KEY,
  ROLE_ROUTE
} from '../models/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Prefer constructor injection to avoid calling `inject()` outside an injection context
  constructor(private http: HttpClient, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    // Inicializar estado desde localStorage solo si estamos en el browser
    if (this.isBrowser) {
      const token = localStorage.getItem(AUTH_TOKEN_KEY);
      const user = this.loadUser();
      const expiresAt = Number(localStorage.getItem(AUTH_EXP_KEY)) || null;
      this.authState.set({
        token,
        user,
        expiresAt,
        isAuthenticated: !!token,
      });
    }
  }

  // PLATFORM / Browser check to avoid accessing localStorage during SSR
  private isBrowser: boolean;

  /** Endpoint del login (utiliza environment.apiUrl) */
  private baseUrl = `${environment.apiUrl}/Auth/login`;

  /** Estado reactivo de autenticación (no leer localStorage en servidor) */
  readonly authState = signal<AuthState>({
    token: null,
    user: null,
    expiresAt: null,
    isAuthenticated: false,
  });

  /** === LOGIN === */
  login(payload: LoginRequest) {
    // El backend espera { usuario, contrasena }
    const body = {
      usuario: payload.username,
      contrasena: payload.password,
    };

    return this.http.post<LoginResponse>(this.baseUrl, body, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  /** === GUARDAR DATOS TRAS LOGIN EXITOSO === */
  handleLoginSuccess(resp: LoginResponse) {
    const expiresAt = Date.now() + resp.expiresIn * 1000;

    const user: AuthUser = {
      id: this.decodeTokenSub(resp.accessToken),
      username: resp.usuario,
      // Normalize role to uppercase to avoid mismatches (backend may send different casing)
      role: (String(resp.rol || '').toUpperCase()) as Role,
    };

    // Guardar en storage (solo en browser)
    if (this.isBrowser) {
      localStorage.setItem(AUTH_TOKEN_KEY, resp.accessToken);
      localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
      localStorage.setItem(AUTH_EXP_KEY, String(expiresAt));
    }

    // Actualizar signal
    this.authState.set({
      token: resp.accessToken,
      user,
      expiresAt,
      isAuthenticated: true,
    });

    // Redirigir según rol
  const redirect = ROLE_ROUTE[resp.rol] || '/';
  try { console.log('[AuthService] login role=', resp.rol, 'redirecting to', redirect); } catch (e) {}
  this.router.navigate([redirect]);
  }

  /** Utility: check if current user has any of the provided roles */
  hasRole(...roles: Role[]): boolean {
    const r = this.getRole();
    if (!r) return false;
    return roles.includes(r as Role);
  }

  /** === CARGAR USUARIO DESDE STORAGE === */
  private loadUser(): AuthUser | null {
    if (!this.isBrowser) return null;
    const data = localStorage.getItem(AUTH_USER_KEY);
    return data ? (JSON.parse(data) as AuthUser) : null;
  }

  /** === DECODIFICAR SUB DEL TOKEN === */
  private decodeTokenSub(token: string): string | number {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.sub ?? '';
    } catch {
      return '';
    }
  }

  /** === DECODIFICAR EXP (segundos UNIX) DEL TOKEN === */
  private decodeTokenExp(token: string): number | null {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return typeof payload.exp === 'number' ? payload.exp : null; // exp en segundos
    } catch {
      return null;
    }
  }

  /** === VALIDAR / SINCRONIZAR SESIÓN AL ARRANCAR LA APP === */
  ensureSessionOnBoot(): void {
    // No ejecutar durante prerender/SSR
    if (!this.isBrowser) return;

    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    let expiresAt = Number(localStorage.getItem(AUTH_EXP_KEY)) || null;

    // Si hay token pero no hay expiresAt (o fue borrado), lo calculamos desde el JWT.
    if (token && !expiresAt) {
      const expSec = this.decodeTokenExp(token);
      if (expSec) {
        expiresAt = expSec * 1000; // a ms
        localStorage.setItem(AUTH_EXP_KEY, String(expiresAt));
      }
    }

    // Si no hay token o ya expiró, purgar sesión
    if (!token || (expiresAt !== null && Date.now() >= expiresAt)) {
      this.logout(false); // no navegar si ya estás en /login
      return;
    }

    // Refrescar signal si venimos de un refresh
    if (token && expiresAt && !this.authState().token) {
      this.authState.set({
        token,
        user: this.loadUser(),
        expiresAt,
        isAuthenticated: true,
      });
    }
  }

  /** === OBTENER TOKEN ACTUAL === */
  get token(): string | null {
    return this.authState().token;
  }

  /** === SABER SI EL USUARIO ESTÁ LOGUEADO (verifica expiración) === */
  isLoggedIn(): boolean {
    const state = this.authState();
    if (!state.token || !state.expiresAt) return false;
    return Date.now() < state.expiresAt;
  }

  /** === OBTENER ROL DEL USUARIO === */
  getRole(): string | null {
    return this.authState().user?.role ?? null;
  }

  /** === CERRAR SESIÓN === */
  logout(navigateToLogin: boolean = true): void {
    if (this.isBrowser) {
      localStorage.removeItem(AUTH_TOKEN_KEY);
      localStorage.removeItem(AUTH_USER_KEY);
      localStorage.removeItem(AUTH_EXP_KEY);
    }

    this.authState.set({
      token: null,
      user: null,
      expiresAt: null,
      isAuthenticated: false,
    });

    if (navigateToLogin) {
      this.router.navigate(['/login']);
    }
  }
}
