import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  function test() {
    console.log("clignoter");
    
  }
  return (
    <header className="Header">
      <div className="logo-title">
        <img src="./logo.png" alt="logo" className="logo" />
        <h1>Ynov RP</h1>
      </div>
      <nav>
        <ul>
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/info" activeClassName="active">Info</NavLink></li>
          <li><NavLink to="/wiki" activeClassName="active">Wiki</NavLink></li>
          <li><NavLink to="/discord" activeClassName="active">Discord</NavLink></li>
          <li><NavLink to="/Support" activeClassName="active">Support</NavLink></li>
        </ul>
      </nav>
      <button onClick={test}>test</button>
    </header>
  );
}

export default Header;