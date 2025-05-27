from pydantic import BaseModel
from datetime import date

class academicClassModel(BaseModel):
    academic_center_id: int
    student_id: int
    teacher_id: int
    course: str
