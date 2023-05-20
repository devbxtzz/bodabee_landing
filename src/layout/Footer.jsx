import React from 'react'
import appstore from "../assets/appstore.png";
import googleplay from "../assets/googleplay.png";

function Footer() {
  return (
    <main id='contact' className='overflow-hidden relative h-full w-full bg-mainClr text-black'>

      <div className='layout-margin relative h-full flex flex-col sm:flex-row justify-around items-start gap-12 py-12 text-left'>

        <div>
          <h4 className='mb-4'>Reach us</h4>

          <div className='flex items-center gap-2 text-lg'>
            <img
              src="https://api.iconify.design/carbon/email.svg?color=black" alt="/"
              className='w-[40px]'/>
            <p>contact@bobabee.com</p>
          </div>

          <div className='flex items-center gap-2'>
            <img
              src="https://api.iconify.design/bx/phone-call.svg?color=black" alt="/"
              className='w-[40px]'/>
            <p>+256200102008</p>
          </div>
        </div>

        <div>
          <h4 className='mb-4'>Follow us</h4>

          <div className='flex items-center gap-2'>
            <img
              src="https://api.iconify.design/ant-design/facebook-filled.svg?color=black" alt="/"
              className='w-[30px] cursor-pointer'/>
            <img
              src="https://api.iconify.design/ant-design/twitter-square-filled.svg?color=black" alt="/"
              className='w-[30px] cursor-pointer'/>
            <img
              src="https://api.iconify.design/ant-design/instagram-filled.svg?color=black" alt="/"
              className='w-[30px] cursor-pointer'/>
            <img
              src="https://api.iconify.design/akar-icons/linkedin-box-fill.svg?color=black" alt="/"
              className='w-[30px] cursor-pointer'/>
          </div>
        </div>

        <div>
          <h4 className='mb-4'>Download the app Now!</h4>

          <div className='h-fit flex flex-wrap gap-4 items-center'>
            <img src={appstore} alt="/" className='w-[100px] lg:w-[160px] lg:h-[50px] cursor-pointer'/>

            <img src={googleplay} alt="/" className='w-[100px] lg:w-[160px] lg:h-[50px]  cursor-pointer'/>
          </div>
        </div>

      </div>

      <div className='h-full bg-gradient-to-r from-txtClr to-txtClr/50 flex flex-col justify-center items-center gap-2 py-8'>

        

        <p className='font-[CursiveS]'>
            Bodabee © 2023
        </p>

      </div>

    </main>
  )
}

export default Footer