import Profile from './Profile';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';

const PerfilChat: React.FC = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token'); // <-- aquí obtenemos el token correctamente
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState<{
    name?: string;
    phone?: string;
    dni?: string;
    account_type?: string;
    empresa?: string;
  }>({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Si viene el token por query param, lo guardamos y redirigimos
    if (token) {
      localStorage.setItem('tokenUser', `Bearer ${token}`);
      navigate('/dashboard/perfil-chat', { replace: true });
    }
  }, [token, navigate]);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response: any = await axios.get('https://tfg-production-f839.up.railway.app/users/me', {
          headers: {
            Authorization: localStorage.getItem('tokenUser') || '',
          },
        });
        setCurrentUser(response.data[0]);
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  if (isLoading) {
    return <p>Cargando perfil...</p>;
  }

  return (
    <Profile
      name={currentUser.name || ''}
      phone={currentUser.phone || ''}
      dni={currentUser.dni || ''}
      account_type={currentUser.account_type || ''}
      empresa={currentUser.empresa || undefined}
    />
  );
};

export default PerfilChat;
