import React from "react";

export function ContactForm() {
  return (
    <div className=" p-6 rounded-lg shadow-md w-full
             border backdrop-blur-md text-white">
      {/* className="flex-1 p-8 rounded-lg shadow-lg 
             bg-indigo-900/70 backdrop-blur-md text-white" */}
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">Contact Me</h2>
      <form action="https://formspree.io/f/mjkaqokv"
  method="POST" className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" name="_replyto" required className="mb-1 font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="subject" className="mb-1 font-medium">Subject</label>
          <textarea
            id="subject"
            name="subject"
            rows="2"
            placeholder="Your subject"
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your message"
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-4 border w-1/3 m-auto text-white hover:text-black font-semibold py-2 rounded-md hover:bg-white transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
