// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { CartContext } from "../Components/Contexts/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <>
      <Navbar
        searchQuery=""
        setSearchQuery={() => {}}
        cartCount={cartItems.length}
      />

      <div className="container mx-auto mt-11 p-5">
        <h2 className="font-nunito font-bold text-customPink text-4xl text-center pb-5">
          Cart
        </h2>
        {cartItems.length === 0 ? (
          <p className=" flex justify-center items-center text-customPink font-extrabold text-xl bg-lightPink w-96 h-56 rounded-lg mb-20 mx-auto text-center">
            Your Cart Is Empty...<br></br>Buy Some Cakes From Us Today
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border rounded"
                >
                  <img
                    src={item.image}
                    alt={`${item.title} pic`}
                    className="w-24 h-24 object-cover rounded"
                  />

                  <div className="flex-1 mx-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-customPink">{item.price}</p>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-5 flex justify-between items-center">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={clearCart}
              >
                Clear Cart
              </button>
              <button className="bg-customPink text-white px-4 py-4 rounded">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
