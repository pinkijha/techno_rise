import React, { useState } from 'react';
import { sidebarItem } from '../../utils/constant';
import { GoSignOut } from "react-icons/go";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  return (
    <div className="bg-gray-50 min-w-72 min-h-screen border-r-2 flex flex-col md:ml-[100px]">
    {/* Header */}
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-800">Employer Dashboard</h2>
    </div>

    {/* Sidebar Items */}
    <nav className="mt-6 flex-grow">
      <ul className="flex flex-col">
        {sidebarItem.map(({ id, name, icon, path }) => (
          <NavLink to={path}
            key={id}
            className="flex items-center space-x-4 px-4 py-2 text-[#767F8C] hover:bg-blue-100 cursor-pointer"
          >
            <p className="md:text-2xl">{icon}</p>
            <span>{name}</span>
          </NavLink>
        ))}
      </ul>
    </nav>

    {/* Logout Button (Sticky at Bottom) */}
    <div className="mt-auto">
      <li
        className="flex items-center space-x-4 px-4 py-2 text-[#767F8C] hover:bg-blue-100 cursor-pointer"
      >
        <p className="md:text-2xl">
          <GoSignOut />
        </p>
        <span>Logout</span>
      </li>
    </div>
  </div>
  );
};

export default Sidebar;
