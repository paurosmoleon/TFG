import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useRef } from "react";

const isHTML = (str: string) => /<\/?[a-z][\s\S]*>/i.test(str);

const convertPlainTextToHTML = (text: string): string => {
  return text
    .split("\n")
    .map((line) => `<p>${line.trim() || "<br>"}</p>`)
    .join("");
};

const TiptapEditor = ({
  onSave,
  content = "",
}: {
  onSave: (content: string) => void;
  content?: string;
}) => {
  const wasUpdatedByEditor = useRef(false);

  const initialContent = isHTML(content)
    ? content
    : convertPlainTextToHTML(content);

  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
  });

  useEffect(() => {
    if (!editor) return;

    const updateHandler = () => {
      wasUpdatedByEditor.current = true;
      onSave(editor.getHTML());
      setTimeout(() => {
        wasUpdatedByEditor.current = false;
      }, 0);
    };

    editor.on("update", updateHandler);

    return () => {
      editor.off("update", updateHandler);
    };
  }, [editor, onSave]);

  useEffect(() => {
    if (!editor) return;

    if (!wasUpdatedByEditor.current && content) {
      const htmlContent = isHTML(content)
        ? content
        : convertPlainTextToHTML(content);

      if (editor.getHTML() !== htmlContent) {
        editor.commands.setContent(htmlContent, false);
      }
    }
  }, [content, editor]);

  return <EditorContent editor={editor} />;
};

export default TiptapEditor;
