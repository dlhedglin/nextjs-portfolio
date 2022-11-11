import React from "react";
import Image from "next/image";
import aboutPic from "../public/about.jpg";
import heroPic from "../public/hero.jpg";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  about: {
    about: string[];
    aboutPic: any;
  };
};

const About = (props: Props) => {
  return (
    <div className="flex flex-col sm:flex-row h-screen justify-center pt-10">
      <div className="flex w-full h-1/2 sm:w-1/2 sm:h-screen items-center justify-center">
        {/* <Image
          src={aboutPic}
          alt=""
          width="1000"
          height="1000"
          style={{ objectFit: "cover" }}
          className={"overflow-hidden"}
        /> */}
        <div className="realative h-64 w-64 ">
          {/* {props.pageInfo.aboutPic.asset._ref} */}
          <Image
            src={urlFor(props.about.aboutPic).url()}
            alt="image"
            width={500}
            height={500}
            className={"rounded-lg"}
            // style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className=" space-y-8 w-full h-1/2 sm:w-1/2 sm:h-screen flex flex-col justify-center items-start px-10 pb-20">
        <h1 className="customGreen text-lg sm:text-5xl text-center uppercase">
          About
        </h1>
        <div className="overflow-y-auto">
          {props.about.about.map((text) => (
            <p key={text} className="text-xs sm:text-lg  text-gray-400 py-2">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
