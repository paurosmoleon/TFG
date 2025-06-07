import json
from fastapi import  WebSocket,WebSocketDisconnect,status
from database.database_sup import supabase
from fastapi.responses import HTMLResponse,JSONResponse
from auth.auth import verify_token,create_access_chat_token
from services.user_services import currentUserServices


connected_clients = []


def createChatServices(data):
    try:
        res = supabase.table('chats').insert(data).execute()

        uuid_chat = res.data[0].get('IdChat')

        return JSONResponse(
            status_code=status.HTTP_201_CREATED,
            content={'Chat token': uuid_chat}
        )
    except Exception as err:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={'Error': str(err)}
        )



def findChatGroupsServices(id):
    try:
        res = supabase.table('chats').select('*').or_(f"student_id.eq.{id},company_tutor_id.eq.{id},school_tutor_id.eq.{id}").execute()
        return  res.data
    except Exception as err:
        return {'Err': str(err)}


async def websocketEndpointServices(websocket: WebSocket):
    chatContent = []
    await websocket.accept()
    
    connected_clients.append(websocket)
    try:
        # Autenticación inicial
        auth_message = await websocket.receive_text()
        auth_data = json.loads(auth_message)
        token_user = auth_data['token']
        payload = verify_token(token_user)
        user = currentUserServices(payload)
        
        uuid_chat = websocket.query_params.get('id')
        
        # Cargar historial del chat
        content = supabase.table('chats').select('messages').eq('IdChat', uuid_chat).execute()
        content_decode = content.data[0].get('messages')

        if content_decode:
            for message in json.loads(content_decode):
                chatContent.append(message)
                for name in message:
                    await websocket.send_text(f"{name}")
        
        # Escuchar mensajes nuevos
        while True:
            data = await websocket.receive_text()
            sender_name = user[0].get('name')
            
            # Difundir a todos los clientes conectados al mismo chat
            disconnected_clients = []
            for client in connected_clients:
                try:
                    if client.query_params.get('id') == uuid_chat:
                        await client.send_text(f"{sender_name}: {data}")
                except Exception:
                    disconnected_clients.append(client)

            # Limpiar clientes desconectados
            for dc in disconnected_clients:
                if dc in connected_clients:
                    connected_clients.remove(dc)

            # Guardar mensaje
            chatContent.append({sender_name: data})
            supabase.table('chats').update({'messages': json.dumps(chatContent)}).eq('IdChat', uuid_chat).execute()
    
    except WebSocketDisconnect:
        if websocket in connected_clients:
            connected_clients.remove(websocket)
    except Exception as e:
        print(f"Error en WebSocket: {e}")
        if websocket in connected_clients:
            connected_clients.remove(websocket)
