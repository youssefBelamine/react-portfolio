import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { FaLocationDot } from "react-icons/fa6";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="border-b border-neutral-900 py-14 px-4 lg:px-10 xl:px-20"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-center mb-12"
      >
        Get in <span className="text-neutral-500">Touch</span>
        <motion.p
        whileInView={{ opacity: 1, width: 260}}
        initial={{ opacity: 0, width: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
         className=" h-[2px] rounded-full mt-1 w-2/10 m-auto bg-white"/>
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Box - Contact Info */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex-1 flex items-center justify-center p-8 rounded-lg"
        >
          <div className="text-center space-y-4">
            <p className="text-lg font-medium">
              <p>{CONTACT.address}</p></p>
            <p className="text-lg font-medium">

              <a href={`tel:${CONTACT.phoneNo}`} className="border-b border-dashed">
                {CONTACT.phoneNo}
              </a>

              </p>
            <p className="text-lg font-medium">

              <a href={`mailto:${CONTACT.email}`} className="border-b border-dashed">
                {CONTACT.email}
              </a>
              
            </p>
          </div>
        </motion.div>

        {/* Right Box - Contact Form */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="flex-1 p-4 rounded-lg shadow-lg"
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};
