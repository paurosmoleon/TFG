from fastapi import FastAPI 
from fastapi.responses import RedirectResponse
from routes import user_routes,calendar_routes

app = FastAPI()

app.include_router(user_routes.router,prefix='/users',tags=['Users'])
app.include_router(calendar_routes.router,prefix='/calendar',tags=['Calendar'])


@app.get('/')
def  home():
    return  RedirectResponse('/docs')
    