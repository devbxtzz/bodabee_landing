import React from "react";
import screen1 from "../assets/screen1.png";

function About() {
  return (
    <main
      id="about"
      className="overflow-hidden relative min-h-screen w-full text-black"
    >
      <h2 className="py-12 text-txtClr">About us</h2>

      <div className="layout-margin-tight flex flex-col justify-center items-center gap-12 py-12 text-left">
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-4">
          <div className="w-[95%] sm:w-1/2">
            <p className="mt-4 text-xl">
              At EcstasyBikes, we are passionate about revolutionizing the way
              people experience and embrace cycling. We believe that bicycles
              are not just a means of transportation, but a gateway to freedom,
              adventure, and a healthier lifestyle. With this vision in mind, we
              have created a platform that caters to riders of all backgrounds,
              inspiring them to embrace the joy of cycling and unlock the
              countless benefits it offers.
            </p>
          </div>

          <div className="relative w-1/2 flex justify-center items-center">
            <img src={screen1} alt="/" className="absolute -z-10" />
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-12">
          <h3 className="text-left text-txtClr">Why choose EcstasyBikes?</h3>

          <div className="w-full flex flex-col items-center sm:flex-row justify-start gap-4">
            <div className="w-64 p-4 py-8 rounded-lg border-2 border-mainClr shadow-primary">
              <p className="text-center text-xl font-bold mb-4">
                {" "}
                Unparalleled Selection:
              </p>
              <p>
                Discover a diverse fleet of high-quality bicycles tailored to
                suit your every need. From sleek road bikes for the speed demons
                to sturdy mountain bikes for the trail enthusiasts, we have a
                ride for everyone. Our well-maintained bikes are sourced from
                top brands, ensuring your safety and comfort at every turn.
              </p>
            </div>

            <div className="w-64 p-4 py-8 rounded-lg border-2 border-mainClr shadow-primary">
              <p className="text-center text-xl font-bold mb-4">Safety First</p>
              <p>
                Your safety is our utmost priority. Each bike in our fleet
                undergoes regular maintenance and thorough inspections, ensuring
                optimal performance and reliability. Our team of experienced
                technicians guarantees that every bike is in top-notch condition
                before it reaches your hands. Ride with confidence and peace of
                mind.
              </p>
            </div>

            <div className="w-64 p-4 py-8 rounded-lg border-2 border-mainClr shadow-primary">
              <p className="text-center text-xl font-bold mb-4">
                Eco-friendly and Sustainable
              </p>
              <p>
                By choosing EcstasyBikes, you're not only enhancing your
                well-being but also contributing to a greener future. Cycling is
                a sustainable mode of transportation, reducing carbon emissions
                and promoting a healthier environment. Join us in our mission to
                make the world a better place, one pedal stroke at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
