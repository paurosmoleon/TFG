import { useEffect } from 'react';
import TiptapEditor from '../Tiptap';
import axios from 'axios';
const memoriaPracticas = () => {
  const handleSaveContent = (content: string) => {
    console.log('Contenido guardado:', content);
  };


  function downloadPDF() {
    axios.get('https://tfg-production-f839.up.railway.app/PD/pdf/2', {
      responseType: 'blob',  // ¡Importante!
      headers: {
        Authorization: localStorage.getItem('tokenUser')
      }
    })
      .then((response) => {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'reporte.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error al descargar el PDF", error);
      });
  }



  return (
    <div>
      <h1>Memoria Practicas</h1>
      <TiptapEditor onSave={handleSaveContent} />
      <button onClick={downloadPDF} className='cursor-pointer'>asdasd </button>
    </div>
  );
};

export default memoriaPracticas;
