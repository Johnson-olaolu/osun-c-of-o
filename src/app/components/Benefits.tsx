import Image from "next/image";
import React from "react";
import { greatVibes } from "../styles/fonts";

const Benefits = () => {
  return (
    <div className="px-20 py-16 bg-[#FFF6EE]">
      <div className=" space-y-4 mb-14 max-w-[392px]">
        <h4 className={` text-4xl ${greatVibes.className}`}>Benefits</h4>
        <p className=" text-lg">Our system offers a number of benefits, including:</p>
      </div>
      <div className=" grid grid-cols-3 gap-6">
        <div className=" h-[396px] bg-white flex flex-col p-12 gap-3">
          <Image height={90} width={90} alt="" src={"/icons/svg1.svg"} className="self-end" />
          <div className=" text-[#50290D] space-y-10">
            <p className="text-xl font-bold">Increased efficiency</p>
            <p className="">Land transactions can be completed more quickly and easily using our system.</p>
          </div>
        </div>
        <div className=" h-[396px] bg-white flex flex-col p-12 gap-3">
          <Image height={90} width={90} alt="" src={"/icons/svg2.svg"} className="self-end" />
          <div className=" text-[#50290D] space-y-10">
            <p className="text-xl font-bold">Increased transparency</p>
            <p className="">Buyers can be confident that they are purchasing a legitimate land title.</p>
          </div>
        </div>
        <div className=" h-[396px] bg-white flex flex-col p-12 gap-3">
          <Image height={90} width={90} alt="" src={"/icons/svg3.svg"} className="self-end" />
          <div className=" text-[#50290D] space-y-10">
            <p className="text-xl font-bold">Reduced fraud</p>
            <p className="">Our system helps to protect buyers from fraudulent land deals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
