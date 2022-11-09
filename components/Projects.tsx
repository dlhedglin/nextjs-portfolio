import Image from "next/image";
import React from "react";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5, 7, 8, 9, 10];
  const styles = {
    object_fit: "cover",
  };
  return (
    <div className="flex h-screen flex-col mx-auto text-center items-center z-0">
      <div className="flex text-center justify-center items-center h-1/4  w-full">
        <h3 className="uppercase tracking-[20px] text-white text-2xl ">
          Projects
        </h3>
      </div>
      <div className="w-full flex overflow-x-scroll snap-x snap-mandatory z-20 h-3/4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-full lg:w-1/3 md:w-1/2 sm:w-1/2 shrink-0 flex flex-col snap-center items-center justify-center p-20 "
          >
            <div className=" w-full h-full flex flex-col rounded-lg bg-white">
              <div className="h-1/2 w-full shrink-0 overflow-hidden rounded-t-lg">
                <Image
                  src="https://picsum.photos/1000"
                  alt=""
                  width="1000"
                  height="1000"
                  style={{ objectFit: "fill" }}
                  className={"overflow-hidden"}
                />
              </div>
              <div className="p-5 overflow-y-auto">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal dark:text-gray-500">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <p className="mb-3 font-normal dark:text-gray-500">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <p className="mb-3 font-normal dark:text-gray-500">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <p className="mb-3 font-normal dark:text-gray-500">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <p className="mb-3 font-normal dark:text-gray-500">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <p className="mb-3 font-normal dark:text-gray-500">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <p className="mb-3 font-normal dark:text-gray-500">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
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
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
