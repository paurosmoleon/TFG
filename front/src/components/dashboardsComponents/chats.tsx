import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RoleIcon from './RoleIcon';
import { Chat } from '../../types/chat';

const truncate = (text: string, max = 30) =>
  text.length > max ? text.slice(0, max) + '...' : text;

const Chats: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const currentUser: any = await axios.get('https://tfg-production-f839.up.railway.app/users/me', {
          headers: {
            Authorization: localStorage.getItem('tokenUser') || '',
          },
        });

        const res: any = await axios.get(
          `https://tfg-production-f839.up.railway.app/findGroup/${currentUser.data[0].id}`
        );

        const mappedChats = res.data.map((chat: any) => ({
          id: chat.IdChat,
          name: chat.nombre || 'Chat sin nombre',
          avatar: chat.avatar || 'https://via.placeholder.com/40',
          role: chat.role || 'estudiante',
          last: chat.lastMessage || '',
        }));

        setChats(mappedChats);
        setSelectedChat(mappedChats[0] || null);
      } catch (err) {
        console.error(err);
      }
    };

    fetchChats();
  }, []);

  useEffect(() => {
    if (!selectedChat) return;

    const socket = new WebSocket(`wss://tfg-production-f839.up.railway.app/ws?id=${selectedChat.id}`);
    ws.current = socket;

    socket.onopen = () => {
      const token = localStorage.getItem('tokenUser')?.split(' ')[1] || '';
      socket.send(JSON.stringify({ token }));
    };

    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    return () => {
      socket.close();
      setMessages([]);
    };
  }, [selectedChat]);

  const sendMessage = () => {
    if (ws.current && input.trim() !== '') {
      ws.current.send(input);
      setInput('');
    }
  };

  // Cuando seleccionamos chat en móvil, cerramos sidebar
  const handleSelectChat = (chat: Chat) => {
    setSelectedChat(chat);
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Sidebar overlay para móvil */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity md:hidden ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 bottom-0 left-0 z-40 w-2/3 max-w-xs bg-white border-r border-gray-200 p-4
          overflow-y-auto
          transform transition-transform duration-300 ease-in-out
          md:relative md:top-0 md:left-0 md:w-1/4 md:max-w-none md:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {chats.map((chat) => {
          const isActive = selectedChat?.id === chat.id;
          return (
            <div
              key={chat.id}
              onClick={() => handleSelectChat(chat)}
              className={`flex items-center p-4 mb-4 rounded-lg cursor-pointer transition ${isActive ? 'bg-gray-100' : 'hover:bg-gray-50'
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
                <span className="font-semibold">{chat.name}:</span> {truncate(chat.last, 30)}
              </p>
            </div>
          );
        })}
      </aside>

      {/* Chat window */}
      <div className="flex-1 flex flex-col bg-gray-100 h-[calc(100vh-4rem)] md:ml-0">
        {/* Header con botón para abrir sidebar en móvil */}
        <header className="flex items-center p-4 bg-white border-b border-gray-200">
          <button
            onClick={() => setSidebarOpen(true)}
            className="mr-4 p-2 rounded-md hover:bg-gray-200 focus:outline-none md:hidden"
            aria-label="Abrir chats"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

          <Link to="/dashboard/perfil-chat" className="flex-shrink-0 mr-3">
            <img
              src={selectedChat?.avatar}
              alt={selectedChat?.name}
              className="w-10 h-10 rounded-full transform transition duration-200 hover:scale-110"
            />
          </Link>
          <h2 className="text-xl font-semibold text-gray-800">{selectedChat?.name}</h2>
        </header>

        {/* Contenedor mensajes */}
        <div className="flex-1 p-4 overflow-y-auto flex flex-col justify-center">
          {messages.length === 0 ? (
            <div className="text-gray-400 text-center mt-auto mb-auto">No hay mensajes aún.</div>
          ) : (
            messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] mb-4 p-3 rounded-xl ${i % 2 === 0 ? 'bg-white self-start' : 'bg-green-100 self-end'
                  }`}
              >
                {msg}
              </div>
            ))
          )}
        </div>

        {/* Barra input */}
        <div className="flex items-center p-4 bg-white border-t border-gray-200">
          <input
            type="text"
            placeholder="Escribe un mensaje..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={sendMessage}
            className="px-4 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chats;
