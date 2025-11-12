SET SERVEROUTPUT ON
DECLARE
  v_new_id NUMBER;
BEGIN
  PKG_ESTUDIANTES.crear_estudiante(
    p_nombre => 'Pedro',
    p_apellido => 'Gomez',
    p_codigoQR => 'ABC-QR-123',
    p_numeroCarnet => 'CARNET-001',
    p_telefono => '12345678',
    p_direccion => 'C/ Falsa 123',
    p_anio => '2025',
    p_sede => 'San Raymundo',
    p_usuario => 'p.gomez',
    p_contrasena => 'hash-seguro',
    p_rol => 'ESTUDIANTE',
    p_email => 'pedro@example.com',
    p_new_id => v_new_id,
    p_commit => TRUE
  );

  DBMS_OUTPUT.PUT_LINE('Nuevo ID: ' || v_new_id);
END;
/