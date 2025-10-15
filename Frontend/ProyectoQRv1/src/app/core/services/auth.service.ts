import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse } from '../models/auth';
import { environment } from '../../../environments/environments';

const TOKEN_KEY = 'auth.token';
const EXP_KEY   = 'auth.exp';   // epoch (ms)
const USER_KEY  = 'auth.user';
const ROL_KEY   = 'auth.rol';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private base = `${environment.apiBaseUrl}/auth`;

  login(dto: LoginRequest) {
    return this.http.post<LoginResponse>(`${this.base}/login`, dto);
  }

  storeSession(res: LoginResponse) {
    const nowMs = Date.now();
    const expMs = nowMs + (res.expiresIn * 1000);
    sessionStorage.setItem(TOKEN_KEY, res.accessToken);
    sessionStorage.setItem(EXP_KEY, String(expMs));
    sessionStorage.setItem(USER_KEY, res.usuario);
    sessionStorage.setItem(ROL_KEY, res.rol);
  }

  logout() {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(EXP_KEY);
    sessionStorage.removeItem(USER_KEY);
    sessionStorage.removeItem(ROL_KEY);
  }

  get token(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  get role(): string | null {
    return sessionStorage.getItem(ROL_KEY);
  }

  get username(): string | null {
    return sessionStorage.getItem(USER_KEY);
  }

  isLoggedIn(): boolean {
    const token = this.token;
    const expStr = sessionStorage.getItem(EXP_KEY);
    if (!token || !expStr) return false;
    const expMs = Number(expStr);
    return Date.now() < expMs;
  }
}
