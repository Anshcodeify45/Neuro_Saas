import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md p-6">
      
      <h1 className="text-2xl font-bold text-blue-600 mb-8">
        NeuroDash
      </h1>

      <ul className="space-y-4 text-gray-700">
        <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
        <li className="hover:text-blue-600 cursor-pointer">Users</li>
        <li className="hover:text-blue-600 cursor-pointer">Analytics</li>
        <li className="hover:text-blue-600 cursor-pointer">Settings</li>
      </ul>

    </div>
  );
};

export default Sidebar;