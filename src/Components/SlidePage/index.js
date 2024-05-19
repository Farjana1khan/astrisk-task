import React, { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const SliderPage = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleEventsClick = () => {
    setActiveTab(1);
    setCurrentSlide((prev) => (prev - 1 + 4) % 4); // Move left
  };

  const handleCollectionsClick = () => {
    setActiveTab(2);
    setCurrentSlide((prev) => (prev + 1) % 4); // Move right
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4); // Adjust 4 to totalSlides
    }, 3000);

    return () => clearInterval(timer);
  }, []);


  const handleBackClick = () => {
    setCurrentSlide((prev) => (prev - 1 + 4) % 4); // Adjust 4 to totalSlides
  };

  const handleNextClick = () => {
    setCurrentSlide((prev) => (prev + 1) % 4); // Adjust 4 to totalSlides
  };


  return (
    <div className="pl-0 -mr-48 mt-18 carousel__container" style={{ width: "900px" }}>
      <div>
        <Image
          className="inline"
          src="/assets/ASTRIXEVENTS.png"
          alt="icons"
          width={400}
          height={1200}
          style={{ width: "412px", height: "630px" }}
        />
      </div>
      <div className="-mt-[560px]">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={4}
          visibleSlides={1}
          isPlaying={false} // We handle the autoplay manually
          infinite={true}
          currentSlide={currentSlide}
        >
          <Slider>
            <Slide index={0} className="slide">
              <Image
                className="inline"
                src="/assets/image1.png"
                alt="icons"
                width={400}
                height={1200}
                style={{ width: "412px", height: "630px" }}
              />
            </Slide>
            <Slide index={1} className={currentSlide === 1 ? 'zoom' : ''}>
              <Image
        
                className={`inline image-opacity ${currentSlide === 1 ? '': 'opacity-90'}`}
                src="/assets/image2.png"
                alt="icons"
                width={800}
                height={1200}
                style={{ width: "412px", height: "630px" }}
              />
              <div className={`px-5 space-x-2 mt-44 text-container ${currentSlide === 1 ? 'hidden' : 'visible'}`}>
                <p className="text-[46px] leading-[71px] font-bold text-white text-start pl-3">Event Name</p>
                <div className="flex pt-4 space-x-4">
                  <Image
                    className="inline"
                    src="/assets/Icons.png"
                    alt="icons"
                    width={30}
                    height={30}
                  />
                  <p className="text-xl font-medium leading-6 text-white">Location</p>
                </div>
              </div>
            </Slide>
            <Slide index={2} className={currentSlide === 2 ? 'zoom' : ''}>
              <Image
               className={`inline image-opacity ${currentSlide === 2 ? '': 'opacity-90'}`}
                src="/assets/image3.png"
                alt="icons"
                width={800}
                height={1200}
                style={{ width: "412px", height: "630px" }}
              />
              <div className={`px-5 space-x-2 mt-44 text-container ${currentSlide === 2 ? 'hidden' : 'visible'}`}>
                <p className="text-[46px] leading-[71px] ml-0 font-bold text-white text-start pl-3">Event Name</p>
                <div className="flex pt-4 space-x-4">
                  <Image
                    className="inline"
                    src="/assets/Icons.png"
                    alt="icons"
                    width={30}
                    height={30}
                  />
                  <p className="text-xl font-medium leading-6 text-white">Location</p>
                </div>
              </div>
            </Slide>
            <Slide index={3}>
              <Image
                className="inline"
                src="/assets/image4.png"
                alt="icons"
                width={800}
                height={1200}
                style={{ width: "412px", height: "630px" }}
                
              />
            </Slide>
          </Slider>
          <div className="flex justify-end mt-20 mr-20">
            <div className="px-2 py-2 justify-center space-x-2 bg-[#a8a7a7] rounded-full">
              <ButtonBack className="justify-center custom-button" onClick={handleBackClick}>
                <FaAngleLeft />
              </ButtonBack>
              <ButtonNext className="justify-center custom-button"  onClick={handleNextClick}>
                <FaAngleRight />
              </ButtonNext>
            </div>
          </div>
        </CarouselProvider>
        <div className="flex justify-start mb-4 space-x-6 shadow-2xl max-md:gap-y-3 row bg-[#282B30] rounded-full w-[300px]">
          <button
            onClick={() => handleEventsClick(1)}
            className={`whitespace-nowrap items-center py-4 px-14 font-bold text-lg leading-4 rounded-full outline-none focus:ring-2 text-black ${
              activeTab === 1
                ? "bg-[#484E56] border-[#484E56] cursor-pointer text-white"
                : "bg-[#282B30] border-[#282B30] text-white cursor-default"
            }`}
          >
            Events
          </button>
          <button
            onClick={() => handleCollectionsClick(2)}
            className={`whitespace-nowrap items-center py-4 px-14 font-bold text-lg left-4 rounded-full outline-none focus:ring-2 text-black ${
              activeTab === 2
                ? "bg-[#484E56] border-[#484E56] text-white"
                : "bg-[#282B30] border-[#282B30] text-white"
            }`}
          >
            Collections
          </button>
        </div>
      </div>
      <style jsx>{`
        .zoom {
          animation: zoom-in-out 3s forwards;
        }
        @keyframes zoom-in-out {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        .text-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          text-align: center;
          z-index: 2; /* Ensure text is above the image */
        }
        .text-container.visible {
          visibility: visible;
        }
        .image-opacity{
            opacity:inherit;
        }


      `}</style>
    </div>
  );
};

export default SliderPage;
