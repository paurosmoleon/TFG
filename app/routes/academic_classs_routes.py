from fastapi import APIRouter, Depends
from fastapi.encoders import jsonable_encoder
from auth.auth import verify_token
from services.academic_class_services import *
from models.academic_class_model import *

router = APIRouter(dependencies=[Depends(verify_token)])


@router.post('/create')
async def create(data:academicClassModel):
    return createAcademicClassServices(jsonable_encoder(data))

@router.get('/find/{id}')
async def find(id):  
    return findAcademicClassServices(id)

@router.put('/update/{id}')
async def update(id,data):
    return updateAcademicClassServices(id,  data)

@router.delete('/delete/{id}')
async def delete(id):
    return deleteAcademicClassServices(id)

@router.get('/find_by_student/{student_id}')
async def findByStudent(student_id):
    return findDiariesServicesByStudent(student_id)


@router.get('/find_by_teacher/{teache_id}')
async def findByStudent(teache_id):
    return findDiariesServicesByStudent(teache_id)