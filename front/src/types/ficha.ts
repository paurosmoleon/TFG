// src/types/ficha.ts
export type UserRole = "alumno" | "profesor" | "tutor" | "otro";

export interface DiaData {
  actividad: string;
  horas: number | "";       // Permitimos "" mientras no se introduzca número
  observaciones: string;
}

export interface FichaSemanalData {
  centroDocente: string;
  profesorResponsable: string;
  centroTrabajo: string;
  tutorCentro: string;
  alumno: string;
  cicloFormativo: string;
  grado: string;
  dias: Record<
    | "LUNES"
    | "MARTES"
    | "MIÉRCOLES"
    | "JUEVES"
    | "VIERNES"
    | "SÁBADO"
    | "DOMINGO",
    DiaData
  >;
  firmaAlumno: string;    // base64 de la imagen de la firma o ""
  firmaProfesor: string;
  firmaTutor: string;
}
