import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({
  name,
  about,
  technologies,
  year,
  align,
  image,
  link,
  githublink,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", 0.4)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
    >
      <div
        className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
          align === "left" ? "md:flex-row" : "md:flex-row-reverse"
        } justify-end`}
      >
        <div>
          <h2 className="md:text-2xl sm:text-2xl text-lightAvacadoGreen">
            {name}
          </h2>
          <p className="text-sm text-justify text-ivory mt-2">{about}</p>
          <p
            className={`text-sm flex gap-2 items-center text-richMetallicGold hover:text-ivory transition-all duration-500 sm:justify-self-center ${
              align === "left" ? "md:justify-self-end" : "md:justify-self-start"
            }`}
          >
            {technologies}
          </p>
          <h2
            className={`text-xl font-thin text-sageTintedOlive font-special sm:text-center ${
              align === "left" ? "md:text-right" : "md:text-left"
            }`}
          >
            {year}
          </h2>
          <a
            href={link}
            className={`text-lg flex gap-2 items-center text-oliveGreen hover:text-richMetallicGold transition-all duration-500 cursor-pointer sm:justify-self-center ${
              align === "left" ? "md:justify-self-end" : "md:justify-self-start"
            }`}
          >
            View <BiSolidRightTopArrowCircle />
          </a>
          <a
            href={githublink}
            className={`text-lg flex gap-2 items-center text-oliveGreen hover:text-richMetallicGold transition-all duration-500 cursor-pointer sm:justify-self-center ${
              align === "left" ? "md:justify-self-end" : "md:justify-self-start"
            }`}
          >
            <FaGithub /> GitHub
          </a>
        </div>
        <div className="relative w-[400px] aspect-[16/9]  rounded-xl overflow-hidden border border-ivory">
          <div className="absolute top-0 left-0 w-full h-full bg-paleOliveGreen opacity-50 transition-opacity duration-500 hover:opacity-0 hidden md:block"></div>
          <img
            src={image}
            alt="Project Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProject;
