// eslint-disable-next-line no-unused-vars
import { React, useState } from "react";

const CategoriesDropdown = () => {
  const [isCategoriesOpen, setCategoriesIsOpen] = useState(false);

  const toggleCategoriesDropdown = () => {
    setCategoriesIsOpen(!isCategoriesOpen);
  };

  return (
    <div className="relative inline-block text-left pt-4 pb-8">
      <div className="flex justify-between font-nunito">
        <button
          className="w-[175px] flex justify-between items-center px-6 py-2 text-customPink text-xs font-semibold border-customPink border rounded-lg"
          onClick={toggleCategoriesDropdown}
        >
          Categories
          <span>
            <svg
              className={`w-5 h-5 transition-transform ${
                isCategoriesOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>

        {/* Dropdown list for categories */}
        {isCategoriesOpen && (
          <div className="absolute font-nunito left-0 mt-10 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-50">
            <ul className="py-1">
              <li className="px-4 py-2 hover:bg-lightPink cursor-pointer">
                <a href="#">Wedding</a>
              </li>
              <li className="px-4 py-2 hover:bg-lightPink cursor-pointer">
                <a href="#">Birthday</a>
              </li>
              <li className="px-4 py-2 hover:bg-lightPink cursor-pointer">
                <a href="#">Anniversary</a>
              </li>
              <li className="px-4 py-2 hover:bg-lightPink cursor-pointer">
                <a href="#">Desserts</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesDropdown;
