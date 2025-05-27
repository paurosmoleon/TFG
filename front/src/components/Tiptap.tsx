import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useCallback } from 'react'

const TiptapEditor = ({ onSave }: { onSave: (content: string) => void }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Escribe aquí...</p>',
  })

  const handleSave = useCallback(() => {
    if (editor) {
      const html = editor.getHTML() // También puedes usar editor.getJSON() o editor.getText()
      onSave(html) // Lo pasas al componente padre o haces algo con él
    }
  }, [editor, onSave])

  return (
    <div>
      <EditorContent editor={editor} />
      <button onClick={handleSave} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        Guardar contenido
      </button>
    </div>
  )
}

export default TiptapEditor
