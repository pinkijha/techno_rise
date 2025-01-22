import React from 'react';
import { TiThMenu } from "react-icons/ti";
import { FaUser, FaBriefcase, FaMoneyCheckAlt, FaCogs, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-gray-50 w-64 h-full shadow-md">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800">Employer Dashboard</h2>
      </div>

      <nav className="mt-6">
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <TiThMenu size={20} />
            <span>Overview</span>
          </li>
          <li className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <FaUser size={20} />
            <span>Employer Profile</span>
          </li>
          <li className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <FaBriefcase size={20} />
            <span>Post a Job</span>
          </li>
          <li className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <FaMoneyCheckAlt size={20} />
            <span>My Jobs</span>
          </li>
          <li className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <FaUser size={20} />
            <span>Saved Candidates</span>
          </li>
          <li className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <FaBriefcase size={20} />
            <span>All Companies</span>
          </li>
          <li className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <FaCogs size={20} />
            <span>Plans and Billing</span>
          </li>
          <li className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <FaSignOutAlt size={20} />
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <FaSignOutAlt size={20} />
            <span>Logout</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
