import React from "react";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between z-20 p-5 max-w-7xl mx-auto">
      <motion.div
        initial={{
          x: -500,
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
        className="flex flex-row items-center"
      >
        <button className="headerButton">Home</button>
        <button className="headerButton">Resume</button>
        <button className="headerButton">Projects</button>
        {/* <Link href={{}}>Home</Link>
        <Link href={{}}>Resume</Link>
        <Link href={{}}>Projects</Link> */}
      </motion.div>
      <motion.div
        initial={{
          x: 500,
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
        className="flex flex-row items-center cursor-pointer"
      >
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
      </motion.div>
    </header>
  );
}

export default Header;
