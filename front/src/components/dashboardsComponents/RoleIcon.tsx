import React from 'react';
import TutorSVG from '../../assets/icons/TutorSVG';
import ProfesorSVG from '../../assets/icons/ProfesorSVG';
import AlumnSVG from '../../assets/icons/AlumnSVG';

interface RoleIconProps {
  accountType?: 'practices_tutor' | 'student' | 'teacher_class';
  className?: string;
}

const RoleIcon: React.FC<RoleIconProps> = ({ accountType, className }) => {
  switch (accountType) {
    case 'practices_tutor':
      return <TutorSVG className={className} />;
    case 'teacher_class':
      return <ProfesorSVG className={className} />;
    case 'student':
    default:
      return <AlumnSVG className={className} />;
  }
};

export default RoleIcon;
