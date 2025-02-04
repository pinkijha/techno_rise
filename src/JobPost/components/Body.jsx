import React from "react";
import Header from "./header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer"

const Body = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header at the top */}
      <Header />

      {/* Main Content Section */}
      <div className="flex flex-1 ">
        {/* Sidebar */}
        <div className="w-64 hidden md:flex">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4 ">
          <main className=" md:mx-[130px]">{children}</main>
        </div>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Body;
