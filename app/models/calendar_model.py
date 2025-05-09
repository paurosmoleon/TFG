from pydantic import BaseModel
from datetime import date

class addNewDateModel(BaseModel):
    user_id: int
    marked_dates: dict[str,date]