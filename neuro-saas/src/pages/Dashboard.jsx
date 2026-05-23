import React from "react";

import Stats from "../components/dashboard/Stats";
import ChartBox from "../components/dashboard/ChartBox";
import Table from "../components/dashboard/Table";
import Activity from "../components/dashboard/Activity";
const Dashboard = () => {
  return (
    <div className="space-y-6 scrollbar-hide">

      {/* PAGE HEADER */}
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome back, here’s what’s happening today.
        </p>
      </div>

      {/* STATS */}
      <Stats />

      {/* CHART + SIDE PANEL */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* MAIN CHART */}
        <div className="xl:col-span-2">
          <ChartBox />
        </div>

        {/* ACTIVITY PANEL */}
     <Activity />

      </div>

      {/* TABLE */}
      <Table />

    </div>
  );
};

export default Dashboard;