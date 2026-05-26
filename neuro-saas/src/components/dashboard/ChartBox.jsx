import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Activity,
} from "lucide-react";

import { getUserTrend } from "../../api/chartApi";

const ChartBox = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getUserTrend();
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  // TOTAL USERS
  const totalUsers = data.reduce((acc, item) => {
    return acc + item.users;
  }, 0);

  // GROWTH %
  const growth =
    data.length > 1
      ? (
          ((data[data.length - 1]?.users -
            data[0]?.users) /
            data[0]?.users) *
          100
        ).toFixed(1)
      : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border border-gray-200 dark:border-white/10
        bg-white dark:bg-white/[0.03]
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,0.12)]
        p-6
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="
        absolute
        top-0
        right-0
        w-80
        h-80
        bg-blue-500/10
        blur-[120px]
        rounded-full
      "></div>

      {/* HEADER */}
      <div className="
        relative
        z-10
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-6
        mb-8
      ">

        {/* TITLE */}
        <div>

          <div className="flex items-center gap-3">

            <div className="
              p-3
              rounded-2xl
              bg-blue-500/10
              text-blue-500
            ">
              <TrendingUp size={20} />
            </div>

            <div>
              <h2 className="
                text-2xl
                font-semibold
                text-gray-900
                dark:text-white
              ">
                User Growth Analytics
              </h2>

              <p className="
                text-sm
                text-gray-500
                dark:text-gray-400
                mt-1
              ">
                Real-time growth overview and engagement
              </p>
            </div>

          </div>

        </div>

        {/* STATS */}
        <div className="
          flex
          flex-wrap
          items-center
          gap-4
        ">

          {/* TOTAL USERS */}
          <div className="
            rounded-2xl
            border border-gray-200 dark:border-white/10
            bg-gray-50 dark:bg-white/[0.03]
            px-5
            py-4
            min-w-[140px]
          ">

            <div className="flex items-center gap-2 mb-2">

              <Users
                size={16}
                className="text-blue-500"
              />

              <span className="
                text-xs
                text-gray-500
                dark:text-gray-400
              ">
                Total Users
              </span>

            </div>

            <h3 className="
              text-2xl
              font-bold
              text-gray-900
              dark:text-white
            ">
              {totalUsers}
            </h3>

          </div>

          {/* GROWTH */}
          <div className="
            rounded-2xl
            border border-gray-200 dark:border-white/10
            bg-gray-50 dark:bg-white/[0.03]
            px-5
            py-4
            min-w-[140px]
          ">

            <div className="flex items-center gap-2 mb-2">

              <Activity
                size={16}
                className="text-green-500"
              />

              <span className="
                text-xs
                text-gray-500
                dark:text-gray-400
              ">
                Growth
              </span>

            </div>

            <h3 className="
              text-2xl
              font-bold
              text-green-500
            ">
              +{growth}%
            </h3>

          </div>

        </div>

      </div>

      {/* CHART */}
      <div className="relative z-10">

        <ResponsiveContainer width="100%" height={340}>

          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >

            {/* GRADIENT */}
            <defs>

              <linearGradient
                id="usersGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="5%"
                  stopColor="#3b82f6"
                  stopOpacity={0.4}
                />

                <stop
                  offset="95%"
                  stopColor="#3b82f6"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            {/* GRID */}
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#1e293b"
              opacity={0.5}
            />

            {/* X AXIS */}
            <XAxis
              dataKey="name"
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            {/* Y AXIS */}
            <YAxis
              tick={{ fill: "#94a3b8", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            {/* TOOLTIP */}
            <Tooltip
              cursor={{
                stroke: "#3b82f6",
                strokeWidth: 1,
                strokeDasharray: "5 5",
              }}
              contentStyle={{
                background: "#0f172a",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "18px",
                color: "#fff",
                backdropFilter: "blur(12px)",
                boxShadow:
                  "0 10px 40px rgba(0,0,0,0.35)",
              }}
              labelStyle={{
                color: "#fff",
                marginBottom: "6px",
                fontWeight: 600,
              }}
            />

            {/* AREA */}
            <Area
              type="monotone"
              dataKey="users"
              stroke="#3b82f6"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#usersGradient)"
              activeDot={{
                r: 7,
                strokeWidth: 2,
                fill: "#3b82f6",
                stroke: "#fff",
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

      {/* FOOTER */}
      <div className="
        relative
        z-10
        mt-6
        flex
        items-center
        justify-between
        flex-wrap
        gap-4
      ">

        <div className="
          flex
          items-center
          gap-2
          text-sm
          text-gray-500
          dark:text-gray-400
        ">

          <div className="
            w-2.5
            h-2.5
            rounded-full
            bg-green-500
            animate-pulse
          "></div>

          Analytics updated in real-time

        </div>

        <div className="
          px-4
          py-2
          rounded-xl
          bg-blue-500/10
          text-blue-500
          text-sm
          font-medium
        ">
          Last 7 Days
        </div>

      </div>

    </motion.div>
  );
};

export default ChartBox;