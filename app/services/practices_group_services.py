from database.database_sup import supabase
from fastapi.responses import JSONResponse
from fastapi import status
from supabase import SupabaseException

def createPracticesGroupServices(data):
    try:
       
        supabase.table('practicegroups').insert(data).execute()
    
        return JSONResponse(
            status_code=status.HTTP_201_CREATED,
            content='Grupo de practicas creado'
        )
    except SupabaseException as supaErr:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content=str(supaErr)
        )
    except Exception as err:
       return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content=str(err)
        )
    
def findPracticesGaroupServices(id):
    try:
        res = supabase.table('practicegroups').select('*').eq('id',id).execute()

        return JSONResponse(
            status_code=status.HTTP_200_OK,
            content={'practices group': res.data}
        )
    except Exception as err:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content=str(err)
        )
    
def findByStudentIdPDServices(student_id):
    try:
        res = supabase.table('practicegroups').select('*').eq('student_id',student_id).execute()
        if res.data:
            return JSONResponse(
                status_code=status.HTTP_200_OK,
                content={'practices group': res.data}
            )
        else:
            return JSONResponse(
                status_code=status.HTTP_404_NOT_FOUND,
                content='Not found'
            )
    except Exception as err:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content=str(err)
        )
    
def findPracticesTutorByIdServices(company_tutor_id):
    try:
        res = supabase.table('practicegroups').select('*').eq('company_tutor_id',company_tutor_id).execute()
        if res.data:
            return JSONResponse(
                status_code=status.HTTP_200_OK,
                content={'practices group': res.data}
            )
        else:
            return JSONResponse(
                status_code=status.HTTP_404_NOT_FOUND,
                content='Not found'
            )
    except Exception as err:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content=str(err)
        )