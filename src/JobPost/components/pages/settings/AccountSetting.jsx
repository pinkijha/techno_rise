import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import languages from "../../../utils/languages";

const AccountSetting = () => {
  const [selectedCountry, setSelectedCountry] = useState(languages[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <div className="overflow-y-scroll overflow-x-hidden scrollbar-hide h-[600px] ">
      {/* Contact Information */}
      <div className="mt-3">
        <h2 className="text-lg font-semibold text-gray-700">
          Contact Information
        </h2>

        <input
          type="text"
          placeholder="Map Location"
          className="w-[750px] p-3 outline-none border-2 hover:border-gray-400 rounded-lg mt-2"
        />

        <div className="flex items-center mt-3">
          {/* Custom Dropdown for Country Code */}
          <div className="relative w-[88px]">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center justify-between w-[89px] p-3 border rounded-lg bg-white"
            >
              <img
                src={selectedCountry.flag}
                alt={selectedCountry.name}
                className="w-6 h-4"
              />
              {selectedCountry.CountryCode}
            </button>

            {dropdownOpen && (
              <div className="absolute bg-white shadow-lg rounded-lg mt-1 w-[100px] z-10">
                {languages.map((country) => (
                  <button
                    key={country.CountryCode}
                    className="flex items-center p-2 hover:bg-gray-200"
                    onClick={() => {
                      setSelectedCountry(country);
                      setDropdownOpen(false);
                    }}
                  >
                    <img
                      src={country.flag}
                      alt={country.name}
                      className="w-6 h-4 "
                    />
                    {country.CountryCode}
                  </button>
                ))}
              </div>
            )}
          </div>

          <input
            type="text"
            placeholder="Phone number"
            className="w-[665px] outline-none border border-y-2 p-3 hover:border-gray-400 border-b-2 rounded-lg"
          />
        </div>

        <input
          type="email"
          placeholder="Email address"
          className="w-[750px] p-3 hover:border-gray-400 outline-none border-2 rounded-lg mt-3"
        />
      </div>

      <button className="w-[175px] bg-[#7900BA] text-white p-3 rounded-lg mt-4 hover:bg-purple-700">
        Save Changes
      </button>

      {/* Change Password */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-700">Change Password</h2>
        <div className="flex space-x-4">
          {["current", "new", "confirm"].map((field, index) => (
            <div key={index} className="relative mt-3">
              <input
                type={showPassword[field] ? "text" : "password"}
                placeholder={
                  field === "current"
                    ? "Current Password"
                    : field === "new"
                    ? "New Password"
                    : "Confirm Password"
                }
                className=" w-[240px] p-3  outline-none border-2 hover:border-gray-400 rounded-lg"
              />
              <button
                className=" absolute left-[200PX] top-4 text-2xl  text-gray-600"
                onClick={() => togglePasswordVisibility(field)}
              >
                {showPassword[field] ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
          ))}
        </div>

        <button className="w-[175px] bg-[#7900BA] text-white p-3 rounded-lg mt-4 hover:bg-purple-700">
          Change Password
        </button>
      </div>

      {/* Delete Account */}
      <div className="mt-4 w-[536px]">
        <h2 className="text-lg font-semibold text-[#18191C] ">
          Delete Your Company
        </h2>
        <p className="text-sm text-gray-600 text-justify">
          If you delete your Jobpilot account, you will no longer be able to get
          information about the matched jobs, following employers, and job
          alert, shortlisted jobs and more. You will be abandoned from all the
          services of Jobpilot.com.
        </p>
        <button className="w-[750px] mb-7 text-[#E05151] mt-3 flex items-center hover:text-red-700">
          <IoCloseCircleOutline className="mr-2" /> Close Account
        </button>
      </div>
    </div>
  );
};

export default AccountSetting;
