from typing import List
from fastapi import APIRouter
from services.user_services import *
from models.user_model import *
from enums.user_enums import account_status

router = APIRouter()


@router.get("/getAll" , response_model=List[getUsersModel])
async def getAllUsers():
    return getAllUserServices() 

@router.get("/get/{id}",response_model=List[getUsersModel])
async def getUser(id: int):
    return getUserService(id) 

@router.post("/create")
async def createUser(usr_data: insertUsersModel):
    return insertNewUserService(usr_data.model_dump())

@router.post("/login")
async def loginUser(user_data: loginUserModel ):
    return loginUserService(user_data.model_dump())


@router.put("/update/{id}")
async def  updateUser(id: int,usr_data: insertUsersModel):
    return updateUserDataService(id,usr_data.model_dump())

@router.delete("/delete/{id}")
async def deleteUser(id:int):
    return deleteUserService(id)

@router.put("/deactivate/{id}")
async def  deactivateUser(id:int):
    return deactivateUserService(id,account_status.inactive)

@router.put("/activate/{id}")
async def  activateUser(id:int):
    return activateUserService(id,account_status.active)

@router.put("/suspend/{id}")
async def  suspendUser(id:int):
    return activateUserService(id,account_status.suspended)
