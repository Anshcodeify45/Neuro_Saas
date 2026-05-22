import React from "react";

const Topbar = () => {
  return (
    <div className="w-full bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      
      <h2 className="text-lg font-semibold text-gray-700">
        Dashboard Overview
      </h2>

      <div className="text-gray-500">
        Welcome, Developer 👋
      </div>

    </div>
  );
};

export default Topbar;