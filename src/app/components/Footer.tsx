import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 md:px-20 pt-14 pb-24 gap-5 bg-[#FFF6EE] flex flex-col md:flex-row justify-between">
      <div className=" max-w-[370px]">
        <div className="flex items-center gap-4 mb-5">
          <Image alt="" height={56} width={56} src={"/OSUN STATE LOGO 1.png"} />
          <h6 className=" text-[#50290D] font-bold text-xl">DIMS</h6>
        </div>
        <p>This system helps make land transactions more efficient and transparent, and to protect buyers from fraudulent land deals.</p>
      </div>
      <nav className="flex flex-col md:flex-row  gap-20  text-[#50290D] ">
        <div className="">
          <h6 className="font-bold text-xl mb-4">About Us</h6>
          <ul className="space-y-2">
            <li className="">
              <a href="" className="">
                How to register
              </a>
            </li>
            <li className="">
              <a href="" className="">
                Benefits
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-bold text-xl mb-4">DIMS for</h6>
          <ul className="space-y-2">
            <li className="">
              <a href="" className="">
                Land owners
              </a>
            </li>
            <li className="">
              <a href="" className="">
                Surveyors
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-bold text-xl mb-4">Legal</h6>
          <ul className="space-y-2">
            <li className="">
              <a href="" className="">
                Privacy Policy
              </a>
            </li>
            <li className="">
              <a href="" className="">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-bold text-xl mb-4">Quick Actions</h6>
          <ul className="space-y-2">
            <li className="">
              <a href="" className="">
                Verify C of O
              </a>
            </li>
            <li className="">
              <a href="" className="">
                Get virtual card
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
