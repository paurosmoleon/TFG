from fastapi import APIRouter
from fastapi.encoders import jsonable_encoder
from models.calendar_model import *
from services.calendar_services import *
import json

router = APIRouter()

@router.post('/add/date')
async def addDates(date: addNewDateModel):
    data_encode = jsonable_encoder(date)
    return addNewDateServices(data_encode)