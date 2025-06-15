import React from 'react';
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className ="flex flex-col gap-4 text-purpleC">
        <SingleInfo text="poornikarishma@gmail.com" Image={HiOutlineMail}/>
        <SingleInfo text="+94 777 442729" Image={FiPhone}/>
        <SingleInfo text="Baddegama, Galle, Sri Lanka" Image={IoLocationOutline}/>
    </div>
  );
};

export default ContactInfo;