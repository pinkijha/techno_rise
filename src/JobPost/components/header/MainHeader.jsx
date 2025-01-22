import React from "react";
import { TbPhoneCall } from "react-icons/tb";
import LanguageSelector from "../LanguageSelector";

const MainHeader = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex justify-between md:mx-[100px] ">
      {/* left side header */}
      <div className="flex  md:p-2  ">
        <ul className="flex space-x-5 text-gray-500">
          <li>Home</li>
          <li>Find Candidate</li>
          <li>Dashboard</li>
          <li>My Jobs</li>
          <li>Applications</li>
          <li>Customer Supports</li>
        </ul>
      </div>

      {/* Right side Hedaer */}
      <div className="flex space-x-4">
      <div className="flex space-x-3 items-center md:p-2">
      <TbPhoneCall  size={25} />
      <p className="font-semibold  md:text-md">+1-202-555-0178</p>
      </div>
      <div>
        <LanguageSelector/>
      </div>
      </div>
    </div>
    </div>
  );
};

export default MainHeader;
