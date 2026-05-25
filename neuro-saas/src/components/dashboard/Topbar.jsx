import React, { useState } from "react";
import { Search, Bell, LogOut, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [openMenu, setOpenMenu] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="w-full flex items-center justify-between gap-6">

      {/* LEFT SECTION */}
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          Dashboard Overview
        </h2>

        <p className="text-xs text-gray-500 mt-0.5">
          Welcome back 👋 {user?.name}
        </p>
      </div>

      {/* CENTER SEARCH */}
      <div className="hidden md:flex items-center bg-gray-100/70 dark:bg-gray-800/60 px-4 py-2 rounded-xl w-[340px] border border-gray-200/40 dark:border-gray-700/40 focus-within:ring-2 focus-within:ring-blue-500 transition">

        <Search size={16} className="text-gray-500" />

        <input
          type="text"
          placeholder="Search anything..."
          className="bg-transparent outline-none px-2 w-full text-sm text-gray-700 dark:text-white"
        />

        <span className="text-[10px] text-gray-400 bg-white dark:bg-gray-700 px-2 py-1 rounded-md">
          ⌘K
        </span>

      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">

        {/* NOTIFICATIONS */}
        <div className="relative cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">

          <Bell className="text-gray-600 dark:text-gray-300" size={18} />

          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>

        </div>

        {/* USER MENU */}
        <div className="relative">

          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >

            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold uppercase text-sm">
              {user?.name?.charAt(0)}
            </div>

            <div className="hidden md:flex flex-col items-start">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {user?.name}
              </p>

              <p className="text-[11px] text-gray-500">
                {user?.email}
              </p>
            </div>

            <ChevronDown size={16} className="text-gray-400" />

          </button>

          {/* DROPDOWN */}
          {openMenu && (
            <div className="absolute right-0 mt-3 w-44 bg-white dark:bg-gray-900 border rounded-xl shadow-lg overflow-hidden z-50">

              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition"
              >
                <LogOut size={16} />
                Logout
              </button>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default Topbar;