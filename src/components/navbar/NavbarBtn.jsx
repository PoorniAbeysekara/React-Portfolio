import React from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-medium text-darkGrape border-ghostWhite border flex items-center gap-1 bg-gradient-to-r from-ghostWhite to-deepPlum hover:border-amethyst hover:scale-110 transition-all duration-500 hover:shadow-ghostWhiteshadow">
      <span className="relative z-10 flex items-center gap-2">
        Say Hi!
        <span className="animate-wave origin-bottom-left inline-block">👋</span>
      </span>
      <span className="absolute opacity-10 group-hover:animate-pulse"></span>
      {/* <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div> */}
    </button>
  );
};

export default NavbarBtn;
