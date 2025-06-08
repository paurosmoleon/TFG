// src/components/dashboardComponents/FichaSemanal.tsx
import { useState, useRef, ChangeEvent, FC } from "react";
import SignatureCanvas from "react-signature-canvas";
import { DiaData, FichaSemanalData, UserRole } from "../../types/ficha";
import jsPDF from "jspdf";

const diasSemana: Array<keyof FichaSemanalData["dias"]> = [
  "LUNES",
  "MARTES",
  "MIÉRCOLES",
  "JUEVES",
  "VIERNES",
  "SÁBADO",
  "DOMINGO",
];

// Mapeo de día en español → día en inglés
const mapDiaToEnglish: Record<string, string> = {
  LUNES: "monday",
  MARTES: "tuesday",
  MIÉRCOLES: "wednesday",
  JUEVES: "thursday",
  VIERNES: "friday",
  SÁBADO: "saturday",
  DOMINGO: "sunday",
};

interface Props {
  userRole: UserRole; // "alumno", "profesor" o "tutor"
}

const FichaSemanal: FC<Props> = ({
  userRole,
}) => {
  // Un objeto “vacío” para inicializar cada ficha
  const initialDias: FichaSemanalData["dias"] = {
    LUNES: { actividad: "", horas: "", observaciones: "" },
    MARTES: { actividad: "", horas: "", observaciones: "" },
    MIÉRCOLES: { actividad: "", horas: "", observaciones: "" },
    JUEVES: { actividad: "", horas: "", observaciones: "" },
    VIERNES: { actividad: "", horas: "", observaciones: "" },
    SÁBADO: { actividad: "", horas: "", observaciones: "" },
    DOMINGO: { actividad: "", horas: "", observaciones: "" },
  };

  // Estado: array de fichas. Cada ficha guarda SOLO días y firmas.
  // Los campos de encabezado (centroDocente, profesorResponsable, etc.) se almacenan
  // únicamente en la primera ficha (índice 0).
  const [fichas, setFichas] = useState<
    Array<{
      datos: FichaSemanalData;
      errores: { [K in keyof FichaSemanalData["dias"]]?: { actividad?: string; horas?: string } };
    }>
  >([
    {
      datos: {
        centroDocente: "",
        profesorResponsable: "",
        centroTrabajo: "",
        tutorCentro: "",
        alumno: "",
        cicloFormativo: "",
        grado: "",
        dias: initialDias,
        firmaAlumno: "",
        firmaProfesor: "",
        firmaTutor: "",
      },
      errores: {},
    },
  ]);

  // Refs dinámicos para los canvas de firma, uno por cada ficha y por rol
  const sigPadsAlumnoRef = useRef<SignatureCanvas[]>([]);
  const sigPadsProfesorRef = useRef<SignatureCanvas[]>([]);
  const sigPadsTutorRef = useRef<SignatureCanvas[]>([]);

  // ─── FUNCIÓN PARA ELIMINAR FICHA ───
  const handleEliminarFicha = (index: number) => {
    // No permitimos eliminar la primera ficha
    if (index === 0) return;

    if (window.confirm("¿Estás seguro de que quieres eliminar esta ficha?")) {
      setFichas(prev => {
        const nuevasFichas = [...prev];
        nuevasFichas.splice(index, 1);

        // Actualizamos las referencias de las firmas
        sigPadsAlumnoRef.current.splice(index, 1);
        sigPadsProfesorRef.current.splice(index, 1);
        sigPadsTutorRef.current.splice(index, 1);

        return nuevasFichas;
      });
    }
  };

  // ─── VALIDACIÓN de días para cada ficha (skip SÁBADO y DOMINGO) ───
  const validarFicha = (datos: FichaSemanalData) => {
    const nuevosErrores: typeof fichas[0]["errores"] = {};
    let ok = true;

    diasSemana.forEach((dia) => {
      // SÁBADO y DOMINGO no son obligatorios
      if (dia === "SÁBADO" || dia === "DOMINGO") return;

      const dataDia = datos.dias[dia];
      const errDia: { actividad?: string; horas?: string } = {};

      if (!dataDia.actividad.trim()) {
        errDia.actividad = "Campo obligatorio";
        ok = false;
      }
      if (dataDia.horas === "" || isNaN(Number(dataDia.horas))) {
        errDia.horas = "Campo obligatorio";
        ok = false;
      } else if (typeof dataDia.horas === "number" && dataDia.horas < 0) {
        errDia.horas = "No puede ser negativo";
        ok = false;
      }

      if (Object.keys(errDia).length > 0) {
        nuevosErrores[dia] = errDia;
      }
    });

    return { ok, errores: nuevosErrores };
  };

  // ─── CAMBIOS en los inputs de cabecera (solo para la ficha índice 0) ───
  const handleHeaderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFichas((prev) => {
      const clon = [...prev];
      const ficha0 = { ...clon[0] };
      ficha0.datos = { ...ficha0.datos, [name]: value };
      clon[0] = ficha0;
      return clon;
    });
  };

  // ─── CAMBIOS en cada día para la ficha identificada por “fichaIndex” ───
  const handleDiaChange = (
    fichaIndex: number,
    dia: keyof FichaSemanalData["dias"],
    campo: keyof DiaData,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const rawValue = e.target.value;
    const valor = campo === "horas" ? (rawValue === "" ? "" : Number(rawValue)) : rawValue;

    setFichas((prev) => {
      const clon = [...prev];
      const ficha = { ...clon[fichaIndex] };
      ficha.datos = {
        ...ficha.datos,
        dias: {
          ...ficha.datos.dias,
          [dia]: {
            ...ficha.datos.dias[dia],
            [campo]: valor,
          },
        },
      };
      clon[fichaIndex] = ficha;
      return clon;
    });
  };

  // ─── GUARDAR firma para una ficha e índice dado ───
  const guardarFirma = (
    fichaIndex: number,
    rol: "alumno" | "profesor" | "tutor"
  ) => {
    let refArray: SignatureCanvas[] = [];
    let keyFirma: "firmaAlumno" | "firmaProfesor" | "firmaTutor" = "firmaAlumno";

    if (rol === "alumno") {
      refArray = sigPadsAlumnoRef.current;
      keyFirma = "firmaAlumno";
    } else if (rol === "profesor") {
      refArray = sigPadsProfesorRef.current;
      keyFirma = "firmaProfesor";
    } else {
      refArray = sigPadsTutorRef.current;
      keyFirma = "firmaTutor";
    }

    const sigPad = refArray[fichaIndex];
    if (sigPad && !sigPad.isEmpty()) {
      const dataURL = sigPad.getTrimmedCanvas().toDataURL("image/png");
      setFichas((prev) => {
        const clon = [...prev];
        const ficha = { ...clon[fichaIndex] };
        ficha.datos = { ...ficha.datos, [keyFirma]: dataURL };
        clon[fichaIndex] = ficha;
        return clon;
      });
    }
  };

  // ─── LIMPIAR firma para una ficha e índice dado ───
  const limpiarFirma = (
    fichaIndex: number,
    rol: "alumno" | "profesor" | "tutor"
  ) => {
    let refArray: SignatureCanvas[] = [];
    let keyFirma: "firmaAlumno" | "firmaProfesor" | "firmaTutor" = "firmaAlumno";

    if (rol === "alumno") {
      refArray = sigPadsAlumnoRef.current;
      keyFirma = "firmaAlumno";
    } else if (rol === "profesor") {
      refArray = sigPadsProfesorRef.current;
      keyFirma = "firmaProfesor";
    } else {
      refArray = sigPadsTutorRef.current;
      keyFirma = "firmaTutor";
    }

    const sigPad = refArray[fichaIndex];
    if (sigPad) {
      sigPad.clear();
      setFichas((prev) => {
        const clon = [...prev];
        const ficha = { ...clon[fichaIndex] };
        ficha.datos = { ...ficha.datos, [keyFirma]: "" };
        clon[fichaIndex] = ficha;
        return clon;
      });
    }
  };

  // ─── AGREGAR una nueva ficha vacía al array (no resetea encabezado) ───
  const handleAgregarNuevaFicha = () => {
    setFichas((prev) => [
      ...prev,
      {
        datos: {
          // Para las fichas > 0 los campos de cabecera no se usan, pero deben existir
          centroDocente: "",
          profesorResponsable: "",
          centroTrabajo: "",
          tutorCentro: "",
          alumno: "",
          cicloFormativo: "",
          grado: "",
          dias: initialDias,
          firmaAlumno: "",
          firmaProfesor: "",
          firmaTutor: "",
        },
        errores: {},
      },
    ]);
  };

  // ─── GENERAR PDF con todas las fichas → una página por ficha ───
  const handleDescargarPDF = () => {
    // 1. VALIDAMOS todas las fichas (días) y guardamos errores si los hay
    for (let i = 0; i < fichas.length; i++) {
      const { ok, errores } = validarFicha(fichas[i].datos);
      if (!ok) {
        alert(`La ficha #${i + 1} tiene errores en Actividad/Horas. Revísala antes de descargar.`);
        setFichas((prev) => {
          const clon = [...prev];
          clon[i].errores = errores;
          return clon;
        });
        return;
      }
    }

    // 2. TODAS son válidas → generamos el PDF
    const doc = new jsPDF({ unit: "pt", format: "a4" });

    // Extraemos los campos de encabezado de la primera ficha
    const {
      centroDocente,
      profesorResponsable,
      centroTrabajo,
      tutorCentro,
      alumno,
      cicloFormativo,
      grado,
    } = fichas[0].datos;

    fichas.forEach((fichaObj, index) => {
      const ficha = fichaObj.datos;

      if (index > 0) doc.addPage();

      // 1) TÍTULO
      doc.setFontSize(14);
      doc.text(`Ficha Semanal - Página ${index + 1}`, 40, 40);

      // 2) DATOS GENERALES (siempre tomados de la ficha[0])
      doc.setFontSize(10);
      let yOffset = 60;
      doc.text(`Centro Docente: ${centroDocente}`, 40, yOffset);
      yOffset += 15;
      doc.text(`Profesor Responsable: ${profesorResponsable}`, 40, yOffset);
      yOffset += 15;
      doc.text(`Centro Trabajo: ${centroTrabajo}`, 40, yOffset);
      yOffset += 15;
      doc.text(`Tutor Centro: ${tutorCentro}`, 40, yOffset);
      yOffset += 15;
      doc.text(`Alumno/a: ${alumno}`, 40, yOffset);
      yOffset += 15;
      doc.text(`Ciclo Formativo: ${cicloFormativo}`, 40, yOffset);
      yOffset += 15;
      doc.text(`Grado: ${grado}`, 40, yOffset);
      yOffset += 25;

      // 3) TABLA DE ACTIVIDADES POR DÍA
      doc.setFontSize(10);
      doc.text("Actividades por día:", 40, yOffset);
      yOffset += 15;

      // Encabezados de “tabla”
      doc.setFontSize(9);
      doc.text("Día", 40, yOffset);
      doc.text("Descripción", 100, yOffset);
      doc.text("Horas", 300, yOffset);
      doc.text("Observaciones", 350, yOffset);
      yOffset += 10;

      diasSemana.forEach((diaKey) => {
        const datosDia = ficha.dias[diaKey];
        doc.text(mapDiaToEnglish[diaKey], 40, yOffset);
        doc.text(datosDia.actividad, 100, yOffset, { maxWidth: 180 });
        doc.text(`${datosDia.horas}h`, 300, yOffset);
        doc.text(datosDia.observaciones || "", 350, yOffset, { maxWidth: 180 });
        yOffset += 15;

        // Si llegamos al final de la página, agregamos una nueva
        if (yOffset > 720) {
          doc.addPage();
          yOffset = 40;
        }
      });

      yOffset += 20;

      // 4) FECHAS (fijas en este ejemplo; cámbialas si las necesitas dinámicas)
      const weekStart = "2025-05-19T00:00:00Z";
      const weekEnd = "2025-05-23T00:00:00Z";
      const submissionDate = "2025-05-24T12:00:00Z";
      const deadlineDate = "2025-05-26T23:59:59Z";

      doc.setFontSize(9);
      doc.text(`Semana: ${weekStart}  -  ${weekEnd}`, 40, yOffset);
      yOffset += 15;
      doc.text(`Fecha de envío: ${submissionDate}`, 40, yOffset);
      yOffset += 15;
      doc.text(`Fecha límite: ${deadlineDate}`, 40, yOffset);
      yOffset += 30;

      // 5) FIRMAS (cada ficha tiene sus propias imágenes en base64)
      if (ficha.firmaAlumno) {
        doc.text("Firma Alumno/a:", 40, yOffset);
        doc.addImage(ficha.firmaAlumno, "PNG", 120, yOffset - 10, 100, 40);
        yOffset += 50;
      }
      if (ficha.firmaProfesor) {
        doc.text("Firma Profesor/a:", 40, yOffset);
        doc.addImage(ficha.firmaProfesor, "PNG", 120, yOffset - 10, 100, 40);
        yOffset += 50;
      }
      if (ficha.firmaTutor) {
        doc.text("Firma Tutor/a:", 40, yOffset);
        doc.addImage(ficha.firmaTutor, "PNG", 120, yOffset - 10, 100, 40);
        yOffset += 50;
      }
    });

    doc.save("todas_fichas_semanales.pdf");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10 bg-gray-50">
      <h1 className="text-3xl font-extrabold text-gray-800 text-center">
        Fichas Semanales
      </h1>

      {/* ─── ENCABEZADO COMÚN: solo encima de la primera ficha ─── */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Datos Generales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Centro Docente */}
          <div>
            <label className="block mb-1 font-medium text-gray-700" htmlFor="centroDocente">
              Centro Docente
            </label>
            <input
              type="text"
              id="centroDocente"
              name="centroDocente"
              value={fichas[0].datos.centroDocente}
              onChange={handleHeaderChange}
              className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="Nombre del centro docente"
              required
            />
          </div>

          {/* Profesor/a Responsable */}
          <div>
            <label className="block mb-1 font-medium text-gray-700" htmlFor="profesorResponsable">
              Profesor/a Responsable
            </label>
            <input
              type="text"
              id="profesorResponsable"
              name="profesorResponsable"
              value={fichas[0].datos.profesorResponsable}
              onChange={handleHeaderChange}
              className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="Nombre del profesor responsable"
              required
            />
          </div>

          {/* Centro de Trabajo */}
          <div>
            <label className="block mb-1 font-medium text-gray-700" htmlFor="centroTrabajo">
              Centro de Trabajo
            </label>
            <input
              type="text"
              id="centroTrabajo"
              name="centroTrabajo"
              value={fichas[0].datos.centroTrabajo}
              onChange={handleHeaderChange}
              className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="Nombre del centro de trabajo"
              required
            />
          </div>

          {/* Tutor/a del Centro */}
          <div>
            <label className="block mb-1 font-medium text-gray-700" htmlFor="tutorCentro">
              Tutor/a del Centro
            </label>
            <input
              type="text"
              id="tutorCentro"
              name="tutorCentro"
              value={fichas[0].datos.tutorCentro}
              onChange={handleHeaderChange}
              className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="Nombre del tutor del centro"
              required
            />
          </div>

          {/* Alumno/a */}
          <div>
            <label className="block mb-1 font-medium text-gray-700" htmlFor="alumno">
              Alumno/a
            </label>
            <input
              type="text"
              id="alumno"
              name="alumno"
              value={fichas[0].datos.alumno}
              onChange={handleHeaderChange}
              className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="Nombre del alumno/a"
              required
            />
          </div>

          {/* Grado */}
          <div>
            <label className="block mb-1 font-medium text-gray-700" htmlFor="grado">
              Grado
            </label>
            <input
              type="text"
              id="grado"
              name="grado"
              value={fichas[0].datos.grado}
              onChange={handleHeaderChange}
              className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="Grado académico"
              required
            />
          </div>

          {/* Ciclo Formativo */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <label className="block mb-1 font-medium text-gray-700" htmlFor="cicloFormativo">
              Ciclo Formativo
            </label>
            <input
              type="text"
              id="cicloFormativo"
              name="cicloFormativo"
              value={fichas[0].datos.cicloFormativo}
              onChange={handleHeaderChange}
              className="w-full border border-gray-400 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="Nombre del ciclo formativo"
              required
            />
          </div>
        </div>
      </div>

      {/* ─── FORMULARIOS DE CADA FICHA (solo tabla de actividades + firmas) ─── */}
      {fichas.map((fichaObj, idx) => {
        const { datos, errores } = fichaObj;

        return (
          <div
            key={idx}
            className="bg-white rounded-lg p-6 shadow-sm space-y-6 border border-gray-400 relative"
          >
            {/* Botón de eliminar (solo para fichas adicionales) */}
            {idx > 0 && (
              <button
                type="button"
                onClick={() => handleEliminarFicha(idx)}
                className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
                title="Eliminar ficha"
              >
                ❌
              </button>
            )}

            <h2 className="text-lg font-semibold text-indigo-700">
              Ficha #{idx + 1}
            </h2>

            {/* Tabla de actividades por día */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-100">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Día
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Actividad
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Horas (h)
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Observaciones
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {diasSemana.map((dia) => {
                    const datosDia = datos.dias[dia];
                    const err = errores[dia] || {};

                    // Si es sábado o domingo, no aplicamos required
                    const esFinSemana = dia === "SÁBADO" || dia === "DOMINGO";

                    return (
                      <tr key={dia} className="hover:bg-gray-50">
                        <td className="px-3 py-2 whitespace-nowrap font-semibold text-gray-600">
                          {dia}
                        </td>

                        {/* Actividad */}
                        <td className="px-3 py-2">
                          <textarea
                            rows={2}
                            className={`w-full border ${err.actividad ? "border-red-400" : "border-gray-400"
                              } rounded-lg px-2 py-1 focus:outline-none focus:ring-2 ${err.actividad
                                ? "focus:ring-red-300"
                                : "focus:ring-indigo-200"
                              }`}
                            value={datosDia.actividad}
                            onChange={(e) => handleDiaChange(idx, dia, "actividad", e)}
                            placeholder={esFinSemana ? "Opcional..." : "Describe la actividad..."}
                            required={!esFinSemana}
                          />
                          {err.actividad && (
                            <p className="text-red-500 text-sm mt-1">{err.actividad}</p>
                          )}
                        </td>

                        {/* Horas */}
                        <td className="px-3 py-2">
                          <input
                            type="number"
                            min="0"
                            step="0.5"
                            className={`w-full border ${err.horas ? "border-red-400" : "border-gray-400"
                              } rounded-lg px-2 py-1 focus:outline-none focus:ring-2 ${err.horas
                                ? "focus:ring-red-300"
                                : "focus:ring-indigo-200"
                              }`}
                            value={datosDia.horas}
                            onChange={(e) => handleDiaChange(idx, dia, "horas", e)}
                            placeholder={esFinSemana ? "Opcional" : "0.0"}
                            required={!esFinSemana}
                          />
                          {err.horas && (
                            <p className="text-red-500 text-sm mt-1">{err.horas}</p>
                          )}
                        </td>

                        {/* Observaciones */}
                        <td className="px-3 py-2">
                          <textarea
                            rows={2}
                            className="w-full border border-gray-400 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                            value={datosDia.observaciones}
                            onChange={(e) =>
                              handleDiaChange(idx, dia, "observaciones", e)
                            }
                            placeholder="Opcional..."
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Sección de firmas para esta ficha */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              {/* Firma Alumno/a */}
              <div className="border border-gray-400 rounded-lg p-4 flex flex-col items-center bg-gray-50">
                <h3 className="font-medium text-gray-700 mb-2">Firma Alumno/a</h3>
                {datos.firmaAlumno ? (
                  <img
                    src={datos.firmaAlumno}
                    alt="Firma alumno"
                    className="border border-gray-400 w-full h-24 object-contain rounded"
                  />
                ) : userRole === "alumno" ? (
                  <>
                    <SignatureCanvas
                      penColor="black"
                      canvasProps={{ className: "border border-gray-400 w-full h-24 rounded" }}
                      ref={(ref) => {
                        if (!sigPadsAlumnoRef.current[idx]) {
                          sigPadsAlumnoRef.current[idx] = ref as SignatureCanvas;
                        }
                      }}
                    />
                    <div className="mt-3 flex space-x-2">
                      <button
                        type="button"
                        onClick={() => limpiarFirma(idx, "alumno")}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded shadow-sm hover:bg-gray-200"
                      >
                        Limpiar
                      </button>
                      <button
                        type="button"
                        onClick={() => guardarFirma(idx, "alumno")}
                        className="bg-indigo-500 text-white px-3 py-1 rounded shadow-sm hover:bg-indigo-600"
                      >
                        Guardar Firma
                      </button>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-400 text-sm text-center">Solo rol “alumno”</p>
                )}
              </div>

              {/* Firma Profesor/a */}
              <div className="border border-gray-400 rounded-lg p-4 flex flex-col items-center bg-gray-50">
                <h3 className="font-medium text-gray-700 mb-2">Firma Profesor/a</h3>
                {datos.firmaProfesor ? (
                  <img
                    src={datos.firmaProfesor}
                    alt="Firma profesor"
                    className="border border-gray-400 w-full h-24 object-contain rounded"
                  />
                ) : userRole === "profesor" ? (
                  <>
                    <SignatureCanvas
                      penColor="black"
                      canvasProps={{ className: "border border-gray-400 w-full h-24 rounded" }}
                      ref={(ref) => {
                        if (!sigPadsProfesorRef.current[idx]) {
                          sigPadsProfesorRef.current[idx] = ref as SignatureCanvas;
                        }
                      }}
                    />
                    <div className="mt-3 flex space-x-2">
                      <button
                        type="button"
                        onClick={() => limpiarFirma(idx, "profesor")}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded shadow-sm hover:bg-gray-200"
                      >
                        Limpiar
                      </button>
                      <button
                        type="button"
                        onClick={() => guardarFirma(idx, "profesor")}
                        className="bg-indigo-500 text-white px-3 py-1 rounded shadow-sm hover:bg-indigo-600"
                      >
                        Guardar Firma
                      </button>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-400 text-sm text-center">Solo rol “profesor”</p>
                )}
              </div>

              {/* Firma Tutor/a */}
              <div className="border border-gray-400 rounded-lg p-4 flex flex-col items-center bg-gray-50">
                <h3 className="font-medium text-gray-700 mb-2">Firma Tutor/a</h3>
                {datos.firmaTutor ? (
                  <img
                    src={datos.firmaTutor}
                    alt="Firma tutor"
                    className="border border-gray-400 w-full h-24 object-contain rounded"
                  />
                ) : userRole === "tutor" ? (
                  <>
                    <SignatureCanvas
                      penColor="black"
                      canvasProps={{ className: "border border-gray-400 w-full h-24 rounded" }}
                      ref={(ref) => {
                        if (!sigPadsTutorRef.current[idx]) {
                          sigPadsTutorRef.current[idx] = ref as SignatureCanvas;
                        }
                      }}
                    />
                    <div className="mt-3 flex space-x-2">
                      <button
                        type="button"
                        onClick={() => limpiarFirma(idx, "tutor")}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded shadow-sm hover:bg-gray-200"
                      >
                        Limpiar
                      </button>
                      <button
                        type="button"
                        onClick={() => guardarFirma(idx, "tutor")}
                        className="bg-indigo-500 text-white px-3 py-1 rounded shadow-sm hover:bg-indigo-600"
                      >
                        Guardar Firma
                      </button>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-400 text-sm text-center">Solo rol “tutor”</p>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* ─── Botones de acción ─── */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <button
          onClick={handleAgregarNuevaFicha}
          className="w-full sm:w-auto bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition"
        >
          Agregar nueva ficha
        </button>
        <button
          onClick={handleDescargarPDF}
          className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Descargar fichas (PDF)
        </button>

      </div>
    </div>
  );
};

export default FichaSemanal;