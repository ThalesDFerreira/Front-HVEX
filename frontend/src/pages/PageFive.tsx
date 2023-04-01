import React from 'react';
import '../styles/pages/PageFive.css';

function PageFive() {
  return (
    <section className='flex justify-center items-center w-full h-full bg-[#1C2C44]'>
      <div className='text-center max-w-md h-auto mt-2 px-2 py-2'>
        <h1 className='text-[#FDFDFD] font-bold text-lg lg:text-2xl'>
          Quer saber mais sobre como podemos te ajudar a melhorar a performance
          de seus ativos?
        </h1>
        <hr className='bg-[#00B6DE] h-1 mt-4 mx-auto w-16' />
        <button className='text-[#00D1FF] border-2 border-solid rounded-md border-[#00B6DE] py-2 px-2 mt-4 mb-4 text-sm lg:text-xl'>
          Falar com um consultor
        </button>
      </div>
    </section>
  );
}

export default PageFive;
