import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import heroPic from "../public/hero.jpg";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [" cd home", " cd resume", " cd projects"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center">
      <div className="realative h-32 w-32 mx-auto object-cover">
        <Image
          src={heroPic}
          alt="image"
          width={500}
          height={500}
          className={"rounded-full"}
        />
      </div>
      <h1 className="text-5xl font-semibold px-10">Devan Hedglin</h1>
      <h2 className="text-gray-500 text-md uppercases tracking-[10px]">
        DevOps/Cloud Engineer
      </h2>
      <h1 className="text-green-500">
        user@devanh.com:~$
        <span className="text-white">{text}</span>
        <Cursor cursorColor="#FFFFFF" cursorStyle="|" />
      </h1>
    </div>
  );
}

export default Hero;
