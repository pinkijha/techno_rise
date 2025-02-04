import React from "react";

const Footer = () => {
  return (
    <>
      <hr className="text-gray-600 md:mt-4 " />
      <div className="flex justify-center md:mt-1 p-4 items-center text-[#767F8C] ">
        <p>
          @ {new Date().getFullYear()} <span className="cursor-pointer">TechnoHire</span> - Job Portal. All rights
          Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
