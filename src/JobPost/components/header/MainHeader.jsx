import React from "react";
import { TbPhoneCall } from "react-icons/tb";

const MainHeader = () => {
  return (
    <div className="flex justify-between">
      {/* left side header */}
      <div className="flex md:ml-[100px] md:p-2  ">
        <ul className="flex space-x-5">
          <li>Home</li>
          <li>Find Candidate</li>
          <li>Dashboard</li>
          <li>My Jobs</li>
          <li>Applications</li>
          <li>Customer Supports</li>
        </ul>
      </div>

      {/* Right side Hedaer */}
      <div>
      <div className="flex space-x-3 items-center md:text-lg md:p-2">
      <TbPhoneCall className="md:text-xl " />
      <p>+1-202-555-0178</p>
      </div>
      <div></div>
      </div>
    </div>
  );
};

export default MainHeader;
