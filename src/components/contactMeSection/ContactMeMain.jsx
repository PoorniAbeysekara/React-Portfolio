import React from "react";
import ContactMeRight from "./ContactMeRight";
import ContactMeLeft from "./ContactMeLeft";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[0] px-2 lg:px-8 sm:px-4 py-16"
    >
      <motion.h2
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-6xl text-mutedGold mb-10 text-center"
      >
        Contact Me
      </motion.h2>
      <div className="flex justify-between gap-24 p-8 bg-richBlackGreen rounded-xl lg:flex-row sm:flex-col ">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
