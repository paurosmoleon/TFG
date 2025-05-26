from pydantic import BaseModel

class emailModel(BaseModel):
    email_to: str
