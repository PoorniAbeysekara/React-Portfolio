import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaLightbulb,
  FaHandsHelping,
  FaTools,
} from "react-icons/fa";
import { BiLogoFlutter } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiMysql, SiMongodb } from "react-icons/si";
import {
  RiTailwindCssFill,
  RiTeamFill,
  RiUserCommunityFill,
} from "react-icons/ri";
import { FaDartLang } from "react-icons/fa6";
import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "ReactJS", icon: FaReact },
  { skill: "Tailwind CSS", icon: RiTailwindCssFill },
  { skill: "NodeJS", icon: FaNodeJs },
  { skill: "MySQL", icon: SiMysql },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "Java", icon: FaJava },
  { skill: "Python", icon: FaPython },
  { skill: "Git", icon: FaGitAlt },
  { skill: "Figma", icon: FaFigma },
];

const softSkills = [
  { skill: "Teamwork", icon: RiTeamFill },
  { skill: "Communication", icon: RiUserCommunityFill },
  { skill: "Problem Solving", icon: FaLightbulb },
  { skill: "Collaboration", icon: FaHandsHelping },
];

const AllSkills = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-16 px-4">
      {/* Technical Skills Section */}
      <div className="w-full max-w-7xl text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <FaTools className="text-mutedGold text-4xl" />
          <motion.h2
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="text-3xl sm:text-4xl text-mutedGold"
          >
            Technical Skills
          </motion.h2>
        </div>
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="text-lg text-ivory mb-6"
        >
          These are the tools and technologies I use to build amazing projects.
        </motion.p>

        <div className="grid grid-cols-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {skills.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill
                text={item.skill}
                imgSvg={<item.icon className="w-14 h-14 text-gold" />}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="w-full max-w-4xl text-center">
        <div className="mb-6 flex items-center justify-center gap-4">
          <RiTeamFill className="text-mutedGold text-4xl" />
          <motion.h2
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="text-3xl sm:text-4xl text-mutedGold"
          >
            Soft Skills
          </motion.h2>
        </div>
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="text-lg text-ivory mb-6"
        >
          These are the interpersonal skills that help me collaborate and
          succeed in team environments.
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 justify-items-center">
          {softSkills.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
            >
              <SingleSkill
                text={item.skill}
                imgSvg={<item.icon className="w-12 h-12 text-gold" />}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllSkills;
