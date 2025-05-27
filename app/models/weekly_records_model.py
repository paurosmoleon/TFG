from pydantic import BaseModel
from datetime import datetime 
from enums import weekly_records_enums
from typing import List,Optional

class activityModel(BaseModel):
    day: weekly_records_enums.daysEnum
    description: str
    time_spent: str
    observations:  Optional[str]

class signaturesModel(BaseModel):
    student_signature: str
    teacher_signature: str
    practice_tutor_signature: str

class weeklyRecordsModel(BaseModel):
    student_id: int
    company_tutor_id: int
    academic_tutor_id: int
    practice_group_id: int
    academic_center_id: int
    week_start: datetime
    week_end: datetime
    submission_date: datetime
    deadline_date: datetime
    activities: activityModel
    signatures: signaturesModel