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

          <div className="w-full max-w-[1400px] mx-4 mt-4">

            <div className="flex items-center justify-between px-5 py-3 rounded-2xl border border-gray-200/60 dark:border-gray-800/60 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-sm">

              <Topbar />

              <button
                onClick={() => setDark(!dark)}
                className="text-sm px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                {dark ? "Light Mode" : "Dark Mode"}
              </button>

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