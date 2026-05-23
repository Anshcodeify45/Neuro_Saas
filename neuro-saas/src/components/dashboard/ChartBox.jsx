import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { TrendingUp, Users, DollarSign } from "lucide-react";

const data = [
  { name: "Mon", users: 120, revenue: 400, orders: 240 },
  { name: "Tue", users: 210, revenue: 600, orders: 300 },
  { name: "Wed", users: 180, revenue: 500, orders: 280 },
  { name: "Thu", users: 300, revenue: 900, orders: 450 },
  { name: "Fri", users: 250, revenue: 750, orders: 390 },
  { name: "Sat", users: 400, revenue: 1200, orders: 600 },
  { name: "Sun", users: 350, revenue: 1000, orders: 550 },
];

const ChartBox = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">

        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Analytics Overview
          </h2>

          <p className="text-sm text-gray-500">
            Weekly performance metrics
          </p>
        </div>

        {/* MINI KPI */}
        <div className="flex gap-3">

          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-xl">
            <Users size={16} className="text-blue-500" />
            <span className="text-sm">Users</span>
          </div>

          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-xl">
            <DollarSign size={16} className="text-green-500" />
            <span className="text-sm">Revenue</span>
          </div>

          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-xl">
            <TrendingUp size={16} className="text-purple-500" />
            <span className="text-sm">Orders</span>
          </div>

        </div>

      </div>

      {/* CHART */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />

            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "none",
                borderRadius: "10px",
                color: "#fff",
              }}
            />

            {/* USERS */}
            <Line
              type="monotone"
              dataKey="users"
              stroke="#3b82f6"
              strokeWidth={3}
            />

            {/* REVENUE */}
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#10b981"
              strokeWidth={3}
            />

            {/* ORDERS */}
            <Line
              type="monotone"
              dataKey="orders"
              stroke="#a855f7"
              strokeWidth={3}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default ChartBox;