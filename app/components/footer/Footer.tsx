import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" flex flex-col my-10 justify-center items-center space-y-5  md:flex-row md:justify-between p-4 bg-gray-800 text-white min-h-[60px]">
      {/* Left Section */}
      <div className="flex md:flex-col md:justify-start space-x-4 md:basis-1/3 cursor-pointer">
        <p className="hover:text-blue-400">+123 456 789</p>
        <p className="hover:text-blue-400">+987 654 321</p>
      </div>

      {/* Center Section */}
      <div className="flex justify-center space-x-10 md:basis-1/3 cursor-pointer">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-2xl hover:text-blue-500 hover:scale-130 transition duration-300" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl hover:text-pink-500 hover:scale-130 transition duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl hover:text-blue-400 hover:scale-130 transition duration-300" />
        </a>
      </div>

      {/* Right Section */}
      <div className=" flex space-x-4 md:basis-1/3 md:justify-end cursor-pointer">
        <p className="hover:text-blue-400">About Us</p>
        <p className="hover:text-blue-400">Privacy Policy</p>
        <p className="hover:text-blue-400">Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
