from typing import List
from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordBearer
from auth.auth import verify_token
from services.user_services import *
from models.user_model import *
from enums.user_enums import account_status

router_protected = APIRouter(dependencies=[Depends(verify_token)])

router_public = APIRouter()

@router_protected.get("/getAll" , response_model=List[getUsersModel])
async def getAllUsers():
    return getAllUserServices() 

@router_protected.get("/get/{id}",response_model=List[getUsersModel])
async def getUser(id: int):
    return getUserService(id) 

@router_public.post("/register")
async def createUser(usr_data: insertUsersModel):
    return insertNewUserService(usr_data.model_dump())

@router_public.post("/login")
async def loginUser(user_data: loginUserModel ):
    return loginUserService(user_data.model_dump())


@router_protected.put("/update/{id}")
async def  updateUser(id: int,usr_data: insertUsersModel):
    return updateUserDataService(id,usr_data.model_dump())

@router_protected.delete("/delete/{id}")
async def deleteUser(id:int):
    return deleteUserService(id)

@router_protected.put("/deactivate/{id}")
async def  deactivateUser(id:int):
    return deactivateUserService(id,account_status.inactive)

@router_protected.put("/activate/{id}")
async def  activateUser(id:int):
    return activateUserService(id,account_status.active)

@router_protected.put("/suspend/{id}")
async def  suspendUser(id:int):
    return activateUserService(id,account_status.suspended)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")


@router_protected.get("/me")
async def currentUser( token: str = Depends(oauth2_scheme)):
    payload = verify_token(token)
    return  currentUserServices(payload)
