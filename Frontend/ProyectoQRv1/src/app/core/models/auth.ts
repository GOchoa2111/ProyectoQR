// src/app/models/auth.ts

/** Roles válidos tal como los devuelve tu API */
export type Role = 'ESTUDIANTE' | 'DOCENTE' | 'ADMIN';

/** Request de login */
export interface LoginRequest {
  username: string;
  password: string;
}

/** Response de login (tal cual tu API) */
export interface LoginResponse {
  accessToken: string;   // JWT
  expiresIn: number;     // segundos (p.ej. 3600)
  usuario: string;       // username, ej: "paul.orozco"
  rol: Role;             // rol en MAYÚSCULAS
}

/** Usuario autenticado que usará el front */
export interface AuthUser {
  id: string | number;   // desde el claim "sub" del JWT
  username: string;      // = usuario
  role: Role;            // = rol
}

/** Estado de autenticación que guardaremos en el cliente */
export interface AuthState {
  token: string | null;          // = accessToken
  user: AuthUser | null;
  expiresAt: number | null;      // timestamp en ms => Date.now() + expiresIn*1000
  isAuthenticated: boolean;      // derivado de token && !expirado
}

/** Claves para storage */
export const AUTH_TOKEN_KEY  = 'auth.token';
export const AUTH_USER_KEY   = 'auth.user';
export const AUTH_EXP_KEY    = 'auth.expiresAt';

/** Rutas destino según rol (ajústalas a tu app real) */
export const ROLE_ROUTE: Record<Role, string> = {
  ESTUDIANTE: '/historial',
  DOCENTE: '/lector',
  ADMIN: '/registro',
};
