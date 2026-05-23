import React from "react";
import { Search, Bell, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();

  // GET USER
  const user = JSON.parse(localStorage.getItem("user"));

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="w-full flex items-center justify-between gap-4">

      {/* LEFT */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          Dashboard Overview
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Welcome back 👋 {user?.name}
        </p>
      </div>

      {/* SEARCH */}
      <div className="hidden md:flex items-center bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-xl w-[320px]">

        <Search size={18} className="text-gray-500" />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none px-2 w-full text-sm dark:text-white"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* NOTIFICATION */}
        <div className="relative cursor-pointer">
          <Bell className="text-gray-600 dark:text-gray-300" />

          <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>
        </div>

        {/* USER */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold uppercase">
            {user?.name?.charAt(0)}
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-semibold dark:text-white">
              {user?.name}
            </p>

            <p className="text-xs text-gray-500">
              {user?.email}
            </p>
          </div>

        </div>

        {/* LOGOUT */}
        <button
          onClick={handleLogout}
          className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 transition"
        >
          <LogOut
            size={18}
            className="text-red-500"
          />
        </button>

      </div>

    </div>
  );
};

export default Topbar;