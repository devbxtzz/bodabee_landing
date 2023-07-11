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
          name="-Paul Mali-"
          msg='"Choosing BikeChapz not only gave me a thrilling cycling experience but also allowed me to contribute to a greener future."'
        ></TestimonialCard>

        <TestimonialCard
          name="-Ahmed Opio-"
          msg='"BikeChapz made my cycling experience convenient and enjoyable - highly recommended!" '
        ></TestimonialCard>

        <TestimonialCard
          name="-John Kato-"
          msg='"I love being part of the BikeChapz community its inspiring to connect with fellow riders and explore new routes together."'
        ></TestimonialCard>
      </div>
    </main>
  );
}

export default Testimonials;
