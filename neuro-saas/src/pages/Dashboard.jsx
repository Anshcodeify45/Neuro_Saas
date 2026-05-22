import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import Stats from "../components/dashboard/Stats";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Topbar />

        <div className="p-6">
          <Stats />

          <div className="mt-6 text-gray-600">
            Analytics & Table coming next...
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;