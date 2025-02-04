import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = () => {
  const [aboutUs, setAboutUs] = useState(""); // Store HTML content

  return (
      <>
      {/* Quill Editor Input */}
      <ReactQuill
          theme="snow" placeholder="Write down about your company here. Let the candidate know who we are..."
          value={aboutUs}
          onChange={setAboutUs}
          modules={modules} // Use custom toolbar
          formats={formats} // Allowed styles
          className="bg-white border rounded-md"
          style={{ minHeight: "150px" }} // Fix editor height
        />
      </>
  );
};

/* Custom Toolbar to ensure all icons appear in a single row */
export const modules = {
  toolbar: [
    [{ bold: true }, { italic: true }, { underline: true }, { strike: true }], // Bold, Italic, Underline, Strikethrough
    [{ list: "ordered" }, { list: "bullet" }], // Ordered & Unordered lists
    ["link", "image"], // Links & Images
    [{ align: [] }], // Alignment options
    ["clean"], // Clear formatting
  ],
};

export const formats = [
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "link",
  "image",
  "align",
];

export default RichTextEditor;
