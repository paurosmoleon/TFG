import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RoleIcon from './RoleIcon';
import { Chat } from '../../types/chat';
import axios from 'axios';




const truncate = (text: string, max = 30) =>
  text.length > max ? text.slice(0, max) + '...' : text;

const dummyChats: Chat[] = [
  {
    id: 1,
    name: 'Tutor laboral',
    last: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh',
    avatar: 'https://via.placeholder.com/40',
    role: 'tutor',
  },
  {
    id: 2,
    name: 'Estudiante',
    last: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh enim…',
    avatar: 'https://via.placeholder.com/40',
    role: 'estudiante',
  },
  {
    id: 3,
    name: 'Profesor',
    last: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh enim…',
    avatar: 'https://via.placeholder.com/40',
    role: 'profesor',
  },
];

const Chats: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  useEffect(() => {
    const chats = async () => {
      try {
        const currentUser = await axios.get('https://tfg-production-f839.up.railway.app/users/me',{
          headers:{
             Authorization: localStorage.getItem('tokenUser')
          }
        })
        const res = await axios.get('https://tfg-production-f839.up.railway.app/findGroup/'+currentUser.data[0].id)
        console.log(res)
      }catch(err){
        console.log(err)
      }
    }

    chats()
  },[])


  if (!selectedChat) {
    return (
      <div className="h-[calc(100vh-4rem)] bg-gray-50 overflow-y-auto px-8 py-12">
        <h1 className="text-3xl font-bold mb-8 text-left">Contacto</h1>
        <div className="w-2/3 mx-auto bg-white border border-gray-300 rounded-lg">
          {dummyChats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className="w-full flex items-start px-6 py-4 my-6 hover:bg-gray-100 transition rounded cursor-pointer"
            >
              {/* Avatar */}
              <Link to="/dashboard/perfil-chat" className="flex-shrink-0 mr-6">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-10 h-10 rounded-full transform transition duration-200 hover:scale-110"
                />
              </Link>

              {/* Separador */}
              <div className="h-6 border-r-2 border-gray-300 mx-6" />

              {/* Icono de rol */}
              <div className="flex items-center justify-center w-8 h-8 text-gray-500">
                <RoleIcon role={chat.role} className="w-6 h-6" />
              </div>

              {/* Separador */}
              <div className="h-6 border-r-2 border-gray-300 mx-6" />

              {/* Texto */}
              <p className="flex-1 text-gray-800 text-left">
                <span className="font-semibold">
                  {chat.role === 'tutor'
                    ? 'Tú:'
                    : chat.role === 'estudiante'
                    ? 'User:'
                    : 'Tú:'}
                </span>{' '}
                {truncate(chat.last, 30)}
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="w-2/3 lg:w-1/4 bg-white border-r border-gray-200 overflow-y-auto p-4">
        {dummyChats.map((chat) => {
          const isActive = chat.id === selectedChat.id;
          return (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`flex items-center p-4 mb-4 rounded-lg cursor-pointer transition ${
                isActive ? 'bg-gray-100' : 'hover:bg-gray-50'
              }`}
            >
              <Link to="/dashboard/perfil-chat" className="flex-shrink-0 mr-3">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-10 h-10 rounded-full transform transition duration-200 hover:scale-110"
                />
              </Link>
              <div className="w-6 h-6 mr-3 flex items-center justify-center bg-gray-100 rounded">
                <RoleIcon role={chat.role} className="w-4 h-4 text-gray-500" />
              </div>
              <p className="flex-1 text-gray-800 truncate">
                <span className="font-semibold">{chat.name}:</span>{' '}
                {truncate(chat.last, 30)}
              </p>
            </div>
          );
        })}
      </aside>

      {/* Ventana de chat */}
      <div className="flex-1 flex flex-col bg-gray-100">
        <header className="flex items-center p-4 bg-white border-b border-gray-200">
          <Link to="/dashboard/perfil-chat" className="flex-shrink-0 mr-3">
            <img
              src={selectedChat.avatar}
              alt={selectedChat.name}
              className="w-10 h-10 rounded-full transform transition duration-200 hover:scale-110"
            />
          </Link>
          <h2 className="text-xl font-semibold text-gray-800">
            {selectedChat.name}
          </h2>
        </header>

        <div className="flex-1 p-4 overflow-y-auto flex flex-col">
          <div className="max-w-[80%] mb-4 p-3 rounded-xl bg-white self-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh
          </div>
          <div className="max-w-[80%] mb-4 p-3 rounded-xl bg-green-100 self-end">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nibh
          </div>
        </div>

        <div className="flex items-center p-4 bg-white border-t border-gray-200">
          <input
            type="text"
            placeholder="Escribe un mensaje..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chats;
