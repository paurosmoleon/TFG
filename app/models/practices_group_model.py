from pydantic import BaseModel
from datetime import date

class practicesGroupModel(BaseModel):
    practice_center_id: int
    student_id: int
    company_tutor_id: int
    course: str
    insurance_deadline: date