import React from 'react';
import '../styles/pages/PageOne.css';
import imgProtecao from '../images/imgProtecao.png';
import imgIntegracao from '../images/imgIntegracao.png';
import imgGestao from '../images/imgGestao.png';
import imgComunicacao from '../images/imgComunicacao.png';

function PageTwo() {
  return (
    <section className='bg-[#1B2033] h-full flex'>
      <div className='w-full mt-10 mb-10 ml-10 mr-5'>
        <h1 className='font-bold text-[#FFFFFF] text-lg mt-5'>OMNI TRAFO</h1>
        <h1 className='font-bold text-[#52E0FF] text-lg mt-5'>
          É o dispositivo capaz de integrar os transformadores as redes
          inteligentes
        </h1>
        <h4 className='text-[#FFFFFF] text-sm mt-5'>
          O Omni Trafo envia informações em tempo real, permitindo a
          administração remota de dados importantes da rede elétrica, como
          tensão, corrente, potência passante, energia, temperatura, sobrecarga
          entre outros, mapeando seu funcionamento, prevendo a vida útil dos
          ativos e aferindo perdas técnicas e não técnicas.
        </h4>
      </div>
      <div className='text-[#52E0FF] w-full mt-20 mb-10 ml-5 mr-10 font-bold text-sm'>
        <div className='flex text-center'>
          <div className='border-[#52E0FF] border-2 rounded bg-[#1C2C44]'>
            <img className='p-2' src={imgProtecao} alt='Sistema de Proteção' />
            <p className=''>Sistema de Proteção</p>
          </div>
          <div className='border-[#52E0FF] border-2 rounded bg-[#1C2C44] ml-5'>
            <img className='p-2' src={imgIntegracao} alt='Integração de dados' />
            <p className=''>Integração de dados</p>
          </div>
        </div>
        <div className='flex mt-3 text-center'>
          <div className='border-[#52E0FF] border-2 rounded bg-[#1C2C44]'>
            <img
              className='p-2'
              src={imgGestao}
              alt='Gestão de Ativos Elétricos'
            />
            <p className=''>Gestão de Ativos Elétricos</p>
          </div>
          <div className='border-[#52E0FF] border-2 rounded bg-[#1C2C44] ml-5'>
            <img
              className='p-2'
              src={imgComunicacao}
              alt='Comunicação inteligente'
            />
            <p className=''>Comunicação inteligente</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageTwo;
