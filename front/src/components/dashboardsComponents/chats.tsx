import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RoleIcon from './RoleIcon';
import { Chat } from '../../types/chat';

const truncate = (text: string, max = 30) =>
  text.length > max ? text.slice(0, max) + '...' : text;

const Chats: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [messages, setMessages] = useState<{ text: string; userId?: number }[]>([]);
  const [input, setInput] = useState('');
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentName, setCurrentName] = useState('')
  const [accountType, setAccountType] = useState<'practices_tutor' | 'student' | 'teacher_class' | undefined>(undefined);

  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const currentUser: any = await axios.get('https://tfg-production-f839.up.railway.app/users/me', {
          headers: {
            Authorization: localStorage.getItem('tokenUser') || '',
          },
        });

        setCurrentName(currentUser.data[0].name)
        setAccountType(currentUser.data[0].account_type);

        const res: any = await axios.get(
          `https://tfg-production-f839.up.railway.app/findGroup/${currentUser.data[0].id}`
        );

        const mappedChats = res.data.map((chat: any) => ({
          id: chat.IdChat,
          name: chat.nombre || 'Chat sin nombre',
          role: chat.role || 'student', // Aquí el role para iconos en listado
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
      try {
        const data = JSON.parse(event.data);
        if (typeof data === 'object' && data.text) {
          setMessages((prev) => [...prev, { text: data.text, userId: data.userId }]);
        } else {
          setMessages((prev) => [...prev, { text: event.data }]);
        }
      } catch {
        setMessages((prev) => [...prev, { text: event.data }]);
      }
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

  const handleSelectChat = (chat: Chat) => {
    setSelectedChat(chat);
    setSidebarOpen(false);
  };

  return (
    <div className="flex justify-center h-[calc(100vh-4rem)] bg-gray-50">
      <div className="flex w-full md:w-3/4 max-w-7xl rounded-lg shadow-md bg-white overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`
            bg-white border-r border-gray-200 p-4 overflow-y-auto
            w-1/4
            fixed top-16 bottom-0 left-0 z-40
            transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:relative md:top-0 md:left-0 md:translate-x-0
          `}
          style={{ maxHeight: 'calc(100vh - 4rem)' }}
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
                  <RoleIcon
                    accountType={chat.role as any}
                    className="w-10 h-10 text-gray-600 hover:text-blue-600 transition-transform hover:scale-110"
                  />
                </Link>
                <p className="flex-1 text-gray-800 truncate">
                  <span className="font-semibold">{chat.name}:</span> {truncate(chat.last, 30)}
                </p>
              </div>
            );
          })}
        </aside>

        {/* Overlay para móvil */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Chat window */}
        <main
          className={`
            flex flex-col flex-1 h-[calc(100vh-4rem)] bg-gray-100
            ml-0 md:ml-1/4
            ${sidebarOpen ? 'pointer-events-none' : 'pointer-events-auto'}
          `}
          style={{ maxHeight: 'calc(100vh - 4rem)' }}
        >
          {/* Header */}
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
              <RoleIcon
                accountType={accountType}
                className="w-10 h-10 text-gray-600 hover:text-blue-600 transition-transform hover:scale-110"
              />
            </Link>
            <h2 className="text-xl font-semibold text-gray-800">{selectedChat?.name}</h2>
          </header>

          {/* Mensajes */}
          <div className="flex-1 p-4 overflow-y-auto flex flex-col justify-center">
            {messages.length === 0 ? (
              <div className="text-gray-400 text-center mt-auto mb-auto">No hay mensajes aún.</div>
            ) : (
              messages.map((msg, i) => (
                <div
                  key={i}
                  className="max-w-[80%] mb-4 p-3 rounded-xl break-words bg-blue-600 text-white self-start text-left"
                >
                  {msg.text}
                </div>
              ))
            )}
          </div>

          {/* Input */}
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
              className="px-4 py-2 bg-blue-600 text-white cursor-pointer rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Enviar
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Chats;
