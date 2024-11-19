// eslint-disable-next-line no-unused-vars
import { React, useState, useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ image, title, price, onAddToCart }) => {
  return (
    <>
      <div className="font-nunito ">
        <img
          src={image}
          alt={`${title} pic`}
          className="w-96 h-72 md:w-64 md:h-56 rounded-1"
          loading="lazy"
        />
        <div className="flex justify-between pt-6 md:max-w-64">
          <p className="text-sm font-semibold">{title}</p>
          <span className="text-customPink">
            <FavoriteBorderIcon />
          </span>
        </div>
        <p className="font-semibold text-xl md:text-lg py-1.5 md:pb-2">
          {price}
        </p>

        <button
          className="flex items-center gap-5 bg-customPink text-white text-md  font-semibold px-28 py-3 md:px-9 rounded-lg hover:bg-lightPink"
          onClick={onAddToCart}
        >
          Add to Cart{" "}
          <span>
            <ShoppingCartOutlinedIcon />
          </span>
        </button>
      </div>
    </>
  );
};

export default ProductCard;
