import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../sanity";
import { Skill } from "../typings";

type Props = {
  skill: Skill;
};

const Projects = (props: Props) => {
  return (
    <div className="flex flex-row p-1 sm:p-2 items-center shadow-2xl transition duration-500 hover:scale-110 bg-gray-300 rounded-lg border-4 border-gray-300 hover:border-4 hover:border-[#64FFDA]">
      <div className="h-4 w-4 sm:h-10 sm:w-10">
        <Image
          src={urlFor(props.skill.image).url()}
          alt="image"
          height={64}
          width={64}
        />
      </div>
      <div className="text-xs sm:text-lg text-gray-900 px-2 sm:px-5">
        {props.skill.tech}
      </div>
    </div>
  );
};

export default Projects;
