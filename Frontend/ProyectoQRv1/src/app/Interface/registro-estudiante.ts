// src/app/Interface/registro-estudiante.ts
export interface RegistroEstudiante {
  nombre: string;
  apellido: string;
  numeroCarnet: string;
  telefono: string;
  direccion: string;
  anio: string;
  sede: string;

  // nuevos
  email: string;
  contrasena: string;
  rol: 'ESTUDIANTE' | 'DOCENTE' | 'ADMIN';
  usuario?: string; // opcional: si se omite, el backend lo autogenera
}
