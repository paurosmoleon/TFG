// src/components/dashboardComponents/FichaSemanal.tsx
import { useState, useRef, ChangeEvent, FormEvent, FC } from "react";
import SignatureCanvas from "react-signature-canvas";
import { DiaData, FichaSemanalData, UserRole } from "../../types/ficha";

const diasSemana: Array<keyof FichaSemanalData["dias"]> = [
  "LUNES",
  "MARTES",
  "MIÉRCOLES",
  "JUEVES",
  "VIERNES",
  "SÁBADO",
  "DOMINGO",
];

interface Props {
  userRole: UserRole; // Ej.: "alumno", "profesor" o "tutor"
}

const FichaSemanal: FC<Props> = ({ userRole }) => {
  // Estado inicial para los días
  const initialDias: FichaSemanalData["dias"] = {
    LUNES:     { actividad: "", horas: "", observaciones: "" },
    MARTES:    { actividad: "", horas: "", observaciones: "" },
    MIÉRCOLES: { actividad: "", horas: "", observaciones: "" },
    JUEVES:    { actividad: "", horas: "", observaciones: "" },
    VIERNES:   { actividad: "", horas: "", observaciones: "" },
    SÁBADO:    { actividad: "", horas: "", observaciones: "" },
    DOMINGO:   { actividad: "", horas: "", observaciones: "" },
  };

  const [formData, setFormData] = useState<FichaSemanalData>({
    centroDocente:      "",
    profesorResponsable: "",
    centroTrabajo:      "",
    tutorCentro:        "",
    alumno:             "",
    cicloFormativo:     "",
    grado:              "",
    dias:               initialDias,
    firmaAlumno:        "",
    firmaProfesor:      "",
    firmaTutor:         "",
  });

  // Errores de validación por día
  const [errores, setErrores] = useState<{
    [K in keyof FichaSemanalData["dias"]]?: { actividad?: string; horas?: string };
  }>({});

  // Refs para los canvas de firma
  const sigPadAlumno   = useRef<SignatureCanvas>(null);
  const sigPadProfesor = useRef<SignatureCanvas>(null);
  const sigPadTutor    = useRef<SignatureCanvas>(null);

  // Maneja cambios de los inputs de cabecera (sin fechas, ya que las quitamos)
  const handleHeaderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Maneja cambios en cada día (actividad, horas, observaciones)
  const handleDiaChange = (
    dia: keyof FichaSemanalData["dias"],
    campo: keyof DiaData,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const rawValue = e.target.value;
    const valor = campo === "horas" ? (rawValue === "" ? "" : Number(rawValue)) : rawValue;

    setFormData((prev) => ({
      ...prev,
      dias: {
        ...prev.dias,
        [dia]: {
          ...prev.dias[dia],
          [campo]: valor,
        },
      },
    }));
  };

  // Validación: cada día debe tener "actividad" y "horas"
  const validar = (): boolean => {
    const nuevosErrores: typeof errores = {};
    let ok = true;

    diasSemana.forEach((dia) => {
      const dataDia = formData.dias[dia];
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

    setErrores(nuevosErrores);
    return ok;
  };

  // Funciones para guardar las firmas (se convierten a base64)
  const guardarFirmaAlumno = () => {
    if (sigPadAlumno.current && !sigPadAlumno.current.isEmpty()) {
      const dataURL = sigPadAlumno.current.getTrimmedCanvas().toDataURL("image/png");
      setFormData((prev) => ({ ...prev, firmaAlumno: dataURL }));
    }
  };
  const guardarFirmaProfesor = () => {
    if (sigPadProfesor.current && !sigPadProfesor.current.isEmpty()) {
      const dataURL = sigPadProfesor.current.getTrimmedCanvas().toDataURL("image/png");
      setFormData((prev) => ({ ...prev, firmaProfesor: dataURL }));
    }
  };
  const guardarFirmaTutor = () => {
    if (sigPadTutor.current && !sigPadTutor.current.isEmpty()) {
      const dataURL = sigPadTutor.current.getTrimmedCanvas().toDataURL("image/png");
      setFormData((prev) => ({ ...prev, firmaTutor: dataURL }));
    }
  };

  // Opcional: permitir limpiar el canvas para rehacer la firma
  const limpiarFirmaAlumno = () => {
    sigPadAlumno.current?.clear();
    setFormData((prev) => ({ ...prev, firmaAlumno: "" }));
  };
  const limpiarFirmaProfesor = () => {
    sigPadProfesor.current?.clear();
    setFormData((prev) => ({ ...prev, firmaProfesor: "" }));
  };
  const limpiarFirmaTutor = () => {
    sigPadTutor.current?.clear();
    setFormData((prev) => ({ ...prev, firmaTutor: "" }));
  };

  // Envía el formulario al backend (en Python)
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validar()) {
      return;
    }

    try {
      const respuesta = await fetch("/api/fichas/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!respuesta.ok) {
        const errorJson = await respuesta.json();
        console.error("Error guardando ficha:", errorJson);
        alert("Ha ocurrido un error al guardar la ficha. Revisa la consola.");
        return;
      }

      alert("¡Ficha guardada con éxito!");
      // Aquí podrías limpiar el formulario o redirigir según tu flujo
    } catch (err) {
      console.error("Error de red o inesperado:", err);
      alert("Error de conexión. Intenta nuevamente más tarde.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Ficha Semanal</h1>

      {/* ─── Cabecera de datos generales (ya sin fechas) ─── */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-1 font-medium" htmlFor="centroDocente">
            Centro Docente
          </label>
          <input
            type="text"
            id="centroDocente"
            name="centroDocente"
            value={formData.centroDocente}
            onChange={handleHeaderChange}
            className="w-full border rounded px-2 py-1"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="profesorResponsable">
            Profesor/a Responsable Seguimiento
          </label>
          <input
            type="text"
            id="profesorResponsable"
            name="profesorResponsable"
            value={formData.profesorResponsable}
            onChange={handleHeaderChange}
            className="w-full border rounded px-2 py-1"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="centroTrabajo">
            Centro de Trabajo Colaborador
          </label>
          <input
            type="text"
            id="centroTrabajo"
            name="centroTrabajo"
            value={formData.centroTrabajo}
            onChange={handleHeaderChange}
            className="w-full border rounded px-2 py-1"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="tutorCentro">
            Tutor/a del Centro de Trabajo
          </label>
          <input
            type="text"
            id="tutorCentro"
            name="tutorCentro"
            value={formData.tutorCentro}
            onChange={handleHeaderChange}
            className="w-full border rounded px-2 py-1"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="alumno">
            Alumno/a
          </label>
          <input
            type="text"
            id="alumno"
            name="alumno"
            value={formData.alumno}
            onChange={handleHeaderChange}
            className="w-full border rounded px-2 py-1"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium" htmlFor="cicloFormativo">
            Ciclo Formativo
          </label>
          <input
            type="text"
            id="cicloFormativo"
            name="cicloFormativo"
            value={formData.cicloFormativo}
            onChange={handleHeaderChange}
            className="w-full border rounded px-2 py-1"
            required
          />
        </div>
        <div className="col-span-2">
          <label className="block mb-1 font-medium" htmlFor="grado">
            Grado
          </label>
          <input
            type="text"
            id="grado"
            name="grado"
            value={formData.grado}
            onChange={handleHeaderChange}
            className="w-full border rounded px-2 py-1"
            required
          />
        </div>
      </div>

      {/* ─── Tabla de actividades por día ─── */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-2 py-1 text-left">Día</th>
              <th className="border px-2 py-1 text-left">Actividad / Puesto Formativo</th>
              <th className="border px-2 py-1 text-left">Horas (h)</th>
              <th className="border px-2 py-1 text-left">Observaciones (opcional)</th>
            </tr>
          </thead>
          <tbody>
            {diasSemana.map((dia) => {
              const datosDia = formData.dias[dia];
              const err = errores[dia] || {};

              return (
                <tr key={dia} className="hover:bg-gray-50">
                  <td className="border px-2 py-1 font-medium">{dia}</td>

                  <td className="border px-2 py-1">
                    <textarea
                      rows={2}
                      className={`w-full border rounded px-1 py-1 ${
                        err.actividad ? "border-red-500" : ""
                      }`}
                      value={datosDia.actividad}
                      onChange={(e) => handleDiaChange(dia, "actividad", e)}
                      required
                    />
                    {err.actividad && (
                      <p className="text-red-600 text-sm mt-1">
                        {err.actividad}
                      </p>
                    )}
                  </td>

                  <td className="border px-2 py-1">
                    <input
                      type="number"
                      min="0"
                      step="0.5"
                      className={`w-full border rounded px-1 py-1 ${
                        err.horas ? "border-red-500" : ""
                      }`}
                      value={datosDia.horas}
                      onChange={(e) => handleDiaChange(dia, "horas", e)}
                      required
                    />
                    {err.horas && (
                      <p className="text-red-600 text-sm mt-1">{err.horas}</p>
                    )}
                  </td>

                  <td className="border px-2 py-1">
                    <textarea
                      rows={2}
                      className="w-full border rounded px-1 py-1"
                      value={datosDia.observaciones}
                      onChange={(e) => handleDiaChange(dia, "observaciones", e)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ─── Sección de firmas con react-signature-canvas ─── */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {/* Firma Alumno/a */}
        <div className="border p-4 rounded flex flex-col items-center">
          <h2 className="font-semibold mb-2">Firma Alumno/a</h2>
          {formData.firmaAlumno ? (
            <img
              src={formData.firmaAlumno}
              alt="Firma alumno"
              className="border w-full h-24 object-contain"
            />
          ) : userRole === "alumno" ? (
            <>
              <SignatureCanvas
                penColor="black"
                canvasProps={{ className: "border w-full h-24" }}
                ref={sigPadAlumno}
              />
              <div className="mt-2 flex space-x-2">
                <button
                  type="button"
                  onClick={limpiarFirmaAlumno}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
                >
                  Limpiar
                </button>
                <button
                  type="button"
                  onClick={guardarFirmaAlumno}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Guardar Firma
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-center">
              Solo accesible para rol “alumno”
            </p>
          )}
        </div>

        {/* Firma Profesor/a */}
        <div className="border p-4 rounded flex flex-col items-center">
          <h2 className="font-semibold mb-2">Firma Profesor/a</h2>
          {formData.firmaProfesor ? (
            <img
              src={formData.firmaProfesor}
              alt="Firma profesor"
              className="border w-full h-24 object-contain"
            />
          ) : userRole === "profesor" ? (
            <>
              <SignatureCanvas
                penColor="black"
                canvasProps={{ className: "border w-full h-24" }}
                ref={sigPadProfesor}
              />
              <div className="mt-2 flex space-x-2">
                <button
                  type="button"
                  onClick={limpiarFirmaProfesor}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
                >
                  Limpiar
                </button>
                <button
                  type="button"
                  onClick={guardarFirmaProfesor}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Guardar Firma
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-center">
              Solo accesible para rol “profesor”
            </p>
          )}
        </div>

        {/* Firma Tutor/a */}
        <div className="border p-4 rounded flex flex-col items-center">
          <h2 className="font-semibold mb-2">Firma Tutor/a</h2>
          {formData.firmaTutor ? (
            <img
              src={formData.firmaTutor}
              alt="Firma tutor"
              className="border w-full h-24 object-contain"
            />
          ) : userRole === "tutor" ? (
            <>
              <SignatureCanvas
                penColor="black"
                canvasProps={{ className: "border w-full h-24" }}
                ref={sigPadTutor}
              />
              <div className="mt-2 flex space-x-2">
                <button
                  type="button"
                  onClick={limpiarFirmaTutor}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300"
                >
                  Limpiar
                </button>
                <button
                  type="button"
                  onClick={guardarFirmaTutor}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Guardar Firma
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-500 text-center">
              Solo accesible para rol “tutor”
            </p>
          )}
        </div>
      </div>

      {/* ─── Botón final de envío ─── */}
      <div className="mt-8 text-right">
        <button
          type="submit"
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
        >
          Guardar Ficha Semanal
        </button>
      </div>
    </form>
  );
};

export default FichaSemanal;
