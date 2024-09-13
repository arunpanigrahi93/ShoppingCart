import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="text-white text-xl font-bold">Products</div>
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/cart" className="text-white hover:text-gray-300">
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
