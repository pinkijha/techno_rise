import React, { useState } from "react";
import { settingNavItems } from "../../../utils/constant";

const MainSetting = () => {
  const [activeTab, setActiveTab] = useState(1); // Default active component

  return (
    <div className="md:my-3 md:mx-3">
      <div>
        {/* Heading */}
        <h1 className="text-[24px] font-semibold  ">Settings</h1>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-8 md:mt-5">
        {settingNavItems.map(({ id, icon, name }) => (
          <div
            onClick={() => setActiveTab(id)}
            className={`flex items-center space-x-2 cursor-pointer 
                ${
                  activeTab === id
                    ? "text-[#7900BA] border-b-4 border-[#7900BA]"
                    : "text-[#767F8C]"
                }
                pb-2`}
            key={id}
          >
            <span>{icon}</span>
            <p>{name}</p>
          </div>
        ))}
      </div>

      <hr className="text-gray-600 " />
      {/* Display Active Component */}
      <div className="mt-5">
        {settingNavItems.find((item) => item.id === activeTab)?.component}
      </div>
    </div>
  );
};

export default MainSetting;
