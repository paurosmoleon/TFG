from fastapi import APIRouter, Depends
from auth.auth import verify_token
from services.academic_class_services import *

router = APIRouter(dependencies=Depends(verify_token))


@router.post('/create')
async def create(data):
    return createAcademicClassServices(data)

@router.get('/find/{id}')
async def find(id):  
    return findAcademicClassServices(id)

@router.put('/update/{id}')
async def update(id,data):
    return updateAcademicClassServices(id,data)

@router.delete('/delete/{id}')
async def delete(id):
    return deleteAcademicClassServices(id)

