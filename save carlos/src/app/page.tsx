import React from 'react';
import './landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <header className="landing-header">
        <h1>Bienvenido a MalitosSA</h1>
        <p>Descubre algo increíble hoy</p>
        <button className="landing-button">Comenzar</button>
      </header>
      <div id="div-img">
        <img id="logo-img" src="/media/img/logo-tfg.png" alt="logo" />
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

      <footer className="landing-footer">
        <p>
          &copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
};

export default Landing;
