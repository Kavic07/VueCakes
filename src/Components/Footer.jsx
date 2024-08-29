// eslint-disable-next-line no-unused-vars
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <div className="bg-lightPink flex flex-col pl-4 py-7 md:flex-row justify-between md:px-32 md:pb-32">
        <div className="md:flex flex-col justify-center">
          <h2 className="font-nunito font-extrabold text-customPink text-3xl pb-4">
            VUECAKES
          </h2>
          <div className="text-customPink space-x-3 pb-5">
            <a href="#">
              <FacebookRoundedIcon />
            </a>
            <a href="#">
              <TwitterIcon />
            </a>
            <a href="#">
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className="font-nunito pl-3 md:pl-0">
          <h3 className="py-4 font-extrabold text-xl">Working Hours</h3>
          <div className="font-bold text-md pb-5">
            <h4>Open</h4>
            <p>Monday - Saturday</p>
            <p>8:00AM to 5:00PM</p>
            <h4>Closed</h4>
            <p>Sunday</p>
          </div>
        </div>

        <div className="font-nunito pl-3 md:pl-0">
          <h4 className="py-4 font-extrabold text-xl">Useful Links</h4>
          <ul className="flex flex-col font-bold text-md space-y-4 pb-5">
            <a href="/" className="hover:text-customPink">
              Home
            </a>
            <a href="/shop" className="hover:text-customPink">
              Shop
            </a>
            <a href="/contact" className="hover:text-customPink">
              Contact
            </a>
          </ul>
        </div>

        <div className="font-nunito pl-3 md:pl-0">
          <h4 className="py-4 font-extrabold text-xl">Support</h4>
          <div className="flex flex-col font-bold text-md space-y-3">
            <a href="#" className="hover:text-customPink">
              Location
            </a>
            <a href="#" className="hover:text-customPink">
              Delivery
            </a>
            <a href="#" className="hover:text-customPink">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
