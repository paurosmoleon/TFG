from fastapi_mail import FastMail,MessageSchema,ConnectionConfig
from fastapi import BackgroundTasks
import dotenv,os
from pydantic import EmailStr

dotenv.load_dotenv()

conf = ConnectionConfig(

    MAIL_USERNAME='efctpartnership@gmail.com',
    MAIL_PASSWORD='fsst inie ffxj bbci',
    MAIL_FROM='efctpartnership@gmail.com',
    MAIL_PORT=587,
    MAIL_SERVER='smtp.gmail.com',
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True
)



async def send_mail(background_tasks: BackgroundTasks, email_to: EmailStr, subject: str, body: str):
    try:
        messege = MessageSchema(
            subject=subject,
            recipients=[email_to],
            body=body,
            subtype="html"
        )
        fm = FastMail(conf)
        background_tasks.add_task(fm.send_message,messege)
        return {"message": "Correo enviado correctamente"}
    except Exception as err:
        return {'Error': str(err) }