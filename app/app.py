from fastapi import FastAPI 
from fastapi.responses import RedirectResponse
from routes import user_routes,calendar_routes,practices_diaries_routes,chat_routes,email_routes,weekly_records_routes,practices_group_routes,academic_classs_routes
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(user_routes.router_protected,prefix='/users',tags=['Users Protected'])
app.include_router(user_routes.router_public,prefix='/users',tags=['Users Public'])
app.include_router(calendar_routes.router,prefix='/calendar',tags=['Calendar'])
app.include_router(practices_diaries_routes.router,prefix='/PD',tags=['Practices diaries'])
app.include_router(chat_routes.router,tags=['chat'])
app.include_router(email_routes.router,prefix='/email',tags=['email'])
app.include_router(weekly_records_routes.router,prefix='/WR',tags=['Weekly records'])
app.include_router(practices_group_routes.router,prefix='/PG',tags=['Practices group'])
app .include_router(academic_classs_routes.router,prefix='/AC',tags=['Academic class'])

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],#'https://profound-cuchufli-c5aa82.netlify.app'  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get('/')
def  home():
    return  RedirectResponse('/docs')
    