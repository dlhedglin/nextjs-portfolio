import Image from "next/image";
import Link from "next/link";
import React from "react";
import { urlFor } from "../sanity";
import { Project } from "../typings";

type Props = {
  projects: Project[];
};

const Projects = (props: Props) => {
  return (
    <div className="flex h-screen flex-row overflow-x-scroll snap-x snap-mandatory pt-20 pb-10 scroll-smooth">
      {props.projects.map((project, i) => (
        <div
          id={i.toString()}
          key={project._id}
          className="w-full shrink-0 flex flex-col snap-center"
        >
          <div className="h-full flex flex-col rounded-lg items-center justify-start">
            <div className="h-1/2 w-full sm:w-2/3 overflow-hidden relative transition duration-500 hover:scale-105">
              <Image
                src={urlFor(project.image).url()}
                alt="image"
                style={{ objectFit: "contain" }}
                fill
                className={"overflow-hidden px-5 sm:px-0"}
              />
            </div>
            <div className="h-1/2 w-full sm:w-2/3 flex flex-col px-5 sm:px-0 pt-5">
              <div className="pb-2 text-base sm:text-lg font-bold customGreen">
                {project.title}{" "}
                <span className="pb-2 text-sm sm:text-base font-bold text-gray-300">
                  - {project.description}
                </span>
              </div>
              <ol className="overflow-y-auto pb-5 text-xs sm:text-sm dark:text-gray-400">
                {project.summary.map((line) => (
                  <li className="py-1" key={line}>
                    - {line}
                  </li>
                ))}
              </ol>
              <div className="flex flex-row flex-wrap space-x-5 pb-5 pt-2 grow">
                {project.tags.map((tag: string) => (
                  <div key={tag + project._id} className="projectTag">
                    {tag}
                  </div>
                ))}
              </div>
              <div className="flex flex-row w-full justify-between">
                <Link
                  className={"projectButton "}
                  href={"#" + (i - 1).toString()}
                >
                  Prev
                </Link>
                {project.linkToCode === "https://github.com/dlhedglin" ? (
                  <Link className="projectButtonDisabled" href={"#"}>
                    Code Private
                  </Link>
                ) : (
                  <Link className="projectButton" href={project.linkToCode}>
                    View Code
                  </Link>
                )}
                <Link
                  className={"projectButton"}
                  href={"#" + (i + 1).toString()}
                >
                  Next
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
