import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { getUserTrend } from "../../api/chartApi";

const ChartBox = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getUserTrend();
      setData(res.data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border shadow-sm">

      <h2 className="text-lg font-semibold mb-4">
        User Growth Analytics
      </h2>

      <ResponsiveContainer width="100%" height={220}>

        <LineChart data={data}>

          <XAxis dataKey="name" />
          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="users"
            stroke="#3b82f6"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
};

export default ChartBox;