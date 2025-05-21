from fastapi import  APIRouter, Depends, WebSocket
from fastapi.security import OAuth2PasswordBearer
from fastapi.staticfiles import StaticFiles
from auth.auth import verify_token
from models.chatModel import chatSchemaModel
from services.chat_services import *
from services.user_services import currentUserServices
from fastapi.encoders import jsonable_encoder


router = APIRouter()

router.mount("/static",StaticFiles(directory="app/services/static"), name="static")



@router.post("/chat/create",dependencies=[Depends(verify_token)])
async def create(data:chatSchemaModel):
    return createChatServices(jsonable_encoder(data))

@router.get("/chat")
async def chat():
    return getChatServices()


@router.get("/chat2")
async def chat2():
    return getChatServices2()

@router.websocket("/ws")
def websocket(websocket: WebSocket):
    return websocketEndpointServices(websocket)