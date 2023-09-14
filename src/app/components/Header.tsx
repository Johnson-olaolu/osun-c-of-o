import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className=" h-20 px-20 flex items-center bg-white justify-between text-black">
      <Image alt="" height={56} width={56} src={"/OSUN STATE LOGO 1.png"} />
      <div className="flex items-center gap-36">
        <nav className="flex items-center gap-9">
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
