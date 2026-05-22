import React, { useState, useEffect } from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import Stats from "../components/dashboard/Stats";
import ChartBox from "../components/dashboard/ChartBox";
import Table from "../components/dashboard/Table";

const Dashboard = () => {
  const [dark, setDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // 🌙 GLOBAL DARK MODE CONTROL (CORRECT WAY)
  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

 return (
  <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">

    {/* SIDEBAR */}
    <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

    {/* MAIN AREA */}
    <div className="flex-1 flex flex-col transition-all duration-300">

      {/* TOPBAR */}
      <div className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow">

        <Topbar />

        <button
          onClick={() => setDark(!dark)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>

      </div>

      {/* CONTENT */}
      <div className="p-6 space-y-6">
        <Stats />
        <ChartBox />
        <Table />
      </div>

    </div>
  </div>
);
};

export default Dashboard;