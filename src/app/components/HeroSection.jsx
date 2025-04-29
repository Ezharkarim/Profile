"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" col-span-7 place-self-cente text-center sm:text-left"
        >
          <h1 className=" text-white mb-4 sm:text-5xl text-3xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{""}
              <br></br>
            </span>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Ezhar karim",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "MERN Developer",
                1000,
                "Wix Developer",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className=" text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            I execl at crafting elegant digital experiences and I am proficiant
            in various programming languages and technologies.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <a href="/Ezhar_karim_Resume.pdf" download>
              <button className="cursor-pointer px-1 py-1 w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 rounded-full bg-transparent hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-[#181818] rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className=" col-span-5 place-self-center mt-4 lg:mt-0 "
        >
          <div className=" bg-[#181818] rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/images/ezu.png"
              alt="image here"
              className=" absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
