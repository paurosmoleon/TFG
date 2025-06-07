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
    <form onSubmit={createStudent}>
      <label >
        Centro de practicas
        <input type="text" name="centro_practicas" onChange={(e) => setCentroPracticas(e.target.value)} />
      </label>
      <label >
        DNI del estudiante
        <input type="text" name="dni_estudiante" onChange={(e) => setDni(e.target.value)} />
      </label>
      <label >
        Curso de practicas
        <input type="text" name="curso_estudiante" onChange={(e) => setCursoEstudiante(e.target.value)} />
      </label>

      <button type="submit">send</button>
    </form>
  )
}

export default CrearClase