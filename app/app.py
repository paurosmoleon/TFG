from fastapi import FastAPI 
from fastapi.responses import RedirectResponse
from routes import user_routes,calendar_routes
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(user_routes.router,prefix='/users',tags=['Users'])
app.include_router(calendar_routes.router,prefix='/calendar',tags=['Calendar'])




app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],  # puedes usar ["*"] para permitir todos (NO recomendado en producción)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get('/')
def  home():
    return  RedirectResponse('/docs')
    