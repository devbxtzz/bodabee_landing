import React from "react";

function About() {
  return (
    <main
      id="about"
      className="overflow-hidden relative min-h-screen w-full text-black"
    >
      <h2 className="py-12 text-txtClr">About us</h2>

      <div className="layout-margin-tight flex flex-col justify-center items-center gap-12 py-12 text-left">
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center">
          <div className="">
            <h4 className="py-12 text-black">Redefining the Way You Cycle</h4>
            <p className="mb-4 text-xl">
              At BikeChapz, we are passionate about revolutionizing the way
              people experience and embrace cycling. We believe that bicycles
              are not just a means of transportation, but a gateway to freedom,
              adventure, and a healthier lifestyle. With this vision in mind, we
              have created a platform that caters to riders of all backgrounds,
              inspiring them to embrace the joy of cycling and unlock the
              countless benefits it offers.
            </p>
            <h4 className="py-12 text-black">
              Pedaling Towards a Greener Future
            </h4>
            <p className="mb-4 text-xl">
              As avid cyclists, we are committed to promoting sustainability and
              reducing our environmental impact. By choosing to cycle instead of
              driving, you contribute to a cleaner, greener planet. We strive to
              create a culture of eco-consciousness by encouraging individuals
              to adopt cycling as a sustainable mode of transportation.
              Together, we can make a positive difference for future
              generations.
            </p>

            <h4 className="py-12 text-black">
              Empowering Riders, Connecting Communities
            </h4>
            <p className="mb-4 text-xl">
              Our mission is simple: to empower riders and connect communities
              through the love of cycling. We strive to make cycling accessible
              and enjoyable for everyone, whether you're a seasoned cyclist or a
              novice enthusiast. By providing a wide range of bicycles, flexible
              rental options, and a user-friendly platform, we aim to remove
              barriers and make cycling a part of your everyday life.
            </p>

            <h4 className="py-12 text-black">Cycling is Better Together</h4>
            <p className="mb-4 text-xl">
              We believe that cycling is more than just a solitary activity;
              it's an opportunity to connect with fellow riders and build a
              thriving community. BikeChapz is a place where cyclists of all
              levels can come together, share experiences, and inspire one
              another. Join us in exploring new routes, participating in events,
              and fostering a supportive environment that encourages growth and
              camaraderie.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-start gap-12">
          <h3 className="text-left text-txtClr">Why choose BikeChapz?</h3>

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
                By choosing BikeChapz, you're not only enhancing your
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
