from database.database_sup import supabase
from supabase import SupabaseException
from argon2 import PasswordHasher,exceptions
from auth.auth import create_acces_token
from fastapi import status,HTTPException
from fastapi.responses import JSONResponse


def getAllUserServices():
    response = supabase.table('users').select('*').execute()
    return response.data

def getUserService(name):
    try:
        response = supabase.table('users').select('*').eq('name',name).execute()
        
        return response.data
    except Exception as err:
        return {'Error': err}

    

    
def insertNewUserService(data):  
    ph = PasswordHasher()
    data["password"] = ph.hash(data["password"])
    try:
        response = supabase.table('users').insert(data).execute()
        
        
        token = create_acces_token({"sub": response.data[0]['email'],"role": response.data[0]['account_type']})
        return{'access_token': token,"token_type":"bearer"}
    
    except Exception as err:
        return{'Error': err}



def loginUserService(data):
    ph = PasswordHasher()
    email = data["email"]
    try:
        response = supabase.table('users').select('*').eq('email',email).execute()
        if data['email'] and data['password']:
            
            if ph.verify(response.data[0]['password'],data['password']):
               
                token = create_acces_token({"sub": response.data[0]['email'],"role": response.data[0]['account_type']})
                return{'access_token': token,"token_type":"bearer"}
            else:
                return JSONResponse(
                    status_code=status.HTTP_404_NOT_FOUND,
                    content='Email o contraseña incorrecta'
                )
        else:
            return JSONResponse(
                    status_code=status.HTTP_400_BAD_REQUEST,
                    content="Email o contraseña vacio"
                )

    except exceptions.VerificationError as err:
         return JSONResponse(
                status_code=status.HTTP_404_NOT_FOUND,
                content='Email o contraseña incorrecta'
            )
    except exceptions.InvalidHash as err:
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content='Error comparando hash'
        )

    except Exception as err:
         return JSONResponse(
             status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
             content=f'{err}'
         )
    
def  updateUserDataService(id,data):
    try:
        response = supabase.table('users').update(data).eq('id',id).execute()

        return response.data
    except Exception as err:
        return {'Error': err}
    

def deleteUserService(id):
    try:
        response = supabase.table('users').delete().eq('id',id).execute()
        return response.data
    except Exception as err:
        return {'Error': err}

def deactivateUserService(id,deactivate):
    try:
        response = supabase.table('users').update({"account_status":deactivate}).eq('id',id).execute()
        return response.data
    except Exception as err:
        return {'Error':err}
    
def activateUserService(id,activate):
    try:
        response = supabase.table('users').update({"account_status":activate}).eq('id',id).execute()
        return response.data
    except Exception as err:
        return {'Error':err}

def suspendUserService(id,suspend):
    try:
        response = supabase.table('users').update({"account_status":suspend}).eq('id',id).execute()
        return response.data
    except Exception as err:
        return {'Error':err}
    
def currentUserServices(email):
    try:
        response = supabase.table('users').select('*').eq('email',email['sub']).execute()
        return response.data
    except SupabaseException as supaErr:
        return{'Err Supabase': supaErr}
    except Exception as err:
        return{ 'Error':err}
    

def forgotPassword(pasword):
    pass