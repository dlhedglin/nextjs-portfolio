import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../sanity";
import { Skill as skillType } from "../typings";
import Skill from "./Skill";

type Props = {
  skills: {
    Proficient: skillType[];
    Novice: skillType[];
    Competent: skillType[];
  };
};

const Projects = (props: Props) => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="customGreen text-3xl text-center font-bold uppercase pb-5 sm:pb-10">
        Skills
      </div>
      <div className="flex flex-col items-center space-y-2 sm:space-y-10">
        <div className="text-center p-2 rounded-lg bg-gray-700 shadow-lg transition duration-500 hover:scale-105">
          <div className="skillsLevel">Proficient:</div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
            {props.skills.Proficient.map((skill: skillType) => (
              <Skill key={skill._id} skill={skill} />
            ))}
          </div>
        </div>
        <div className="text-center p-2 rounded-lg bg-gray-700 shadow-lg transition duration-500 hover:scale-105">
          <div className="skillsLevel">Competent:</div>
          <div className="grid gap-2 grid-cols-3 md:grid-cols-5">
            {props.skills.Competent.map((skill: skillType) => (
              <Skill key={skill._id} skill={skill} />
            ))}
          </div>
        </div>
        <div className="text-center p-2 rounded-lg bg-gray-700 shadow-lg transition duration-500 hover:scale-105">
          <div className="skillsLevel">Novice:</div>
          <div className="grid gap-2 grid-cols-3 md:grid-cols-5">
            {props.skills.Novice.map((skill: skillType) => (
              <Skill key={skill.tech} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
