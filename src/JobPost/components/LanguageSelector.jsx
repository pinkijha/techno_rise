import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../utils/redux/languageSlice";

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const { availableLanguages, selectedLanguage } = useSelector(
    (state) => state.language
  );

  const handleChange = (event) => {
    dispatch(setLanguage(event.target.value));
  };

  return (
    <div className="flex space-x-2 items-center">
      <div className="flag mt-2">
        <img
          src={
            availableLanguages.find((lang) => lang.code === selectedLanguage)
              .flag
          }
          alt={selectedLanguage}
          width="25"
          className=""
        />
      </div>
      <select
        value={selectedLanguage}
        onChange={handleChange}
        className="md:text-md outline-none text-gray-500 bg-gray-100 md:p-1 rounded"
      >
        {availableLanguages.map((lang) => (
          <>
            <img src={lang.flag} />
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          </>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
