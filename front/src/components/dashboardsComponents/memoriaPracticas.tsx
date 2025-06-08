import { useState, useEffect } from "react";
import TiptapEditor from "../Tiptap";
import { Toaster, toast } from 'react-hot-toast';

const MemoriaPracticas = () => {
  const [editorText, setEditorText] = useState<string>("");

  useEffect(() => {
    const savedContent = localStorage.getItem("memoriaPracticasContent");
    if (savedContent) {
      setEditorText(savedContent);
    }
  }, []);

  const handleSaveContent = (content: string) => {
    setEditorText(content);
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("memoriaPracticasContent", editorText);
    toast.success("Contenido guardado");
  };

  const downloadPDF = () => {
    import("jspdf").then(({ default: jsPDF }) => {
      const doc = new jsPDF();
      doc.setFontSize(16);
      doc.text("Memoria de prácticas", 10, 10);

      function htmlToPlainText(html: string): string {
        const tmp = document.createElement("div");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
      }

      const plainText = htmlToPlainText(editorText || "No hay contenido para mostrar.");
      const splitText = doc.splitTextToSize(plainText, 180);
      doc.setFontSize(12);
      doc.text(splitText, 10, 20);

      doc.save("MemoriaPracticas.pdf");
    });
  };


  return (
    <div className="w-full sm:w-3/4  md:w-2/3 lg:w-1/2 mx-auto mt-4 border border-gray-300 bg-white p-6 rounded-lg shadow-lg">
      <Toaster position="top-center" reverseOrder={false} />

      <h1 className="text-xl text-center py-2 border-b w-full">Memoria de Prácticas</h1>

      <TiptapEditor onSave={handleSaveContent} content={editorText} />

      <div className="flex justify-center space-x-4 mt-4">
        <button
          onClick={saveToLocalStorage}
          className="mt-4 px-4 py-2 rounded border border-green-600 text-green-700 hover:bg-green-700 hover:text-white transition duration-200 cursor-pointer"
        >
          Guardar
        </button>

        <button
          onClick={downloadPDF}
          className="mt-4 px-4 py-2 rounded border border-black text-black hover:bg-black hover:text-white transition duration-200 cursor-pointer"
        >
          Descargar como PDF
        </button>
      </div>
    </div>
  );
};

export default MemoriaPracticas;
