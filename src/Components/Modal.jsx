// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Modal = () => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="font-nunito font-bold text-4xl text-customPink text-center">
            Yay!!!
          </h2>
          <p className="mt-4 text-lightPink text-center">
            Your Order has been placed successfully and being processed. You
            will receive a confirmation soon.
          </p>
          <button className="mt-6 mx-auto px-4 py-2 bg-customPink text-white rounded-lg">
            <Link to="/">Back to home</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
