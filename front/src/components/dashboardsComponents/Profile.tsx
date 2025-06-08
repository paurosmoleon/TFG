import React, { useState } from 'react';
import Alumno from '../ProfileComponents/Alumno';
import TutorLaboral from '../ProfileComponents/TutorLaboral';
import TutorDePrácticas from '../ProfileComponents/TutorDePrácticas';
import {Toaster, toast} from 'react-hot-toast';

type ProfileProps = {
  name: string;
  phone: string;
  dni: string;
  account_type: string;
  empresa?: string;
};

const Profile: React.FC<ProfileProps> = ({
  name,
  phone,
  dni,
  account_type,
  empresa,
}) => {
  const [form, setForm] = useState({
    name,
    phone,
    dni,
    account_type,
    empresa: empresa || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    toast.success('Perfil actualizado correctamente');
  };

  return (
    (
      <div className="mt-6">
        <Toaster position="top-center" reverseOrder={false} />
        {form.account_type === 'student' && (
          <Alumno
            form={form}
            handleChange={handleChange}
            handleSave={handleSave}
          />
        )}
        {form.account_type === 'practices_tutor' && (
          <TutorLaboral
            form={form}
            handleChange={handleChange}
            handleSave={handleSave}
          />
        )}
        {form.account_type === 'teacher_class' && (
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
