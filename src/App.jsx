import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Technologies } from "./components/Technologies";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div
      className="overflow-x-hidden text-neutral-300 antialiased selection:bg-white
       selection:text-cyan-900"
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="min-h-screen w-full relative bg-black">
          <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
      }}
    />
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies/>
        {/* <Experience/> */}
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
