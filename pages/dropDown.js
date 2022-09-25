import { React, useState } from "react";
import Down from "../asserts/Icons/Down.svg";
import Image from "next/image";
const DropDown = () => {
  const [drop, setDrop] = useState(true);
  const handleClick = () => {
    setTimeout(() => {
      setDrop(!drop);
    }, 100);
  };

  return (
    <div className="flex justify-center items-center  " onClick={handleClick}>
      <div className="relative flex justify-center items-center gap-2">
        {" "}
        Hot
        <div>
          <Image src={Down} />
        </div>
        <div
          className={`${
            drop
              ? "hidden "
              : "absolute top-10 w-[100px] bg-white rounded-md shadow-2xl z-40"
          }`}
        >
          <div className="relative top-[-0.55rem] ">
            <div className=" flex justify-center items-center">
              <div
                className="
              border-l-[10px] border-l-transparent
              border-b-[10px] border-b-white
              border-r-[10px] border-r-transparent
              "
              ></div>
            </div>
          </div>
          <ul className=" flex flex-col justify-center items-start divide-y pb-[8px]">
            <li className="p-1 pl-2 w-full hover:bg-slate-100 transition-all delay-75">
              Hot
            </li>
            <li className="p-1 pl-2 w-full hover:bg-slate-100 transition-all delay-75">
              New
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
