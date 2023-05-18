import React from 'react'

function Footer() {
  return (
    <main id='contact' className='overflow-hidden relative h-full w-full bg-mainClr text-white'>

      <div className='layout-margin relative h-full flex flex-col sm:flex-row justify-around items-start gap-12 py-12 text-left'>

        <div>
          <h4 className='mb-4'>Reach us</h4>

          <div className='flex items-center gap-2 text-lg'>
            <img
              src="https://api.iconify.design/carbon/email.svg?color=white" alt="/"
              className='w-[40px]'/>
            <p>contact@bobabee.com</p>
          </div>

          <div className='flex items-center gap-2'>
            <img
              src="https://api.iconify.design/bx/phone-call.svg?color=white" alt="/"
              className='w-[40px]'/>
            <p>+256200102008</p>
          </div>
        </div>

        <div>
          <h4 className='mb-4'>Follow us</h4>

          <div className='flex items-center gap-2'>
            <img
              src="https://api.iconify.design/ant-design/facebook-filled.svg?color=white" alt="/"
              className='w-[50px] cursor-pointer'/>
            <img
              src="https://api.iconify.design/ant-design/twitter-square-filled.svg?color=white" alt="/"
              className='w-[50px] cursor-pointer'/>
            <img
              src="https://api.iconify.design/ant-design/instagram-filled.svg?color=white" alt="/"
              className='w-[50px] cursor-pointer'/>
            <img
              src="https://api.iconify.design/akar-icons/linkedin-box-fill.svg?color=white" alt="/"
              className='w-[50px] cursor-pointer'/>
          </div>
        </div>

        <div>
          <h4 className='mb-4'>Download the app Now!</h4>

          <div className='h-fit flex flex-wrap gap-4 items-center'>
            <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661779376/Projects/GRO%20shop/App_Store__iOS_-Badge-Alternative-Logo.wine_w2jxp3.png" alt="/" className='w-[100px] lg:w-[160px] lg:h-[50px] cursor-pointer'/>

            <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661779377/Projects/GRO%20shop/Google_Play-Badge-Logo.wine_jldeou.png" alt="/" className='w-[100px] lg:w-[160px] lg:h-[50px]  cursor-pointer'/>
          </div>
        </div>

      </div>

      <div className='h-full bg-gradient-to-r from-txtClr to-txtClr/50 flex flex-col justify-center items-center gap-2 py-8'>

        

        <p className='font-[Redressed]'>
          all rights reserved || Copyright © 2022
        </p>

      </div>

    </main>
  )
}

export default Footer