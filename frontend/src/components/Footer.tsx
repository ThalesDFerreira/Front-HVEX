import React from 'react';
import '../styles/components/Footer.css';
import logo from '../images/Vector.png';
import linkedin from '../images/linkedin.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import youtube from '../images/youtube.png';

function Footer() {
  const numberTel = '(35) 3622-2699';

  return (
    <footer className='bg-[#1C2C44] text-white'>
      <div className='max-w-7xl mx-auto px-4 py-8 flex flex-wrap justify-between items-center'>
        <div className='flex-shrink-0'>
          <img className='w-24 sm:w-32' src={logo} alt='HVEX' />
        </div>
        <div className='flex-1 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:ml-8 sm:mr-12'>
          <div>
            <h3 className='text-[#52E0FF] text-xs font-bold mb-2'>Endereço</h3>
            <p className='text-sm'>
              R. Ismael Pinto de Noronha, 86 - Nossa Sra. de Fatima, Itajubá -
              MG, 37502-508
            </p>
          </div>
          <div>
            <h3 className='text-[#52E0FF] text-xs font-bold mb-2'>Contato</h3>
            <p className='text-sm'>{numberTel}</p>
            <p className='text-sm'>contato@hvex.com.br</p>
          </div>
        </div>
        <div className='mt-8 sm:mt-0'>
          <h3 className='flex justify-start text-[#52E0FF] text-xs font-bold mb-2'>
            Confira nossa redes
          </h3>
          <div className='flex items-center space-x-4 sm:space-x-6'>
            <button className='rounded-full bg-[#00B6DE] w-10 h-10 flex items-center justify-center'>
              <img className='w-6' src={linkedin} alt='Linkedin' />
            </button>
            <button className='rounded-full bg-[#00B6DE] w-10 h-10 flex items-center justify-center'>
              <img className='w-6' src={facebook} alt='Facebook' />
            </button>
            <button className='rounded-full bg-[#00B6DE] w-10 h-10 flex items-center justify-center'>
              <img className='w-6' src={instagram} alt='Instagram' />
            </button>
            <button className='rounded-full bg-[#00B6DE] w-10 h-10 flex items-center justify-center'>
              <img className='w-6' src={youtube} alt='Youtube' />
            </button>
          </div>
        </div>
      </div>
      <hr className='border-t-4 border-white my-8 mx-4 sm:mx-20' />
      <div className='max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center'>
        <p className='text-sm sm:order-2'>
          HVEX © 2021 | Todos os direitos reservados.
        </p>
        <div className='flex space-x-4 sm:order-1'>
          <p className='text-sm'>Políticas de Privacidade</p>
          <p className='text-sm'>Termos de Uso</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
