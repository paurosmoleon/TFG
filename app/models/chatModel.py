from pydantic import BaseModel
from typing import Optional

class chatSchemaModel(BaseModel):
    student_id: int
    company_tutor_id: int
    school_tutor_id: int
