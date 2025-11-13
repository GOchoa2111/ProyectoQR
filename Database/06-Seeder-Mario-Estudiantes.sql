-- Seeder: Datos de estudiantes con temática Mario Bros
-- Genera 75+ registros de prueba usando el paquete PKG_ESTUDIANTES
-- Ejecutar después de crear el paquete PKG_ESTUDIANTES

SET SERVEROUTPUT ON;

DECLARE
  v_new_id NUMBER;
  v_contador NUMBER := 0;
  
  -- Arrays de nombres y apellidos temática Mario
  TYPE t_nombres IS VARRAY(25) OF VARCHAR2(50);
  TYPE t_apellidos IS VARRAY(25) OF VARCHAR2(50);
  TYPE t_sedes IS VARRAY(5) OF VARCHAR2(50);
  TYPE t_anios IS VARRAY(4) OF VARCHAR2(10);
  TYPE t_roles IS VARRAY(3) OF VARCHAR2(20);
  
  v_nombres t_nombres := t_nombres(
    'Mario', 'Luigi', 'Peach', 'Bowser', 'Yoshi', 'Toad', 'Rosalina', 'Wario', 'Waluigi', 'Koopa',
    'Goomba', 'Lakitu', 'Piranha', 'Shy', 'Boo', 'Blooper', 'Cheep', 'Bullet', 'Hammer', 'Fire',
    'Ice', 'Cape', 'Star', 'Mushroom', 'Flower'
  );
  
  v_apellidos t_apellidos := t_apellidos(
    'Bros', 'Princess', 'Koopa', 'Troopa', 'Plant', 'Guy', 'Bill', 'Bro', 'Mario', 'Luigi',
    'Castle', 'Kingdom', 'World', 'Land', 'Galaxy', 'Odyssey', 'Party', 'Kart', 'Tennis', 'Golf',
    'Paper', 'Super', 'New', 'Ultra', 'Mega'
  );
  
  v_sedes t_sedes := t_sedes('Mushroom Kingdom', 'Koopa Castle', 'Peach Castle', 'Yoshi Island', 'Star Road');
  v_anios t_anios := t_anios('2022', '2023', '2024', '2025');
  v_roles t_roles := t_roles('ESTUDIANTE', 'DOCENTE', 'ADMIN');

BEGIN
  DBMS_OUTPUT.PUT_LINE('=== Iniciando Seeder Mario Bros ===');
  DBMS_OUTPUT.PUT_LINE('Creando estudiantes con temática Mario...');
  
  -- Generar 75 estudiantes
  FOR i IN 1..75 LOOP
    DECLARE
      v_nombre VARCHAR2(50);
      v_apellido VARCHAR2(50);
      v_usuario VARCHAR2(100);
      v_carnet VARCHAR2(20);
      v_telefono VARCHAR2(15);
      v_direccion VARCHAR2(200);
      v_sede VARCHAR2(50);
      v_anio VARCHAR2(10);
      v_rol VARCHAR2(20);
      v_email VARCHAR2(100);
      v_contrasena VARCHAR2(100);
      v_codigoQR VARCHAR2(100);
      
      -- Índices aleatorios
      v_idx_nombre NUMBER;
      v_idx_apellido NUMBER;
      v_idx_sede NUMBER;
      v_idx_anio NUMBER;
      v_idx_rol NUMBER;
    BEGIN
      -- Generar índices aleatorios
      v_idx_nombre := MOD(DBMS_RANDOM.VALUE(1, 1000), 25) + 1;
      v_idx_apellido := MOD(DBMS_RANDOM.VALUE(1, 1000), 25) + 1;
      v_idx_sede := MOD(DBMS_RANDOM.VALUE(1, 100), 5) + 1;
      v_idx_anio := MOD(DBMS_RANDOM.VALUE(1, 100), 4) + 1;
      v_idx_rol := CASE 
        WHEN i <= 65 THEN 1  -- 65 estudiantes
        WHEN i <= 73 THEN 2  -- 8 docentes  
        ELSE 3               -- 2 admins
      END;
      
      -- Asignar valores
      v_nombre := v_nombres(v_idx_nombre);
      v_apellido := v_apellidos(v_idx_apellido);
      v_sede := v_sedes(v_idx_sede);
      v_anio := v_anios(v_idx_anio);
      v_rol := v_roles(v_idx_rol);
      
      -- Generar datos únicos
      v_usuario := LOWER(SUBSTR(v_nombre, 1, 1) || v_apellido || i);
      v_carnet := v_anio || '-' || LPAD(i, 3, '0');
      v_telefono := '555-' || LPAD(MOD(DBMS_RANDOM.VALUE(1, 10000), 10000), 4, '0');
      v_direccion := 'World ' || MOD(i, 8) + 1 || '-' || MOD(i, 4) + 1 || ', ' || v_sede;
      v_email := v_usuario || '@mario.kingdom';
      v_contrasena := 'mario123'; -- Password simple para pruebas
      v_codigoQR := 'QR-MARIO-' || LPAD(i, 3, '0') || '-' || TO_CHAR(SYSDATE, 'YYYYMMDD');
      
      -- Llamar al paquete para crear el estudiante
      PKG_ESTUDIANTES.crear_estudiante(
        p_nombre => v_nombre,
        p_apellido => v_apellido,
        p_codigoQR => v_codigoQR,
        p_numeroCarnet => v_carnet,
        p_telefono => v_telefono,
        p_direccion => v_direccion,
        p_anio => v_anio,
        p_sede => v_sede,
        p_usuario => v_usuario,
        p_contrasena => v_contrasena,
        p_rol => v_rol,
        p_email => v_email,
        p_new_id => v_new_id,
        p_commit => FALSE -- No commit individual
      );
      
      v_contador := v_contador + 1;
      
      -- Progress cada 10 registros
      IF MOD(i, 10) = 0 THEN
        DBMS_OUTPUT.PUT_LINE('Creados ' || i || ' estudiantes...');
      END IF;
      
    EXCEPTION
      WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Error creando estudiante ' || i || ': ' || SQLERRM);
        -- Continuar con el siguiente
    END;
  END LOOP;
  
  -- Commit al final
  COMMIT;
  
  DBMS_OUTPUT.PUT_LINE('=== Seeder completado ===');
  DBMS_OUTPUT.PUT_LINE('Total estudiantes creados: ' || v_contador);
  
  -- Mostrar resumen por rol
  FOR rec IN (SELECT Rol, COUNT(*) as total FROM Estudiantes GROUP BY Rol ORDER BY Rol) LOOP
    DBMS_OUTPUT.PUT_LINE('- ' || rec.Rol || ': ' || rec.total || ' usuarios');
  END LOOP;
  
EXCEPTION
  WHEN OTHERS THEN
    ROLLBACK;
    DBMS_OUTPUT.PUT_LINE('Error general en seeder: ' || SQLERRM);
    RAISE;
END;
/

-- Verificar datos creados
SELECT 'Total estudiantes: ' || COUNT(*) as resumen FROM Estudiantes;
SELECT Rol, COUNT(*) as cantidad FROM Estudiantes GROUP BY Rol ORDER BY Rol;
SELECT Sede, COUNT(*) as cantidad FROM Estudiantes GROUP BY Sede ORDER BY Sede;

-- Mostrar algunos ejemplos
SELECT EstudianteID, Nombre, Apellido, Usuario, Rol, Sede, NumeroCarnet 
FROM Estudiantes 
WHERE ROWNUM <= 10 
ORDER BY EstudianteID;

COMMIT;