VARIABLE rc REFCURSOR
BEGIN
  PKG_ESTUDIANTES.listar_estudiantes(
    p_cursor => :rc,
    p_filter_usuario => 'p.gomez',
    p_filter_nombre => NULL,
    p_filter_rol => NULL,
    p_limit => 20,
    p_offset => 0
  );
END;
/
PRINT rc