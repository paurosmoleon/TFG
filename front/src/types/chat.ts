export type Role = 'tutor de prácticas' | 'alumno' | 'tutor laboral';

export interface Chat {
  id: number;
  name: string;
  last: string;
  avatar: string;
  role: Role;
}
