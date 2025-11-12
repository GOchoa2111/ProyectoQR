VARIABLE rc REFCURSOR
BEGIN
  PKG_ESTUDIANTES.obtener_estudiante(p_estudianteid => 123, p_cursor => :rc);
END;
/
PRINT rc