import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Testimonials from './components/Testimonials'
import Footer from './layout/Footer'

function Bikechapz() {
  return (
    <div className='select-none'>
      <Home></Home>

      <hr className='w-1/2 h-1 bg-mainClr mx-auto'/>

      <About></About>

      <hr className='w-1/2 h-1 bg-mainClr mx-auto'/>


      <hr className='w-1/2 h-1 bg-mainClr mx-auto'/>

      <Testimonials></Testimonials>

      <hr className='w-1/2 h-1 bg-mainClr mx-auto'/>

      <Contact></Contact>

      <Footer></Footer>
    </div>
  )
}

export default Bikechapz;