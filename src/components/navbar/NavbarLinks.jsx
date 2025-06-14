import React from 'react';
import { Link as RouterLink } from "react-router-dom";

const links = [
  { label: "Home", path: "/" },
  { label: "About Me", path: "/about" },
   { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" }, 
];

const NavbarLinks = ({ onLinkClick }) => {
  return (
    <ul className="flex gap-6 text-ivory font-semibold text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-darkTealBlue/30 backdrop-blur-3xl lg:bg-deepForestGreen sm:w-full py-4">
      {links.map((link, index) => (
        <li key={index} className="group">
          <RouterLink
            to={link.path}
            className="cursor-pointer text-ivory hover:text-mutedGold transition-all duration-500"
            onClick={onLinkClick}
          >
            {link.label}
          </RouterLink>
          <div className="mx-auto bg-mutedGold w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
