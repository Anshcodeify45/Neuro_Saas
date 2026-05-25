import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold text-blue-600 tracking-tight cursor-pointer"
        >
          NeuroSaaS
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600">

          <li
            onClick={() => scrollToSection("home")}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Home
          </li>

          <li
            onClick={() => scrollToSection("features")}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Features
          </li>

          <li
            onClick={() => scrollToSection("pricing")}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Pricing
          </li>

          <li
            onClick={() => scrollToSection("contact")}
            className="hover:text-blue-600 transition cursor-pointer"
          >
            Contact
          </li>

        </ul>

        {/* CTA */}
        <Link to="/login">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-700 hover:shadow-md transition-all duration-200">
            Get Started
          </button>
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;