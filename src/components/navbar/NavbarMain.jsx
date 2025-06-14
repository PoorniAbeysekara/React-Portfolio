import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2 sm:max-w-[1000px] md:max-w-[1300px] sm:px-2 md:px-4">
      <div
        className="flex justify-between w-full max-w-[1200px] mx-auto bg-deepForestGreen items-center p-6 rounded-r-3xl rounded-l-3xl border-[0.5px] border-mutedGold "
        
      >
        <NavbarLogo />

        <div
          className={`${menuOpen ? "sm:block" : "sm:hidden"} sm:block lg:block`}
        >
          <NavbarLinks onLinkClick={() => setMenuOpen(false)} />
        </div>

        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-6 bg-deepForestGreen items-center justify-center rounded-3xl border-[0.5px] border-mutedGold">
        <button
          className="text-ivory text-2xl p-3 border-mutedGold border rounded-3xl"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavbarMain;
