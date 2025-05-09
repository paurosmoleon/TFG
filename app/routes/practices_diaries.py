from fastapi.routing import APIRouter

router = APIRouter()


@router.post('/create')
async def createDiaries():
    pass
