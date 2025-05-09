from pydantic import BaseModel
from typing import Optional,Literal
from enums.user_enums import account_types,account_status

class getUsersModel(BaseModel):
    id: Optional[int] 
    name:str
    dni: str
    email:Optional[str] = None
    phone: Optional[int]= None
    account_type: Optional[str] = account_types.student.value
    account_status:Optional[str] = account_status.active.value
    created_at: Optional[str] = None
    updated_at: Optional[str] = None


class insertUsersModel(BaseModel):
 
    name:str
    password: str
    dni: str
    email:Optional[str] = None
    phone: Optional[int]= None
    account_type: Optional[str] = account_types.student.value
    account_status:Optional[str] = account_status.active.value


class loginUserModel(BaseModel):
    email: str
    password: str