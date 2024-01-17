import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <div className="logo-title">
        <img src="./logo.png" alt="logo" className="logo" />
      </div>
      <nav>
        <ul>
          <li><NavLink to="/" exact activeClassName="active">Accueil</NavLink></li>
          <li><NavLink to="/info" activeClassName="active">Réglement</NavLink></li>
          <li><NavLink to="/wiki" activeClassName="active">Comment jouer</NavLink></li>
          <li><NavLink to="/discord" activeClassName="active">Discord</NavLink></li>
          <li>
  <NavLink to="/Support" activeClassName="active" className="rejoindre-button">
    Rejoindre
  </NavLink>
</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;