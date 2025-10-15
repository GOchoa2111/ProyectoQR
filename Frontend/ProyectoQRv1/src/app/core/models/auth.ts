export interface LoginRequest {
  usuario: string;
  contrasena: string;
}

export interface LoginResponse {
  accessToken: string;
  expiresIn: number;   // en segundos
  usuario: string;
  rol: string;
}
