import Image from 'next/image';

import React from 'react';
import SlidePage from '../SlidePage';

function LeftSection() {
  return (
    <>
    <div className='px-10'>
    
      <div
      
      >
        <Image
          className="inline"
          src="/assets/AstrixBranding.png"
          alt="icons"
          width={60}
          height={60}
        />
        <Image
          className="inline"
          src="/assets/Logo.png"
          alt="icons"
          width={131}
          height={64}
          style={{
            width: '131px',
            height: '64px',
          }}
        />
      </div>
      <div className="carousel__container ">
  {/* <SliderPage/> */}
  <SlidePage />
    </div>
    </div>

    </>
  );
}

export default LeftSection;
