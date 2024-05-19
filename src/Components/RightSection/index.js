import Image from "next/image";
import React from "react";

function RightSection() {
  return (
    <>
    
      <div className="px-10 py-10 text-white">
        <p className="text-[26px] font-bold leading-8 w-80">
          Explore Youre First Event
        </p>
        <h2 className="text-[57px] font-bold leading-[71px] pt-10">
          Event Name
        </h2>
        <div className="flex justify-between grid-cols-3 pt-4">
          <div className="flex space-x-2">
            <Image
              className="inline"
              src="/assets/Icons.png"
              alt="icons"
              width={30}
              height={30}
            />
            <p className="text-[22px] leading-7 font-semibold">Venue</p>
          </div>
          <div className="flex space-x-2 pl-14">
            <Image
              className="inline"
              src="/assets/timer.png"
              alt="icons"
              width={30}
              height={30}
            />
            <p className="text-[22px] leading-7 font-semibold">
              04/3/2024 @19:00
            </p>
          </div>
        </div>
        <div className="pt-4 w-60">
          <p className="text-base font-semibold leading-6">
            Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et
            sed ipsum. Pellentesque mattis condimentum ut nulla.{" "}
          </p>
          <p className="text-[26px] font-semibold leading-8 pt-4">
            Artist Lineup
          </p>
        </div>
        <div className="flex justify-center mt-20">
          <div>
            <Image
              className="inline"
              src="/assets/image 157.png"
              alt="icons"
              width={145}
              height={150}
              style={{
                borderTopLeftRadius:"8px",
                borderBottomLeftRadius:"8px"
              }}
            
            />
          </div>
          <div>
            <Image
              className="inline"
              src="/assets/Image14.png"
              alt="icons"
              width={192}
              height={80}
              style={{
                width: " 192px",
                height: "198px",
                marginTop: "-26px",
                borderRadius:"8px"
              }}
            />
          </div>
          <div>
            <Image
              className="inline"
              src="/assets/image 158.png"
              alt="icons"
              width={145}
              height={150}
              style={{
                borderTopRightRadius:"8px",
                borderBottomRightRadius:"8px"
              }}
            />
          </div>
        </div>
        <div className="flex justify-between mt-20">
          <div>
            <Image
              className="inline"
              src="/assets/image 131.png"
              alt="icons"
              width={105}
              height={105}
              style={{
                borderTopLeftRadius:"8px",
                borderBottomLeftRadius:"8px"
              }}
            
            />
          </div>
          <div className="justify-center "><button className="bg-[#FFCA5F] mt-[58px] border-[#FFCA5F] rounded-[40px] font-bold text-2xl leading-8 text-[#1A1D21] py-2 px-5">
            Join Waitlist
          </button></div>
          </div>
      </div>


    </>
  );
}

export default RightSection;
