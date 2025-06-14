import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const project = [
   {
    name: "MOVIE FINDER",
    about:
      "A simple and user-friendly website that allows users to search for movies by entering the movie name. It fetches real-time data using the OMDb API, displaying movie details like title, year, poster, and a description.",


    technologies: "HTML | CSS | JavaScript | OMDb API | Git",
    align: "right",
    image: "./images/moviefinder.png",
    githublink: "https://github.com/PoorniAbeysekara/Online-Movie-Finder.git",
  },  
  {
    name: "CONFERENCE MANAGEMENT SYSTEM",
    about:
      "A System designed to manage conference events efficiently. It allows organizers to schedule sessions, handle registrations, and manage speaker details, while participants can view event information and register online.",
    technologies: " HTML | CSS | JavaScript | Node.js | Express.js | MySQL | Git",
    align: "left",
    image: "/images/conference.png",
    githublink: "https://github.com/PoorniAbeysekara/conference_management_system.git",
  },

  {
    name: "TO-DO LIST",
    about:"A to-do list app for adding, editing, and organizing tasks.",
    technologies: "HTML | CSS | JavaScript | Git",
    align: "right",
    image: "/images/todo .png",
    githublink: "https://github.com/PoorniAbeysekara/To-Do-List.git",
  },
  {
    name: "CALCULATOR",
    about:"A basic calculator that performs standard mathematical operations.",
    technologies: "React.js | Vite | Git",
    align: "left",
    image: "/images/cal.png",
    githublink: "https://github.com/PoorniAbeysekara/Simple-React-Calculator.git",
  },
  {
    name: "Cinemax.lk",
    about:
      "An online Movie ticket booking platform where user can order snacks together.",
    technologies: "React.js | Spring boot | MongoDB | Git",
    align: "right",
    image: "./images/movie.png",
    githublink: "https://github.com/PoorniAbeysekara/Movie-and-Snacks-booking-system.git",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-2">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {project.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              about={item.about}
              technologies={item.technologies}
              align={item.align}
              image={item.image}
              githublink={item.githublink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
