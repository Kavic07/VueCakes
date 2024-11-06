// eslint-disable-next-line no-unused-vars
import { React, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Checkout = () => {
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [deliveryTime, setDeliveryTime] = useState("");

  return (
    <>
      <Navbar searchQuery="" setSearchQuery={() => {}} />
      <div className="checkout-container mx-auto ">
        <h2 className="font-nunito font-bold text-customPink text-4xl text-center my-5">
          Checkout
        </h2>

        <div className="flex flex-col mx-8 gap-6 md:flex-row md:justify-center md:gap-20 md:mx-16">
          <div>
            <div>
              <h3 className="font-nunito font-bold text-customPink text-xl pb-5">
                Checkout
              </h3>

              <div className="pb-4">
                <label className="font-nunito font-bold">
                  Delivery or Pickup
                </label>
                <br></br>
                <select className="mt-1 px-2 border py-2 border-gray-500 rounded-lg w-72">
                  <option>Quick Delivery</option>
                  <option>Pick up</option>
                </select>
              </div>

              <div className="pb-4">
                <label htmlFor="deliveryDate" className="font-nunito font-bold">
                  Delivery Date
                </label>
                <input
                  type="date"
                  id="deliveryDate"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="mt-1 block px-3 border py-2 border-gray-500 rounded-lg w-72 md:w-96"
                />
              </div>

              <div>
                <label htmlFor="deliveryTime" className="font-nunito font-bold">
                  Delivery Time
                </label>
                <input
                  type="time"
                  id="deliveryTime"
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  className="mt-1 block px-3 border py-2 border-gray-500 rounded-lg w-72"
                />
              </div>
            </div>

            <div>
              <h3 className="font-nunito font-bold text-customPink text-xl py-4">
                Billing Address
              </h3>

              <div className="pb-4">
                <label htmlFor="name" className="font-nunito block font-bold">
                  Receiver&apos;s Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name here"
                  className="mt-1 block px-3 border py-2 border-gray-500 rounded-lg w-72"
                />
              </div>

              <div className="pb-4">
                <label htmlFor="email" className="font-nunito block font-bold">
                  E-mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter E-mail address here"
                  className="mt-1 block px-3 border py-2 border-gray-500 rounded-lg w-72"
                />
              </div>

              <div className="pb-4">
                <label
                  htmlFor="address"
                  className="font-nunito block font-bold"
                >
                  House Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your address here"
                  className="mt-1 block px-3 border py-2 border-gray-500 rounded-lg w-72"
                />
              </div>

              <div className="pb-4">
                <label
                  htmlFor="address"
                  className="font-nunito block font-bold"
                >
                  Delivery Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your address here"
                  className="mt-1 block px-3 border py-2 border-gray-500 rounded-lg w-72"
                />
              </div>

              <div className="pb-4">
                <label htmlFor="notes" className="font-nunito block font-bold">
                  Order notes [optional]{" "}
                </label>
                <input
                  type="text"
                  id="notes"
                  placeholder="Enter your notes here"
                  className="mt-1 block px-3 border py-2 border-gray-500 rounded-lg w-72"
                />
              </div>
            </div>
          </div>

          <div className="mb-8 px-4 py-4 border border-customPink rounded-xl">
            <h3 className="font-nunito font-bold text-customPink text-xl pb-4">
              Your Order
            </h3>

            <div className="flex justify-between pb-4 font-nunito font-bold">
              <h4>Product</h4>
              <h4>Amount</h4>
            </div>

            <div className="flex justify-between pb-3 font-nunito">
              <p>Red velvet single layer cake</p>
              <p>N 30,000</p>
            </div>

            <div className="flex justify-between pb-3 font-nunito">
              <p>Subtotal</p>
              <p>N 30,000</p>
            </div>

            <div className="flex justify-between pb-3 font-nunito">
              <p>Delivery</p>
              <p>Quick Delivery: N5,000</p>
            </div>

            <div className="flex justify-between font-nunito">
              <p>Total</p>
              <p>N 35,000</p>
            </div>

            <button className="mx-auto my-4 bg-customPink rounded-lg text-white text-center text-sm px-24 py-3 flex justify-center">
              Order Now
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
