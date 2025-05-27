from fastapi import  APIRouter, Depends, WebSocket
from fastapi.security import OAuth2PasswordBearer
from fastapi.staticfiles import StaticFiles
from auth.auth import verify_token
from models.chatModel import chatSchemaModel
from services.chat_services import *
from services.user_services import currentUserServices
from fastapi.encoders import jsonable_encoder


router = APIRouter()




@router.post("/chat/create",dependencies=[Depends(verify_token)])
async def create(data:chatSchemaModel):
    return createChatServices(jsonable_encoder(data))

@router.get("/findGroup/{id}")
async def findGroup(id):
    return findChatGroupsServices(id)

@router.websocket("/ws")
def websocket(websocket: WebSocket):
    return websocketEndpointServices(websocket)