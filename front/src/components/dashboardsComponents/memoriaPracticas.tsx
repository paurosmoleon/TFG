import TiptapEditor from '../Tiptap';
const memoriaPracticas = () => {
  const handleSaveContent = (content: string) => {
    console.log('Contenido guardado:', content);
  };
  return (
    <div>
      <h1>Memoria Practicas</h1>
      <TiptapEditor onSave={handleSaveContent} />
    </div>
  );
};

export default memoriaPracticas;
