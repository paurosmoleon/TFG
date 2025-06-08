import axios from "axios"
import { FormEvent, useState } from "react"

const CrearClase = () => {
  const [dni, setDni] = useState('')
  const [centroPracticas, setCentroPracticas] = useState('')
  const [cursoEstudiante, setCursoEstudiante] = useState('')

  const getStudent = async () => {
    try {
      const student: any = await axios.get(`https://tfg-production-f839.up.railway.app/users/get/${dni}`, {
        headers: {
          Authorization: localStorage.getItem('tokenUser') || '',
        },
      })
      return student.data[0].id
    } catch (err) {
      console.log(err)
    }
  }

  const createStudent = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const currentTeacher: any = await axios.get('https://tfg-production-f839.up.railway.app/users/me', {
        headers: {
          Authorization: localStorage.getItem('tokenUser') || '',
        },
      })
      const student_id = await getStudent()
      let obj = {
        "academic_center_name": centroPracticas,
        "student_id": student_id,
        "teacher_id": currentTeacher.data[0].id,
        "course": cursoEstudiante
      }

      axios.post('https://tfg-production-f839.up.railway.app/AC/create', obj, {
        headers: {
          Authorization: localStorage.getItem('tokenUser') || '',
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form
        onSubmit={createStudent}
        className="bg-white border border-gray-300 rounded-2xl shadow-lg p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-black text-center">Crear Clase</h2>

        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Centro de prácticas
          </label>
          <input
            type="text"
            name="centro_practicas"
            onChange={(e) => setCentroPracticas(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-1">
            DNI del estudiante
          </label>
          <input
            type="text"
            name="dni_estudiante"
            onChange={(e) => setDni(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-1">
            Curso de prácticas
          </label>
          <input
            type="text"
            name="curso_estudiante"
            onChange={(e) => setCursoEstudiante(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:brightness-110 transition duration-200 shadow"
        >
          Guardar Clase
        </button>
      </form>
    </div>
  )
}

export default CrearClase
