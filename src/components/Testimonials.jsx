import React from "react";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <main
      id="testimonials"
      className="overflow-hidden relative w-full text-txtClr"
    >
      <h2 className="py-12">Testimonials</h2>

      <div className="layout-margin-tight flex flex-col sm:flex-row justify-center items-center gap-12 py-12 text-left">
        <TestimonialCard
          name="Paul Mali"
          msg="EcstasyBikes has become my go-to ride app and I can always count on finding a ride. "
          pic="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661739967/Projects/GRO%20shop/t1_wwxycf.jpg"
        ></TestimonialCard>

        <TestimonialCard
          name="Ahmed Opio"
          msg='EcstasyBikes has completely transformed my daily commute.'
          pic="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661739967/Projects/GRO%20shop/t3_zekx3f.jpg"
        ></TestimonialCard>

        <TestimonialCard
          name="John Kato"
          msg="I have been using EcstasyBikes for both rides and deliveries, and I couldn't be happier. "
          pic="https://res.cloudinary.com/do1rqqi7v/image/upload/v1661739967/Projects/GRO%20shop/t2_a4tvhi.jpg"
        ></TestimonialCard>
      </div>
    </main>
  );
}

export default Testimonials;
