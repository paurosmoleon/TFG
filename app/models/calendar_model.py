from pydantic import BaseModel
from datetime import date
from typing import Dict,Optional

class addNewDateModel(BaseModel):

    user_id: int
    marked_dates: Dict[str, date]

class updateDateModel(BaseModel):
    marked_dates: Dict[str, date]