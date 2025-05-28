from pydantic import BaseModel
from typing import Text,Optional

class createDiariesModel(BaseModel):
    student_id: int 
    school_tutor_id: int
    content: str

class findDiariesModel(BaseModel):
    id: int
    student_id: int 
    company_tutor_id: int
    school_tutor_id: int
    submission_date:str
    due_date:str
    content: str