from fastapi import Depends, HTTPException,status
from jose import JWTError,jwt
from fastapi.security import OAuth2PasswordBearer
import dotenv,os

dotenv.load_dotenv()

SECRET_KEY = os.getenv('SECRET_KEY')
ALGORITHM = 'HS256'

outh2_scheme = OAuth2PasswordBearer(tokenUrl="login")



def create_acces_token(data: dict):
    to_encode = data.copy()
   
    return jwt.encode(to_encode,SECRET_KEY,ALGORITHM)



def verify_token(token: str = Depends(outh2_scheme)):
    try:
        payload = jwt.decode(token,SECRET_KEY,ALGORITHM)
        return payload
    except JWTError:
         raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token no válido o expirado",
        )