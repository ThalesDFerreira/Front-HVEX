import React from 'react';
import '../styles/pages/PageOne.css';
import imgProtecao from '../images/imgProtecao.png';
import imgIntegracao from '../images/imgIntegracao.png';
import imgGestao from '../images/imgGestao.png';
import imgComunicacao from '../images/imgComunicacao.png';

function PageTwo() {
  return (
    <section className='bg-[#1B2033] h-full flex'>
      <div className='w-full sm:mt-20 mb-10 ml-10 mr-5 md:ml-24 mr-16 lg:ml-42 mr-16'>
        <h1
          data-testid='title-page-two'
          className='font-bold text-[#FFFFFF] sm:text-lg mt-5'
        >
          OMNI TRAFO
        </h1>
        <h1 className='font-bold text-[#52E0FF] sm:text-lg mt-5'>
          É o dispositivo capaz de integrar os transformadores as redes
          inteligentes
        </h1>
        <h4 className='text-[#FFFFFF] sm:text-sm mt-5'>
          O Omni Trafo envia informações em tempo real, permitindo a
          administração remota de dados importantes da rede elétrica, como
          tensão, corrente, potência passante, energia, temperatura, sobrecarga
          entre outros, mapeando seu funcionamento, prevendo a vida útil dos
          ativos e aferindo perdas técnicas e não técnicas.
        </h4>
      </div>
      <div className='text-[#52E0FF] font-bold sm:mt-20 mb-10 ml-5 mr-16 text-sm'>
        <div className='flex text-center m-2'>
          <div className='border-[#52E0FF] border-2 rounded-lg bg-[#1C2C44] flex flex-wrap justify-center'>
            <img
              className='w-20 h-20 m-2'
              src={imgProtecao}
              alt='Sistema de Proteção'
            />
            <p className='p-3 text-xs'>Sistema de Proteção</p>
          </div>
          <div className='border-[#52E0FF] border-2 rounded-lg bg-[#1C2C44] flex flex-wrap justify-center ml-3'>
            <img
              className='w-20 h-20 m-2'
              src={imgIntegracao}
              alt='Integração de dados'
            />
            <p className='p-3 text-xs'>Integração de dados</p>
          </div>
        </div>
        <div className='flex text-center m-2'>
          <div className='border-[#52E0FF] border-2 rounded-lg bg-[#1C2C44] flex flex-wrap justify-center'>
            <img
              className='w-20 h-20 m-2 ml-6 mr-6'
              src={imgGestao}
              alt='Gestão de Ativos Elétricos'
            />
            <p className='p-2 text-xs'>Gestão de Ativos Elétricoso</p>
          </div>
          <div className='border-[#52E0FF] border-2 rounded-lg bg-[#1C2C44] flex flex-wrap justify-center ml-3'>
            <img
              className='w-20 h-20 m-2'
              src={imgComunicacao}
              alt='Integração de dados'
            />
            <p className='p-2 text-xs'>Detecção de faltas na rede elétrica</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageTwo;
