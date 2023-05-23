import React from 'react'
import TestimonialCard from './TestimonalCard'

function Testimonials() {
  return (
    <main id='testimonials' className='overflow-hidden relative w-full text-txtClr'>

      
      <h2 className='py-12'>Testimonials</h2>

      <div className='layout-margin-tight flex flex-col sm:flex-row justify-center items-center gap-12 py-12 text-left'>

        <TestimonialCard
          name='Paul Mali'
          msg='Lorem Ipsum is simply dummy text of the .'
          pic='https://res.cloudinary.com/do1rqqi7v/image/upload/v1661739967/Projects/GRO%20shop/t1_wwxycf.jpg'>
        </TestimonialCard>

        <TestimonialCard
          name='Ahmed Opio'
          msg='Lorem Ipsum is simply dummy text of the industry.'
          pic='https://res.cloudinary.com/do1rqqi7v/image/upload/v1661739967/Projects/GRO%20shop/t3_zekx3f.jpg'>
        </TestimonialCard>

        <TestimonialCard
          name='John Kato'
          msg='Lorem Ipsum is simply dummy text of the .'
          pic='https://res.cloudinary.com/do1rqqi7v/image/upload/v1661739967/Projects/GRO%20shop/t2_a4tvhi.jpg'>
        </TestimonialCard>

      </div>

    </main>
  )
}

export default Testimonials