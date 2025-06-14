import React from "react";
import HeroText from "./HeroText";
import Heropic from "./HeroPic";
import HeroGradient from "./HeroGradient";

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16 sm:pt-15 sm:pb-0">
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between item-center relative px-4">
        <HeroText />
        <Heropic />
      </div>
      <div className="flex justify-center mt-8 md:hidden">
        <a
          href="/images/files/Poorni Abeysekara.pdf"
          download
          className="border border-richMetallicGold rounded-3xl py-2 px-6 text-lg hover:bg-warmOliveTint transition-all duration-500 cursor-pointer text-softSage hover:text-deepForestGreen hover:font-semibold"
        >
          Download CV
        </a>
      </div>
      <HeroGradient />
    </div>
  );
};

export default HeroMain;
