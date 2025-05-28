
from typing import Union
from fastapi import Depends
from auth.auth import verify_token
from fastapi.routing import APIRouter
from services.practices_diaries_services import *
from models.practices_diaries_model import createDiariesModel,findDiariesModel
from fastapi.encoders import jsonable_encoder

router = APIRouter( dependencies=[Depends(verify_token)])


@router.post('/create')
async def createDiaries(pd_data: createDiariesModel ):
  
    return createDiariesServices(jsonable_encoder(pd_data))

@router.get('/find/{id}' , response_model=Union[findDiariesModel, dict])
async def findDiaries(id: int):
    return findDiariesServices(id)

@router.get('/pdf/{student_id}')
async def createDiariesPDF(student_id):
    return exportDiarieServices(student_id)