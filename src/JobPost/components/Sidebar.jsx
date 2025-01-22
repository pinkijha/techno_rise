import React from 'react';
import { sidebarItem } from '../utils/constant';


const Sidebar = () => {

  return (
    <div className="bg-gray-50 w-64 h-full shadow-md md:ml-[100px]">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800">Employer Dashboard</h2>
      </div>

      <nav className="mt-6">
        <ul className="space-y-4">
         
          {sidebarItem.map(({id, name, icon}) => (
            <>
             <li key={id} className="flex items-center space-x-2 px-4 py-2 font-semibold
              text-gray-500 hover:bg-blue-100 cursor-pointer">
            {icon}
            <span>{name}</span>
          </li>
            </>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
