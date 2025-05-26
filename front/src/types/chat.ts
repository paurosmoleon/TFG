export type Role = 'teacher_class' | 'student' | 'practice_tutor';

export interface Chat {
  id: number;
  name: string;
  last: string;
  avatar: string;
  role: Role;
}
