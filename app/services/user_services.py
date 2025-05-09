from database.database_sup import supabase
from supabase import SupabaseException
from argon2 import PasswordHasher,exceptions

def getAllUserServices():
    response = supabase.table('users').select('*').execute()
    return response.data

def getUserService(id):
    try:
        response = supabase.table('users').select('*').eq('id',id).execute()
        
        return response.data
    except Exception as err:
        return {'Error': err}

    

    
def insertNewUserService(data):  
    ph = PasswordHasher()
    data["password"] = ph.hash(data["password"])
    try:
       
        response = supabase.table('users').insert(data).execute()
        return response.data
    except Exception as err:
        return{'Error': err}

def loginUserService(data):
    ph = PasswordHasher()
    email = data["email"]
    try:
        response = supabase.table('users').select('*').eq('email',email).execute()

        

        return ph.verify(response.data[0]['password'],data['password'])

    except exceptions.VerificationError as err:
        return {"Error": "La contraseña no coincide "}
    except Exception as err:
         return {"Error": err}
    
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