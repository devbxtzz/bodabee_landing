import React from 'react'

function Contact() {
  return (
    <main id='contact' className='overflow-hidden relative min-h-screen w-full text-black'>

      <h2 className='py-12 text-txtClr'>Contact us</h2>

      <div className='layout-margin-tight relative flex flex-col-reverse sm:flex-row justify-center items-center gap-12 py-12 text-left'>

        <form className='sm:w-1/2 flex flex-col items-center sm:items-start gap-4'>
          <p className='text-xl'>Feel free to contact us any time, we will get back to you as soon as possible!</p>

          <input
            type="text"
            placeholder='Name'
            className='w-3/4 text-2xl border-2 border-black rounded-xl px-4 py-2'/>
          <input
            type="text"
            placeholder='Email'
            className='w-3/4 text-2xl border-2 border-black rounded-xl px-4 py-2'/>
          <textarea
            type="text"
            placeholder='Message'
            className='w-3/4 h-[150px] text-2xl border-2 border-black rounded-xl px-4 py-2'/>

            <button className='btn-primary bg-mainClr text-black'>
              Send
            </button>
        </form>

        <div className='w-1/2'>
          <img src="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661743983/Projects/GRO%20shop/cs_tl4hgs.jpg" alt="/" className='w-[300px]'/>
        </div>

      </div>

    </main>
  )
}

export default Contact