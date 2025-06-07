import { Link } from 'react-router-dom';
const Clases = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link to="/sign-up" className="flex items-center gap-2">
        Crear Alumno/ Tutor
      </Link>
      <Link to="/create-class" className="flex items-center gap-2">
        Crear Clase
      </Link>
      <Link to="/add-to-class" className="flex items-center gap-2">
        Crear Grupo de prácticas
      </Link>
    </div>
  )
}

export default Clases