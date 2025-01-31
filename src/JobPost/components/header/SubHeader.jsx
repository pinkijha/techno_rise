import React from "react";
import { PiBellRinging } from "react-icons/pi";

const SubHeader = () => {
  return (
    <div className="flex items-center md:space-x-96 md:ml-[100px]">
      
        <img
          src="https://www.technokrate.com/img/Techknokrate%20logo%202.png"
          alt="Logo"
          className="h-24 cursor-pointer mr-4"
        />

      <div className="flex items-center  space-x-6">
        <PiBellRinging className="text-3xl" />
        <button
          className="border-2 font-bold border-violet-700 border-solid rounded md:px-4 md:py-2
       hover:bg-violet-700 hover:text-white text-violet-700"
        >
          Post A Jobs
        </button>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/800px-Instagram_icon.png"
          alt="Instagram"
          className="md:h-12 h-6 rounded-full cursor-pointer mr-4"
        />
      </div>
    </div>
  );
};

export default SubHeader;
