import axios from "axios"
import { FormEvent, useState } from "react"

const CrearGrupoPracticas = () => {
  const [dniTutor, setDniTutor] = useState('')
  const [dniAlumno, setDniAlumno] = useState('')
  const [centroPracticas, setCentroPracticas] = useState('')


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
        "student_id": 0,
        "company_tutor_id": 0,
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
        DNI del tutor de practicas
        <input type="text" name="dni_estudiante" onChange={(e) => setDniTutor(e.target.value)} />
      </label>
      <label >
        DNI del estudiante
        <input type="text" name="curso_estudiante" onChange={(e) => setDniAlumno(e.target.value)} />
      </label>
      <label >
        Centro de practicas
        <input type="text" name="curso_estudiante" onChange={(e) => setCentroPracticas(e.target.value)} />
      </label>
      <button type="submit">send</button>
    </form>
  )
}

export default CrearGrupoPracticas