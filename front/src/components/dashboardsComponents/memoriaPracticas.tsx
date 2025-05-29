import { useEffect, useState } from 'react';
import TiptapEditor from '../Tiptap';
import axios from 'axios';
const MemoriaPracticas = () => {
  const [currentUser, setCurrentUser] = useState()

  const handleSaveContent = (content: string) => {
    console.log('Contenido guardado:', content);
  };


  useEffect(() => {
    const currentusers = async () => {
      try {
        const student: any = await axios.get('https://tfg-production-f839.up.railway.app/users/me', {
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
      .then((response: any) => {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Memoria de prácticas.pdf';
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
    <div className="w-1/2 mx-auto mt-4 border border-gray-300 bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-xl text-center py-2 border-b w-full ">Memoria Practicas</h1>

      <TiptapEditor onSave={handleSaveContent} id_student={currentUser} />
      <div className="flex justify-center space-x-4 mt-4">
        <button onClick={downloadPDF} className='mt-4 px-4 mb-3 py-2 rounded border text-block border-black bg-white hover:bg-black hover:border-white hover:text-white transition-all duration-200   cursor-pointer' >Descargar como PDF</button>
      </div>
    </div>
  );
};

export default MemoriaPracticas;
