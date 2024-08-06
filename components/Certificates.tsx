import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { skills, certificates } from "@/Data";

const Certificates: React.FC = () => {
  return (
    <div className="py-10" id="Certificates">
      <h1 className="heading pb-10">
        <span className="text-purple"> Certificates </span>
        that obtained from Bootcamps
      </h1>
      <div className=" flex flex-col items-start ">
        <div className="rounded-md flex flex-col antialiased items-center relative">
          <InfiniteMovingCards
            items={certificates}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
