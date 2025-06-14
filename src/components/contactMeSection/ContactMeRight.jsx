import React from 'react';
import { MdContactMail } from "react-icons/md";
import ContactInfo from './ContactInfo';
import ContactSocial from './ContactSocial';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
        <MdContactMail className="text-oliveGreen text-9xl max-w-[300px] animate-wave" />
        <ContactInfo />
        <ContactSocial />
    </div>
  );
};

export default ContactMeRight;