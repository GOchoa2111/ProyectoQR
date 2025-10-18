// src/app/services/auth.service.ts
import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  LoginRequest,
  LoginResponse,
  AuthState,
  AuthUser,
  AUTH_TOKEN_KEY,
  AUTH_USER_KEY,
  AUTH_EXP_KEY,
  ROLE_ROUTE
} from '../models/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  /** Endpoint del login (verifica bien el host/puerto y protocolo) */
  private baseUrl = 'http://109.199.118.104:5111/api/Auth/login';

  /** Estado reactivo de autenticación */
  readonly authState = signal<AuthState>({
    token: localStorage.getItem(AUTH_TOKEN_KEY),
    user: this.loadUser(),
    expiresAt: Number(localStorage.getItem(AUTH_EXP_KEY)) || null,
    isAuthenticated: !!localStorage.getItem(AUTH_TOKEN_KEY),
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
      role: resp.rol,
    };

    // Guardar en storage
    localStorage.setItem(AUTH_TOKEN_KEY, resp.accessToken);
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
    localStorage.setItem(AUTH_EXP_KEY, String(expiresAt));

    // Actualizar signal
    this.authState.set({
      token: resp.accessToken,
      user,
      expiresAt,
      isAuthenticated: true,
    });

    // Redirigir según rol
    const redirect = ROLE_ROUTE[resp.rol] || '/';
    this.router.navigate([redirect]);
  }

  /** === CARGAR USUARIO DESDE STORAGE === */
  private loadUser(): AuthUser | null {
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
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(AUTH_USER_KEY);
    localStorage.removeItem(AUTH_EXP_KEY);

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
