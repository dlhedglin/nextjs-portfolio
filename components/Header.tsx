import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky flex flex-row top-0 z-20 w-full">
      <motion.div
        initial={{
          x: -1000,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex w-full p-2 items-center text-white justify-center"
      >
        <Link
          href="#hero"
          className="text-lg bold uppercase p-2 hover:text-gray-500"
        >
          Home
        </Link>
        <Link
          href="#resume"
          className="text-lg bold uppercase p-2 hover:text-gray-500"
        >
          Resume
        </Link>
        <Link
          href="#projects"
          className="text-lg bold uppercase p-2 hover:text-gray-500"
        >
          Projects
        </Link>
        <SocialIcon
          url="https://www.github.com/dlhedglin/"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/dlhedglin/"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="devan.hedglin@gmail.com"
          fgColor="white"
          bgColor="transparent"
          network="email"
        />
      </motion.div>
    </header>
  );
}

export default Header;
