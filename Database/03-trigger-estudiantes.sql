-- Trigger TRG_DELETE_ESTUDIANTE
CREATE OR REPLACE EDITIONABLE TRIGGER "PROYECTOQR"."TRG_DELETE_ESTUDIANTE"
AFTER DELETE ON Estudiantes
FOR EACH ROW
BEGIN
  INSERT INTO HistorialEstudiantes (ID_Historial, Accion, Descripcion)
  VALUES (
    seq_historial_estudiantes.NEXTVAL,
    'DELETE',
    'Se eliminó el estudiante: ' || :OLD.Nombre || ' ' || :OLD.Apellido
  );
END;
/
ALTER TRIGGER "PROYECTOQR"."TRG_DELETE_ESTUDIANTE" ENABLE;

-- Trigger TRG_INSERT_ESTUDIANTE
CREATE OR REPLACE EDITIONABLE TRIGGER "PROYECTOQR"."TRG_INSERT_ESTUDIANTE"
AFTER INSERT ON Estudiantes
FOR EACH ROW
BEGIN
  INSERT INTO HistorialEstudiantes (ID_Historial, Accion, Descripcion)
  VALUES (
    seq_historial_estudiantes.NEXTVAL,
    'INSERT',
    'Se registró el estudiante: ' || :NEW.Nombre || ' ' || :NEW.Apellido
  );
END;
/
ALTER TRIGGER "PROYECTOQR"."TRG_INSERT_ESTUDIANTE" ENABLE;

-- Trigger TRG_UPDATE_ESTUDIANTE
CREATE OR REPLACE EDITIONABLE TRIGGER "PROYECTOQR"."TRG_UPDATE_ESTUDIANTE"
AFTER UPDATE ON Estudiantes
FOR EACH ROW
BEGIN
  INSERT INTO HistorialEstudiantes (ID_Historial, Accion, Descripcion)
  VALUES (
    seq_historial_estudiantes.NEXTVAL,
    'UPDATE',
    'Se actualizó el estudiante: ' || :OLD.Nombre || ' ' || :OLD.Apellido
  );
END;
/
ALTER TRIGGER "PROYECTOQR"."TRG_UPDATE_ESTUDIANTE" ENABLE;
