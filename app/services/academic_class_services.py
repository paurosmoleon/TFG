from database.database_sup import supabase
from fastapi.responses import  JSONResponse
from fastapi import status
def createAcademicClassServices(data):
    try:
        res = supabase.table('academic_classes').insert(data).execute()

        return JSONResponse(
            status_code=status.HTTP_201_CREATED,
            content={'created':res.data})
    except Exception as err:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={'Error': str(err)}
        )
def findAcademicClassServices(id):
    try:
        res = supabase.table('academic_classes').select('*').eq('id',id).execute()

        return JSONResponse(
            status_code=status.HTTP_200_OK,
            content={'created':res.data})
    except Exception as err:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={'Error': str(err)}
        )
def updateAcademicClassServices(id,data):
    try:
        res = supabase.table('academic_classes').update(data).eq('id',id).execute()

        return JSONResponse(
            status_code=status.HTTP_200_OK,
            content={'created':res.data})
    except Exception as err:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={'Error': str(err)}
        )
def deleteAcademicClassServices(id):
    try:
        res = supabase.table('academic_classes').delete().eq('id',id).execute()

        return JSONResponse(
            status_code=status.HTTP_200_OK,
            content={'created':res.data})
    except Exception as err:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={'Error': str(err)}
        )

def findDiariesServicesByStudent(student_id):
    try:
        response = supabase.table('academic_classes').select('*').eq('student_id',student_id).execute()
            
        return JSONResponse(
            status_code=status.HTTP_200_OK,
            content={'Message': response.data}
        )
    except SupabaseException as supaErr:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={'Error supa': supaErr}
        )
    except Exception as err:
        return {'Error': str(err)}