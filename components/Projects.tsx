import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5, 7, 8, 9, 10];
  const styles = {
    object_fit: "cover",
  };
  return (
    <div className="flex h-screen flex-row overflow-x-scroll snap-x snap-mandatory pt-20 scroll-smooth backdrop-blur-sm">
      {projects.map((project, i) => (
        <div
          id={i.toString()}
          key={i}
          className="w-full shrink-0 flex flex-col snap-center"
        >
          <div className="h-full flex flex-col rounded-lg items-center">
            <div className="h-2/3 w-full sm:w-2/3 overflow-hidden relative px-10 sm:px-0">
              <Image
                src="https://picsum.photos/1920/1080"
                alt=""
                style={{ objectFit: "cover" }}
                fill
                className={"overflow-hidden px-10 sm:px-0 rounded-lg"}
              />
            </div>
            <div className="h-1/4 w-full sm:w-2/3 overflow-y-auto flex flex-col px-10 sm:px-0 pt-5">
              <h5 className="pb-2 text-sm sm:text-lg font-bold customGreen">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="pb-2 text-sm dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order. Lorem ipsum dolor sit,
                amet consectetur adipisicing elit. Itaque eos repellendus
                consectetur quos eaque a dolorum officia et saepe, laudantium,
                reiciendis doloribus suscipit molestias expedita. Praesentium
                facere molestiae ea quod?
              </p>
              <div className="flex flex-row space-x-5 pb-10 items-center">
                <div className="projectTag">#Javascript</div>
                <div className="projectTag">#Python</div>
                <div className="projectTag">#CSS</div>
              </div>
              <div className="flex flex-row justify-between">
                <Link
                  className={"projectButton"}
                  href={"#" + (i - 1).toString()}
                >
                  Prev
                </Link>
                <Link
                  className={"projectButton"}
                  href={"#" + (i + 1).toString()}
                >
                  Read More
                </Link>
                <Link
                  className={"projectButton"}
                  href={"#" + (i + 1).toString()}
                >
                  Next
                </Link>
              </div>

              {/* <a
                href={"#" + (i + 1).toString()}
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
