from fastapi import APIRouter, Depends,BackgroundTasks,Body,status
from fastapi.responses import JSONResponse
from auth.auth import verify_token
from utils.email import send_mail
from models.emailModel import emailModel
from database.database_sup import supabase
from auth.auth import create_acces_token

router = APIRouter(dependencies=[Depends(verify_token)])



@router.post('/forgot_password')
async def send_email(background_tasks: BackgroundTasks,data: emailModel = Body(...)):
   
   try:
      user =   supabase.table('users').select('*').eq('email',data.email_to).execute()
   except Exception as err:
      return JSONResponse(
         status_code=status.HTTP_404_NOT_FOUND,
         content='No se ha encontrado usuario'
      )
 
   token = create_acces_token({"sub": data.email_to,"role": user.data[0]['account_type']})
      
   
   subject = 'Recuperación de Contraseña'
   body = f"""
         Hola {data.email_to},
         <br>
         Recibimos una solicitud para restablecer la contraseña de tu cuenta en efct-tfg.com .
         <br>
         Si realizaste esta solicitud, haz clic en el siguiente enlace para crear una nueva contraseña:
         <br>
         🔗 https://efct-tfg.netlify.app/dashboard/perfil-chat/{token}
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