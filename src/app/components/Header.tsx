import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className=" md:h-20 p-4 md:px-20 sm:flex items-center flex-col md:flex-row  bg-white md:justify-between text-black">
      <Image alt="" height={56} width={56} src={"/OSUN STATE LOGO 1.png"} className="mb-2 md:mb-0" />
      <div className="flex md:items-center gap-4 md:gap-36 flex-col md:flex-row ">
        <nav className="flex md:items-center gap-2 md:gap-9 justify-between">
          <a href="" className="">
            How to Register
          </a>
          <a href="" className="">
            Benefits
          </a>
          <a href="" className="">
            Verify C of O
          </a>
        </nav>
        <div className=" flex items-center gap-9">
          <a href="" className="">
            Register as Land owner
          </a>
          <a href="" className=" h-6 w-20 flex items-center justify-center rounded bg-[#50290D] text-white">
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
