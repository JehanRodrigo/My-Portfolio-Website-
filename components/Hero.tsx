import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen pb-20 pt-12">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-10 -left-full h-[80vh] w-[50vh]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex flex-col md:flex-row relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 ">
            Jehan Rodrigo&apos;s portfolio with next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-3xl lg:text-5xl"
            words="Building the Future with Fullstack Expertise and DevOps Precision."
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Jehan Rodrigo, A DevOps Engineering and Fullstack Web
            Development Enthusiast based in Sri Lanka.
          </p>

          <Link href="#projects">
            <MagicButton
              title="See my works"
              position="right"
              icon={<FaLocationArrow />}
            />
          </Link>
        </div>

        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <Image
            src="/ProfilePic.png"
            alt="Profile Pic"
            className="max-w-[500px] min-w-[100px] md:max-w-[450px] w-full md:min-w-[250px] lg:w-[600px]"
         />
        </div>
      </div>
    </div>
  );
};

export default Hero;
