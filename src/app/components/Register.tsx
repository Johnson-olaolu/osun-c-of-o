import Image from "next/image";
import React from "react";
import { greatVibes } from "../styles/fonts";

const Register = () => {
  return (
    <div className="px-20 py-16">
      <div className=" space-y-4 mb-14">
        <h4 className={` text-4xl ${greatVibes.className}`}>How to Register</h4>
        <p className=" text-lg">You can get started with these simple steps</p>
      </div>

      <div className=" flex items-center justify-between mb-16">
        <div className=" flex items-center gap-6">
          <Image height={84} width={84} alt="" src={"/icons/report.svg"} />
          <div className=" text-[#50290D] space-y-1">
            <p className="text-xl">Verify Identity</p>
            <p className="">Verify identity with NIN or BVN</p>
          </div>
        </div>
        <div className=" flex items-center gap-6">
          <Image height={84} width={84} alt="" src={"/icons/house.svg"} />
          <div className=" text-[#50290D] space-y-1">
            <p className="text-xl">Verify Land Documents</p>
            <p className="">Verify land ownership with C of O</p>
          </div>
        </div>
        <div className=" flex items-center gap-6">
          <Image height={84} width={84} alt="" src={"/icons/creditcard.svg"} />

          <div className=" text-[#50290D] space-y-1">
            <p className="text-xl">Get Virtual Card</p>
            <p className="">Get a virtual card instantly</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <a href="" className=" h-12 px-5 flex items-center justify-center rounded-lg bg-[#50290D] text-white text-lg">
          I want to register
        </a>
      </div>
    </div>
  );
};

export default Register;
