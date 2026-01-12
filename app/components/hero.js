"use client";

import { IconLink } from "@tabler/icons-react";
import { Projects } from "./projects";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div>
      <HeroHighlight className=" max-w-[800px] py-[100px] min-h-[1000px]">
        <motion.div
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
          }}>
          <div className="px-5">
            <h1 className="text-[18px] font-medium font-bold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug ">
              Hi, I&apos;m Zharassar
            </h1>
            <p className="my-1 font-light text-[14px]">
              Software Engineer • Laborer • Enthusiast
            </p>
            <p className="text-[16px] font-normal text-[#B2B2B2] max-w-4xl leading-relaxed lg:leading-snug mt-4">
              I previously worked at a company called{" "}
              <Highlight className="text-black dark:text-white">
                Zimran
              </Highlight>
              . I&apos;m curious, I&apos;m interested in learning new
              technologies, and I&apos;m open to talking to you guys
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[50px]">
              <div className="">
                <p className="text-[14px] text-[#B2B2B2]">Experience</p>
                <a
                  href="https://zimran.io"
                  className="mt-5 flex gap-2 items-center text-[18px]">
                  <p className="font-light border-b-[1px] border-[#B2B2B2] pb-[1px]">
                    Zimran
                  </p>
                  <IconLink className="w-4 h-4 text-red-400 opacity-70" />
                </a>
                <p className="text-[12px] text-[#B2B2B2] mt-1 uppercase tracking-wider">
                  Aug 2024 - Aug 2025
                </p>
                <p className="text-[16px] text-[#B2B2B2] mt-2">
                  Crafting frontend for a leader in Ed-Tech.
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-[14px] text-[#B2B2B2]">Building</p>
                <a
                  href="https://alivepic.com"
                  className="mt-5 flex gap-2 items-center text-[18px]">
                  <p className="font-light border-b-[1px] border-[#B2B2B2] pb-[1px]">
                    alivepic.com
                  </p>
                  <IconLink className="w-4 h-4 text-red-400 opacity-70" />
                </a>
                <p className="text-[16px] text-[#B2B2B2] mt-2">
                  Bringing photos to life.
                </p>
              </div>
            </div>
            <div>
              <div className="mt-[80px] flex gap-2 items-center text-[18px]">
                <p className="font-medium">Contact me</p>
              </div>
              <p className="text-[#B2B2B2] mt-1 font-light text-[16px]">
                I like cool ideas and crazy people
              </p>
              <p className="text-[#B2B2B2] mt-4 font-light text-[16px]">
                Reach me at{" "}
                <a href="https://t.me/jarasar" className="text-white">
                  @jarasar
                </a>{" "}
                or{" "}
                <a href="mailto:dauletjarasar@gmail.com" className="text-white">
                  dauletjarasar@gmail.com
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </HeroHighlight>
    </div>
  );
}

export default Hero;
