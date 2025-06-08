import axios from "axios"
import { FormEvent, useState } from "react"

const CrearGrupoPracticas = () => {
  const [dniTutor, setDniTutor] = useState('')
  const [dniAlumno, setDniAlumno] = useState('')
  const [centroPracticas, setCentroPracticas] = useState('')

  const getStudent = async () => {
    try {
      const student: any = await axios.get(`https://tfg-production-f839.up.railway.app/users/get/${dniAlumno}`, {
        headers: {
          Authorization: localStorage.getItem('tokenUser') || '',
        },
      })
      return student.data[0].id
    } catch (err) {
      console.log(err)
    }
  }

  const getCompanyTutor = async () => {
    try {
      const tutor: any = await axios.get(`https://tfg-production-f839.up.railway.app/users/get/${dniTutor}`, {
        headers: {
          Authorization: localStorage.getItem('tokenUser') || '',
        },
      })
      return tutor.data[0].id
    } catch (err) {
      console.log(err)
    }
  }

  const createStudent = async (e: FormEvent) => {
    e.preventDefault()
    try {
      let alumno = await getStudent()
      let tutor = await getCompanyTutor()
      let obj = {
        "practices_center_name": centroPracticas,
        "student_id": alumno,
        "company_tutor_id": tutor
      }

      axios.post('https://tfg-production-f839.up.railway.app/PG/create_practices_group', obj, {
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
        <h2 className="text-2xl font-semibold text-black text-center">Crear Grupo de Prácticas</h2>

        <div>
          <label className="block text-sm font-medium text-black mb-1">
            DNI del tutor de prácticas
          </label>
          <input
            type="text"
            name="dni_tutor"
            onChange={(e) => setDniTutor(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-1">
            DNI del estudiante
          </label>
          <input
            type="text"
            name="dni_alumno"
            onChange={(e) => setDniAlumno(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

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

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:brightness-110 transition duration-200 shadow"
        >
          Guardar Grupo
        </button>
      </form>
    </div>
  )
}

export default CrearGrupoPracticas
