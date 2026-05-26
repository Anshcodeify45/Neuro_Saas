import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/SideBar";
import Topbar from "../components/dashboard/Topbar";

const DashboardLayout = () => {
  const [dark, setDark] = useState(false);

  // MOBILE SIDEBAR CLOSED BY DEFAULT
  const [sidebarOpen, setSidebarOpen] =
    useState(window.innerWidth >= 1024);

  // HANDLE DARK MODE
  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  // AUTO CLOSE SIDEBAR ON MOBILE
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  return (
    <div
      className="
        min-h-screen
        flex
        overflow-hidden
        bg-gray-50
        dark:bg-gray-950
        text-gray-900
        dark:text-white
        transition-colors
        duration-300
      "
    >

      {/* SIDEBAR OVERLAY FOR MOBILE */}
      {sidebarOpen && (
        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          className="
            fixed
            inset-0
            bg-black/40
            z-40
            lg:hidden
          "
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed
          lg:static
          z-50
          h-full
          transition-transform
          duration-300
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <Sidebar
          open={sidebarOpen}
          setOpen={setSidebarOpen}
        />
      </div>

      {/* MAIN */}
      <div
        className="
          flex-1
          flex
          flex-col
          min-w-0
          w-full
        "
      >

        {/* TOPBAR */}
        <div
          className="
            sticky
            top-0
            z-30
            w-full
            flex
            justify-center
            px-3
            sm:px-4
            pt-3
            sm:pt-4
          "
        >

          <div className="w-full max-w-[1450px]">

            {/* TOP CONTAINER */}
            <div
              className="
                flex
                items-center
                justify-between
                gap-3
                sm:gap-4
                px-3
                sm:px-5
                py-3
                rounded-2xl
                sm:rounded-3xl
                border
                border-gray-200/70
                dark:border-white/10
                bg-white/80
                dark:bg-gray-900/75
                backdrop-blur-2xl
                shadow-lg
                shadow-black/5
              "
            >

              {/* LEFT SIDE */}
              <div
                className="
                  flex-1
                  min-w-0
                "
              >

                <Topbar />

              </div>

              {/* DARK MODE BUTTON */}
              <div
                className="
                  hidden
                  md:flex
                  items-center
                  shrink-0
                "
              >

                <button
                  onClick={() =>
                    setDark(!dark)
                  }
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-3
                    px-3
                    lg:px-4
                    py-2.5
                    rounded-2xl
                    border
                    border-gray-200
                    dark:border-white/10
                    bg-gradient-to-br
                    from-white
                    to-gray-50
                    dark:from-white/[0.05]
                    dark:to-white/[0.02]
                    hover:border-blue-300
                    dark:hover:border-blue-500/30
                    shadow-sm
                    hover:shadow-md
                    transition-all
                    duration-300
                    overflow-hidden
                  "
                >

                  {/* HOVER EFFECT */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                      bg-gradient-to-r
                      from-blue-500/5
                      to-indigo-500/5
                    "
                  />

                  {/* ICON */}
                  <div
                    className="
                      relative
                      w-9
                      h-9
                      lg:w-10
                      lg:h-10
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                      bg-gray-100
                      dark:bg-white/10
                      text-base
                      lg:text-lg
                    "
                  >

                    <div
                      className={`
                        absolute
                        transition-all
                        duration-500
                        ${
                          dark
                            ? "rotate-0 scale-100 opacity-100"
                            : "rotate-90 scale-0 opacity-0"
                        }
                      `}
                    >
                      🌙
                    </div>

                    <div
                      className={`
                        absolute
                        transition-all
                        duration-500
                        ${
                          dark
                            ? "-rotate-90 scale-0 opacity-0"
                            : "rotate-0 scale-100 opacity-100"
                        }
                      `}
                    >
                      ☀️
                    </div>

                  </div>

                  {/* TEXT */}
                  <div
                    className="
                      hidden
                      lg:flex
                      flex-col
                      items-start
                    "
                  >

                    <span
                      className="
                        text-sm
                        font-semibold
                        text-gray-800
                        dark:text-white
                        leading-none
                      "
                    >
                      {dark
                        ? "Dark Mode"
                        : "Light Mode"}
                    </span>

                    <span
                      className="
                        text-xs
                        text-gray-500
                        dark:text-gray-400
                        mt-1
                      "
                    >
                      Switch appearance
                    </span>

                  </div>

                  {/* SWITCH */}
                  <div
                    className={`
                      relative
                      w-11
                      h-6
                      rounded-full
                      transition-all
                      duration-300
                      flex
                      items-center
                      ${
                        dark
                          ? "bg-blue-600"
                          : "bg-gray-300 dark:bg-gray-700"
                      }
                    `}
                  >

                    <div
                      className={`
                        absolute
                        w-5
                        h-5
                        rounded-full
                        bg-white
                        shadow-md
                        transition-all
                        duration-300
                        ${
                          dark
                            ? "translate-x-5"
                            : "translate-x-1"
                        }
                      `}
                    />

                  </div>

                </button>

              </div>

            </div>

          </div>

        </div>

        {/* CONTENT AREA */}
        <main
          className="
            flex-1
            overflow-y-auto
            px-3
            sm:px-4
            lg:px-6
            py-4
            sm:py-6
          "
        >

          <div
            className="
              max-w-[1400px]
              mx-auto
              w-full
            "
          >
            <Outlet />
          </div>

        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;