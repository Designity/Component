import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "./card";
import Header from "./header";
import Search from "./search";
import Hot from "./dropDown";
import Smallcard from "./smallcard";
import { useState } from "react";
import TextEditor from "./texteditor";
export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    // <>
    //   <div className="sticky top-[80px] z-50 ">
    //     {/* <div
    //       className={`absolute top-0  block h-screen  w-[20rem] rounded-xl bg-white  p-[30px] px-[20px] shadow-lg duration-700 ease-in-out lg:hidden  ${
    //         filterMd ? "left-[0] " : "left-[-100%]"
    //       }`}
    //     >
    //       <Filter />
    //     </div> */}
    //   </div>
    //   <div className="container flex">
    //     <div className="mt-[12rem] flex  items-start  justify-center md:mr-[2rem]  ">
    //       <div className=" sticky top-[100px]   hidden  filterStarting:hidden filterEnding:block ">
    //         {/* <Filter /> */}
    //       </div>
    //       <span
    //         className="hidden filterStarting:flex filterEnding:hidden  "
    //         // onClick={handleClick}
    //       >
    //         <div className="rounded-full bg-SecondaryWhite px-[7px] py-[7px]">
    //           {/* <FilterIcn /> */}
    //         </div>
    //       </span>
    //     </div>
    //     <div className=" flex flex-col gap-[1rem] px-[20px] md:px-0 ">
    //       {/* <Header /> */}
    //       <div className=" flex flex-col gap-3   ">
    //         <div
    //           // onClick={handleFilter}
    //           className="
    //         flex items-center self-end rounded-full bg-SecondaryWhite px-[8px] py-[4px] filterStarting:hidden"
    //         >
    //           {/* <FilterIcn /> */}
    //           <p className="mr-[3px] hidden sm:block">Filter</p>
    //         </div>
    //         {/* <Cardbar /> */}
    //         <Card />
    //       </div>
    //     </div>
    //     <div className=" mt-[12rem] hidden w-[30rem]  items-start  justify-center pl-[2rem] tablet:block  ">
    //       <div className=" h-[20rem]  rounded-xl bg-white  "></div>
    //     </div>
    //   </div>
    // </>
    <div className="flex justify-start items-start container p-0">
      <div className="w-[20rem]  block  ">
        <div className=" h-screen [20rem] bg-red-300  "></div>
      </div>
      <div className="w-full">
        <Header />
        <div>
          <div className="flex justify-center items-start gap-3 my-[60px] ">
            <div className="flex justify-center items-center flex-col gap-4">
              <div className="flex justify-start items-center gap-[6rem]">
                <Search />
                <Hot className="z-100" />
              </div>
              <button
                className="w-full"
                type="button"
                onClick={() => setShowModal(true)}
              >
                <Smallcard className="z-20" />
              </button>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <TextEditor />
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}

              <Card />
              <Card />
              <Card />
            </div>
            <div className="w-[20rem] block">
              <div className=" h-screen [20rem]   bg-red-300  "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
