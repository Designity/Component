import Image from "next/image";
import { useState } from "react";
import Down from "../asserts/Icons/Down.svg";
import More from "../asserts/Icons/more_1.svg";
import Person from "../asserts/Images/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpeg";
import Add from "../asserts/Icons/Add";
import Heart from "../asserts/Icons/Heart.svg";
import Comment from "../asserts/Icons/Comment.svg";
import Bell from "../asserts/Icons/Bell.svg";
export default function card() {
  const [heart, setHeart] = useState(false);
  const [follow, setFollow] = useState(false);
  const [count, setCount] = useState(0);
  const [drop_1, setDrop_1] = useState(false);
  const handleClick_1 = () => {
    setTimeout(() => {
      setDrop_1(!drop_1);
    }, 100);
  };
  const handleHeart = () => {
    setHeart(!heart);
    if (heart == false) {
      setCount(count + 1);
    } else {
      setCount((count = 0));
    }
  };
  const handleFollow = () => {
    setFollow(!follow);
  };
  return (
    <div className="">
      <div className="bg-white w-full  rounded-lg shadow-2xl  flex flex-col justify-start items-start gap-4 ">
        <div className="flex justify-between px-10 pt-9 items-start gap-3 w-full  ">
          <div className="flex justify-start items-center gap-1">
            <div className="w-10">
              <Image src={Person} alt="" className=" rounded-2xl" />
            </div>
            <div className="flex flex-col justify-start items-start">
              <div className=" flex gap-2 items-center mb-1">
                <a className=" text-primary_dark font-semibold text-xs leading-[130%] hover:underline">
                  Sanjeev V
                </a>
                <p className="font-normal text-xs leading-[130%]">in</p>
                <a className=" text-primary_dark font-semibold text-xs leading-[130%] hover:underline">
                  Recuruiter Announcement
                </a>
              </div>
              <div className="">
                <p className="text-primary_white_text text-xs font-normal leading-[130%] flex justify-center items-center gap-2">
                  State University,Fall 2023
                  <span>. 1days ago </span>
                  <span>. 515 views</span>
                </p>
              </div>
            </div>
          </div>
          <Image src={More} width={30} />
        </div>
        <div className="px-[80px] flex flex-col justify-start items-start gap-2">
          <h1 className="text-base font-semibold leading-[130%] text-primary_dark capitalize">
            Looking for Internship/Project
          </h1>
          <div className="max-w-[570px]">
            <p className="text-primary_dark font-normal text-sm leading-[1.375rem] flex flex-col justify-start items-start">
              Hello,
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi pariatur ex nesciunt laboriosam eius voluptate iusto
                consequuntur, natus suscipit qui totam eveniet voluptates modi.
                Quibusdam rerum sint voluptates dignissimos ducimus.
              </span>
            </p>
          </div>
          <div className="flex justify-center item-center gap-4 font-normal text-xs">
            <div
              className="flex justify-center items-center gap-1 mt-2 border-[1px] border-primary_border py-1 px-5 rounded-full"
              onClick={handleHeart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={heart ? "red" : "white"}
                viewBox="0 0 24 24"
                stroke-width="1.3"
                stroke={heart ? "red" : "#666"}
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <p>{count}</p>

              <p className="text-primary_white_text">Like</p>
            </div>
            <div className="flex justify-center items-center gap-1 mt-2 border-[1px] border-primary_border py-2 px-5 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.3"
                stroke="#666"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 
  9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 
  4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                />
              </svg>

              <p className="text-primary_white_text">Comment</p>
            </div>
            <div
              className="flex justify-center items-center gap-1 mt-2 border-[1px] border-primary_border py-2 px-5 rounded-full"
              onClick={handleFollow}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={follow ? "#fc9213" : "none"}
                viewBox="0 0 24 24"
                stroke-width="1.3"
                stroke={follow ? "white" : "#666"}
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>

              <p className="text-primary_white_text">
                {follow ? "Following" : "Follow"}
              </p>
            </div>
          </div>
        </div>
        <div className=" border-t-[.3px] border-gray-300 w-full">
          <div className="px-10 py-9 flex justify-start items-center gap-3">
            <div
              className={`flex justify-start items-center gap-2 px-1 py-[0.9px] hover:border-[#3365e6] border-[1.4px] rounded-full ,${
                drop_1
                  ? "absolute left-0 top-[40px]  bg-white shadow-2xl z-30 border-[#3365e6] rounded-2xl"
                  : "hidden "
              }`}
              onClick={handleClick_1}
            >
              <div className="relative flex justify-center items-center gap-1 px-1">
                {" "}
                <div className="">
                  <Image
                    src={Person}
                    alt=""
                    height={30}
                    width={30}
                    className=" rounded-full"
                  />
                </div>
                <div>
                  <Image src={Down} />
                </div>
                <div
                  className={`${
                    drop_1
                      ? "absolute top-[40px] min-w-max left-0 bg-white rounded-md shadow-2xl z-30"
                      : "hidden "
                  }`}
                >
                  <div className=" flex flex-col justify-between items-start ">
                    <div className="flex justify-center items-center gap-1 p-3">
                      <div className="w-7 h-7 ">
                        <Image src={Person} alt="" className=" rounded-full" />
                      </div>
                      <p className=" text-sm font-light leading-[130%]">
                        Sanjeev V
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
            </div>
            <input
              type="text"
              className="outline-none"
              placeholder="Write your comment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
