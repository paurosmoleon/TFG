from fastapi import APIRouter,Body,Depends
from models.practices_group_model import *
from services.practices_group_services import *
from fastapi.encoders import jsonable_encoder
from auth.auth import verify_token


router = APIRouter(dependencies=[Depends(verify_token)])


@router.post('/create_practices_group')
async def createPracticesGroup(data:practicesGroupModel ):
     return  createPracticesGroupServices(jsonable_encoder(data))

@router.get('/find/{id}')
async def findPracticesGroup(id):
     return findPracticesGaroupServices(id)

@router.get('/find_student_by_id/{student_id}')
async def findByStudentIdPD(student_id):
     return findByStudentIdPDServices(student_id)

@router.get('/find_practices_tutor_by_id/{company_tutor_id}')
async def findPracticesTutorById(company_tutor_id):
     return findPracticesTutorByIdServices(company_tutor_id)