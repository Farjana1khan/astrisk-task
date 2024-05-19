import LeftSection from "@/Components/LeftSection";
import MiddleSection from "@/Components/MiddleSection";
import RightSection from "@/Components/RightSection";

export default function Home() {
  return (
    <>
     
 <div  className='flex justify-between grid-cols-2 mx-48 bg-[#15181B]'>
 <LeftSection/>
 <MiddleSection/>
 <RightSection/>

 </div>


</>

  );
}
