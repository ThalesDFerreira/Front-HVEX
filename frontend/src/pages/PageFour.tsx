import React from 'react';
import '../styles/pages/PageFour.css';
import iconCerto from '../images/Vector3.png';

function PageFour() {
  return (
    <section className='bg-[#ffffff] h-full '>
      <div className="h-full bg-[url('../images/tranformer.png')] bg-no-repeat bg-right-top h-max sm:bg-[length:250px_380px] mb-6 mt-8 ml-6 mr-6 md:bg-[length:300px_400px] mt-8 ml-6 mr-6 lg:bg-[length:300px_400px] mt-8 ml-6 mr-6 xl:bg-[length:300px_400px] mb-8 mr-24">
        <div className='sm:ml-10 mt-10 mr- md:mt-36 lg:mt-36 xl:mt-36'>
          <h1>
            Desenvolvido para melhorar a performance dos ativos de distribuição
          </h1>
          <hr className='bg-[#00B6DE] w-24 h-1' />
          <div className='mt-4 text-[#373737] font-bold sm:text-xs lg:text-base xl:mt-8 text-lg'>
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
