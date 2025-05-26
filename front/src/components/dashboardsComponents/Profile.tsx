import React, { useState } from 'react';
import Alumno from '../ProfileComponents/Alumno';
import TutorLaboral from '../ProfileComponents/TutorLaboral';
import TutorDePrácticas from '../ProfileComponents/TutorDePrácticas';

type ProfileProps = {
  name: string;
  phone: string;
  dni: string;
  role: string;
  empresa?: string;
};

const Profile: React.FC<ProfileProps> = ({
  name,
  phone,
  dni,
  role,
  empresa,
}) => {
  const [form, setForm] = useState({
    name,
    phone,
    dni,
    role,
    empresa: empresa || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Lógica para guardar los datos
  };

  return (
    (
      <div className="mt-6">
        {form.role === 'student' && (
          <Alumno
            form={form}
            handleChange={handleChange}
            handleSave={handleSave}
          />
        )}
        {form.role === 'practice_tutor' && (
          <TutorLaboral
            form={form}
            handleChange={handleChange}
            handleSave={handleSave}
          />
        )}
        {form.role === 'teacher_class' && (
          <TutorDePrácticas
            form={form}
            handleChange={handleChange}
            handleSave={handleSave}
          />
        )}
      </div>
    )
  );
};

export default Profile;
