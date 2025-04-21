import { Link } from 'react-router-dom';
import '../assets/styles/landing.css';
export default function Landing() {
  return (
    <main>
      <h1>Landing de aredia</h1>
      <Link to="/dashboard">Ir al Dashboard</Link>
      <Link to="/aboutus">Sobre Nosotros</Link>
      <div className="landing-container">
        <div id="div-img">
          <img id="logo-img" src="/whale-no-background.png" alt="logo" />
        </div>

        <section className="landing-content">
          <div className="content-box">
            <h2>Característica 1</h2>
            <p>Pau es Gay</p>
          </div>
          <div className="content-box">
            <h2>Característica 2</h2>
            <p>Pau es MUY gay</p>
          </div>
          <div className="content-box">
            <h2>Característica 3</h2>
            <p>Pau es tan gay que le gime a las cartas del poker</p>
          </div>
        </section>
      </div>
    </main>
  );
}
