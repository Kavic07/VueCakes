// eslint-disable-next-line no-unused-vars
import { React, useState } from "react";

const SortByDropdown = () => {
  const [isSortByOpen, setIsSortByOpen] = useState(false);

  const toggleSortByDropdown = () => {
    setIsSortByOpen(!isSortByOpen);
  };

  return (
    <div className="relative inline-block text-left pt-4 pb-8">
      <button
        className="w-[175px] flex justify-between items-center px-6 py-2 text-customPink text-xs font-semibold border-customPink border rounded-lg"
        onClick={toggleSortByDropdown}
      >
        Sort by
        <span>
          <svg
            className={`w-5 h-5 transition-transform ${
              // eslint-disable-next-line no-undef
              isSortByOpen ? "rotate-180" : ""
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

      {/* Dropdown list for Sort by*/}
      {isSortByOpen && (
        <div className="absolute font-nunito right-0 mt-[2px] w-40 bg-white border border-gray-700 rounded-md shadow-lg z-10">
          <ul className="py-1">
            <li className="px-4 py-2 hover:bg-lightPink cursor-pointer">
              <a href="#">Event</a>
            </li>
            <li className="px-4 py-2 hover:bg-lightPink cursor-pointer">
              <a href="#">Layers</a>
            </li>
            <li className="px-4 py-2 hover:bg-lightPink cursor-pointer">
              <a href="#">Sizes</a>
            </li>
            <li className="px-4 py-2 hover:bg-lightPink cursor-pointer">
              <a href="#">Icing</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortByDropdown;
