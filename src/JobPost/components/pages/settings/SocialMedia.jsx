import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { GoXCircle } from "react-icons/go";
import { PiPlusCircleBold } from "react-icons/pi";

const socialPlatforms = {
  Facebook: <FaFacebookF className="text-[#7900BA]" />,
  Twitter: <FaTwitter className="text-[#7900BA]" />,
  Instagram: <FaInstagram className="text-[#7900BA]" />,
  YouTube: <FaYoutube className="text-[#7900BA]" />,
};

const SocialMediaProfile = () => {
  const [socialLinks, setSocialLinks] = useState([
    { platform: "Facebook", url: "" },
    { platform: "Twitter", url: "" },
    { platform: "Instagram", url: "" },
    { platform: "YouTube", url: "" },
  ]);

  const handleInputChange = (index, value) => {
    const updatedLinks = [...socialLinks];
    updatedLinks[index].url = value;
    setSocialLinks(updatedLinks);
  };

  const handleRemove = (index) => {
    const updatedLinks = socialLinks.filter((_, i) => i !== index);
    setSocialLinks(updatedLinks);
  };

  const handleAddNew = () => {
    setSocialLinks([...socialLinks, { platform: "", url: "" }]);
  };

  const handleSave = () => {
    console.log("Saved Links:", socialLinks);
    alert("Social media links saved!");
  };

  return (
    <div className="">
      

      {socialLinks.map((link, index) => (
       <>
        <h1 className="md:p-1 md:m-1">Social Link {index}</h1>
        <div key={index} className="flex items-center space-x-3 mb-4">
          
          <div className="flex items-center space-x-2 w-1/4">
            {socialPlatforms[link.platform]} {/* Display icon next to select */}
            <select
              className="p-2 border rounded-lg w-full"
              value={link.platform}
              onChange={(e) => {
                const updatedLinks = [...socialLinks];
                updatedLinks[index].platform = e.target.value;
                setSocialLinks(updatedLinks);
              }}
            >
              <option value="">Select Platform</option>
              {Object.keys(socialPlatforms).map((platform) => (
                <option key={platform} value={platform}>
                  {platform}
                </option>
              ))}
            </select>
          </div>

          <input
            type="text"
            placeholder="Profile link/url..."
            className="p-2 border rounded-lg w-3/4"
            value={link.url}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />

          <button
            className="bg-[#F1F2F4] text-black p-2 rounded-lg hover:bg-gray-200"
            onClick={() => handleRemove(index)}
          >
            <GoXCircle />
          </button>
        </div>
       </>
      ))}

      <button
        className="flex items-center justify-center font-semibold w-full bg-[#F1F2F4] p-2 rounded-lg text-gray-700 hover:bg-gray-300"
        onClick={handleAddNew}
      >
        <span className="text-2xl md:mr-1 font-semibold">
          <PiPlusCircleBold />
        </span>{" "}
        Add New Social Link
      </button>

      <button
        className="w-[175px] mt-4 bg-[#7900BA] text-white p-3 rounded-lg hover:bg-purple-700"
        onClick={handleSave}
      >
        Save Changes
      </button>
    </div>
  );
};

export default SocialMediaProfile;
