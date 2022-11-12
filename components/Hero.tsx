import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import heroPic from "../public/hero.jpg";
import { SocialIcon } from "react-social-icons";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Software Engineer", "DevOps Engineer", "Cloud Engineer"],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-start justify-center z-20 px-10 sm:px-28 md:px-48 lg:px-96">
      <h2 className="customGreen text-lg sm:text-2xl">Hello, Im</h2>
      <h2 className="text-4xl lg:text-7xl font-bold">Devan Hedglin</h2>
      <h2 className="text-gray-400 text-lg sm:text-2xl uppercases">
        {text} <Cursor cursorColor="#FFFFFF" cursorStyle="|" />
      </h2>
      <div>
        <SocialIcon
          url="https://www.github.com/dlhedglin/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/dlhedglin/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="devan.hedglin@gmail.com"
          fgColor="gray"
          bgColor="transparent"
          network="email"
        />
      </div>
      {/* <h1 className="text-green-500">
        user@devanh.com:~$
        <span className="text-white">{text}</span>
        <Cursor cursorColor="#FFFFFF" cursorStyle="|" />
      </h1> */}
    </div>
  );
}

export default Hero;
