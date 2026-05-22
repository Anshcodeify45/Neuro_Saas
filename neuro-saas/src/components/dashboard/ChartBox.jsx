import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", users: 120 },
  { name: "Tue", users: 210 },
  { name: "Wed", users: 180 },
  { name: "Thu", users: 300 },
  { name: "Fri", users: 250 },
  { name: "Sat", users: 400 },
  { name: "Sun", users: 350 },
];

const ChartBox = () => {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">

      {/* TITLE */}
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        User Growth
      </h2>

      {/* CHART */}
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data}>

          <XAxis dataKey="name" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />

          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              border: "none",
              color: "#fff",
            }}
          />

          <Line
            type="monotone"
            dataKey="users"
            stroke="#2563eb"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  );
};

export default ChartBox;