import React from "react";

function TestimonialCard({ name, msg, pic }) {
  return (
    <div className="h-[250px] w-[250px] rounded-xl bg-mainClr shadow-primary">
      <p className="h-2/3 flex flex-col justify-center items-center text-black p-2 text-center">
        {msg}
      </p>

      <div className="relative h-1/3 flex flex-col justify-center items-center rounded-xl bg-white text-black">
        <p className="rounded-xl">{name}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
