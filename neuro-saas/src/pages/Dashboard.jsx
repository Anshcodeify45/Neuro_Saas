import React from "react";

import Stats from "../components/dashboard/Stats";
import ChartBox from "../components/dashboard/ChartBox";
import Table from "../components/dashboard/Table";
import Activity from "../components/dashboard/Activity";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 px-6 py-8 space-y-8 transition-colors duration-300">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">

          <div>
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white tracking-tight">
              Dashboard
            </h1>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Overview of your system performance, activity, and analytics
            </p>
          </div>

          <div className="text-xs text-gray-400 dark:text-gray-500">
            Last updated: just now
          </div>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto space-y-8">

        {/* STATS */}
        <Stats />

        {/* CHART + ACTIVITY */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">

          {/* CHART */}
          <div className="xl:col-span-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm p-5">
            <ChartBox />
          </div>

          {/* ACTIVITY */}
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm p-5">
            <Activity />
          </div>

        </div>

        {/* TABLE */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm p-5">
          <Table />
        </div>

      </div>

    </div>
  );
};

export default Dashboard;