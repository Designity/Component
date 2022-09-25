import { React, useState, useRef, useEffect } from "react";
import Search from "../asserts/Icons/Search";
import Xmark from "../asserts/Icons/Xmark";
const Hello = () => {
  const inputRef = useRef(0);
  const [active, setActive] = useState(false);
  const [activeButton, setButtonActive] = useState(true);
  const handleClick = () => {
    setActive((active = true));
  };

  const buttonActive = () => {
    if (inputRef.current.value.length > 0) {
      setButtonActive((activeButton = false));
    }
  };
  const clearButton = () => {
    inputRef.current.value = "";
    setButtonActive(!activeButton);
    setActive(!active);
  };
  return (
    <div className="flex justify-start items-center">
      <div
        className={`p-[7.8px] bg-white rounded-l-2xl shadow-2xl pl-3 ${
          active ? "border-black border-y-2 border-l-2" : ""
        } `}
      >
        <Search />
      </div>
      <input
        type="text"
        placeholder="Search posts"
        ref={inputRef}
        onClick={handleClick}
        onChange={buttonActive}
        onFocus={(e) => {
          e.target.value == "";
        }}
        className={`bg-white-300 h-[43.6px] w-[30rem]  border-y-2 border-transparent shadow-2xl !outline-none  ${
          active ? "!border-black border-y-2" : ""
        } `}
      />
      <div
        className={`p-[6.1px] bg-white rounded-r-2xl shadow-2xl  ${
          active ? "border-black border-y-2 border-r-2" : ""
        }`}
      >
        {activeButton ? (
          <div className="h-7 w-7 "></div>
        ) : (
          <div onClick={clearButton} className="cursor-pointer">
            <Xmark />
          </div>
        )}
      </div>
    </div>
  );
};

export default Hello;
