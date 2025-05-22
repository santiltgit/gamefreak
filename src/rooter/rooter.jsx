import React from 'react';

function Rooter() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ACERCA DE GAMEFREAK</h3>
          <nav>
            <a href="#about">Acerca de</a>
            <a href="#jobs">Empleo</a>
            <a href="#press">Centro de prensa</a>
          </nav>
        </div>
        <div className="footer-section">
          <h3>AYUDA</h3>
          <nav>
            <a href="#support">Soporte</a>
            <a href="#refunds">Reembolsos</a>
            <a href="#status">Estado del servidor</a>
          </nav>
        </div>
        <div className="footer-section">
          <h3>REDES SOCIALES</h3>
          <nav className="social-links">
            <a href="#twitter">Twitter</a>
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
          </nav>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 GameFreak Corporation. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Rooter;
