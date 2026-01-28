import React, { useState } from 'react'
import Lotus from '../icons/Lotus'
import Frame from '../components/Frame'
import Notify from '../components/Notify'
import Facebook from '../icons/Facebook'
import Instagram from '../icons/Instagram'
import X from '../icons/X'
import Cup from '../icons/Cup'
import Nav from '../components/Logo'
import Logo from '../components/Logo'
const Hero = () => {


 
  
  const [head,setHead] = useState("")
  const [bg,setBg] = useState("")

const colorPalette = [
  {
    id: 1,
    head: "#4E342E", // Deep Royal Brown
    bg: "#F7F1E5",   // Warm Cream
  },
  {
    id: 2,
    head: "#6F4E37", // Coffee Brown
    bg: "#EFE6D8",   // Soft Cream
  },
  {
    id: 3,
    head: "#C9A24D", // Royal Gold
    bg: "#FFF6D6",   // Light Gold Cream
  },
  {
    id: 4,
    head: "#8B5A2B", // Caramel Brown
    bg: "#F3E7D3",   // Beige Cream
  },
  {
    id: 5,
    head: "#3B2F2F", // Dark Chocolate Brown
    bg: "#EDE3CF",   // Antique Cream
  },
];


const handlechange = (head,bg)=>{
  setBg(bg);
  setHead(head)
}


console.log(head,bg)
  return (
    <div className='min-h-screen w-full relative z-20  bg-[#FAEED1]' style={{backgroundColor:head}}>
     

       <div className="fixed right-2 top-[70%] z-50 bg-black py-5 rounded-full min-h-[30px] w-[50px] flex-col flex gap-3 justify-center items-center md:right-5 md:top-[50%]">
       
       
        {colorPalette.map((item,index)=>(
          <div className="flex" key={item.head} onClick={()=>handlechange(item.bg,item.head)}>
            <div className="px-2 py-2 rounded-l-full" style={{backgroundColor:item.head}}></div>
             <div className="px-2 py-2 rounded-r-full" style={{backgroundColor:item.bg}}></div>

          </div>
        ))}
      </div>
      <Frame />
        
        <div className="h-[50vh]  w-full flex justify-end flex-col items-center md:leading-[100px]">
          <Logo/>
          <div className="flex justify-center items-center gap-3"><h1 className='text-nowrap text-white uppercase text-sm font-extralight px-5 py-[2px] rounded-full bg-[#5e4337]'>Launching soon</h1><Cup/></div>
            <h1 className={`text-[40px]  font-head text-center text-[#797069] md:text-[7vw]`} style={{color:bg}}>Brew the Royal Tradition</h1>
            <h3 className='font-cursy text-center md:text-lg px-4'>Premium instant chai tea premix inspired by royal Indian households</h3>
        </div>
      
      <div className="h-[50vh] w-screen flex flex-col justify-center py-4 items-center">
<div className="flex h-[20vh]">
  <Notify />
  
</div>
<div className="flex h-full justify-center items-end pb-9 z-40 gap-5">

<Facebook/>
<Instagram />
<X/>

</div>

      </div>

     
    </div>
  )
}

export default Hero
