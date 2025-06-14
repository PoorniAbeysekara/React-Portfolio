import React from "react";
import { Link } from 'react-router-dom';

const links = [
    { link: "About Me", section: "/about" },
    { link: "Skills", section: "/skills" },
    { link: "Projects", section: "/projects" },
    { link: "Certifications", section: "/certifications" },
    { link: "Contact", section: "/contact" },
];

const FooterMain = () => {
  return (
    <div className="px-4">
        <div className="w-full h-[1px] bg-richMetallicGold mt-24"></div>
        <div className="md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto">
            <p className="text-xl text-mutedGold">Poorni Abeysekara</p>
            <ul className="flex gap-4 text-mutedGold text-sm">
                {links.map((item,index) =>{
                    return (
                      <li key={index}>
                        <Link
                to={item.section}
                className="hover:text-ivory transition-all duration-500 cursor-pointer"
              >
                {item.link}
              </Link>
                      </li>
                    );
                })}
            </ul>
        </div>
        <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-slateGray">
            © 2025 Poorni Abeysekara. All rights reserved.    
        </p>
    </div>
  );
};

export default FooterMain;