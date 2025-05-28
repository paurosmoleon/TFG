import { useEffect, useState } from 'react';
import TiptapEditor from '../Tiptap';
import axios from 'axios';
const memoriaPracticas = () => {
  const [currentUser, setCurrentUser] = useState()

  const handleSaveContent = (content: string) => {
    console.log('Contenido guardado:', content);
  };


  useEffect(() => {
    const currentusers = async () => {
      try {
        const student = await axios.get('https://tfg-production-f839.up.railway.app/users/me', {
          headers: {
            Authorization: localStorage.getItem('tokenUser')
          }
        })
        const current = student.data[0]['id']

        setCurrentUser(current)
      } catch (err) {
        console.log(err)
      }
    }
    currentusers()
  }, [])


  function downloadPDF() {
    axios.get(`https://tfg-production-f839.up.railway.app/PD/pdf/${currentUser}`, {
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
      <TiptapEditor onSave={handleSaveContent} id_student={currentUser} />
      <button onClick={downloadPDF} className='cursor-pointer mx-auto w-full' >asdasd </button>
    </div>
  );
};

export default memoriaPracticas;
