import React from "react";
import Image from "next/image";
import aboutPic from "../public/about.jpg";
import heroPic from "../public/hero.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="flex flex-col sm:flex-row h-screen justify-center backdrop-blur-sm pt-10">
      <div className="flex w-full h-1/2 sm:w-1/2 sm:h-screen items-center">
        {/* <Image
          src={aboutPic}
          alt=""
          width="1000"
          height="1000"
          style={{ objectFit: "cover" }}
          className={"overflow-hidden"}
        /> */}
        <div className="realative h-64 w-64 mx-auto object-cover">
          <Image
            src={heroPic}
            alt="image"
            width={500}
            height={500}
            className={"rounded-lg"}
          />
        </div>
      </div>
      <div className=" space-y-8 w-full h-1/2 sm:w-1/2 sm:h-screen flex flex-col justify-center items-start px-10">
        <h1 className="customGreen sm:text-2xl text-center uppercase">About</h1>
        <p className="text-xs sm:text-lg overflow-y-auto text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel
          tortor ut nisi luctus eleifend. Maecenas convallis auctor nisi, non
          sodales ex tempus eu. Vestibulum mollis ullamcorper lorem in mollis.
          Aliquam aliquet finibus urna, eget fermentum mi malesuada in. Aenean
          magna dolor, efficitur at mauris in, varius facilisis ipsum. Proin nec
          auctor urna. Etiam ipsum ex, ullamcorper id ligula non, feugiat
          fringilla odio. Aenean eu mollis purus, id porttitor felis. Fusce vel
          aliquet libero, id gravida metus. Aliquam mi lacus, bibendum in magna
          et, malesuada convallis quam.
        </p>
      </div>
    </div>
  );
};

export default About;
