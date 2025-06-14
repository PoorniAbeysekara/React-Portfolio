import React from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <motion.h2
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="text-oliveGreen text-3xl mb-4"
        >
          Get In Touch
        </motion.h2>
        <motion.p variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="text-ivory font-light">
          Let’s create something amazing together!
          <br />
          Say hi — I’m just a message away...
        </motion.p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;
