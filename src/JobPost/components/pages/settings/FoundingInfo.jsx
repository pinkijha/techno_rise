import React, { useState } from 'react'
import  { formats, modules } from './RichTextEditor';
import ReactQuill from 'react-quill';
import { FaLink } from "react-icons/fa6";

const FoundingInfo = () => {
  const [companyVision, setCompanyVision] = useState("");

  return (
    <div className=" ">
      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Organization Type */}
        <div>
          <label className="block text-sm font-medium  md:mb-2 text-gray-600">Organization Type</label>
          <select className="w-full p-2 border rounded-md">
            <option>Select...</option>
          </select>
        </div>

        {/* Industry Types */}
        <div>
          <label className="block text-sm font-medium  md:mb-2 text-gray-600">Industry Types</label>
          <select className="w-full p-2 border rounded-md">
            <option>Select...</option>
          </select>
        </div>

        {/* Team Size */}
        <div>
          <label className="block text-sm font-medium  md:mb-2 text-gray-600">Team Size</label>
          <select className="w-full p-2 border rounded-md">
            <option>Select...</option>
          </select>
        </div>
      </div>

      {/* Year & Website */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4 ">
        {/* Year of Establishment */}
        <div>
          <label className="block text-sm font-medium  md:mb-2 text-gray-600">Year of Establishment</label>
          <input
            type="date"
            className="w-full p-2 border rounded-md"
            placeholder="dd/mm/yyyy"
          />
        </div>

        {/* Company Website */}
        <div>
          <label className="block text-sm font-medium text-gray-600 md:mb-2">Company Website</label>
          <div className="flex items-center border rounded-md p-2">
            <span className="text-[#7900BA] pr-2"><FaLink /></span>
            <input
              type="text"
              placeholder="Website url..."
              className="w-full outline-none"
            />
          </div>
        </div>
      </div>

      {/* Rich Text Editor for Company Vision */}
      <div className="mt-4 space-y-2 text-gray-600">
        <label className="block text-sm font-medium">Company Vision</label>
        <ReactQuill
        placeholder='Tell us what Vision of your company...'
          theme="snow"
          value={companyVision}
          onChange={setCompanyVision}
          modules={modules} // Custom toolbar
          formats={formats}
          className="bg-white border h-[175px] rounded-md mt-1"
        />
      </div>

      {/* Save Button */}
      <button className="w-[175px] mt-16 bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700">
        Save Changes
      </button>
    </div>
  );
};


export default FoundingInfo
