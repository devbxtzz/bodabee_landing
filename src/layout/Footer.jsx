import React from "react";
import appstore from "../assets/appstore.png";
import googleplay from "../assets/googleplay.png";

function Footer() {
  return (
    <main
      id="contact"
      className="overflow-hidden relative h-full w-full bg-mainClr text-black"
    >
      <div className="layout-margin relative h-full flex flex-col sm:flex-row justify-around items-start gap-12 py-12 text-left">
        <div>
          <h4 className="mb-4">Reach us</h4>

          <div className="flex items-center gap-2 text-lg">
            <img
              src="https://api.iconify.design/carbon/email.svg?color=black"
              alt="/"
              className="w-[40px]"
            />
            <p>contact@ecstasybikes.com</p>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="https://api.iconify.design/bx/phone-call.svg?color=black"
              alt="/"
              className="w-[40px]"
            />
            <p>+256705673857</p>
          </div>
        </div>

        <div>
          <h4 className="mb-4">Follow us</h4>

          <div className="flex items-center gap-2">
            <a
              href="https://facebook.com/ecstasybikes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://api.iconify.design/devicon/facebook.svg"
                alt="/"
                className="w-[30px] cursor-pointer"
              />
            </a>
            <a
              href="https://twitter.com/ecstasybikesapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://api.iconify.design/skill-icons/twitter.svg"
                alt="/"
                className="w-[30px] cursor-pointer"
              />
            </a>
            <a
              href="https://discord.com/ecstasybikes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://api.iconify.design/skill-icons/discord.svg"
                alt="/"
                className="w-[30px] cursor-pointer"
              />
            </a>
            <a
              href="https://instagram.com/ecstasybikese"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://api.iconify.design/skill-icons/instagram.svg"
                alt="/"
                className="w-[30px] cursor-pointer"
              />
            </a>
            <a
              href="https://linkedin.com/ecstasybikese"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://api.iconify.design/skill-icons/linkedin.svg"
                alt="/"
                className="w-[30px] cursor-pointer"
              />
            </a>
            <a
              href="https://telegram.com/ecstasybikese"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/24/external-cloud-based-instant-messaging-telegram-mobile-app-logotype-logo-filled-tal-revivo.png"
                alt="/"
                className="w-[30px] cursor-pointer"
              />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4">Download the app Now!</h4>

          <div className="h-fit flex flex-wrap gap-4 items-center">
            <img
              src={appstore}
              alt="/"
              className="w-[100px] lg:w-[160px] lg:h-[50px] cursor-pointer"
            />

            <img
              src={googleplay}
              alt="/"
              className="w-[100px] lg:w-[160px] lg:h-[50px]  cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="h-full bg-gradient-to-r from-txtClr to-txtClr/50 flex flex-col justify-center items-center gap-2 py-8">
        <p className="font-[Cursive]">EcstasyBikes © 2023</p>
      </div>
    </main>
  );
}

export default Footer;
