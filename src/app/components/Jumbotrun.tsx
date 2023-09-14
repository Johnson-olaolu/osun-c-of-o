import Image from "next/image";
import React from "react";
import { greatVibes } from "../styles/fonts";

const Jumbotrun = () => {
  return (
    <main className="px-4 md:px-20 p-20 h-auto md:h-[600px]  flex flex-col-reverse gap-3 md:flex-row items-center bg-[#FFF6EE] justify-between">
      <div className=" space-y-6 max-w-[472px]">
        <h2 className={` text-[40px] leading-tight ${greatVibes.className}`}>
          We provide a digitized land title registration and verification system.
        </h2>
        <p className=" text-xl pr-2">
          The system aims to make land transactions more efficient and transparent, and to protect buyers from fraudulent land deals.
        </p>
        <div className=" flex items-center gap-9">
          <a href="" className=" h-12 w-40 flex items-center justify-center rounded-lg bg-[#50290D] text-white text-lg">
            Get Started
          </a>
          <a href="" className="">
            Learn more
          </a>
        </div>
      </div>
      <div className=" bg-[#1E1E1E] rounded overflow-hidden shrink-0">
        <Image src={"/image 1.png"} height={332} width={556} alt="" className="" />
      </div>
    </main>
  );
};

export default Jumbotrun;
