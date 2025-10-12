# 📚 ProyectoQR – Control de Asistencia con Código QR

## 🌟 Descripción General

**ProyectoQR** es un sistema de gestión de asistencia diseñado para controlar de manera eficiente la entrada y salida de estudiantes mediante el uso de códigos QR únicos.  
El sistema se apoya en una estructura sólida de base de datos Oracle, garantizando:

- Registro en tiempo real.
- Integridad de los datos.
- Trazabilidad de todas las acciones administrativas.

---

## 🛠️ Tecnologías Utilizadas

- **Base de Datos**: Oracle Database
- **Lenguajes**: SQL, PL/SQL
- **Backend**: *(Asumido: .NET o similar, basado en la estructura de carpetas)*

---

## ✨ Características Principales

- **Registro de Estudiantes**: Almacenamiento de datos personales y académicos.
- **Generación de Código QR**: Identificador único por estudiante para control de asistencia.
- **Control de Marcajes**: Registro de fecha, hora y tipo de asistencia.
- **Auditoría y Trazabilidad**: Triggers que registran automáticamente acciones (INSERT, UPDATE, DELETE) en la tabla `ESTUDIANTES`.
- **Procesos de Mantenimiento**: Procedimientos almacenados para encapsular la lógica de negocio (`INSERTARESTUDIANTE`, `ELIMINARESTUDIANTEPORID`).

---

## 🔗 Estructura de la Base de Datos

El esquema principal `PROYECTOQR` incluye las siguientes tablas:

TablaDescripciónClave PrincipalESTUDIANTESInformación personal y académica de cada estudiante.ESTUDIANTEIDMARCAJESRegistro de entradas/salidas de estudiantes. Relacionada con ESTUDIANTES.MARCAJEID| `HISTORIALESTUDIANTES` | Auditoría de acciones sobre estudiantes.                                     | `ID_HISTORIAL`      |
| `AUDITORIA`            | Registro adicional de acciones administrativas.                              | `ID_AUDITORIA`      |

---

## ⚙️ Despliegue de la Base de Datos

Los scripts están organizados por fases para facilitar un despliegue ordenado. Se recomienda ejecutarlos en el siguiente orden:

1. `01_sequences_ddl.sql` – Creación de secuencias.
2. `02_tables_ddl.sql` – Creación de tablas.
3. `06_constraints_ddl.sql` – Claves primarias, foráneas e índices.
4. `04_triggers_ddl.sql` – Triggers de auditoría.
5. `05_procedures_ddl.sql` – Procedimientos almacenados.
6. `03_data_dml.sql` – Inserción de datos iniciales.

---

## 🤝 Contribución

Utilizamos un flujo de trabajo basado en ramas para gestionar el desarrollo y despliegue:

### 🧪 Flujo de trabajo

1. Clona el repositorio.
2. Crea una rama de característica desde `desa`.
3. Realiza tus cambios y haz `commit`.
4. Haz `push` y crea un Pull Request hacia `desa`.

### 🗂️ Ramas del Proyecto

- `main`: Rama estable, refleja la última versión en producción.
- `desa`: Desarrollo activo.
- `pre`: Pre-producción (staging).
- `pro`: Producción final.