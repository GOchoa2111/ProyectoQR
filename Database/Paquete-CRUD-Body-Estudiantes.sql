CREATE OR REPLACE PACKAGE BODY PKG_ESTUDIANTES IS

  ----------------------------------------------------------------
  -- Crear estudiante
  ----------------------------------------------------------------
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
    p_commit        IN BOOLEAN
  ) IS
    v_count NUMBER;
    v_seq   NUMBER;
  BEGIN
    -- Validaciones básicas
    IF p_usuario IS NOT NULL THEN
      SELECT COUNT(1) INTO v_count FROM Estudiantes WHERE LOWER(USUARIO) = LOWER(p_usuario);
      IF v_count > 0 THEN
        RAISE_APPLICATION_ERROR(-20001, 'Usuario ya existe');
      END IF;
    END IF;

    IF p_numeroCarnet IS NOT NULL THEN
      SELECT COUNT(1) INTO v_count FROM Estudiantes WHERE LOWER(NUMEROCARNET) = LOWER(p_numeroCarnet);
      IF v_count > 0 THEN
        RAISE_APPLICATION_ERROR(-20002, 'Número de carnet ya existe');
      END IF;
    END IF;

    -- Generar ID desde la secuencia que indicaste
    -- Nota: adaptación a nombre de secuencia original
    v_seq := "PROYECTOQR"."ISEQ$$_75697".NEXTVAL;

    INSERT INTO Estudiantes (
      EstudianteID, Nombre, Apellido, CodigoQR, NumeroCarnet, Telefono,
      Direccion, Anio, Sede, Usuario, Contrasena, Rol, Estado, Email
    ) VALUES (
      v_seq,
      p_nombre,
      p_apellido,
      p_codigoQR,
      p_numeroCarnet,
      p_telefono,
      p_direccion,
      p_anio,
      p_sede,
      p_usuario,
      p_contrasena,
      NVL(p_rol, 'ESTUDIANTE'),
      'A',
      p_email
    );

    p_new_id := v_seq;

    IF p_commit THEN
      COMMIT;
    END IF;
  EXCEPTION
    WHEN OTHERS THEN
      ROLLBACK;
      RAISE;
  END crear_estudiante;

  ----------------------------------------------------------------
  -- Obtener estudiante por ID
  ----------------------------------------------------------------
  PROCEDURE obtener_estudiante(
    p_estudianteid IN NUMBER,
    p_cursor       OUT ref_cursor
  ) IS
  BEGIN
    OPEN p_cursor FOR
      SELECT EstudianteID, Nombre, Apellido, CodigoQR, NumeroCarnet, Telefono,
             Direccion, Anio, Sede, Usuario, Contrasena, Rol, Estado, Email
      FROM Estudiantes
      WHERE EstudianteID = p_estudianteid;
  END obtener_estudiante;

  ----------------------------------------------------------------
  -- Listar estudiantes con filtros y paginación
  ----------------------------------------------------------------
  PROCEDURE listar_estudiantes(
    p_cursor        OUT ref_cursor,
    p_filter_usuario IN VARCHAR2,
    p_filter_nombre  IN VARCHAR2,
    p_filter_rol     IN VARCHAR2,
    p_limit          IN NUMBER,
    p_offset         IN NUMBER
  ) IS
    v_sql VARCHAR2(32000);
  BEGIN
    v_sql := 'SELECT EstudianteID, Nombre, Apellido, CodigoQR, NumeroCarnet, Telefono,' ||
             ' Direccion, Anio, Sede, Usuario, Contrasena, Rol, Estado, Email' ||
             ' FROM Estudiantes WHERE 1=1';

    IF p_filter_usuario IS NOT NULL THEN
      v_sql := v_sql || ' AND LOWER(Usuario) LIKE :fu';
    END IF;

    IF p_filter_nombre IS NOT NULL THEN
      v_sql := v_sql || ' AND (LOWER(Nombre) LIKE :fn OR LOWER(Apellido) LIKE :fn)';
    END IF;

    IF p_filter_rol IS NOT NULL THEN
      v_sql := v_sql || ' AND Rol = :fr';
    END IF;

    v_sql := v_sql || ' ORDER BY EstudianteID';

    -- Añadimos paginación si fue solicitada (Oracle 12c+ soporta OFFSET FETCH)
    IF p_limit IS NOT NULL AND p_offset IS NOT NULL THEN
      v_sql := v_sql || ' OFFSET :po ROWS FETCH NEXT :pl ROWS ONLY';
    ELSIF p_limit IS NOT NULL THEN
      v_sql := v_sql || ' FETCH NEXT :pl ROWS ONLY';
    END IF;

    OPEN p_cursor FOR v_sql
      USING (CASE WHEN p_filter_usuario IS NOT NULL THEN '%'||LOWER(p_filter_usuario)||'%' ELSE NULL END),
            (CASE WHEN p_filter_nombre IS NOT NULL THEN '%'||LOWER(p_filter_nombre)||'%' ELSE NULL END),
            p_filter_rol,
            p_offset, p_limit;
    -- Note: depending on driver, binding NULLs in USING may require reordering - probar y ajustar.
  END listar_estudiantes;

  ----------------------------------------------------------------
  -- Actualizar estudiante (sobrescribe todos los campos indicados)
  ----------------------------------------------------------------
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
    p_commit        IN BOOLEAN
  ) IS
    v_count NUMBER;
  BEGIN
    -- Validaciones de unicidad (si se proporciona usuario/carnet y pertenece a otro registro)
    IF p_usuario IS NOT NULL THEN
      SELECT COUNT(1) INTO v_count FROM Estudiantes
        WHERE LOWER(Usuario) = LOWER(p_usuario) AND EstudianteID <> p_estudianteid;
      IF v_count > 0 THEN
        RAISE_APPLICATION_ERROR(-20003, 'Usuario ya existe en otro registro');
      END IF;
    END IF;

    IF p_numeroCarnet IS NOT NULL THEN
      SELECT COUNT(1) INTO v_count FROM Estudiantes
        WHERE LOWER(NumeroCarnet) = LOWER(p_numeroCarnet) AND EstudianteID <> p_estudianteid;
      IF v_count > 0 THEN
        RAISE_APPLICATION_ERROR(-20004, 'Número de carnet ya existe en otro registro');
      END IF;
    END IF;

    UPDATE Estudiantes SET
      Nombre     = p_nombre,
      Apellido   = p_apellido,
      CodigoQR   = p_codigoQR,
      NumeroCarnet = p_numeroCarnet,
      Telefono   = p_telefono,
      Direccion  = p_direccion,
      Anio       = p_anio,
      Sede       = p_sede,
      Usuario    = p_usuario,
      Contrasena = p_contrasena,
      Rol        = NVL(p_rol, Rol),
      Estado     = NVL(p_estado, Estado),
      Email      = p_email
    WHERE EstudianteID = p_estudianteid;

    IF SQL%ROWCOUNT = 0 THEN
      RAISE_APPLICATION_ERROR(-20005, 'Estudiante no encontrado para actualizar');
    END IF;

    IF p_commit THEN
      COMMIT;
    END IF;
  EXCEPTION
    WHEN OTHERS THEN
      ROLLBACK;
      RAISE;
  END actualizar_estudiante;

  ----------------------------------------------------------------
  -- Eliminar estudiante (soft o hard)
  ----------------------------------------------------------------
  PROCEDURE eliminar_estudiante(
    p_estudianteid IN NUMBER,
    p_physical     IN BOOLEAN,
    p_commit       IN BOOLEAN
  ) IS
  BEGIN
    IF p_physical THEN
      DELETE FROM Estudiantes WHERE EstudianteID = p_estudianteid;
      IF SQL%ROWCOUNT = 0 THEN
        RAISE_APPLICATION_ERROR(-20006, 'Estudiante no encontrado (delete)');
      END IF;
    ELSE
      UPDATE Estudiantes SET Estado = 'I' WHERE EstudianteID = p_estudianteid;
      IF SQL%ROWCOUNT = 0 THEN
        RAISE_APPLICATION_ERROR(-20007, 'Estudiante no encontrado (soft-delete)');
      END IF;
    END IF;

    IF p_commit THEN
      COMMIT;
    END IF;
  EXCEPTION
    WHEN OTHERS THEN
      ROLLBACK;
      RAISE;
  END eliminar_estudiante;

  ----------------------------------------------------------------
  -- Utilidades
  ----------------------------------------------------------------
  FUNCTION existe_usuario(p_usuario IN VARCHAR2) RETURN NUMBER IS
    v_count NUMBER;
  BEGIN
    SELECT COUNT(1) INTO v_count FROM Estudiantes WHERE LOWER(Usuario) = LOWER(p_usuario);
    RETURN v_count;
  END existe_usuario;

  FUNCTION existe_carnet(p_numeroCarnet IN VARCHAR2) RETURN NUMBER IS
    v_count NUMBER;
  BEGIN
    SELECT COUNT(1) INTO v_count FROM Estudiantes WHERE LOWER(NumeroCarnet) = LOWER(p_numeroCarnet);
    RETURN v_count;
  END existe_carnet;

END PKG_ESTUDIANTES;
/