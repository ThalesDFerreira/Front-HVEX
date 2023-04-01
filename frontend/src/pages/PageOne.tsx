import React from 'react';
import '../styles/pages/PageOne.css';
import iconCerto from '../images/Vector3.png';
import usinas from '../images/usinas.png';

function PageOne() {
  return (
    <section className='bg-[#FDFDFD] h-full flex'>
      <div className='ml-10 mt-28 mb-16'>
        <img className='w-[90rem]' src={usinas} alt='usina-template' />
      </div>
      <div className='sm:ml-10 mt-24 mr-10 md:mt-44 lg:mt-52 xl:mt-52'>
        <h1 className='text-[#115678] font-bold sm:text-base lg:text-xl xl:text-3xl'>
          Seja bem-vindo a era da energia inteligente
        </h1>
        <p className='sm:text-xs mt-4 lg:text-base xl:text-lg xl:mt-8'>
          As redes inteligentes são um caminho sem volta, o desenvolvimento e
          disceminação de dispositivos de medição e monitoramento são as
          ferramentas para redução de custos, perdas e trazem mais
          previsibilidade para as utilities de energia.
        </p>
        <div className='mt-4 text-[#373737] font-bold sm:text-xs lg:text-base xl:mt-8 text-lg'>
          <ul>
            <li className='flex mt-3 items-center'>
              <img src={iconCerto} alt='-->' />
              <h3 className='ml-1'>Monitoramento inteligente de ativos</h3>
            </li>
            <li className='flex mt-3 items-center'>
              <img src={iconCerto} alt='-->' />
              <h3 className='ml-1'>Melhoria dos indicadores de continuidade</h3>
            </li>
            <li className='flex mt-3 items-center'>
              <img src={iconCerto} alt='-->' />
              <h3 className='ml-1'>Comunicação Modular</h3>
            </li>
            <li className='flex mt-3 items-center'>
              <img src={iconCerto} alt='-->' />
              <h3 className='ml-1'>Business Inteligence</h3>
            </li>
            <li className='flex mt-3 mb-3 items-center'>
              <img src={iconCerto} alt='-->' />
              <h3 className='ml-1'>
                Redução de Perdas técnicas e Não técnicas
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PageOne;
