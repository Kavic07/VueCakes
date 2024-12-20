/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

// eslint-disable-next-line react/prop-types
const Navbar = ({ className, searchQuery, setSearchQuery, cartCount }) => {
  const [isNavbarVisibility, setIsNavbarVisibility] = useState(false);
  const toggleMenu = () => {
    setIsNavbarVisibility(!isNavbarVisibility);
  };

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleInputClick = (event) => {
    event.stopPropagation();
    setIsSearchVisible(true);
  };

  return (
    <>
      <div
        className={`bg-lightPink h-16 md:h-16 nav flex justify-between items-center px-10 md:px-20 ${className}`}
      >
        <h2 className="font-nunito font-extrabold text-customPink text-2xl">
          VUECAKES
        </h2>

        {/* Mobile View */}
        <div
          className={`fixed top-16 left-64 w-28 bg-white p-2 rounded-bl-2xl md:hidden transition-transform transform shadow-lg ${
            isNavbarVisibility ? "scale-y-100" : "scale-y-0"
          } origin-top shadow-lg`}
        >
          <ul className="space-y-2 font-nunito text-sm text-gray-500">
            <li className="hover:text-customPink">
              <span className="pr-1 text-sm">
                <HomeOutlinedIcon />
              </span>
              <a
                href="/"
                className="hover:text-customPink cursor-pointer md:block"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>

            <li className="hover:text-customPink">
              <span className="pr-1 text-sm">
                <ShoppingBagOutlinedIcon />
              </span>
              <a href="/shop" className="hover:text-customPink cursor-pointer">
                Shop
              </a>
            </li>

            <li className="hover:text-customPink">
              <span className="pr-1 text-sm">
                <LocalPhoneOutlinedIcon />
              </span>
              <a
                href="/contact"
                className="hover:text-customPink cursor-pointer"
              >
                Contact
              </a>
            </li>

            <li className="hover:text-customPink">
              <span className="pr-1 text-sm">
                <PersonOutlineOutlinedIcon />
              </span>
              <a href="#" className="hover:text-customPink cursor-pointer">
                Profile
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop View */}
        <ul className="hidden md:flex space-x-8 font-nunito font-bold text-sm text-gray-500">
          <li className="md:list-none">
            <a
              href="/"
              className="nav-link md:inline-block relative pb-1 hover:text-customPink "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/shop"
              className="nav-link md:inline-block relative pb-1 hover:text-customPink"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="nav-link md:inline-block relative pb-1 hover:text-customPink"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-2 md:space-x-6">
          {/* Mobile Search Icon and Input (Conditionally Rendered) */}
          <button
            className="flex items-center space-x-2 md:hidden"
            onClick={toggleSearch}
          >
            <svg
              className="w-5 h-5 fill:black"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488.4 488.4"
              stroke="#C1C5C9"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>
                  </g>
                </g>
              </g>
            </svg>

            {/* Conditionally render the input field on mobile */}
            {isSearchVisible && (
              <input
                type="text"
                placeholder="Search for cakes"
                className="ml-2 w-20 bg-transparent focus:outline-none placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state
                onClick={handleInputClick}
              />
            )}
          </button>

          {/* Desktop Search Input (Always Visible) */}
          <div className="hidden md:flex items-center space-x-2 md:bg-gray-200 md:py-1 md:px-2 rounded-md">
            <svg
              className="w-3.5 h-3.5 fill:#C1C5C9"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488.4 488.4"
              stroke="#C1C5C9"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path>
                  </g>
                </g>
              </g>
            </svg>
            <input
              type="text"
              placeholder="Search for cakes"
              className="ml-2 w-36 bg-transparent focus:outline-none placeholder-gray-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery state for desktop
            />
          </div>

          <span className="hidden md:block">
            <FavoriteBorderIcon />
          </span>
          <span className="hidden md:block">
            <PersonOutlineOutlinedIcon />
          </span>
          <div className="relative">
            <Link to="/cart">
              <ShoppingCartOutlinedIcon />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button className="md:hidden text-gray-900" onClick={toggleMenu}>
            {isNavbarVisibility ? <MenuOpenIcon /> : <MenuOutlinedIcon />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
