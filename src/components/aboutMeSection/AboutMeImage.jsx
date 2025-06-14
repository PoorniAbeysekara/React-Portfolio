import React from "react";
import { LiaCircleSolid } from "react-icons/lia";

const AboutMeImage = () => {
  return (
    <div className="w-full flex items-center justify-center hover:scale-105 transition-transform duration-500">
        <img
          src="/images/about.png"
          alt="Poorni"
          className="max-h-[500px] sm:max-h-[400px] md:max-h-[700px] w-auto"
        />
    </div>
  );
};

export default AboutMeImage;
