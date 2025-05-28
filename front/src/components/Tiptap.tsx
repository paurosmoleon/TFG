import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

const TiptapEditor = ({ onSave }: { onSave: (content: string) => void }) => {
  const [currentUser, setCurrentUser] = useState()
  const [teacherS, setTeacher] = useState()

  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Escribe aquí...</p>',
  })

  useEffect(() => {
    const fetch = async () => {
      try {
        const student = await axios.get('https://tfg-production-f839.up.railway.app/users/me', {
          headers: {
            Authorization: localStorage.getItem('tokenUser')
          }
        })
        const current = student.data[0]
        setCurrentUser(current)

        const teacher = await axios.get(`https://tfg-production-f839.up.railway.app/AC/find_by_student/${currentUser['id']}`, {
          headers: {
            Authorization: localStorage.getItem('tokenUser')
          }
        })
        const current2 = teacher.data['Message'][0]['id']
        setTeacher(current2)

      } catch (err) {
        console.log(err)
      }
    }

    fetch()
  }, [])



  const handleSave = async () => {
    const obj = {
      "student_id": currentUser['id'],
      "school_tutor_id": teacherS,
      "content": editor?.getHTML().toString()
    }
    console.log(obj)
    // if (!currentUser || !teacherS) {
    //   console.error('Datos no cargados aún')
    //   return
    // }

    // try {


    //   await axios.post('https://tfg-production-f839.up.railway.app/PD/create', obj, {
    //     headers: {
    //       Authorization: localStorage.getItem('tokenUser')
    //     }
    //   })

    // } catch (err) {
    //   console.log(err)
    // }
  }

  //useCallback(() => {
  //   if (editor) {
  //     const html = editor.getHTML() // También puedes usar editor.getJSON() o editor.getText()
  //     onSave(html) // Lo pasas al componente padre o haces algo con él
  //   }
  // }, [editor, onSave])

  return (
    <div>
      <EditorContent editor={editor} />
      <button onClick={() => handleSave()} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        Guardar contenido
      </button>
    </div>
  )
}

export default TiptapEditor
