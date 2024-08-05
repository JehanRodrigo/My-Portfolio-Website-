import React from "react";
import { skills } from "@/Data";
import Image from "next/image";
const Skills = () => {
  return (
    <div className=" flex flex-wrap items-center justify-center gap-4  md:gap-16">
      {skills.map(({ id, img, name, nameImg }) => (
        <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
          <Image src={img} alt={name} width={200} height={200}className="md:w-10 w-5 h-12" />
          <Image src={nameImg} alt={name} width={200} height={200} className="md:w-24 w-20" />
        </div>
      ))}
    </div>
  );
};

export default Skills;
