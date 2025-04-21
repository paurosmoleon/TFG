import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <main>
      <h1>Landing de aredia</h1>
      <Link to="/dashboard">Ir al Dashboard</Link>
      <Link to="/aboutus">Sobre Nosotros</Link>
    </main>
  );
}
