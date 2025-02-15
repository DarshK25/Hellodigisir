import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="DigiSir Logo" className="w-8 h-8" />
            <h2 className="text-xl font-semibold text-gray-800">DigiSir</h2>
          </div>
          <p className="text-gray-600 mt-3">
            Empowering education through digital innovation. Transform your teaching journey with DigiSir.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
          <ul className="text-gray-600 mt-3 space-y-2">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">About Us</Link></li>
            <li><Link to="/features" className="hover:text-blue-500">Features</Link></li>
            <li><Link to="/pricing" className="hover:text-blue-500">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-blue-500">FAQ</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
          <p className="text-gray-600 mt-3">infohellodigisir@gmail.com</p>
          <p className="text-gray-600 mt-1">+91 77700 30131</p>

          <h3 className="text-lg font-semibold text-gray-800 mt-6">Support</h3>
          <p className="text-gray-600 mt-3">Facing any technical issue? Contact here</p>
          <p className="text-gray-600 mt-1">+91 95118 68948</p>
          <p className="text-gray-600 mt-3">Want to talk administrative sales service?</p>
          <p className="text-gray-600 mt-1">+91 73850 14856</p>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="w-full border-t border-gray-300 mt-12" />

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Hellodigisir. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;