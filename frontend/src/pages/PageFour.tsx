import React from 'react';
import '../styles/pages/PageFour.css';
import iconCerto from '../images/Vector3.png';

function PageFour() {
  return (
    <section className='bg-[#ffffff] h-full flex'>
      <div className="flex h-full bg-[url('../images/tranformer.png')] bg-no-repeat bg-right-top h-max sm:bg-[length:350px_400px] mb-6 ml-6 mr-6 md:bg-[length:300px_400px] mt-8 ml-6 mr-6 lg:bg-[length:300px_400px] mt-8 ml-6 mr-6 xl:bg-[length:300px_400px] mb-8 mr-24">
        <div className='flex-wrap sm:ml-4 mt-4 mb-6 mr-56 md:ml-80 mt-1 mr-8 lg:ml-96 mt-36 mr-12'>
          <h1 className='text-[#1B2033] font-bold sm:text-xl md:text-2xl lg:text-4xl'>
            Desenvolvido para melhorar a performance dos ativos de distribuição
          </h1>
          <hr className='bg-[#00B6DE] w-24 h-1 mt-2'/>
          <div className='mt-6 text-[#373737] font-bold sm:text-xs lg:text-base xl:mt-8 text-lg'>
            <ul>
              <li className='flex mt-3 items-center'>
                <img src={iconCerto} alt='-->' />
                <h3 className='ml-1'>Monitoramento inteligente de ativos</h3>
              </li>
              <li className='flex mt-3 items-center'>
                <img src={iconCerto} alt='-->' />
                <h3 className='ml-1'>
                  Melhoria dos indicadores de continuidade
                </h3>
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
      </div>
    </section>
  );
}

export default PageFour;
