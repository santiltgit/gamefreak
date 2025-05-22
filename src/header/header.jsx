import React from 'react';

function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="logo-container">
          <h1>GameFreak</h1>
          <span className="subtitle">SHOP</span>
        </div>
        <nav>
          <a href="#tienda">TIENDA</a>
          <a href="#biblioteca">BIBLIOTECA</a>
          <a href="#comunidad">COMUNIDAD</a>
          <a href="#soporte">SOPORTE</a>
        </nav>
        <div className="user-actions">
          <button className="install-button">Instalar Steam</button>
          <a href="#login" className="login-link">iniciar sesión</a>
        </div>
      </div>
    </header>
  );
}

export default Header;