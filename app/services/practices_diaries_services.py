from database.database_sup import supabase
from supabase import SupabaseException
from fastapi import status
from fastapi.responses import JSONResponse,StreamingResponse
from xhtml2pdf import pisa
from io import BytesIO


def createDiariesServices(data):
    try:
        response = supabase.table('practice_diaries').insert(data).execute()

        return JSONResponse(
            status_code=status.HTTP_201_CREATED,
            content={'Created': response.data}
        )
    except Exception as err:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={'Message':err}
        )
    
def findDiariesServices(id):
    try:
        response = supabase.table('practice_diaries').select('*').eq('id',id).execute()
            
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
    

def exportDiarieServices(student_id):
    try:
        response = supabase.table('practice_diaries').select('*').eq('student_id',student_id).execute()

        pdf_bytes = BytesIO()
        pisa.CreatePDF(src=response.data[0]['content'], dest=pdf_bytes)
        pdf_bytes.seek(0)

        return StreamingResponse(
            pdf_bytes,
            media_type="application/pdf",
            headers={"Content-Disposition": "attachment; filename=diario_de_practicas.pdf"}
        )
    except Exception as err:
        return JSONResponse(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                content={'Error':str(err)}
            )