import React from "react";

const Mission = () => {
  return (
    <div className="padded h-full lg:h-[80vh] flex items-center my-22 lg:mt-13 my-16 md:my-16">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col justify-center mb-6 md:mb-0 md:col-span-1">
          <h1 className="text-accent uppercase font-bold text-2xl md:text-3xl lg:text-center lg:text-[.85rem] md:text-start mb-3">
            All around the country
          </h1>
          <p className="text-xl md:text-2xl font-semibold lg:text-center text-textColor md:text-start lg:text-[2rem] lg:leading-tight ">
            Our Mission is to Help <br /> The Helpless
          </p>
        </div>

        <div className="flex items-center justify-center md:col-span-2">
          <p className="subtitle lg:pl-10 text-mutedForeground text-base md:text-lg md:text-start lg:text-xl ">
            In the end, though, maybe we must all give up trying to pay back the
            people in this world who sustain our lives. In the end, maybe it's
            wiser to surrender before the miraculous scope of human generosity
            and to just keep saying thank you, forever and sincerely, for as
            long as we have voices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
