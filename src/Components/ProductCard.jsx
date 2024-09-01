// eslint-disable-next-line no-unused-vars
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ image, title, price }) => {
  return (
    <>
      <div className="font-nunito ">
        <img src={image} alt={`${title} pic`} className="w-96 h-72 rounded-1" />
        <div className="flex justify-between pt-6 ">
          <p className="text-sm font-semibold">{title}</p>
          <span className="text-customPink">
            <FavoriteBorderIcon />
          </span>
        </div>
        <p className="font-semibold text-xl md:text-lg py-1.5 md:pb-2">
          {price}
        </p>
        <div className="flex justify-between items-center">
          <button className="bg-customPink text-white text-md  font-semibold px-28 py-3 md:px-24 rounded-lg">
            Buy Now
          </button>
          <span className="border border-customPink text-customPink rounded-lg px-3 py-2.5">
            <ShoppingCartOutlinedIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
