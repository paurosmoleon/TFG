import React, { useState } from 'react';

interface Chat {
  id: number;
  name: string;
  last: string;
  avatar: string;
  role: 'tutor' | 'estudiante' | 'profesor';
}

const dummyChats: Chat[] = [
  {
    id: 1,
    name: 'Juan Pérez',
    last: '¿Nos vemos mañana?',
    avatar: 'https://via.placeholder.com/40',
    role: 'tutor',
  },
  {
    id: 2,
    name: 'María López',
    last: 'Perfecto, ¡gracias!',
    avatar: 'https://via.placeholder.com/40',
    role: 'estudiante',
  },
  {
    id: 3,
    name: 'Profesor Ruiz',
    last: 'Revisa la tarea, por favor.',
    avatar: 'https://via.placeholder.com/40',
    role: 'profesor',
  },
];

const Chats: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  // LISTA A PANTALLA COMPLETA
  if (!selectedChat) {
    return (
      <div className="h-[calc(100vh-4rem)] bg-white overflow-y-auto p-8">
        {dummyChats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => setSelectedChat(chat)}
            className="flex items-center p-6 mb-6 cursor-pointer hover:bg-gray-50 transition rounded-lg"
          >
            {/* Avatar */}
            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-12 h-12 rounded-full mr-4"
            />

            {/* Placeholder SVG */}
            <div className="w-8 h-8 mr-4 flex items-center justify-center bg-gray-100 rounded">
              <span
                className="text-xs text-gray-500"
                role="img"
                aria-label="svg"
              >
                SVG
              </span>
            </div>

            {/* Nombre: mensaje */}
            <p className="flex-1 text-gray-800 text-lg truncate">
              <span className="font-semibold">{chat.name}:</span> {chat.last}
            </p>
          </div>
        ))}
      </div>
    );
  }

  // VISTA DE CHAT CON SIDEBAR + VENTANA
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <aside className="w-1/3 lg:w-1/4 bg-white border-r border-gray-200 overflow-y-auto p-4">
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
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="w-6 h-6 mr-3 flex items-center justify-center bg-gray-100 rounded">
                <span
                  className="text-xs text-gray-500"
                  role="img"
                  aria-label="svg"
                >
                  SVG
                </span>
              </div>
              <p className="flex-1 text-gray-800 truncate">
                <span className="font-semibold">{chat.name}:</span> {chat.last}
              </p>
            </div>
          );
        })}
      </aside>

      {/* Ventana de chat */}
      <div className="flex-1 flex flex-col bg-gray-100">
        <header className="flex items-center p-4 bg-white border-b border-gray-200">
          <button
            onClick={() => setSelectedChat(null)}
            className="mr-4 text-blue-600 hover:underline"
          >
            ← Volver
          </button>
          <img
            src={selectedChat.avatar}
            alt={selectedChat.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <h2 className="text-xl font-semibold text-gray-800">
            {selectedChat.name}
          </h2>
        </header>

        {/* Cuerpo de mensajes */}
        <div className="flex-1 p-4 overflow-y-auto flex flex-col">
          <div className="max-w-[60%] mb-4 p-3 rounded-xl bg-white self-start">
            Hola, ¿cómo te va con la memoria de prácticas?
          </div>
          <div className="max-w-[60%] mb-4 p-3 rounded-xl bg-green-100 self-end">
            Bien, casi termino la sección de justificación.
          </div>
        </div>

        {/* Input */}
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
