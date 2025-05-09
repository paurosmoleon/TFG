from enum import Enum

class account_types(Enum):
    student = 'student'
    tutor = 'practices_tutor'
    teacher = 'teacher_class'

class account_status(str,Enum):
    active = 'active'
    inactive = 'inactive'
    suspended = 'suspended'