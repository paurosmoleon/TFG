from database.database_sup import supabase
from supabase import SupabaseException
from pydantic import errors

def addNewDateServices(data):
    try:
        res = supabase.table('calendars').insert(data).execute()
        return res.data
    except SupabaseException as err:
        return {'Error':err}

def findDateServices(id_user):
    try:
        res = supabase.table('calendars').select('*, users(*)').eq('user_id',id_user).execute()
        return res.data
    except Exception as err:
        return {'Message': err}

def updateDateServices(id,data):
    try:
        res = supabase.table('calendars').update(data).eq('user_id',id).execute()
        return res.data
    except errors.PydanticInvalidForJsonSchema as modelErr:
        return {'Error supabase': modelErr}
    except Exception as err:
        return {'Error': err}