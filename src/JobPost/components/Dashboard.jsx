import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import SubHeader from "./header/SubHeader";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Sub Header */}
      <div>
        <SubHeader />
      </div>
      
      {/* Main Content */}
      <div className="flex flex-1">
        <div className="w-1/4 bg-gray-200">
          <Sidebar />
        </div>
        <div className="w-3/4 p-4">
          <MainContainer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
