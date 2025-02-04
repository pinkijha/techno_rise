
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import RichTextEditor from './RichTextEditor';

const CompanyInfo = () => {

  const [logo, setLogo] = useState(null);
  const [banner, setBanner] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [aboutUs, setAboutUs] = useState("");

   // Handle Image Upload
   const handleImageUpload = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <>      

      <div>
      <h1 className='text-[18px] font-semibold mb-2 '>Logo & Banner Image</h1>
      
            {/* Image Upload Section */}
            <div className="flex gap-4 ">
        {/* Upload Logo */}
        <div className="flex flex-col ">
          <label className="text-sm font-medium mb-2 text-gray-600">Upload Logo</label>
          <div className="w-72 h-32 bg-gray-200 rounded-md overflow-hidden flex justify-center items-center">
            {logo ? <img src={logo} alt="Logo" className="w-full h-full object-cover" /> : <p className="text-gray-500">+</p>}
          </div>
          <input type="file" className="hidden" id="logoUpload" onChange={(e) => handleImageUpload(e, setLogo)} />
          <div className="text-sm mt-2">
            <label htmlFor="logoUpload" className="text-purple-600 cursor-pointer">Replace</label>
            {logo && <button className="text-red-500 ml-3" onClick={() => setLogo(null)}>Remove</button>}
          </div>
        </div>

        {/* Upload Banner */}
        <div className="flex flex-col ">
          <label className="text-sm font-medium mb-2 text-gray-600">Banner Image</label>
          <div className="w-[600px] h-32 bg-gray-200 rounded-md overflow-hidden flex justify-center items-center">
            {banner ? <img src={banner} alt="Banner" className="w-full h-full object-cover" /> : <p className="text-gray-500">+</p>}
          </div>
          <input type="file" className="hidden" id="bannerUpload" onChange={(e) => handleImageUpload(e, setBanner)} />
          <div className="text-sm mt-2">
            <label htmlFor="bannerUpload" className="text-purple-600 cursor-pointer">Replace</label>
            {banner && <button className="text-red-500 ml-3" onClick={() => setBanner(null)}>Remove</button>}
          </div>
        </div>
      </div>      
      </div>

        {/* Company Name Input */}
        <div className="mt-4  space-y-2 text-gray-600">
        <label className="text-sm font-medium">Company Name</label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter company name"
        />
      </div>

        {/* About Us - Rich Text Editor */}
        <div className="mt-4 space-y-2 text-gray-600">
        <label className="text-sm font-medium ">About Us</label>
       <RichTextEditor/>
      </div>

      {/* Save Changes Button */}
      <button className="md:w-[166px] mt-5 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
        Save Change
      </button>

      
      </>
  )
}

export default CompanyInfo
