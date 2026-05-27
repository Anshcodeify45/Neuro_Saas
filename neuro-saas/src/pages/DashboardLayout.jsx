import React, {
  useState,
  useEffect,
} from "react";

import { Outlet } from "react-router-dom";

import {
  Menu,
  Moon,
  Sun,
} from "lucide-react";

import Sidebar from "../components/dashboard/SideBar";
import Topbar from "../components/dashboard/Topbar";

const DashboardLayout = () => {
  const [dark, setDark] =
    useState(false);

  const [sidebarOpen, setSidebarOpen] =
    useState(
      window.innerWidth >= 1024
    );

  // DARK MODE
  useEffect(() => {
    const root =
      document.documentElement;

    dark
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [dark]);

  // RESPONSIVE SIDEBAR
  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerWidth < 1024
      ) {
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
        flex

        bg-[#f4f7fb]
        dark:bg-[#020817]

        overflow-hidden
      "
    >

      {/* SIDEBAR */}
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      {/* MAIN */}
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
            sm:px-5
            lg:px-6

            pt-3
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
              gap-3

              rounded-[26px]

              border
              border-gray-200/70
              dark:border-white/10

              bg-white/70
              dark:bg-white/[0.04]

              backdrop-blur-2xl

              px-4
              py-3

              shadow-[0_8px_30px_rgba(0,0,0,0.06)]
              dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]
            "
          >

            {/* MOBILE MENU */}
            <button
              onClick={() =>
                setSidebarOpen(true)
              }
              className="
                lg:hidden

                flex
                items-center
                justify-center

                w-11
                h-11

                rounded-xl

                border
                border-gray-200
                dark:border-white/10

                bg-white
                dark:bg-white/[0.05]

                text-gray-700
                dark:text-white

                shrink-0
              "
            >
              <Menu size={20} />
            </button>

            {/* TOPBAR */}
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
                py-2.5

                rounded-2xl

                border
                border-gray-200
                dark:border-white/10

                bg-white
                dark:bg-white/[0.04]

                transition-all
                duration-300

                hover:scale-[1.02]
              "
            >

              <div
                className="
                  w-10
                  h-10

                  rounded-xl

                  flex
                  items-center
                  justify-center

                  bg-gray-100
                  dark:bg-white/[0.06]
                "
              >
                {dark ? (
                  <Moon size={18} />
                ) : (
                  <Sun size={18} />
                )}
              </div>

              <div className="hidden xl:block text-left">

                <p
                  className="
                    text-sm
                    font-semibold

                    text-gray-900
                    dark:text-white
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
                    dark:text-gray-400
                  "
                >
                  Switch appearance
                </p>

              </div>

            </button>

          </div>

        </header>

        {/* PAGE */}
        <main
          className="
            flex-1
            overflow-y-auto

            px-3
            sm:px-5
            lg:px-6

            pb-6
          "
        >

          <div
            className="
              w-full
              max-w-[1600px]
              mx-auto
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