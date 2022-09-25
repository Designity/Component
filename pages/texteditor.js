import { useQuill } from "react-quilljs";
import { useState } from "react";
import Image from "next/image";
import "quill/dist/quill.snow.css";
import Down from "../asserts/Icons/Down.svg";
import Xmark from "../asserts/Icons/Xmark";
import Person from "../asserts/Images/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpeg";
import Add from "../asserts/Icons/Add";

export default function textEditor() {
  const [drop_1, setDrop_1] = useState(false);
  const [drop_2, setDrop_2] = useState(false);
  const [drop_3, setDrop_3] = useState(false);
  const [active, setActive] = useState(false);
  const [text, setText] = useState("Select Community");
  const [topic, setTopic] = useState("Search Topic");
  const handleChange_Community = (e) => {
    // setText(e.target.innerHTML);
    // console.log(text);
    setDrop_2(!drop_2);
    setActive((active = true));
  };
  const handleChange_Topic = (e) => {
    setTopic(e.target.innerHTML);
    setDrop_3(!drop_3);
  };

  const handleClick_1 = () => {
    setTimeout(() => {
      setDrop_1(!drop_1);
    }, 100);
    if (drop_2 == true) {
      setDrop_2((drop_2 = false));
    }
  };
  const handleClick_2 = () => {
    setTimeout(() => {
      setDrop_2(!drop_2);
    }, 100);
    if (drop_1 == true) {
      setDrop_1((drop_1 = false));
    }
  };
  const handleClick_3 = () => {
    setTimeout(() => {
      setDrop_3(!drop_3);
    }, 100);
    if (drop_1 || drop_2 == true) {
      setDrop_1((drop_1 = false));
      setDrop_2((drop_2 = false));
    }
  };
  const modules = {
    container: false,
    toolbar: [
      ["bold", "italic", "underline", "list", "align", "link", "image"],
    ],
  };
  // const { Editor } = dynamic(() => import("react-draft-wysiwyg"), {
  //   ssr: false,
  // });

  const { textEditor, quillRef } = useQuill({
    modules,
    placeholder: "Add a description or Link (options)",
    theme: "snow",
  });
  return (
    <div className="flex justify-center items-center  ">
      <div className="flex flex-col justify-start px-[2.75rem] pt-[1.75rem] pb-[2rem] gap-4  bg-white w-[50rem] shadow-2xl rounded-md">
        <div className=" flex justify-between items-center">
          <div className="relative flex justify-start items-center gap-3">
            <div
              className={`flex justify-start items-center gap-2 px-3 py-[0.9px] hover:border-[#3365e6] border-[1.4px] rounded-2xl ,${
                drop_1
                  ? "absolute left-0 top-[40px]  bg-white shadow-2xl z-30 border-[#3365e6] rounded-2xl"
                  : "hidden "
              }`}
              onClick={handleClick_1}
            >
              <div className="relative flex justify-center items-center gap-2">
                {" "}
                <div className="w-7 h-7 ">
                  <Image src={Person} alt="" className=" rounded-full" />
                </div>
                <p className=" text-md font-normal leading-[130%]">Name w</p>
                <div>
                  <Image src={Down} />
                </div>
              </div>
              <div
                className={`${
                  drop_1
                    ? "absolute left-0 top-[40px]  bg-white rounded-md shadow-2xl z-30"
                    : "hidden "
                }`}
              >
                <div className=" flex flex-col justify-between items-start ">
                  <div className="flex justify-center items-center gap-1 p-3">
                    <div className="w-7 h-7 ">
                      <Image src={Person} alt="" className=" rounded-full" />
                    </div>
                    <p className=" text-md font-normal leading-[130%]">
                      Name w
                    </p>
                  </div>
                  <div className="flex gap-2 justify-center items-center p-3 ">
                    <Add />
                    <div className="flex flex-col justify-start items-start gap-1 ">
                      <h4 className=" text-[#3365e6] text-md">
                        Create an alias
                      </h4>
                      <h4 className=" text-[#a7a7a793] text-sm">
                        Post without revealing your identy
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>to</p>
            <div
              className={`flex justify-start items-center gap-2 px-3 py-2 hover:border-[#3365e6] border-[1.4px] rounded-2xl ,${
                drop_2
                  ? "absolute left-0 top-[40px]  bg-white shadow-2xl z-30 border-[#3365e6] rounded-2xl"
                  : "hidden "
              }`}
              onClick={handleClick_2}
            >
              <div className="relative flex justify-center items-center gap-2 ">
                {" "}
                <p className="text-md font-normal leading-[130%]">{text} </p>
                <div>
                  <Image src={Down} />
                </div>
                <div
                  className={`${
                    drop_2
                      ? "absolute left-0 top-[40px] w-[250px] bg-white rounded-md shadow-2xl z-30"
                      : "hidden"
                  }`}
                >
                  <div className=" flex flex-col justify-center items-start ">
                    <div className="flex gap-1 p-2">
                      <img src="" alt="" />
                      <button
                        className=" text-md font-normal leading-[130%]"
                        onClick={handleChange_Community}
                      >
                        Genearal Advice
                      </button>
                    </div>
                    <div className="flex gap-1 p-2">
                      <img src="" alt="" />
                      <button
                        className=" text-md font-normal leading-[130%]"
                        onClick={handleChange_Community}
                      >
                        Recruiter Announcements
                      </button>{" "}
                    </div>
                    <div className="flex gap-1 p-2">
                      <img src="" alt="" />
                      <button
                        className=" text-md font-normal leading-[130%]"
                        onClick={handleChange_Community}
                      >
                        Remote Work
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {active ? (
              <>
                <p>to</p>
                <div
                  className={`flex justify-start items-center gap-2 px-3 py-2 hover:border-[#3365e6] border-[1.4px] rounded-2xl ,${
                    drop_3
                      ? "absolute left-0 top-[40px]  bg-white shadow-2xl z-30 border-[#3365e6] rounded-2xl"
                      : "hidden "
                  }`}
                  onClick={handleClick_3}
                >
                  <div className="relative flex justify-center items-center gap-2 ">
                    {" "}
                    <p className="text-md font-normal leading-[130%]">
                      {topic}{" "}
                    </p>
                    <div>
                      <Image src={Down} />
                    </div>
                    <div
                      className={`${
                        drop_3
                          ? "absolute left-0 top-[40px] w-[250px] bg-white rounded-md shadow-2xl z-30"
                          : "hidden"
                      }`}
                    >
                      <div className=" flex flex-col justify-center items-start ">
                        <div className="flex gap-1 p-2">
                          <button
                            className=" text-md font-normal leading-[130%]"
                            onClick={handleChange_Topic}
                          >
                            Advice
                          </button>
                        </div>
                        <div className="flex gap-1 p-2">
                          <button
                            className=" text-md font-normal leading-[130%]"
                            onClick={handleChange_Topic}
                          >
                            MentorShip
                          </button>{" "}
                        </div>
                        <div className="flex gap-1 p-2">
                          <button
                            className=" text-md font-normal leading-[130%]"
                            onClick={handleChange_Topic}
                          >
                            Motivartion and support
                          </button>
                        </div>
                        <div className="flex gap-1 p-2">
                          <button
                            className=" text-md font-normal leading-[130%]"
                            onClick={handleChange_Topic}
                          >
                            Random{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div>
            <Xmark />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Create a title"
            className=" outline-none"
          />
          <div className="relative flex flex-col-reverse ">
            <div ref={quillRef} />
            <button className="absolute right-0 bottom-[-4.58px] py-2 px-9 rounded-lg bg-[#daf996] font-md text-normal">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
