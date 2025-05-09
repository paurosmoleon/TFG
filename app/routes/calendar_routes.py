from fastapi import APIRouter
from models.calendar_model import *
from services.calendar_services import *

router = APIRouter()

@router.post('/add/date')
async def addDates(date: addNewDateModel):
    return addNewDateServices(date.model_dump_json())