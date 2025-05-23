import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Chats: React.FC = () => {
  const [uuidChat, setUuidChat] = useState<Array<any>>([]);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const ws = useRef<WebSocket | null>(null);


  useEffect(() => {
    const fetchChats = async () => {
      try {
        const currentUser = await axios.get('https://tfg-production-f839.up.railway.app/users/me', {
          headers: {
            Authorization: localStorage.getItem('tokenUser') || '',
          },
        });

        const res = await axios.get(
          `https://tfg-production-f839.up.railway.app/findGroup/${currentUser.data[0].id}`
        );

        setUuidChat(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchChats();
  }, []);


  useEffect(() => {
    if (uuidChat.length === 0) return;

    const chatId = uuidChat[0].IdChat;
    if (!chatId) return;

    const socket = new WebSocket(`wss://tfg-production-f839.up.railway.app/ws?id=${chatId}`);
    ws.current = socket;

    socket.onopen = () => {
      socket.send(JSON.stringify({ token: localStorage.getItem('tokenUser')?.split(' ')[1] }));
    };

    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    return () => {
      socket.close();
    };
  }, [uuidChat]);

  const sendMensage = () => {
    if (ws.current && input.trim() !== '') {
      ws.current.send(input);
      setInput('');
    }
  };

  return (
    <>
      <h2>Chat en vivo</h2>
      <input
        id="messageInput"
        type="text"
        placeholder="Escribe un mensaje..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMensage()}
      />
      <button onClick={sendMensage}>Enviar</button>

      <div id="messages" style={{ marginTop: '1rem' }}>
        {messages.map((msg, i) => (
          <div key={i}>
            <span>{msg}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Chats;
