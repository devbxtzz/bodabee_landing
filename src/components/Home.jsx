import React from "react";
import MobNav from "../layout/MobNav";
import Navbar from "../layout/Navbar";
import appstore from "../assets/appstore.png";
import googleplay from "../assets/googleplay.png";
import screen1 from "../assets/screen1.png";
import screen2 from "../assets/screen2.png";

function Home() {
  return (
    <main id="home" className="overflow-hidden relative h-full w-full">
      <MobNav></MobNav>

      <div className="layout-margin min-h-screen text-black">
        <div className="absolute -top-[30%] 2xl:-top-[45%] -left-16 2xl:-left-32 h-full w-[calc(100vw*1.25)] sm:w-[calc(100vw*1.2)] bg-mainClr rounded-[182px] -rotate-[23.26deg] -z-50"></div>

        <Navbar></Navbar>

        <div className="min-h-[calc(100vh-70px)] flex flex-col sm:flex-row items-center sm:justify-center">
          {/* hero left pane */}
          <div className="sm:w-1/2 flex flex-col justify-center items-start text-left">
            <h3 className="text-white">Bodabee</h3>

            <p className="w-3/4">Ride Smart, Conveniently And Pay Less</p>
            
            <p className="text-2xl font-bold mt-12 mb-4 ml-8">
              Download the app now!
            </p>

            <div className="h-fit flex flex-wrap gap-4 items-center">
              <img
                src={appstore}
                S
                alt="/"
                className="w-[150px] sm:w-[200px] h-12 sm:h-16 cursor-pointer"
              />

              <img
                src={googleplay}
                alt="/"
                className="w-[150px] sm:w-[200px] h-12 sm:h-16 cursor-pointer"
              />
            </div>
          </div>

          {/* hero right pane */}
          <div className="relative mt-12 w-1/2 sm:min-h-[calc(100vh-70px)]">
            <img
              src={screen1}
              alt="/"
              className="absolute top-[10%] lg:top-[5%] xl:top-[40%] right-12 sm:right-40 lg:right-48 w-[440px] sm:w-[790px] xl:w-[900px] -rotate-[25.45deg]"
            />
            <img
              src={screen2}
              alt="/"
              className="absolute top-[40%] -right-12 sm:right-8 xl:right-0 w-[450px] sm:w-[800px] xl:w-[900px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
