import React from 'react';
import '../styles/pages/HomePage.css';

function HomePage() {
  return (
    <section className='bg-[#1B2033] h-full'>
      <div className="h-full flex space-y-4 bg-[url('../images/image1.png')] bg-no-repeat bg-right-top h-max sm:bg-[length:300px_400px] mr-6 md:bg-[length:400px_550px] mr-20 lg:bg-[length:400px_600px] mr-46">
        <div className="flex-wrap sm:ml-16 mt-16 mr-52 md:ml-36 lg:ml-60 mt-36 mr-60">
          <h1 className='text-[#FDFDFD] font-bold sm:text-xl md:text-2xl lg:text-4xl'>
            Tenha Informações em tempo real das condições dos ativos e com o
            monitoramento inteligente
          </h1>
          <h4 className='text-[#FDFDFD] sm:text-xs mt-5 md:text-xs lg:text-lg mt-8'>
            Tenha acesso a informações em tempo real, administração remota de
            dados importantes da rede elétrica como: tensão, corrente, potência
            passante, energia, temperatura, sobrecarga entre outros, mapeando
            seu funcionamento, prevendo a vida útil dos ativos e aferindo perdas
            técnicas e não técnicas.
          </h4>
          <button className='text-[#FDFDFD] bg-[#00B6DE] rounded sm:text-xs mt-8 mb-8 p-1 md:text-sm mt-12 mb-12 lg:p-2 lg:text-xl mt-24 mb-24'>
            Quero mais informações
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
