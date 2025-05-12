from fastapi import APIRouter, Depends
from fastapi.encoders import jsonable_encoder
from auth.auth import verify_token
from models.calendar_model import *
from services.calendar_services import *


router = APIRouter(dependencies=[Depends(verify_token)] )

@router.post('/add/')
async def addDates(date: addNewDateModel):
    data_encode = jsonable_encoder(date)
    return addNewDateServices(data_encode)

@router.get('/find/{id}')
async def findDate(id):
    return findDateServices(id)

@router.put('/update/{id}')
async def updateDate(id:int , data:updateDateModel):
    return  updateDateServices(id, jsonable_encoder(data))