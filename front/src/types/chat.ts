export type Role = 'teacher_class' | 'student' | 'practices_tutor';

export interface Chat {
  id: number;
  name: string;
  last: string;
  avatar: string;
  role: Role;
}
