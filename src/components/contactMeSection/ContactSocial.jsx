import React from 'react';
import SingleContactSocial from './SingleContactSocial';
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactSocial = () => {
  return (
     <motion.div
        variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0 }}>
    <div className="flex gap-4 ">
        <SingleContactSocial link="https://github.com/PoorniAbeysekara" Icon={FiGithub} />
        <SingleContactSocial link="https://www.linkedin.com/in/poorni-abeysekara-2a2096308/" Icon={FaLinkedinIn} />
    </div>
    </motion.div>
  );
};

export default ContactSocial;