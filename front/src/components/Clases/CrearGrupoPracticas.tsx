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