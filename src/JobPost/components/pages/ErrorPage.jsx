import React from 'react';
import error404 from '../../../assets/error404.png'
import { FaArrowRightLong } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center md:text-left md:flex md:items-center md:space-x-6">
        <div>
          <h1 className="text-[34px] font-semibold">Oops! Page not found</h1>
          <p className="text-sm text-[#474C54]">
            Something went wrong. It looks like the link is<br/> broken or the page is removed.
          </p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <NavLink to="/">
              <button className="flex items-center bg-[#7900BA] text-white px-4 py-2 rounded-md">
                Home <FaArrowRightLong className="ml-3" />
              </button>
            </NavLink>
            <button className="text-[#7900BA] border border-[#7900BA] px-4 py-2 rounded-md">
              Go Back
            </button>
          </div>
        </div>
        <img className="h-auto w-auto max-w-[400px]" src={error404} alt="Page Not Found" />
      </div>
    </div>
  );
};

export default ErrorPage;
