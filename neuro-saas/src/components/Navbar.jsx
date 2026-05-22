import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-50">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        NeuroSaaS
      </div>

      {/* Links */}
      <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
        <li className="hover:text-blue-600 cursor-pointer">Home</li>
        <li className="hover:text-blue-600 cursor-pointer">Features</li>
        <li className="hover:text-blue-600 cursor-pointer">Pricing</li>
        <li className="hover:text-blue-600 cursor-pointer">Contact</li>
      </ul>

      {/* Button */}
      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
        Get Started
      </button>

    </nav>
  );
};

export default Navbar;