import React from 'react';
import '../styles/components/Header.css';
import Logo from '../images/Vector.png';

function Header() {
  return (
    <div className='Header'>
      <div>
        <img className='logo-img' src={Logo} alt='HVEX' />
      </div>
      <div>
        <h3 className="omni">
          <button>Omni trafo</button>
        </h3>
        <h3 className="sinalizador">
          <button>Sinalizador de faltas</button>
        </h3>
        <h3>
          <button>Acoplador DP</button>
        </h3>
        <h4>
          <button>Comprar agora</button>
        </h4>
      </div>
    </div>
  );
}

export default Header;
