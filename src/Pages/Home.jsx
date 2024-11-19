// eslint-disable-next-line no-unused-vars
import React, { useState, useContext, useMemo } from "react";
import Navbar from "../Components/Navbar";
import Products from "../Components/Data/Products";
import ProductCard from "../Components/Data/ProductCard";
import { CartContext } from "../Components/Contexts/CartContext";
import Footer from "../Components/Footer";
import CategoriesDropdown from "../Components/CategoriesDropdown";
import SortByDropdown from "../Components/SortByDropdown";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query
  const { addToCart, cartItems } = useContext(CartContext);

  // Function to handle adding product to the cart
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const productsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  // Get filtered products based on search query
  const filteredProducts = useMemo(
    () =>
      Products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  );

  // Calculate total pages
  const totalPages = useMemo(
    () => Math.ceil(filteredProducts.length / productsPerPage),
    [filteredProducts, productsPerPage]
  );

  // Calculate start index for current page
  const startIndex = (currentPage - 1) * productsPerPage;

  // Get products for current page
  const selectedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    return filteredProducts.slice(startIndex, startIndex + productsPerPage);
  }, [currentPage, filteredProducts, productsPerPage]);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar
        searchQuery={searchQuery} // Pass searchQuery state as a prop to the Navbar
        setSearchQuery={setSearchQuery} // Pass setSearchQuery function as a prop to the Navbar
        cartCount={cartItems.length} // Pass cart count
        className="fixed top-0 left-0 w-full z-50 bg-lightPink shadow-lg "
      />

      <div className="hero-section fixed top-[60px] md:top-[62px] left-0 w-full z-40">
        <img
          src="./images/hero-section.svg"
          alt="hero-section pic"
          className="w-full h-auto"
        />
      </div>

      <div className="flex flex-col md:flex-row mx-5 md:mb-9 pt-[180px] md:pt-[400px]">
        {/* Mobile view only */}
        <div className="md:hidden flex justify-between">
          <CategoriesDropdown />
          <SortByDropdown />
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
