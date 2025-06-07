from pydantic import BaseModel
from datetime import date

class practicesGroupModel(BaseModel):
    practice_center_name: str
    student_id: int
    company_tutor_id: int