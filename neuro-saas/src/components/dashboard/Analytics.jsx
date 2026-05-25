import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", users: 120 },
  { name: "Tue", users: 200 },
  { name: "Wed", users: 150 },
  { name: "Thu", users: 300 },
  { name: "Fri", users: 250 },
];

const Analytics = () => {
  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Analytics
        </h2>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          User growth overview for the last 5 days
        </p>
      </div>

      {/* METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-white dark:bg-gray-900 rounded-xl p-4">
          <p className="text-xs text-gray-500">Total Users</p>
          <h3 className="text-2xl font-semibold mt-1 text-gray-900 dark:text-white">
            1,020
          </h3>
          <p className="text-xs text-green-500 mt-1">+12% this week</p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl p-4">
          <p className="text-xs text-gray-500">Active Users</p>
          <h3 className="text-2xl font-semibold mt-1 text-gray-900 dark:text-white">
            780
          </h3>
          <p className="text-xs text-green-500 mt-1">+8% this week</p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl p-4">
          <p className="text-xs text-gray-500">New Signups</p>
          <h3 className="text-2xl font-semibold mt-1 text-gray-900 dark:text-white">
            210
          </h3>
          <p className="text-xs text-blue-500 mt-1">Stable growth</p>
        </div>

      </div>

      {/* CHART CARD */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">

        <div className="flex items-center justify-between mb-4">

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              User Growth
            </h3>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              Daily active users trend
            </p>
          </div>

          <span className="text-xs px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 rounded-full">
            Last 5 days
          </span>

        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>

              {/* X AXIS */}
              <XAxis
                dataKey="name"
                stroke="currentColor"
                className="text-gray-500 dark:text-gray-400"
                fontSize={12}
              />

              {/* Y AXIS */}
              <YAxis
                stroke="currentColor"
                className="text-gray-500 dark:text-gray-400"
                fontSize={12}
              />

              {/* TOOLTIP */}
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--tooltip-bg)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  color: "#111",
                }}
                wrapperClassName="dark:[&_.recharts-tooltip-wrapper]:bg-gray-800"
              />

              {/* LINE */}
              <Line
                type="monotone"
                dataKey="users"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />

            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>

    </div>
  );
};

export default Analytics;