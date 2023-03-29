import React from 'react';
import '../styles/components/Header.css';
import Logo from '../images/Vector.png';

function Header() {
  return (
    <div className='Header w-full flex bg-[#252835] items-center justify-between'>
      <div className='flex sm:ml-10 md:ml-20 lg:ml-32'>
        <img
          className='img-logo sm:w-24 mt-3 mb-5 p-1 md:w-28 lg:w-30'
          src={Logo}
          alt='HVEX'
        />
      </div>
      <nav className='flex  items-center sm:text-sm space-x-3 p-1 mr-2 md:text-md space-x-6 lg:text-lg space-x-8 xl:space-x-20 mr-12'>
        <h3 className='btn-omni text-[#00B6DE]'>
          <button type='button'>Omni trafo</button>
        </h3>
        <h3 className='btn-sinalizador text-[#FFFFFF]'>
          <button type='button'>Sinalizador de faltas</button>
        </h3>
        <h3 className='btn-acoplador text-[#FFFFFF]'>
          <button type='button'>Acoplador DP</button>
        </h3>
        <h5 className='btn-comprar text-[#00B6DE] border-2 border-solid rounded-md border-[#00B6DE] p-1 md:p-3'>
          <button type='button'>Comprar agora</button>
        </h5>
      </nav>
    </div>
  );
}

export default Header;
