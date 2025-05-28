import Profile from './Profile';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PerfilChat: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<{
    name?: string;
    phone?: string;
    dni?: string;
    account_type?: string;
    empresa?: string;
  }>({});

  const [isLoading, setIsLoading] = useState(true); // Para saber cuándo mostrar loading

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response: any = await axios.get('https://tfg-production-f839.up.railway.app/users/me', {
          headers: {
            Authorization: localStorage.getItem('tokenUser') || '',
          }
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

  useEffect(() => {
    console.log(currentUser, currentUser.name);
  }, [currentUser]);

  if (isLoading) {
    return <p>Cargando perfil...</p>; // Spinner o texto de carga
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
