"use client";

import { Projects } from "./projects";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div>
      <HeroHighlight className=" max-w-[900px] mx-auto py-[100px] px-5">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-xl px-4 md:text-3xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ">
          Hi, I&apos;m{" "}
          <Highlight className="text-black dark:text-white">
            Zharassar
          </Highlight>
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-md md:text-lg lg:text-xl text-center text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mt-4">
          I have been developing web applications professionally since I was 16
          years old. I have passed bootcamps, and dozens of hackathons
        </motion.p>
        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-md px-4 md:text-xl lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mt-4 mb-[24px]">
          Here&apos;s everything I&apos;ve done so far:
        </motion.h2>

        <Projects className="mt-20" />
      </HeroHighlight>
    </div>
  );
}

export default Hero;
