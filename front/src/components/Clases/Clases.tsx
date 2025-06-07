import { Link } from 'react-router-dom';
const Clases = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link to="/sign-up" className="flex items-center gap-2">
        Añadir alumno o tutor laboral
      </Link>
      <Link to="/add-to-class" className="flex items-center gap-2">
        Añadir Clase
      </Link>
    </div>
  )
}

export default Clases