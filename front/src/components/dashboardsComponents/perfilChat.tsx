import Profile from './Profile';

const PerfilChat: React.FC = () => {
  return (
    <Profile
      name="Juan Pérez"
      phone="+34 600 123 456"
      dni="12345678A"
      role="teacher_class"
      empresa="Empresa XYZ"
    />
  );
};

export default PerfilChat;
