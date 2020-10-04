import React from 'react';
import logoPath from '../images/logo.svg';

function Header() {
  return (
    <header className="header" >
    <img className="logo"  alt="Место в России" src={logoPath}/> 
    </header>
  );
}
export default Header;