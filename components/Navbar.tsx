import React, { useEffect, useRef, useState } from "react";
import styles from '@/styles/Home.module.css'
import Link from "next/link";

const Navbar = () => {
    const [menu,setMenu]=useState<Boolean>(false)
    const ref=useRef<HTMLDivElement>(null)
    useEffect(()=>{
        const menuOutsideClick=(e:any)=>{
            if(menu && ref.current && !ref.current.contains(e.target)){
                setMenu(false)
            }
          }
            document.addEventListener("mousedown",menuOutsideClick)

            return()=>{
                document.removeEventListener("mousedown",menuOutsideClick)
            }

        

    },[menu])
  return (
    <div  ref={ref} className="bg-gradient-to-r from-[#605c5c] to-[#131110] h-16 flex justify-between relative px-10 items-center ">
      <div className="relative h-16 flex items-center justify-center">
        <Link href="/"><h2 className="font-semibold text-white text-2xl max-md:text-xl">
          Relstez
        </h2>
        </Link>
        <span className="bg-gradient-to-r from-[#4066ff] to-[#2949c6] h-4 w-4 rounded-full absolute top-4 right-[-10px]"></span>
      </div>

      <ul  className={menu?" listmenu absolute transition-all  duration-75 ease-in-out right-10 top-14 z-10 border-2 bg-white text-black rounded-md hidden   max-md:flex flex-col items-center gap-6 p-4 w-[200px] h-[300px]":"flex items-center space-x-10   max-md:hidden"}>
        <Link href="/#popularresidencies" onClick={()=>setMenu(false)} className="text-white font-[500] max-md:text-black">
          <li>Residencies</li>
        </Link>
        <Link  href="/#characterstics" onClick={()=>setMenu(false)} className="text-white font-[500] max-md:text-black">
          <li>Our Value</li>
        </Link>
        <Link  href="/#contact "onClick={()=>setMenu(false)} className="text-white font-[500] max-md:text-black" >
          <li>Contact us</li>
        </Link>
        <Link href="/#getstarted" onClick={()=>setMenu(false)} className="text-white font-[500] max-md:text-black">
          <li>Get Started</li>
        </Link>
        <a
          
          href="mailto:rollinrabin@gmail.com"
          className="px-4 py-2 rounded-md text-white font-[500] bg-[#4066ff]"
        >
          Contact
        </a>
      </ul>
      <div className="hidden max-md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={()=>setMenu(!menu)}
          className="w-8 h-8 text-white cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
