import React from "react";

import Stats from "../components/dashboard/Stats";
import ChartBox from "../components/dashboard/ChartBox";
import Table from "../components/dashboard/Table";

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
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">

          <h2 className="text-lg font-semibold mb-5">
            Recent Activity
          </h2>

          <div className="space-y-4">

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-green-500"></div>

              <div>
                <p className="font-medium">
                  New User Registered
                </p>

                <p className="text-sm text-gray-500">
                  2 minutes ago
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>

              <div>
                <p className="font-medium">
                  Revenue Updated
                </p>

                <p className="text-sm text-gray-500">
                  10 minutes ago
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-purple-500"></div>

              <div>
                <p className="font-medium">
                  New Subscription
                </p>

                <p className="text-sm text-gray-500">
                  30 minutes ago
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* TABLE */}
      <Table />

    </div>
  );
};

export default Dashboard;