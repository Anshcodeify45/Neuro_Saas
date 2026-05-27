import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

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
  ArrowUpRight,
} from "lucide-react";

import { getUserTrend } from "../../api/chartApi";

const ChartBox = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] =
    useState(true);

  // =========================
  // FETCH DATA
  // =========================

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res =
          await getUserTrend();

        if (
          Array.isArray(res.data)
        ) {
          setData(res.data);
        } else {
          setData([]);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // =========================
  // TOTAL USERS
  // =========================

  const totalUsers =
    useMemo(() => {
      return data.reduce(
        (acc, item) =>
          acc + item.users,
        0
      );
    }, [data]);

  // =========================
  // GROWTH %
  // =========================

  const growth =
    useMemo(() => {
      if (data.length < 2)
        return 0;

      const first =
        data[0]?.users || 0;

      const last =
        data[data.length - 1]
          ?.users || 0;

      if (first === 0)
        return 0;

      return (
        ((last - first) /
          first) *
        100
      ).toFixed(1);
    }, [data]);

  // =========================
  // LOADING STATE
  // =========================

  if (loading) {
    return (
      <div
        className="
          rounded-3xl
          border
          border-gray-200
          dark:border-white/10
          bg-white
          dark:bg-[#081028]
          p-6
          h-[500px]
          flex
          items-center
          justify-center
        "
      >
        <div
          className="
            w-10
            h-10
            border-4
            border-blue-500/20
            border-t-blue-500
            rounded-full
            animate-spin
          "
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-gray-200
        dark:border-white/10
        bg-white
        dark:bg-[#081028]
        shadow-sm
        dark:shadow-[0_10px_40px_rgba(0,0,0,0.45)]
        p-4
        sm:p-5
        lg:p-7
      "
    >

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          -top-10
          -right-10

          w-72
          h-72

          bg-blue-500/10
          blur-[100px]
          rounded-full
        "
      />

      {/* HEADER */}
      <div
        className="
          relative
          z-10

          flex
          flex-col
          xl:flex-row
          xl:items-start
          xl:justify-between

          gap-5
          mb-7
        "
      >

        {/* LEFT */}
        <div className="flex gap-4">

          <div
            className="
              w-14
              h-14

              rounded-2xl

              bg-blue-500/10

              flex
              items-center
              justify-center

              text-blue-500

              shrink-0
            "
          >

            <TrendingUp size={24} />

          </div>

          <div>

            <h2
              className="
                text-2xl
                font-bold
                text-gray-900
                dark:text-white
                leading-tight
              "
            >
              User Growth Analytics
            </h2>

            <p
              className="
                mt-1

                text-sm
                text-gray-500
                dark:text-gray-400
              "
            >
              Real-time growth overview
              and engagement
            </p>

          </div>

        </div>

        {/* RIGHT STATS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-4
            w-full
            xl:w-auto
          "
        >

          {/* USERS */}
          <div
            className="
              min-w-[180px]

              rounded-2xl

              border
              border-gray-200
              dark:border-white/10

              bg-gray-50
              dark:bg-white/[0.04]

              p-4
            "
          >

            <div
              className="
                flex
                items-center
                gap-2
                mb-3
              "
            >

              <Users
                size={17}
                className="
                  text-blue-500
                "
              />

              <span
                className="
                  text-sm
                  text-gray-500
                  dark:text-gray-400
                "
              >
                Total Users
              </span>

            </div>

            <h3
              className="
                text-3xl
                font-bold
                text-gray-900
                dark:text-white
              "
            >
              {totalUsers}
            </h3>

          </div>

          {/* GROWTH */}
          <div
            className="
              min-w-[180px]

              rounded-2xl

              border
              border-gray-200
              dark:border-white/10

              bg-gray-50
              dark:bg-white/[0.04]

              p-4
            "
          >

            <div
              className="
                flex
                items-center
                gap-2
                mb-3
              "
            >

              <Activity
                size={17}
                className="
                  text-green-500
                "
              />

              <span
                className="
                  text-sm
                  text-gray-500
                  dark:text-gray-400
                "
              >
                Growth
              </span>

            </div>

            <div
              className="
                flex
                items-center
                gap-2
              "
            >

              <h3
                className={`
                  text-3xl
                  font-bold

                  ${
                    growth >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }
                `}
              >
                {growth >= 0
                  ? "+"
                  : ""}
                {growth}%
              </h3>

              <ArrowUpRight
                size={18}
                className={`
                  ${
                    growth >= 0
                      ? "text-green-500"
                      : "text-red-500 rotate-90"
                  }
                `}
              />

            </div>

          </div>

        </div>

      </div>

      {/* CHART */}
      <div
        className="
          relative
          z-10
        "
      >

        <div
          className="
            h-[260px]
            sm:h-[320px]
            lg:h-[400px]
          "
        >

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

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
                  id="growthFill"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="5%"
                    stopColor="#3b82f6"
                    stopOpacity={0.45}
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
                strokeDasharray="4 4"
                vertical={false}
                stroke="#334155"
                opacity={0.25}
              />

              {/* X AXIS */}
              <XAxis
                dataKey="name"
                tick={{
                  fill: "#94a3b8",
                  fontSize: 12,
                }}
                axisLine={false}
                tickLine={false}
              />

              {/* Y AXIS */}
              <YAxis
                width={35}
                tick={{
                  fill: "#94a3b8",
                  fontSize: 12,
                }}
                axisLine={false}
                tickLine={false}
              />

              {/* TOOLTIP */}
              <Tooltip
                cursor={{
                  stroke: "#3b82f6",
                  strokeWidth: 1,
                  strokeDasharray:
                    "5 5",
                }}
                contentStyle={{
                  background:
                    "#0f172a",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                  borderRadius:
                    "18px",
                  color: "#fff",
                  backdropFilter:
                    "blur(10px)",
                  boxShadow:
                    "0 10px 30px rgba(0,0,0,0.35)",
                }}
                labelStyle={{
                  color: "#fff",
                  fontWeight: 600,
                }}
              />

              {/* AREA */}
              <Area
                type="monotone"
                dataKey="users"
                stroke="#3b82f6"
                strokeWidth={3}
                fill="url(#growthFill)"
                activeDot={{
                  r: 7,
                  fill: "#3b82f6",
                  stroke: "#fff",
                  strokeWidth: 2,
                }}
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* FOOTER */}
      <div
        className="
          relative
          z-10

          mt-6

          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between

          gap-4
        "
      >

        <div
          className="
            flex
            items-center
            gap-2

            text-sm
            text-gray-500
            dark:text-gray-400
          "
        >

          <div
            className="
              w-2.5
              h-2.5
              rounded-full
              bg-green-500
              animate-pulse
            "
          />

          Analytics updated in
          real-time

        </div>

        <div
          className="
            px-4
            py-2

            rounded-xl

            bg-blue-500/10
            text-blue-500

            text-sm
            font-medium

            w-full
            sm:w-auto

            text-center
          "
        >
          Last 7 Days
        </div>

      </div>

    </motion.div>
  );
};

export default ChartBox;