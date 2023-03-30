import React from 'react';
import '../styles/pages/PageThree.css';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import icon5 from '../images/icon5.png';
import icon6 from '../images/icon6.png';
import icon7 from '../images/icon7.png';
import icon8 from '../images/icon8.png';

function PageThree() {
  return (
    <section className='bg-[#ffffff] h-full '>
      <div className="h-full bg-[url('../images/image2.png')] bg-no-repeat bg-left-top h-max sm:bg-[length:250px_380px] mb-6 mt-8 ml-6 mr-6 md:bg-[length:300px_400px] mt-8 ml-6 mr-6 lg:bg-[length:400px_600px] mr-46">
        <div className='flex-wrap sm:ml-72 mt-4 mb-6 mr-8 md:ml-80 mt-1 mr-8 lg:ml-96 mt-36 mr-60'>
          <h1
            data-testid='title-page-three'
            className='text-[#1B2033] font-bold sm:text-xl md:text-2xl lg:text-4xl'
          >
            OMNI TRAFO
            <hr className='bg-[#00B6DE] w-24 h-1' />
          </h1>
          <h2 className='text-justify text-[#1C2C44] font-bold sm:text-xs mt-5 md:text-xs lg:text-lg'>
            Monitoramento inteligente de transformadores de distribuição
          </h2>
          <h4 className='text-justify text-[#1C2C44] sm:text-xs mt-2 mb-3 md:text-xs lg:text-lg'>
            O Omni trafo é uma solução consolidada para monitoramento de ativos.
            Através deste equipamento, informações importantes da rede são
            enviadas em tempo real , permitindo, assim, a administração remota
            de dados como:
          </h4>
          <div className='flex flex-wrap text-[#263238] text-xs m-2'>
            <div className='flex'>
              <div className='flex flex-wrap justify-center text-center'>
                <img
                  data-testid='image1'
                  className='rounded-full bg-[#1C2C44] w-10 h-10 p-2'
                  src={icon1}
                  alt='icon1'
                />
                <p>Monitoramento de tensão, corrente e carga;</p>
              </div>
              <div className='flex flex-wrap justify-center text-center'>
                <img
                  data-testid='image2'
                  className='rounded-full bg-[#1C2C44] w-10 h-10 p-2'
                  src={icon2}
                  alt='icon2'
                />
                <p>Análise de perda de vida útil do transformador;</p>
              </div>
              <div className='flex flex-wrap justify-center text-center'>
                <img
                  data-testid='image3'
                  className='rounded-full bg-[#1C2C44] w-10 h-10 p-2'
                  src={icon3}
                  alt='icon3'
                />
                <p>Medição do balanço energético de Perdas</p>
              </div>
              <div className='flex flex-wrap justify-center text-center'>
                <img
                  data-testid='image4'
                  className='rounded-full bg-[#1C2C44] w-10 h-10 p-2'
                  src={icon4}
                  alt='icon3'
                />
                <p>Detecção de faltas na rede elétrica</p>
              </div>
            </div>
            <div className='flex mt-4'>
              <div className='flex flex-wrap justify-center text-center'>
                <img
                  data-testid='image5'
                  className='rounded-full bg-[#1C2C44] w-10 h-10 p-2'
                  src={icon5}
                  alt='icon4'
                />
                <p>Análise de Fator de potência</p>
              </div>
              <div className='flex flex-wrap justify-center text-center'>
                <img
                  data-testid='image6'
                  className='rounded-full bg-[#1C2C44] w-10 h-10 p-2'
                  src={icon6}
                  alt='icon5'
                />
                <p>Harmônicas de corrente e tensão</p>
              </div>
              <div className='flex flex-wrap justify-center text-center'>
                <img
                  data-testid='image7'
                  className='rounded-full bg-[#1C2C44] w-10 h-10 p-2'
                  src={icon7}
                  alt='icon6'
                />
                <p>Medição de temperatura interna</p>
              </div>
              <div className='flex flex-wrap justify-center text-center mb-20'>
                <img
                  data-testid='image8'
                  className='rounded-full bg-[#1C2C44] w-10 h-10 p-2'
                  src={icon8}
                  alt='icon6'
                />
                <p>Supervisão de baixa tensão </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageThree;
