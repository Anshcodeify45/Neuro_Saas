import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/SideBar";
import Topbar from "../components/dashboard/Topbar";

const DashboardLayout = () => {
  const [dark, setDark] = useState(false);

  // MOBILE CLOSED
  const [sidebarOpen, setSidebarOpen] = useState(
    window.innerWidth >= 1024
  );

  // DARK MODE
  useEffect(() => {
    const root = document.documentElement;

    dark
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [dark]);

  // RESPONSIVE SIDEBAR
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize();

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
        bg-gray-50
        dark:bg-gray-950
        flex
        overflow-hidden
      "
    >

  

      {/* SIDEBAR */}
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      {/* MAIN AREA */}
      <div
        className={`
          flex-1
          flex
          flex-col
          min-w-0
          transition-all
          duration-300

          ${
            sidebarOpen
              ? "lg:ml-64"
              : "lg:ml-20"
          }
        `}
      >

        {/* TOPBAR */}
        <header
          className="
            sticky
            top-0
            z-30
            px-3
            sm:px-4
            lg:px-6
            py-3
            bg-transparent
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
              gap-4
              rounded-2xl
              border
              border-gray-200/70
              dark:border-white/10
              bg-white/80
              dark:bg-gray-900/80
              backdrop-blur-xl
              px-4
              py-3
              shadow-sm
            "
          >

            {/* LEFT */}
            <div className="flex-1 min-w-0">
              <Topbar />
            </div>

            {/* DARK MODE */}
            <button
              onClick={() =>
                setDark(!dark)
              }
              className="
                hidden
                md:flex
                items-center
                gap-3
                px-4
                py-2
                rounded-2xl
                border
                border-gray-200
                dark:border-white/10
                bg-white
                dark:bg-white/5
                hover:shadow-md
                transition
              "
            >

              <div
                className="
                  w-9
                  h-9
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  bg-gray-100
                  dark:bg-white/10
                "
              >
                {dark ? "🌙" : "☀️"}
              </div>

              <div className="hidden lg:block">
                <p
                  className="
                    text-sm
                    font-semibold
                  "
                >
                  {dark
                    ? "Dark Mode"
                    : "Light Mode"}
                </p>

                <p
                  className="
                    text-xs
                    text-gray-500
                  "
                >
                  Switch appearance
                </p>
              </div>

            </button>

          </div>

        </header>

        {/* PAGE CONTENT */}
        <main
          className="
            flex-1
            overflow-y-auto
            px-3
            sm:px-4
            lg:px-6
            pb-6
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