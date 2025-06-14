import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_r4wylmq", "template_rmjs7sy", form.current, {
        publicKey: "tHoCLwLOMXfkDGx3N",
      })
      .then(
        () => {
          setName('');
          setEmail('');
          setMessage('');
          setSuccess('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <p className="text-richMetallicGold">{success}</p>
      <form className="flex flex-col gap-4 w-full max-w-2xl p-2.5" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_name"
          id="user_name"
          placeholder="Harry"
          autoComplete="name"
          className="h-12 rounded-lg p-2 bg-oliveGreen text-sageTintedOlive"
          value={name}
          onChange={handleName}
          required
        />
        <input
          type="email"
          name="user_email"
          id="user_email"
          placeholder="Harry@gmail.com"
          autoComplete="email"
          className="h-12 rounded-lg p-2 bg-oliveGreen text-sageTintedOlive"
          value={email}
          onChange={handleEmail}
          required
        />
        <textarea
          type="text"
          name="message"
          id="message"
          placeholder="Type your message here..."
          autoComplete="off"
          rows="7"
          cols="50"
          className="rounded-lg p-2 bg-oliveGreen text-sageTintedOlive"
          value={message}
          onChange={handleMessage}
          required
        />
        <button
          type="submit"
          className="w-full border border-richMetallicGold rounded-lg text-softSage font-semibold text-xl p-2 hover:bg-warmOliveTint transition-all duration-500 cursor-pointer  hover:text-deepForestGreen hover:font-semibold"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
