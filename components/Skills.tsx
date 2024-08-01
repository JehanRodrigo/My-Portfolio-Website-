import React from "react";
import { skills } from "@/Data";
const Skills = () => {
  return (
    <div className=" flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10">
      {skills.map(({ id, img, name, nameImg }) => (
        <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
          <img src={img} alt={name} className="md:w-10 w-5 h-12" />
          <img src={nameImg} alt={name} className="md:w-24 w-20" />
        </div>
      ))}
    </div>
  );
};

export default Skills;
