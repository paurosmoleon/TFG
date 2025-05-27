import { useParams } from 'react-router-dom';
import Profile from './Profile';
import { useEffect, useState } from 'react';


const PerfilChat: React.FC = () => {
  const [currentUser, setCurrentUser] = useState('')

  useEffect(() => {
    const CurrentUser = async () => {
      const user = await axios.get('https://tfg-production-f839.up.railway.app/users/me', {
        headers: {
          Authorization: localStorage.getItem('tokenUser')
        }
      })

      setCurrentUser(user.data)
    }


  }, [])

  console.log('Token en la URL:', '');

  // que hace / dice

  //prueba ahora lo he comentado yo , el nombre se muestra? tardo un poco que me han deslogeado
  // mira dc
  return (
    <Profile
      name={currentUser.name}
      phone="user.phone"
      dni="user.dni"
      role="student"
    //empresa={user.empresa || null}
    />
  );
};

export default PerfilChat;
