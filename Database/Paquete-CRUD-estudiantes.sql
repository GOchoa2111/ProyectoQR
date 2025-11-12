-- Paquete: PKG_ESTUDIANTES
-- Provee CRUD y utilidades para la tabla ESTUDIANTES

CREATE OR REPLACE PACKAGE PKG_ESTUDIANTES IS

  -- Ref cursor para listados
  TYPE ref_cursor IS REF CURSOR;

  -- Crear estudiante: devuelve el nuevo ID en p_new_id
  PROCEDURE crear_estudiante(
    p_nombre        IN VARCHAR2,
    p_apellido      IN VARCHAR2,
    p_codigoQR      IN VARCHAR2,
    p_numeroCarnet  IN VARCHAR2,
    p_telefono      IN VARCHAR2,
    p_direccion     IN VARCHAR2,
    p_anio          IN VARCHAR2,
    p_sede          IN VARCHAR2,
    p_usuario       IN VARCHAR2,
    p_contrasena    IN VARCHAR2,
    p_rol           IN VARCHAR2,
    p_email         IN VARCHAR2,
    p_new_id        OUT NUMBER,
    p_commit        IN BOOLEAN DEFAULT TRUE
  );

  -- Obtener un estudiante por ID (devuelve ref cursor con 0 o 1 fila)
  PROCEDURE obtener_estudiante(
    p_estudianteid IN NUMBER,
    p_cursor       OUT ref_cursor
  );

  -- Listar estudiantes con filtros opcionales y paginación (OFFSET/FETCH)
  PROCEDURE listar_estudiantes(
    p_cursor        OUT ref_cursor,
    p_filter_usuario IN VARCHAR2 DEFAULT NULL,
    p_filter_nombre  IN VARCHAR2 DEFAULT NULL,
    p_filter_rol     IN VARCHAR2 DEFAULT NULL,
    p_limit          IN NUMBER DEFAULT NULL,
    p_offset         IN NUMBER DEFAULT NULL
  );

  -- Actualizar todos los campos (excepto ESTUDIANTEID)
  PROCEDURE actualizar_estudiante(
    p_estudianteid  IN NUMBER,
    p_nombre        IN VARCHAR2,
    p_apellido      IN VARCHAR2,
    p_codigoQR      IN VARCHAR2,
    p_numeroCarnet  IN VARCHAR2,
    p_telefono      IN VARCHAR2,
    p_direccion     IN VARCHAR2,
    p_anio          IN VARCHAR2,
    p_sede          IN VARCHAR2,
    p_usuario       IN VARCHAR2,
    p_contrasena    IN VARCHAR2,
    p_rol           IN VARCHAR2,
    p_estado        IN CHAR,
    p_email         IN VARCHAR2,
    p_commit        IN BOOLEAN DEFAULT TRUE
  );

  -- Eliminar: p_physical = FALSE => soft delete (estado='I'), TRUE => DELETE físico
  PROCEDURE eliminar_estudiante(
    p_estudianteid IN NUMBER,
    p_physical     IN BOOLEAN DEFAULT FALSE,
    p_commit       IN BOOLEAN DEFAULT TRUE
  );

  -- Utilidades
  FUNCTION existe_usuario(p_usuario IN VARCHAR2) RETURN NUMBER; -- devuelve COUNT
  FUNCTION existe_carnet(p_numeroCarnet IN VARCHAR2) RETURN NUMBER; -- devuelve COUNT

END PKG_ESTUDIANTES;
/