from fastapi import APIRouter, Depends,BackgroundTasks,Body
from auth.auth import verify_token
from utils.email import send_mail
from models.emailModel import emailModel

router = APIRouter(dependencies=[Depends(verify_token)])



@router.post('/forgot_password')
async def send_email(background_tasks: BackgroundTasks,data: emailModel = Body(...)):
   subject = 'Recuperación de Contraseña'
   body = f"""
Hola {data.email_to},
<br>
Recibimos una solicitud para restablecer la contraseña de tu cuenta en efct-tfg.com .
<br>
Si realizaste esta solicitud, haz clic en el siguiente enlace para crear una nueva contraseña:
<br>
🔗 cambiar
<br>
Si tú no solicitaste este cambio, puedes ignorar este correo. Tu contraseña actual no se verá afectada.
<br>
Gracias,  
El equipo de EFCT
<br>
---
Este correo fue generado automáticamente. Por favor, no respondas a este mensaje.

"""
   return await send_mail(background_tasks,data.email_to,subject,body)