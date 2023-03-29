import React from 'react';
import WhatsApp from '../images/icon.png';

function WhatsBar() {
  return (
    <div>
      <nav>
        <button type='button'>
          <img
            className='bg-[#00B6DE] rounded-full sm:p-2 w-52 mt-72 mb-8 lg:mt-96 mb-12'
            src={WhatsApp}
            alt='WhatsApp'
          />
        </button>
      </nav>
    </div>
  );
}

export default WhatsBar;
