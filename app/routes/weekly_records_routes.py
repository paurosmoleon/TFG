from fastapi import APIRouter,Body
from fastapi.encoders import jsonable_encoder
from services.weekly_records_services import *
from models.weekly_records_model import *


router = APIRouter()



@router.post('/create-weekly-records')
async def createWeeklyRecords(data:weeklyRecordsModel):
    return create_weekly_records_services(jsonable_encoder(data))