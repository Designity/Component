import React from "react";
import Image from "next/image";
import Person from "../asserts/Images/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpeg";
const Smallcard = () => {
  return (
    <div className="bg-white w-full px-9 py-8 flex justify-start items-start gap-3 rounded-lg shadow-lg  transform  transition duration-500 hover:scale-105 z-0">
      <div className="w-10 h-14 ">
        <Image src={Person} alt="" className=" rounded-full" />
      </div>
      <div>
        <h3 className=" text-primary_white_text font-light text-sm text-start">
          Sanjeev V
        </h3>
        <p className="text-primary_white_text font-normal ">
          Ask Question or Share With the community
        </p>
      </div>
    </div>
  );
};

export default Smallcard;
