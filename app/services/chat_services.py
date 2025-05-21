from fastapi import  WebSocket,WebSocketDisconnect,status
from database.database_sup import supabase
from fastapi.responses import HTMLResponse,JSONResponse
from auth.auth import verify_token,create_access_chat_token
from services.user_services import currentUserServices
import json,datetime,locale

connected_clients = []

try:
    locale.setlocale(locale.LC_TIME,'es_ES.UTF-8')
except locale.Error:
    locale.setlocale(locale.LC_TIME, 'C')

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

def getChatServices():
    return HTMLResponse(open("services/static/index.html").read())

def getChatServices2():
    return HTMLResponse(open("services/static/index2.html").read())


def findChatGroup(uuid):
    try:
        res = supabase.table('chats').select('*').eq('IdChat',uuid).execute()
        return res
    except Exception as err:
        return {'Err': str(err)}


async def websocketEndpointServices(websocket: WebSocket):
    chatContent = []
    await websocket.accept()
    
    connected_clients.append(websocket)
    try:

        auth_message = await websocket.receive_text()
        auth_data = json.loads(auth_message)

        token_user = auth_data['token']
        payload = verify_token(token_user)
        user = currentUserServices(payload)

        
        uuid_chat = websocket.query_params.get('id')
        

        content = supabase.table('chats').select('messages').eq('IdChat',uuid_chat).execute()
        content_decode = content.data[0].get('messages')

        if content_decode:
            for message in  json.loads(content_decode):
                chatContent.append(message)
                await websocket.send_text(str(user[0].get('name')+": "+message[user[0].get('name')]+"-"+message['Date']))

        while True:
            data = await websocket.receive_text()
            
            for client in connected_clients:
                    
                if uuid_chat ==  client.query_params.get('id'):
                    await client.send_text(str(user[0].get('name')+": "+data+'\t-\t'+datetime.datetime.now().strftime("%d %b, %H:%M")))


            chatContent.append({user[0].get('name'): data,'Date': datetime.datetime.now().strftime("%d %b, %H:%M") })
            supabase.table('chats').update({'messages': json.dumps(chatContent) }).eq('IdChat',uuid_chat).execute()
              
    except WebSocketDisconnect:
        connected_clients.remove(websocket)
