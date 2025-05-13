from fastapi import  WebSocket,WebSocketDisconnect,status
from database.database_sup import supabase
from fastapi.responses import HTMLResponse,JSONResponse
from auth.auth import verify_token,create_access_chat_token
from services.user_services import currentUserServices
import json

connected_clients = []


def createChatServices(data):
    try:
        res = supabase.table('chats').insert(data).execute()

        token_chat = create_access_chat_token({"sub":res.data[0].get('IdChat')})

        return JSONResponse(
            status_code=status.HTTP_201_CREATED,
            content={'Chat token': token_chat}
        )
    except Exception as err:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={'Error': str(err)}
        )

def getChatServices():
    return HTMLResponse(open("services/static/index.html").read())

def findChatGroup(uuid):
    try:
        res = supabase.table('chats').select('*').eq('IdChat',uuid).execute()
        return res
    except Exception as err:
        return {'Err': str(err)}


async def websocketEndpointServices(websocket: WebSocket):
    await websocket.accept()
    connected_clients.append(websocket)
    token = websocket.query_params.get('token')
    try:
        auth_message = await websocket.receive_text()
        auth_data = json.loads(auth_message)

        token = auth_data['token']
        payload = verify_token(token)
        user = currentUserServices(payload)

        while True:
            data = await websocket.receive_text()
            for client in connected_clients:
                await client.send_text(str(user[0].get('name')+": "+data))
    except WebSocketDisconnect:
        connected_clients.remove(websocket)
