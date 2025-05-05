export type Role = 'tutor' | 'estudiante' | 'profesor';

export interface Chat {
  id: number;
  name: string;
  last: string;
  avatar: string;
  role: Role;
}
