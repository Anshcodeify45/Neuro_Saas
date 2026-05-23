import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", users: 120 },
  { name: "Tue", users: 200 },
  { name: "Wed", users: 150 },
  { name: "Thu", users: 300 },
  { name: "Fri", users: 250 },
];

const Analytics = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Analytics</h2>

      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#2563eb" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;