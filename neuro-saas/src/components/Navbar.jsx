import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const scrollToSection = (id) => {
    const el =
      document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });

      setMenuOpen(false);
    }
  };

  return (
    <nav
      className="
        w-full
        sticky
        top-0
        z-50
        bg-white/80
        backdrop-blur-md
        border-b
        border-gray-100
        shadow-sm
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          flex
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
          py-4
        "
      >

        {/* LOGO */}
        <div
          onClick={() =>
            scrollToSection("home")
          }
          className="
            text-xl
            sm:text-2xl
            font-bold
            text-blue-600
            tracking-tight
            cursor-pointer
          "
        >
          NeuroSaaS
        </div>

        {/* DESKTOP LINKS */}
        <ul
          className="
            hidden
            md:flex
            items-center
            gap-8
            lg:gap-10
            text-sm
            font-medium
            text-gray-600
          "
        >

          <li
            onClick={() =>
              scrollToSection("home")
            }
            className="
              hover:text-blue-600
              transition
              cursor-pointer
            "
          >
            Home
          </li>

          <li
            onClick={() =>
              scrollToSection(
                "features"
              )
            }
            className="
              hover:text-blue-600
              transition
              cursor-pointer
            "
          >
            Features
          </li>

          <li
            onClick={() =>
              scrollToSection(
                "pricing"
              )
            }
            className="
              hover:text-blue-600
              transition
              cursor-pointer
            "
          >
            Pricing
          </li>

          <li
            onClick={() =>
              scrollToSection(
                "contact"
              )
            }
            className="
              hover:text-blue-600
              transition
              cursor-pointer
            "
          >
            Contact
          </li>

        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* DESKTOP BUTTON */}
          <Link
            to="/login"
            className="hidden md:block"
          >

            <button
              className="
                bg-blue-600
                text-white
                px-5
                py-2.5
                rounded-xl
                font-medium
                hover:bg-blue-700
                hover:shadow-md
                transition-all
                duration-200
              "
            >
              Get Started
            </button>

          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="
              md:hidden
              w-10
              h-10
              rounded-xl
              border
              border-gray-200
              flex
              items-center
              justify-center
              text-gray-700
              hover:bg-gray-100
              transition
            "
          >

            {menuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div
          className="
            md:hidden
            border-t
            border-gray-100
            bg-white
            px-4
            py-5
            shadow-lg
          "
        >

          <ul
            className="
              flex
              flex-col
              gap-5
              text-sm
              font-medium
              text-gray-700
            "
          >

            <li
              onClick={() =>
                scrollToSection("home")
              }
              className="
                hover:text-blue-600
                transition
                cursor-pointer
              "
            >
              Home
            </li>

            <li
              onClick={() =>
                scrollToSection(
                  "features"
                )
              }
              className="
                hover:text-blue-600
                transition
                cursor-pointer
              "
            >
              Features
            </li>

            <li
              onClick={() =>
                scrollToSection(
                  "pricing"
                )
              }
              className="
                hover:text-blue-600
                transition
                cursor-pointer
              "
            >
              Pricing
            </li>

            <li
              onClick={() =>
                scrollToSection(
                  "contact"
                )
              }
              className="
                hover:text-blue-600
                transition
                cursor-pointer
              "
            >
              Contact
            </li>

          </ul>

          {/* MOBILE CTA */}
          <Link
            to="/login"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            <button
              className="
                mt-6
                w-full
                bg-blue-600
                text-white
                py-3
                rounded-xl
                font-medium
                hover:bg-blue-700
                transition
              "
            >
              Get Started
            </button>

          </Link>

        </div>

      )}

    </nav>
  );
};

export default Navbar;