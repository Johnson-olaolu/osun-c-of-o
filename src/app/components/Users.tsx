import React from "react";

const Users = () => {
  return (
    <div className="px-4 md:px-20 py-28 flex flex-col md:flex-row justify-center gap-14">
      <div className="px-16 pt-28 pb-10 md:h-[396px] md:w-[480px] bg-[#FFF6EE] text-[#50290D] ">
        <p className="text-2xl font-bold mb-10 text-center">Land Owners</p>
        <ul className="list-disc">
          <li className="">Use our system to verify your own land title.</li>
          <li className="">Check if there are any encumbrances on your land title.</li>
          <li className="">Keep track of all land transactions that have been made on your land.</li>
        </ul>
      </div>
      <div className="px-16 pt-28 pb-10 md:h-[396px] md:w-[480px] bg-[#FFF6EE] text-[#50290D] ">
        <p className="text-2xl font-bold mb-10 text-center">Surveyors</p>
        <ul className="list-disc">
          <li className="">Use our system to verify the title of a land before you purchase it.</li>
          <li className="">Check if the land is under government acquisition or not.</li>
          <li className="">Ensure that the survey plan of the land is accurate.</li>
        </ul>
      </div>
    </div>
  );
};

export default Users;
