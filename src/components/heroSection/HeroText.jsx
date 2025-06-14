import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const titles = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Software Engineer",
];

const HeroText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000); // Change title every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center  mt-[0px]">
      <motion.h3
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-4xl font-special font-light text-warmOliveTint"
      >
        Hi There,
      </motion.h3>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-warmOliveTint"
      >
        I'm Poorni Abeysekara
      </motion.h1>
      <motion.h2
        key={index}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className="lg:text-2xl font-special sm:text-xl text-richMetallicGold"
      >
        {titles[index]}
      </motion.h2>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-warmBeige"
      >
        A passionate Web Developer focused on creating responsive <br />
        and user-friendly websites and applications.
      </motion.p>
      <div className="w-full flex justify-start md:justify-start">
        <a
          href="/images/files/Poorni Abeysekara.pdf"
          download
          className="border border-richMetallicGold rounded-3xl py-2 px-6 text-lg mt-6 hover:bg-warmOliveTint transition-all duration-500 cursor-pointer text-softSage hover:text-deepForestGreen hover:font-semibold hidden md:inline-block"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default HeroText;
