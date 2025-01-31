// Dashboard.jsx
import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainContainer from "../MainContainer";
import SubHeader from "../header/SubHeader";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* SubHeader is part of Dashboard */}
      <div>
        <SubHeader />        
      <hr className='text-gray-600  ' />
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="md:w-1/4 ">
          <Sidebar />
        </div>
        {/* Main Container */}
        <div className="md:w-3/4 p-4">
          <MainContainer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
