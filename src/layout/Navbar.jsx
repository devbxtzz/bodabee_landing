import React, { useState } from 'react'
import { useEffect } from 'react';
import logo1 from "../assets/logo1.png";

function Navbar() {

  // handle nav hide on scorll
  const [activeNav, setActiveNav] = useState(true)
  const [scrollPos, setScrollPos] = useState(window.scrollY)

  useEffect(()=>{
    const handelScorll = () => {
      setScrollPos(window.scrollY)
      setActiveNav(scrollPos > window.scrollY)
    }
    window.addEventListener('scroll', handelScorll)
    return ()=> window.removeEventListener('scroll', handelScorll)
  }, [scrollPos])

  return (
    <div
      className={`hidden sm:flex sm:fixed top-0 left-0 w-full bg-mainClr items-center justify-around h-[70px] transition duration-700 z-50 ${!activeNav && '-translate-y-[70px]'}`}
      >
        <img src={logo1}S alt="/" className='w-[50px] sm:w-[50px] h-10 sm:h-16 cursor-pointer'/>

      <div className='flex gap-2 lg:gap-4'>
        <a href='#home'>Home</a>
        <a href='#about'>About us</a>
        <a href='#contact'>Contact us</a>
      </div>

      <div className='flex gap-4'>
      <a href="https://forms.gle/p34LjD23kWQheLa66" target="_blank" rel="noopener noreferrer">
        <buttson href = ""className='btn-primary text-lg lg:text-2xl h-8 lg:h-10 w-fit bg-white text-black'>Join The Waitlist</buttson></a>
      </div>
    </div>
  )
}

export default Navbar
