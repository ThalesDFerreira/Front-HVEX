import React from 'react';
import '../styles/pages/PageFour.css';
import iconCerto from '../images/Vector3.png';

function PageFour() {
  return (
    <section className='flex bg-[#ffffff] h-full'>
      <div className="flex h-full bg-[url('../images/tranformer.png')] bg-no-repeat bg-right sm:bg-[length:350px_400px] mb-4 ml-4 mr-4 md:bg-[length:500px_450px] ml-6 mr-12 lg:bg-[length:500px_450px] ml-6 mb-12 mr-24 xl:bg-[length:500px_450px] mb-12 mr-24">
        <div className='flex-wrap sm:ml-4 mt-4 mb-6 mr-64 md:ml-12 mt-4 mb-6 mr-72 lg:ml-32 mt-4 mb-6 mr-96 xl:lg:ml-32 mt-4 mb-6 mr-96'>
          <h1 className='text-[#1B2033] font-bold sm:text-xl md:text-2xl mt-8 lg:text-4xl'>
            Desenvolvido para melhorar a performance dos ativos de distribuição
          </h1>
          <hr className='bg-[#00B6DE] w-24 h-1 mt-2' />
          <div className='mt-6 text-[#373737] font-bold sm:text-xs lg:text-base xl:mt-8 text-lg'>
            <ul>
              <li className='flex mt-3 items-center'>
                <img src={iconCerto} alt='-->' />
                <h3 className='ml-1'>Balanço energético</h3>
              </li>
              <li className='flex mt-3 items-center'>
                <img src={iconCerto} alt='-->' />
                <h3 className='ml-1'>Auto-diagnóstico dos transformadores</h3>
              </li>
              <li className='flex mt-3 items-center'>
                <img src={iconCerto} alt='-->' />
                <h3 className='ml-1'>
                  Medidor ideal para consumidores comerciais, industriais
                </h3>
              </li>
              <li className='flex mt-3 items-center'>
                <img src={iconCerto} alt='-->' />
                <h3 className='ml-1'>À prova de fraude</h3>
              </li>
              <li className='flex mt-3 mb-3 items-center'>
                <img src={iconCerto} alt='-->' />
                <h3 className='ml-1'>
                  Melhoria dos Indicadores de Continuidade
                </h3>
              </li>
              <li className='flex mt-3 mb-3 items-center'>
                <img src={iconCerto} alt='-->' />
                <h3 className='ml-1'>Maior vida útil do ativo</h3>
              </li>
              <li className='flex mt-3 mb-3 items-center'>
                <img src={iconCerto} alt='-->' />
                <h3 className='ml-1'>
                  Acompanhamento em tempo real das condições do equipamento
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageFour;
