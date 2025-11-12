BEGIN
  PKG_ESTUDIANTES.actualizar_estudiante(
    p_estudianteid => 123,
    p_nombre => 'Pedro Alberto',
    p_apellido => 'Gomez',
    p_codigoQR => 'ABC-QR-123',
    p_numeroCarnet => 'CARNET-001',
    p_telefono => '87654321',
    p_direccion => 'Otra direccion',
    p_anio => '2025',
    p_sede => 'San Raymundo',
    p_usuario => 'p.gomez',
    p_contrasena => 'hash-nuevo',
    p_rol => 'ESTUDIANTE',
    p_estado => 'A',
    p_email => 'pedro@example.com',
    p_commit => TRUE
  );
END;
/