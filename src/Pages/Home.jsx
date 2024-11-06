// eslint-disable-next-line no-unused-vars
import React, { useState, useContext } from "react";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/ProductCard";
import { CartContext } from "../Components/Contexts/CartContext";
import Footer from "../Components/Footer";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query
  // const [cartItems, setCartItems] = useState([]);
  const { addToCart, cartItems } = useContext(CartContext);

  // Function to handle adding product to the cart
  const handleAddToCart = (product) => {
    // setCartItems((prevCartItems) => [...prevCartItems, product]);
    addToCart(product);
  };

  const Products = [
    {
      id: 1,
      image: "./images/cake-1.jpg",
      title: "Chocolate Cake",
      price: "N 25,000",
    },
    {
      id: 2,
      image: "./images/cake-2.jpg",
      title: "Red Velvet Cake",
      price: "N 15,000",
    },
    {
      id: 3,
      image: "./images/cake-3.jpg",
      title: "New-wed Cake",
      price: "N 80,000",
    },
    {
      id: 4,
      image: "./images/cake-4.jpg",
      title: "Choco Drip Cake",
      price: "N 20,000",
    },
    {
      id: 5,
      image: "./images/cake-5.jpg",
      title: "Vanilla Cake",
      price: "N 15,000",
    },
    {
      id: 6,
      image: "./images/cake-6.jpg",
      title: 'Vanilla "10" Cake',
      price: "N 25,000",
    },
    {
      id: 7,
      image: "./images/cake-7.jpg",
      title: "Strawberry Cake",
      price: "N 12,000",
    },
    {
      id: 8,
      image: "./images/cake-8.jpg",
      title: "Birthday Special",
      price: "N 22,000",
    },
    {
      id: 9,
      image: "./images/cake-9.jpg",
      title: "Fruit Deluxe",
      price: "N 30,000",
    },
    {
      id: 10,
      image: "./images/cake-10.jpg",
      title: "Happy Birthday",
      price: "N 25,000",
    },
    {
      id: 11,
      image: "./images/cake-11.jpg",
      title: "12 Cupcakes",
      price: "N 8,000",
    },
    {
      id: 12,
      image: "./images/cake-12.jpg",
      title: "Cake Dessert",
      price: "N 28,000",
    },

    {
      id: 13,
      image: "./images/cake-12.jpg",
      title: "Chocolate Cake",
      price: "N 25,000",
    },
    {
      id: 14,
      image: "./images/cake-11.jpg",
      title: "Red Velvet Cake",
      price: "N 15,000",
    },
    {
      id: 15,
      image: "./images/cake-10.jpg",
      title: "New-wed Cake",
      price: "N 80,000",
    },
    {
      id: 16,
      image: "./images/cake-4.jpg",
      title: "Choco Drip Cake",
      price: "N 20,000",
    },
    {
      id: 17,
      image: "./images/cake-5.jpg",
      title: "Vanilla Cake",
      price: "N 15,000",
    },
    {
      id: 18,
      image: "./images/cake-6.jpg",
      title: 'Vanilla "10" Cake',
      price: "N 25,000",
    },
    {
      id: 19,
      image: "./images/cake-7.jpg",
      title: "Strawberry Cake",
      price: "N 12,000",
    },
    {
      id: 20,
      image: "./images/cake-8.jpg",
      title: "Birthday Special",
      price: "N 22,000",
    },
    {
      id: 21,
      image: "./images/cake-9.jpg",
      title: "Fruit Deluxe",
      price: "N 30,000",
    },
    {
      id: 22,
      image: "./images/cake-3.jpg",
      title: "Happy Birthday",
      price: "N 25,000",
    },
    {
      id: 23,
      image: "./images/cake-2.jpg",
      title: "12 Cupcakes",
      price: "N 8,000",
    },
    {
      id: 24,
      image: "./images/cake-1.jpg",
      title: "Cake Dessert",
      price: "N 28,000",
    },

    {
      id: 25,
      image: "./images/cake-1.jpg",
      title: "Chocolate Cake",
      price: "N 25,000",
    },
    {
      id: 26,
      image: "./images/cake-2.jpg",
      title: "Red Velvet Cake",
      price: "N 15,000",
    },
    {
      id: 27,
      image: "./images/cake-3.jpg",
      title: "New-wed Cake",
      price: "N 80,000",
    },
    {
      id: 28,
      image: "./images/cake-4.jpg",
      title: "Choco Drip Cake",
      price: "N 20,000",
    },
    {
      id: 29,
      image: "./images/cake-5.jpg",
      title: "Vanilla Cake",
      price: "N 15,000",
    },
    {
      id: 30,
      image: "./images/cake-6.jpg",
      title: 'Vanilla "10" Cake',
      price: "N 25,000",
    },
    {
      id: 31,
      image: "./images/cake-7.jpg",
      title: "Strawberry Cake",
      price: "N 12,000",
    },
    {
      id: 32,
      image: "./images/cake-8.jpg",
      title: "Birthday Special",
      price: "N 22,000",
    },
    {
      id: 33,
      image: "./images/cake-9.jpg",
      title: "Fruit Deluxe",
      price: "N 30,000",
    },
    {
      id: 34,
      image: "./images/cake-10.jpg",
      title: "Happy Birthday",
      price: "N 25,000",
    },
    {
      id: 35,
      image: "./images/cake-11.jpg",
      title: "12 Cupcakes",
      price: "N 8,000",
    },
    {
      id: 36,
      image: "./images/cake-12.jpg",
      title: "Cake Dessert",
      price: "N 28,000",
    },

    {
      id: 37,
      image: "./images/cake-12.jpg",
      title: "Chocolate Cake",
      price: "N 25,000",
    },
    {
      id: 38,
      image: "./images/cake-11.jpg",
      title: "Red Velvet Cake",
      price: "N 15,000",
    },
    {
      id: 39,
      image: "./images/cake-10.jpg",
      title: "New-wed Cake",
      price: "N 80,000",
    },
    {
      id: 40,
      image: "./images/cake-4.jpg",
      title: "Choco Drip Cake",
      price: "N 20,000",
    },
    {
      id: 41,
      image: "./images/cake-5.jpg",
      title: "Vanilla Cake",
      price: "N 15,000",
    },
    {
      id: 42,
      image: "./images/cake-6.jpg",
      title: 'Vanilla "10" Cake',
      price: "N 25,000",
    },
    {
      id: 43,
      image: "./images/cake-7.jpg",
      title: "Strawberry Cake",
      price: "N 12,000",
    },
    {
      id: 44,
      image: "./images/cake-8.jpg",
      title: "Birthday Special",
      price: "N 22,000",
    },
    {
      id: 45,
      image: "./images/cake-9.jpg",
      title: "Fruit Deluxe",
      price: "N 30,000",
    },
    {
      id: 46,
      image: "./images/cake-3.jpg",
      title: "Happy Birthday",
      price: "N 25,000",
    },
    {
      id: 47,
      image: "./images/cake-2.jpg",
      title: "12 Cupcakes",
      price: "N 8,000",
    },
    {
      id: 48,
      image: "./images/cake-1.jpg",
      title: "Cake Dessert",
      price: "N 28,000",
    },
  ];

  const productsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  // Get filtered products based on search query
  const filteredProducts = Products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get products for current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const selectedProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  };

  // state to track dropdown visibility
  const [isCategoriesOpen, setCategoriesIsOpen] = useState(false);
  const [isSortByOpen, setIsSortByOpen] = useState(false);

  // function to toggle the dropdown
  const toggleCategoriesDropdown = () => {
    setCategoriesIsOpen(!isCategoriesOpen);
    setIsSortByOpen(false);
  };
  const toggleSortByDropdown = () => {
    setIsSortByOpen(!isSortByOpen);
    setCategoriesIsOpen(false);
  };

  return (
    <>
      <Navbar
        searchQuery={searchQuery} // Pass searchQuery state as a prop to the Navbar
        setSearchQuery={setSearchQuery} // Pass setSearchQuery function as a prop to the Navbar
        cartCount={cartItems.length} // Pass cart count
        className="fixed top-0 left-0 w-full z-50 bg-lightPink shadow-lg "
      />

      <div className="hero-section fixed top-[60px] md:top-[65px] left-0 w-full z-40">
        <img
          src="./images/hero-section.svg"
          alt="hero-section pic"
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col md:flex-row mx-5 md:mb-9 pt-[180px] md:pt-[400px]">
        {/* Mobile view only */}
        <div className="relative inline-block text-left pb-8 md:hidden">
          <div className="flex justify-between font-nunito">
            <button
              className="w-[175px] flex justify-between items-center px-6 py-2 text-customPink text-xs font-semibold border-customPink border rounded-lg"
              onClick={toggleCategoriesDropdown}
            >
              Categories
              <span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    // eslint-disable-next-line no-undef
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

            {/* Dropdown list for categories*/}
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
              <div className="absolute font-nunito right-0 mt-10 w-40 bg-white border border-gray-700 rounded-md shadow-lg z-10">
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
        </div>

        <div className="md:flex md:mx-20">
          {/* Desktop view only */}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
              {selectedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  onAddToCart={() => handleAddToCart(product)}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center my-16 md:mt-20">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`mx-2 px-3 py-1.5 text-sm font-semibold rounded-md border ${
                    currentPage === index + 1
                      ? "bg-customPink text-white border-customPink"
                      : "bg-white text-customPink border-customPink"
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
