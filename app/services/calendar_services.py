from database.database_sup import supabase
from supabase import SupabaseException

def addNewDateServices(data):
    try:
        res = supabase.table('calendars').insert(data).execute()
        return res.data
    except SupabaseException as err:
        return {'Error':err}