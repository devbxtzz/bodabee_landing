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
          <article className="w-[95%] sm:w-1/2">
            <h3 className="text-txtClr">Bodabee</h3>
            <p className="mt-4 text-xl">
              Bodabee is more than just an app; it's a community of like-minded
              individuals who value convenience, sustainability, and shared
              experiences. By choosing Bodabee, you become part of a larger
              movement towards a greener and more connected future.{" "}
            </p>
          </article>

          <div className="relative w-1/2 flex justify-center items-center">
            <img src={screen1} alt="/" className="absolute -z-10" />
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-12">
          <h3 className="text-left text-txtClr">What we do?</h3>

          <div className="w-full flex flex-col items-center sm:flex-row justify-start gap-4">
            <div className="w-64 p-4 py-8 rounded-lg border-2 border-mainClr shadow-primary">
              <p className="text-center text-xl font-bold mb-4">Book a Ride</p>
              <p>
                Bodabee's advanced matching algorithm ensures that you find the
                perfect ride that suits your needs.
              </p>
            </div>

            <div className="w-64 p-4 py-8 rounded-lg border-2 border-mainClr shadow-primary">
              <p className="text-center text-xl font-bold mb-4">Share a Ride</p>
              <p>
                Join existing rides or create your own, and enjoy a comfortable
                and social commuting experience.
              </p>
            </div>

            <div className="w-64 p-4 py-8 rounded-lg border-2 border-mainClr shadow-primary">
              <p className="text-center text-xl font-bold mb-4">Deliveries</p>
              <p>
                Bodabee's advanced logistics system will match you with a nearby
                driver who is best suited to handle your delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
