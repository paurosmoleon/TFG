import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useCallback } from 'react'
import axios from 'axios'

const TiptapEditor = ({ onSave, id_student }: { onSave: (content: string) => void, id_student: any }) => {


  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p class="text-center">Escribe aquí...</p>',
  })



  const fetch = async () => {
    try {

      const teacherr: any = await axios.get(`https://tfg-production-f839.up.railway.app/AC/find_by_student/${id_student}`, {
        headers: {
          Authorization: localStorage.getItem('tokenUser')
        }

      })
      const current2 = teacherr.data['Message'][0]


      return current2['teacher_id']


    } catch (err) {
      console.log(err)
    }
  }







  const handleSave = async () => {

    try {
      const obj = {
        "student_id": id_student,
        "school_tutor_id": await fetch(),
        "content": editor?.getHTML().toString()
      }

      await axios.post('https://tfg-production-f839.up.railway.app/PD/create', obj, {
        headers: {
          Authorization: localStorage.getItem('tokenUser')
        }
      })

    } catch (err) {
      console.log(err)
    }
  }

  useCallback(() => {
    if (editor) {
      const html = editor.getHTML() // También puedes usar editor.getJSON() o editor.getText()
      onSave(html) // Lo pasas al componente padre o haces algo con él
    }
  }, [editor, onSave])

  return (
    <div>
      <EditorContent editor={editor} />
      <div className="flex justify-center space-x-4 mt-4">
      <button onClick={() => handleSave()} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        Guardar contenido
      </button>
      </div>
    </div>
  )
}

export default TiptapEditor
