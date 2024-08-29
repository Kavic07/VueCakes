// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  const Products = [
    {
      image: "./images/cake-1.jpg",
      title: "Chocolate Cake",
      price: "N 25,000",
    },
    {
      image: "./images/cake-2.jpg",
      title: "Red Velvet Cake",
      price: "N 15,000",
    },
    {
      image: "./images/cake-3.jpg",
      title: "New-wed Cake",
      price: "N 80,000",
    },
    {
      image: "./images/cake-4.jpg",
      title: "Choco Drip Cake",
      price: "N 20,000",
    },
    {
      image: "./images/cake-5.jpg",
      title: "Vanilla Cake",
      price: "N 15,000",
    },
    {
      image: "./images/cake-6.jpg",
      title: 'Vanilla "10" Cake',
      price: "N 25,000",
    },
    {
      image: "./images/cake-7.jpg",
      title: "Strawberry Cake",
      price: "N 12,000",
    },
    {
      image: "./images/cake-8.jpg",
      title: "Birthday Special",
      price: "N 22,000",
    },
    {
      image: "./images/cake-9.jpg",
      title: "Fruit Deluxe",
      price: "N 30,000",
    },
    {
      image: "./images/cake-10.jpg",
      title: "Happy Birthday",
      price: "N 25,000",
    },
    {
      image: "./images/cake-11.jpg",
      title: "12 Cupcakes",
      price: "N 8,000",
    },
    {
      image: "./images/cake-12.jpg",
      title: "Cake Dessert",
      price: "N 28,000",
    },
    {
      image: "./images/cake-1.jpg",
      title: "Chocolate Cake",
      price: "N 25,000",
    },
    {
      image: "./images/cake-2.jpg",
      title: "Red Velvet Cake",
      price: "N 15,000",
    },
    {
      image: "./images/cake-3.jpg",
      title: "New-wed Cake",
      price: "N 80,000",
    },
    {
      image: "./images/cake-4.jpg",
      title: "Choco Drip Cake",
      price: "N 20,000",
    },
    {
      image: "./images/cake-5.jpg",
      title: "Vanilla Cake",
      price: "N 15,000",
    },
    {
      image: "./images/cake-6.jpg",
      title: 'Vanilla "10" Cake',
      price: "N 25,000",
    },
    {
      image: "./images/cake-7.jpg",
      title: "Strawberry Cake",
      price: "N 12,000",
    },
    {
      image: "./images/cake-8.jpg",
      title: "Birthday Special",
      price: "N 22,000",
    },
    {
      image: "./images/cake-9.jpg",
      title: "Fruit Deluxe",
      price: "N 30,000",
    },
    {
      image: "./images/cake-10.jpg",
      title: "Happy Birthday",
      price: "N 25,000",
    },
    {
      image: "./images/cake-11.jpg",
      title: "12 Cupcakes",
      price: "N 8,000",
    },
    {
      image: "./images/cake-12.jpg",
      title: "Cake Dessert",
      price: "N 28,000",
    },
    {
      image: "./images/cake-1.jpg",
      title: "Chocolate Cake",
      price: "N 25,000",
    },
    {
      image: "./images/cake-2.jpg",
      title: "Red Velvet Cake",
      price: "N 15,000",
    },
    {
      image: "./images/cake-3.jpg",
      title: "New-wed Cake",
      price: "N 80,000",
    },
    {
      image: "./images/cake-4.jpg",
      title: "Choco Drip Cake",
      price: "N 20,000",
    },
    {
      image: "./images/cake-5.jpg",
      title: "Vanilla Cake",
      price: "N 15,000",
    },
    {
      image: "./images/cake-6.jpg",
      title: 'Vanilla "10" Cake',
      price: "N 25,000",
    },
    {
      image: "./images/cake-7.jpg",
      title: "Strawberry Cake",
      price: "N 12,000",
    },
    {
      image: "./images/cake-8.jpg",
      title: "Birthday Special",
      price: "N 22,000",
    },
    {
      image: "./images/cake-9.jpg",
      title: "Fruit Deluxe",
      price: "N 30,000",
    },
    {
      image: "./images/cake-10.jpg",
      title: "Happy Birthday",
      price: "N 25,000",
    },
    {
      image: "./images/cake-11.jpg",
      title: "12 Cupcakes",
      price: "N 8,000",
    },
    {
      image: "./images/cake-12.jpg",
      title: "Cake Dessert",
      price: "N 28,000",
    },
    {
      image: "./images/cake-1.jpg",
      title: "Chocolate Cake",
      price: "N 25,000",
    },
    {
      image: "./images/cake-2.jpg",
      title: "Red Velvet Cake",
      price: "N 15,000",
    },
    {
      image: "./images/cake-3.jpg",
      title: "New-wed Cake",
      price: "N 80,000",
    },
    {
      image: "./images/cake-4.jpg",
      title: "Choco Drip Cake",
      price: "N 20,000",
    },
    {
      image: "./images/cake-5.jpg",
      title: "Vanilla Cake",
      price: "N 15,000",
    },
    {
      image: "./images/cake-6.jpg",
      title: 'Vanilla "10" Cake',
      price: "N 25,000",
    },
    {
      image: "./images/cake-7.jpg",
      title: "Strawberry Cake",
      price: "N 12,000",
    },
    {
      image: "./images/cake-8.jpg",
      title: "Birthday Special",
      price: "N 22,000",
    },
    {
      image: "./images/cake-9.jpg",
      title: "Fruit Deluxe",
      price: "N 30,000",
    },
    {
      image: "./images/cake-10.jpg",
      title: "Happy Birthday",
      price: "N 25,000",
    },
    {
      image: "./images/cake-11.jpg",
      title: "12 Cupcakes",
      price: "N 8,000",
    },
    {
      image: "./images/cake-12.jpg",
      title: "Cake Dessert",
      price: "N 28,000",
    },
    {
      image: "./images/cake-1.jpg",
      title: "Chocolate Cake",
      price: "N 25,000",
    },
    {
      image: "./images/cake-2.jpg",
      title: "Red Velvet Cake",
      price: "N 15,000",
    },
    {
      image: "./images/cake-3.jpg",
      title: "New-wed Cake",
      price: "N 80,000",
    },
    {
      image: "./images/cake-4.jpg",
      title: "Choco Drip Cake",
      price: "N 20,000",
    },
    {
      image: "./images/cake-5.jpg",
      title: "Vanilla Cake",
      price: "N 15,000",
    },
    {
      image: "./images/cake-6.jpg",
      title: 'Vanilla "10" Cake',
      price: "N 25,000",
    },
    {
      image: "./images/cake-7.jpg",
      title: "Strawberry Cake",
      price: "N 12,000",
    },
    {
      image: "./images/cake-8.jpg",
      title: "Birthday Special",
      price: "N 22,000",
    },
    {
      image: "./images/cake-9.jpg",
      title: "Fruit Deluxe",
      price: "N 30,000",
    },
    {
      image: "./images/cake-10.jpg",
      title: "Happy Birthday",
      price: "N 25,000",
    },
    {
      image: "./images/cake-11.jpg",
      title: "12 Cupcakes",
      price: "N 8,000",
    },
    {
      image: "./images/cake-12.jpg",
      title: "Cake Dessert",
      price: "N 28,000",
    },
  ];

  const productsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(Products.length / productsPerPage);

  // Get products for current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const selectedProducts = Products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // state to track dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // function to toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg" />

      <div className="hero-section fixed top-[60px] md:top-[65px] left-0 w-full z-40">
        <img
          src="./images/hero-section.svg"
          alt="hero-section pic"
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col md:flex-row mx-5 md:mx-8 md:mb-9 pt-[180px] md:pt-[500px]">
        {/* Mobile view only */}
        <div className="relative inline-block text-left pb-8 md:hidden">
          <div className="flex justify-between font-nunito">
            <button
              className="w-[175px] flex justify-between items-center px-6 py-2 text-customPink text-xs font-semibold border-customPink border rounded-lg"
              onClick={toggleDropdown}
            >
              Categories
              <span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    // eslint-disable-next-line no-undef
                    isOpen ? "rotate-180" : ""
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

            <button
              className="w-[175px] flex justify-between items-center px-6 py-2 text-customPink text-xs font-semibold border-customPink border rounded-lg"
              onClick={toggleDropdown}
            >
              Sort by
              <span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    // eslint-disable-next-line no-undef
                    isOpen ? "rotate-180" : ""
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
          </div>
        </div>

        <div className="categories hidden md:block">
          <div className="md:bg-lightGrey w-90 h-auto md:p-3 md:mb-4">
            <h5 className="md:font-extrabold font-nunito text-sm pb-5">
              Event
            </h5>
            <ul className="md:flex flex-col text-xs font-nunito font-semibold space-y-3">
              <a href="#" className="visited:text-customPink">
                All
              </a>
              <a href="#">Wedding</a>
              <a href="#">Birthday</a>
              <a href="#">Anniversary</a>
              <a href="#">Desserts</a>
            </ul>
          </div>

          <div className="md:bg-lightGrey w-90 h-auto p-3 md:mb-4">
            <h5 className="md:font-extrabold font-nunito text-sm pb-5">
              Layers
            </h5>
            <ul className="md:flex flex-col text-xs font-nunito font-semibold space-y-3">
              <a href="#" className="visited:text-customPink">
                All
              </a>
              <a href="#">Single Layer</a>
              <a href="#">Tiered cake</a>
            </ul>
          </div>

          <div className="md:bg-lightGrey w-90 h-auto p-3 md:mb-4">
            <h5 className="md:font-extrabold font-nunito text-sm pb-2">
              Sizes
            </h5>
            <div className="md:flex flex-wrap text-xs text-customPink font-semibold gap-3 ">
              <p className="md:border-customPink border rounded px-3 py-1 text-[10px] shadow-[-2px_2px_0px_lightPink]">
                8 inches
              </p>
              <p className="md:border-customPink border rounded px-3 py-1 text-[10px] shadow-[-2px_2px_0px_lightPink]">
                10 inches
              </p>
              <p className="md:border-customPink border rounded px-3 py-1 text-[10px] shadow-[-2px_2px_0px_lightPink]">
                12 inches
              </p>
              <p className="md:border-customPink border rounded px-3 py-1 text-[10px] shadow-[-2px_2px_0px_lightPink]">
                16 inches
              </p>
              <p className="md:border-customPink border rounded px-3 py-1 text-[10px] shadow-[-2px_2px_0px_lightPink]">
                Cupcakes
              </p>
            </div>
          </div>

          <div className="md:bg-lightGrey w-90 h-auto p-3 md:mb-4">
            <h5 className="md:font-extrabold font-nunito text-sm pb-5">
              Icing
            </h5>
            <ul className="md:flex flex-col text-xs font-nunito font-semibold space-y-3">
              <a href="#" className="visited:text-customPink">
                All
              </a>
              <a href="#">Fondant</a>
              <a href="#">Buttercream</a>
              <a href="#">No Icing</a>
              <a href="#">Desserts</a>
            </ul>
          </div>
        </div>

        <div className="md:ml-5">
          <p className="hidden md:block md:font-semibold font-nunito text-lg pb-5">
            Showing {startIndex + 1} -{" "}
            {Math.min(startIndex + productsPerPage, Products.length)} of{" "}
            {Products.length} items
          </p>
          {/* Products */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {selectedProducts.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
