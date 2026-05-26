import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/SideBar";
import Topbar from "../components/dashboard/Topbar";

const DashboardLayout = () => {
  const [dark, setDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="h-screen flex overflow-hidden bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">

      {/* SIDEBAR */}
      <div className="shrink-0">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      </div>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <div className="sticky top-0 z-50 w-full flex justify-center">

  <div className="w-full max-w-[1450px] px-4 pt-4">

    {/* TOP CONTAINER */}
    <div
      className="
        flex
        items-center
        justify-between
        gap-4
        px-5
        py-3
        rounded-3xl
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
      <div className="flex-1 min-w-0">

        <Topbar />

      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex items-center shrink-0">

        <button
          onClick={() => setDark(!dark)}
          className="
            group
            relative
            flex
            items-center
            gap-4
            px-4
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

          {/* HOVER GLOW */}
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
              w-10
              h-10
              rounded-2xl
              flex
              items-center
              justify-center
              bg-gray-100
              dark:bg-white/10
              text-lg
              transition-all
              duration-300
              group-hover:scale-105
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
          <div className="flex flex-col items-start">

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
              w-12
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
                    ? "translate-x-6"
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
        <main className="flex-1 overflow-y-auto px-4 py-6">

          <div className="max-w-[1400px] mx-auto">
            <Outlet />
          </div>

        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;