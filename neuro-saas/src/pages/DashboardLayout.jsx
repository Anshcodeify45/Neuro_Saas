import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/SideBar";
import Topbar from "../components/dashboard/Topbar";

const DashboardLayout = () => {
  const [dark, setDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // DARK MODE
  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="flex h-screen overflow-hidden bg-[#f5f7fb] dark:bg-gray-950 text-gray-900 dark:text-white">

      {/* SIDEBAR */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col p-4">

        {/* TOPBAR */}
        <div className="sticky top-3 z-50 flex justify-between items-center px-5 py-3 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm max-w-[1400px] mx-auto w-full">

          <Topbar />

          <button
            onClick={() => setDark(!dark)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>

        </div>

        {/* PAGE CONTENT */}
        <div className="flex-1 overflow-y-auto p-4 no-scrollbar">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;