import React from "react";
import { Search, Bell } from "lucide-react";

const Topbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-3">

      {/* LEFT */}
      <div>
        <h2 className="text-lg font-semibold">
          Dashboard Overview
        </h2>
        <p className="text-sm text-gray-500">
          Welcome back 👋, manage your platform
        </p>
      </div>

      {/* CENTER SEARCH */}
      <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg w-1/3">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search analytics, users..."
          className="bg-transparent outline-none px-2 w-full text-sm"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        <div className="relative">
          <Bell className="text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 w-2 h-2 rounded-full"></span>
        </div>

        <div className="w-9 h-9 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold">
          A
        </div>

      </div>

    </div>
  );
};

export default Topbar;