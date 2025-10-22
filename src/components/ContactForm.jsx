import React, { useEffect, useRef } from "react";
import { useForm, ValidationError } from '@formspree/react';

export function ContactForm() {
  const [state, handleSubmit] = useForm("mjkaqokv");
  const formRef = useRef(null);
  // if (state.succeeded) {
  //     return <p>Thanks for joining!</p>;
  // }

  // Reset form after successful submission
  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  }, [state]);

  return (
    <div className=" p-6 rounded-lg shadow-md w-full
             border backdrop-blur-md text-white">
      {/* className="flex-1 p-8 rounded-lg shadow-lg 
             bg-indigo-900/70 backdrop-blur-md text-white" */}
      <h2 className="text-2xl font-bold mb-6 text-center md:text-center bg-white text-black rounded-full px-3">Contact Me</h2>
      <form ref={formRef}  onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col">

                                    {/* Name field */}
          <label htmlFor="name" className="mb-1 font-medium"> <p className="bg-white text-black rounded-full px-3 ml-1 w-1/5 text-center">Name</p> </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

                                    {/* Email field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium"><p className="bg-white text-black rounded-full px-3 ml-1  w-1/5 text-center">Email</p></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        </div>

                                    {/* Subject Field */}
        <div className="flex flex-col">
          <label htmlFor="subject" className="mb-1 font-medium"><p className="bg-white text-black rounded-full px-3 ml-1 w-1/5 text-center">Subject</p></label>
          <input
            id="subject"
            name="subject"
            rows="2"
            placeholder="Your subject"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ValidationError 
        prefix="Subject" 
        field="subject"
        errors={state.errors}
      />
        </div>

                                    {/* message Field */}
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-medium"><p className="bg-white text-black rounded-full px-3 ml-1 w-1/5 text-center">Message</p></label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your message"
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        </div>
                                            {/* Submit Button */}
        <button
          type="submit"
           disabled={state.submitting}
          className={` ${state.submitting ? "text-gray-400 hover:text-black hover:bg-gray-400" : "text-white hover:text-black hover:bg-white"} mt-4 border w-1/3 m-auto font-semibold py-2 rounded-md transition-colors`}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
