import Image from 'next/image';
import React from 'react';

 export default function MiddleSection() {
  return (

    <>
    <div className="w-20 " style={{
      right: '-420px',
    //   marginRight: '-580px',
      background: 'repeating-linear-gradient(to right, #B9A0FF 20px, #B9A0FF 20px, #B9A0FF 40px)',
      zIndex:'99999999999999999999',
      marginRight:"-120px"
    }}>
   
    <div className='z-40 flex flex-col justify-center mr-0 text-nowrap '>
       <div className='middle-section'>
       <p className='text-2xl font-normal leading-8 text-black' style={{ 
       marginTop:"-18rem",
       transform: ' rotate(90deg)', 
    
     
     }}>
       Event: Oasis Bus tour, JLN Stadium, Delhi
     </p>
     <div className='' style={{ 
    
       transform: 'translateY(-50%)' ,
      
     }}>
       <Image
         className="inline"
         src="/assets/star.png"
         alt="icons"
         width={35}
         height={20}
         style={{ 
     
     textAlign:"center",
     justifyItems:"center",
        marginBottom:"-47rem",
       marginLeft:"25px",
       marginTop:"12rem"
     }}
         
       />
     </div>
     <p className='text-2xl font-normal leading-8 text-black' style={{ 
       top: '100%', 
       transform: ' rotate(90deg)', 
       marginTop:"32rem"
      
   
     }}>
       Collection Live: Meta Lives, live on Astrix
     </p>
     
       </div>
      </div>
   <div>

   </div>
    </div>
     </>
  
  );
}
