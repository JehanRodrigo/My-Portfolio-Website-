"use client";
import React from "react";
import { GlobeDemo } from "./GridGlobe";
import { BackgroundGradientAnimation } from "./GradientBg";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./MagicButton";

const MyGrid = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("jehanrodrigo31@gmail.com");
    setCopied(true);
  };

  const [downloaded, setdownloaded] = useState(false);
  const handleDownloadCV = () => {
    // The URL of your CV file
    const cvUrl = "/Jehan Rodrigo CV.pdf";

    // Create an anchor element
    const anchor = document.createElement("a");
    anchor.href = cvUrl;
    anchor.download = "Jehan Rodrigo CV.pdf";

    // Append the anchor to the body (necessary for Firefox)
    document.body.appendChild(anchor);

    // Programmatically click the anchor to trigger the download
    anchor.click();

    // Remove the anchor from the document
    document.body.removeChild(anchor);
    setdownloaded(true);
  };

  return (
    <div className="min-h-[600px] w-full flex items-center justify-center">
      <div
        className={
          "md:h-[1000px] p-5 bg-black w-full min-h-[600px] my-5 grid md:grid-rows-4 grid-rows-6 md:grid-cols-3 gap-6 rounded-xl bg-gradient-to-tr from-[rgba(4,7,29,1)] to-[rgba(12,14,35,1)] border-1.8 border-white"
        }
      >
        <div className="h-full md:col-span-2 md:row-span-2 p-3 flex gap-3 items-end justify-center relative  rounded-xl bg-[url('/DockerContainerization.svg')] bg-cover bg-center">
          <div className="flex-col font-sans font-bold lg:text-3xl m-6 max-w-96 z-10 ">
            Docker Containerization
          </div>
        </div>
        <div className="h-full row-span-1 items-end justify-center relative rounded-xl bg-[url('/GridItemBg.png')] bg-cover bg-center overflow-hidden">
          <GlobeDemo />
          <div className=" flex-col font-sans font-bold lg:text-3xl max-w-96 m-6">
            I&apos;m flexible with time zone communications
          </div>
        </div>
        <div className="bg-[url('/GridItemBg.png')] rounded-lg flex flex-col md:flex-row items-center justify-center gap-3 p-3">
          <h2 className=" text-xl lg:text-2xl font-sans font-bold">
            My tech stack
          </h2>
          <div className="grid grid-cols-2 gap-3 max-w-[200px]">
            {[
              "React.js",
              "Docker",
              "Typescript",
              "Kubernates",
              "Tailwind CSS",
              "MongoDB",
              "Next.js",
              "AWS",
            ].map((item) => (
              <p
                key={item}
                className=" px-3 py-2 text-xs rounded-lg text-center bg-[#10132E] flex items-center justify-center"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="flex gap-1 lg:gap-5 relative items-center h-full rounded-lg overflow-hidden">
          <div className="absolute inset-0 z-0">
            <BackgroundGradientAnimation></BackgroundGradientAnimation>
          </div>
          <div className="flex flex-col gap-6 w-full items-center justify-center relative z-10">
            <div className=" flex-col font-sans font-bold lg:text-3xl z-10">
              Checkout My CV Here..
            </div>
            <div className="flex items-center justify-center w-full">
              <MagicButton
                title={downloaded ? "CV Downloaded" : "Download My CV"}
                icon={<IoCopyOutline />}
                position="center"
                otherClasses="!bg-[#161a31]"
                handleClick={handleDownloadCV}
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-2 md:row-span-2 bg-[url('/b5.svg')] bg-contain bg-right-bottom bg-no-repeat shadow-xl shadow-slate-100/5 rounded-lg p-3">
          <div className=" flex-col font-sans font-bold lg:text-3xl items-center justify-center m-6 ">
            Currently building Multi Tier Web Application Called VProfile
          </div>
        </div>

        <div className="flex gap-1 lg:gap-5 relative items-center h-full rounded-lg overflow-hidden">
          <div className="absolute inset-0 z-0">
            <BackgroundGradientAnimation></BackgroundGradientAnimation>
          </div>
          <div className="flex flex-col gap-6 w-full items-center justify-center relative z-10">
            <div className=" flex-col font-sans font-bold lg:text-3xl z-10">
              Reach out to my Email..
            </div>
            <div className="flex items-center justify-center w-full">
              <MagicButton
                title={copied ? "Email Copied" : "Copy my Email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyGrid;
