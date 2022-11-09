import React from "react";
import Link from "next/link";
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
        className="flex w-full p-2 sm:p-5 items-center text-gray-400 justify-end"
      >
        <Link scroll={false} href="/#hero" className="navButton">
          <span className="customGreen">0. </span>Home
        </Link>
        <Link scroll={false} href="/#about" className="navButton">
          <span className="customGreen">01. </span>About
        </Link>
        <Link scroll={false} href="/#projects" className="navButton">
          <span className="customGreen">02. </span>Projects
        </Link>
        <Link scroll={false} href="/resume" className="navButton">
          <span className="customGreen">03. </span>resume
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
