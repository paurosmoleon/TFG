from database.database_sup import supabase
from fastapi import status
from  fastapi.responses import JSONResponse
from  models.weekly_records_model import weeklyRecordsModel

def create_weekly_records_services(data):
    try:
        record = supabase.table("weeklyrecords").insert({
            "student_id": data['student_id'],
            "company_tutor_id": data['company_tutor_id'],
            "academic_tutor_id": data['academic_tutor_id'],
            "practice_group_id": data['practice_group_id'],
            "academic_center_id": data['academic_center_id'],
            "week_start": data['week_start'],
            "week_end": data['week_end'],
            "submission_date": data['submission_date'],
            "deadline_date": data['deadline_date']
        }).execute()
    except Exception as err:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content=str(err)
        )
    weekly_record_id = record.data[0]['id']


    activities_payload = {
        "weekly_record_id": weekly_record_id,
        "day": data.activities.day,
        "description": data.activities.description,
        "time_spent": data.activities.time_spent,
        "observations": data.activities.observations
    } 

    try:
        result_activities = supabase.table("activities").insert(activities_payload).execute()
    except Exception as err:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content=str(err)
        )
    signature_payload = {
        "weekly_record_id": weekly_record_id,
        "student_signature": data.signature.student_signature,
        "teacher_signature": data.signature.teacher_signature,
        "practice_tutor_signature": data.signature.practice_tutor_signature
    } 
    try:
        result_signatures = supabase.table("signatures").insert(signature_payload).execute()
    except Exception as err:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content=str(err)
        )
    
    return JSONResponse(
        status_code=status.HTTP_200_OK,
        content='👍'
    )