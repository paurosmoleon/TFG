import React from 'react';
import { Role } from '../../types/chat';
import TutorSVG from '../../assets/icons/TutorSVG';
import ProfesorSVG from '../../assets/icons/ProfesorSVG';
import AlumnSVG from '../../assets/icons/AlumnSVG';
interface RoleIconProps {
  role: Role;
  className?: string;
}

const RoleIcon: React.FC<RoleIconProps> = ({ role }) => {
  switch (role) {
    case 'practice_tutor':
      return <TutorSVG className="h-20 w-20" />;
    case 'student':
      return <AlumnSVG className="h-20 w-20" />;
    case 'teacher_class':
      return <ProfesorSVG className="h-20 w-20" />;
    default:
      return null;
  }
};

export default RoleIcon;