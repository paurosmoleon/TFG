import Profile from './Profile';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

const PerfilChat: React.FC = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState<{
    name?: string;
    phone?: string;
    dni?: string;
    account_type?: string;
    empresa?: string;
  }>({});

  const [isLoading, setIsLoading] = useState(true);

  const loadingToastId = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (token) {
      localStorage.setItem('tokenUser', `Bearer ${token}`);
      navigate('/dashboard/perfil-chat', { replace: true });
    }
  }, [token, navigate]);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      loadingToastId.current = toast.loading('Cargando perfil...');

      try {
        const response: any = await axios.get(
          'https://tfg-production-f839.up.railway.app/users/me',
          {
            headers: {
              Authorization: localStorage.getItem('tokenUser') || '',
            },
          }
        );
        setCurrentUser(response.data[0]);
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
        toast.error('Error al cargar perfil');
      } finally {
        setIsLoading(false);
        if (loadingToastId.current) {
          toast.dismiss(loadingToastId.current);
        }
      }
    };

    fetchCurrentUser();
  }, []);

  if (isLoading) {
    return (
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    );
  }

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Profile
        name={currentUser.name || ''}
        phone={currentUser.phone || ''}
        dni={currentUser.dni || ''}
        account_type={currentUser.account_type || ''}
        empresa={currentUser.empresa || undefined}
      />
    </div>
  );
};

export default PerfilChat;
