import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const SliderPage = () => {
  const [activeTab, setActiveTab] = useState(1);
  
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex === activeTab ? 1 : tabIndex);
   
  };

  return (
    <div className="mt-24 pr-96 carousel__container" style={{
      width:"1250px"
    }}>
    <div>
    <Image
              className="inline "
              src="/assets/ASTRIXEVENTS.png"
              alt="icons"
              width={400}
              height={1200}
              style={{
                width: "412px",
                height: "630px",
              }}
            />
    </div>
    <div className=" -mt-[560px]">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={4}
        visibleSlides={1}
        isPlaying={true}
        interval={3000} // 3 seconds interval
        infinite={true}
      >
        <Slider>
          <Slide index={0} className="slide">
            <Image
              className="inline "
              src="/assets/image1.png"
              alt="icons"
              width={400}
              height={1200}
              style={{
                width: "412px",
                height: "630px",
              }}
            />
          
          </Slide>
          <Slide index={1} className="zoom">
            <Image
              className="inline "
              src="/assets/image2.png"
              alt="icons"
              width={800}
              height={1200}
              style={{
                width: "412px",
                height: "630px",
              }}
            />
            
            <div className="px-5 -mt-56 space-x-2">
           
           <p className="text-[46px] leading-[71px] font-bold text-white">Event Name</p>
           <div className="flex pt-4 space-x-4">
           <Image
             className="inline"
             src="/assets/Icons.png"
             alt="icons"
             width={30}
             height={30}
           /> 
           <p className="text-xl font-medium leading-6 text-white ">Location</p>
           </div>
         </div> 

          </Slide>
          <Slide index={2} className="zoom">
            <Image
              className="inline "
              src="/assets/image3.png"
              alt="icons"
              width={800}
              height={1200}
              style={{
                width: "412px",
                height: "630px",
              }}
            />
             <div className="px-5 -mt-56 space-x-2">
           
           <p className="text-[46px] leading-[71px] font-bold text-white">Event Name</p>
           <div className="flex pt-4 space-x-4">
           <Image
             className="inline"
             src="/assets/Icons.png"
             alt="icons"
             width={30}
             height={30}
           /> 
           <p className="text-xl font-medium leading-6 text-white ">Location</p>
           </div>
         </div> 
          </Slide>
          <Slide index={3}>
            <Image
              className="inline "
              src="/assets/image4.png"
              alt="icons"
              width={800}
              height={1200}
              style={{
                width: "412px",
                height: "630px",
              }}
            />
            
          </Slide>
        </Slider>
       <div className="flex justify-end mt-4">
      <div className="px-2 py-2 justify-center  space-x-2 bg-[#a8a7a7] rounded-full">
      <ButtonBack className="justify-center custom-button ">
        <FaAngleLeft />
        </ButtonBack>
        <ButtonNext className="justify-center custom-button">
        <FaAngleRight />
        </ButtonNext>
      </div>
       </div>
       
      </CarouselProvider>
      


    
      <div className="flex justify-start  mb-4 space-x-6 shadow-2xl  max-md:gap-y-3 row bg-[#282B30] rounded-full w-[300px]">
                    <button
                      onClick={() => handleTabClick(1)}
                      className={` whitespace-nowrap items-center py-4 px-14 font-bold text-lg leading-4 rounded-full outline-none focus:ring-2  text-black ${
                        activeTab === 1
                        ? " bg-[#484E56] border-[#484E56] text-white"
                          : "bg-[#282B30] border-[#282B30] text-white"
                      }`}
                    >
                     Events
                    </button>
                    <button
                      onClick={() => handleTabClick(2)}
                      className={` whitespace-nowrap items-center py-4 px-14 font-bold text-lg left-4 rounded-full outline-none focus:ring-2 text-black  ${
                        activeTab === 2
                          ? " bg-[#484E56] border-[#484E56] text-white"
                          : "bg-[#282B30] border-[#282B30] text-white"
                      }`}
                    >
                     Collections
                    </button>
                  </div>

                  </div>
    </div>
  );
};

export default SliderPage;
