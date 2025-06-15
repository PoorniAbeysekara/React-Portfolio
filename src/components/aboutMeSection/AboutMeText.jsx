import React from "react";
import { FaUniversity } from "react-icons/fa";
import { BiSolidCertification } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

const AboutMeText = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center text-center md:text-left w-full mt-[0px]">
      <h2
        className="text-4xl sm:text-5xl md:text-6xl text-mutedGold mb-8 md:mb-10"
      >
        About Me
      </h2>

      {/* Responsive Columns */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* About Me Section */}
        <div className="bg-gradient-to-b from-darkPurple to-coldPurple p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 text-ivory w-full md:w-1/3 mb-6 md:mb-0">
          <p className="sm:text-base text-justify mb-2">
            Hi! I’m Poorni Abeysekara
            <br />
            A passionate Full Stack Developer in the making and a dedicated UI/UX design enthusiast. I enjoy creating responsive, user-friendly web applications that balance functionality with aesthetic design.
            <br />
               With a strong eye for detail and a love for clean, efficient code, I thrive on turning ideas into seamless digital experiences.
            <br />
            Let’s create something meaningful together!
          </p>
        </div>

        {/* Education Section */}
        <div className="bg-gradient-to-b from-darkPurple to-coldPurple p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 text-ivory w-full md:w-1/3 mb-6 md:mb-0">
          <p className="text-xl md:text-2xl text-mutedGold text-center mb-2">
            Education
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <FaUniversity className="text-lavenderPurple text-3xl md:text-4xl mr-4" />
            <div>
              <p className="text-md ">
                Institute of Technology, University of Moratuwa
              </p>
              <p className="text-softSage text-md">
                Undergraduate in Information Technology
              </p>
              <p className="text-softSage text-md">2023 - Present</p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="bg-gradient-to-b from-darkPurple to-coldPurple p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500 text-ivory w-full md:w-1/3">
          <p className="text-xl md:text-2xl text-mutedGold text-center mb-2">
            Certifications
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <p className="text-xs sm:text-base text-justify mb-2">
              Every certification I’ve earned reflects a milestone in my continuous journey of learning,
              growth, and dedication to mastering my craft."
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <BiSolidCertification className="text-lavenderPurple text-3xl md:text-4xl mr-1" />
            <Link to="/certifications">
              <button className="mt-2 border border-ghostWhite rounded-3xl py-1 px-4 text-sm hover:bg-lavenderPurple transition-all duration-500 cursor-pointer text-softSage hover:text-darkGrape hover:font-semibold">
                View All Certificates
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="w-full flex justify-center md:justify-start">
        <button
          className="border border-ghostWhite rounded-3xl py-2 px-6 text-base md:text-lg mt-6 hover:bg-bg-raisingBlack transition-all duration-500 cursor-pointer text-lilacMist hover:text-ghostWhite hover:font-semibold"
          onClick={() => navigate("/projects")}
        >
          My Projects
        </button>
      </div>
    </div>
  );
};

export default AboutMeText;
