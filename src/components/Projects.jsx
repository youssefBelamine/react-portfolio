import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import ProjectMockup from "./Sub-components/ProjectMockup";

export const Projects = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
        <motion.p
          whileInView={{ opacity: 1, width: 190 }}
          initial={{ opacity: 0, width: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=" h-[2px] rounded-full mt-1 w-2/10 m-auto bg-white"
        />
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-14 flex flex-wrap justify-around border-b border-white/25 pb-10"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className=""
            >
              {/* <img src={project.image}
                            width={150} 
                            height={150}
                            alt={project.title}
                            className='mb-6 rounded'
                            /> */}
              <ProjectMockup
                image={project.image}
                title={project.title}
                link={"#"}
              />
            </motion.div>
            <motion.div
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: 100 }}
  transition={{ duration: 1 }}
  className="w-full max-w-xl p-6 bg-gradient-to-r
   from-gray-900/40 to-gray-800/20 rounded-2xl shadow-xl/15
    shadow-white border border-gray-700/40"
>
  <h6 className="text-lg font-bold text-gray-200 mb-2">
                {project.title}
              </h6>
              <p className="mb-4 text-gray-300 text-base leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="m-2 rounded bg-neutral-900 px-2 py-1 text-medium transition-colors outline-2 text-cyan-900 border-cyan-900 hover:text-cyan-600 hover:border-cyan-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
</motion.div>


            {/* <p className='bg-white pt-0.5'>-------</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};
