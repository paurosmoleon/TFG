import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect } from "react";

const TiptapEditor = ({
  onSave,
  content = "",
}: {
  onSave: (content: string) => void;
  content?: string;
}) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content || "<h1>Semana del ... al ... de ...</h1><h2>Día:</h2><p>Escribe aquí el contenido de tu memoria de prácticas...</p>",
  });

  useEffect(() => {
    if (!editor) return;

    if (content && editor.getHTML() !== content) {
      editor.commands.setContent(content);
    }

    const updateHandler = () => {
      const htmlContent = editor.getHTML();
      onSave(htmlContent);
    };

    editor.on("update", updateHandler);

    onSave(editor.getHTML());

    return () => {
      editor.off("update", updateHandler);
    };
  }, [editor, onSave, content]);


  return <EditorContent editor={editor} />;
};

export default TiptapEditor;
