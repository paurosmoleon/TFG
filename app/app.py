from fastapi import FastAPI 
from fastapi.responses import RedirectResponse
from routes import user_routes,calendar_routes,practices_diaries_routes,chat_routes
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(user_routes.router_protected,prefix='/users',tags=['Users Protected'])
app.include_router(user_routes.router_public,prefix='/users',tags=['Users Public'])
app.include_router(calendar_routes.router,prefix='/calendar',tags=['Calendar'])
app.include_router(practices_diaries_routes.router,prefix='/PD',tags=['Practices diaries'])
app.include_router(chat_routes.router,tags=['chat'])


app.add_middleware(
    CORSMiddleware,
    allow_origins=['https://profound-cuchufli-c5aa82.netlify.app'],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get('/')
def  home():
    return  RedirectResponse('/docs')
    