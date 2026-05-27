import React, {
  useMemo,
  useState,
} from "react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import {
  TrendingUp,
  Users,
  Activity,
  UserPlus,
  Download,
} from "lucide-react";

import { motion } from "framer-motion";

// ========================================
// DATA
// ========================================

const weeklyData = [
  {
    day: "Mon",
    users: 120,
    revenue: 2400,
    sessions: 900,
    conversion: 20,
  },
  {
    day: "Tue",
    users: 210,
    revenue: 3200,
    sessions: 1200,
    conversion: 32,
  },
  {
    day: "Wed",
    users: 180,
    revenue: 2900,
    sessions: 1000,
    conversion: 28,
  },
  {
    day: "Thu",
    users: 320,
    revenue: 4500,
    sessions: 1700,
    conversion: 40,
  },
  {
    day: "Fri",
    users: 280,
    revenue: 3900,
    sessions: 1500,
    conversion: 36,
  },
  {
    day: "Sat",
    users: 420,
    revenue: 5600,
    sessions: 2200,
    conversion: 52,
  },
  {
    day: "Sun",
    users: 510,
    revenue: 6400,
    sessions: 2600,
    conversion: 60,
  },
];

const monthlyData = [
  {
    day: "Week 1",
    users: 920,
    revenue: 18000,
    sessions: 7200,
    conversion: 140,
  },
  {
    day: "Week 2",
    users: 1320,
    revenue: 24000,
    sessions: 9800,
    conversion: 220,
  },
  {
    day: "Week 3",
    users: 1820,
    revenue: 32000,
    sessions: 12800,
    conversion: 310,
  },
  {
    day: "Week 4",
    users: 2420,
    revenue: 42000,
    sessions: 16800,
    conversion: 430,
  },
];

const yearlyData = [
  {
    day: "Jan",
    users: 4200,
    revenue: 52000,
    sessions: 22000,
    conversion: 520,
  },
  {
    day: "Feb",
    users: 5200,
    revenue: 62000,
    sessions: 25000,
    conversion: 640,
  },
  {
    day: "Mar",
    users: 6800,
    revenue: 78000,
    sessions: 32000,
    conversion: 820,
  },
  {
    day: "Apr",
    users: 7200,
    revenue: 85000,
    sessions: 38000,
    conversion: 940,
  },
  {
    day: "May",
    users: 8600,
    revenue: 102000,
    sessions: 45000,
    conversion: 1200,
  },
  {
    day: "Jun",
    users: 9800,
    revenue: 122000,
    sessions: 52000,
    conversion: 1420,
  },
];

const trafficData = [
  {
    name: "Desktop",
    value: 62,
  },
  {
    name: "Mobile",
    value: 28,
  },
  {
    name: "Tablet",
    value: 10,
  },
];

const COLORS = [
  "#3b82f6",
  "#8b5cf6",
  "#14b8a6",
];

// ========================================
// COMPONENT
// ========================================

const Analytics = () => {
  const [range, setRange] =
    useState("7days");

  // ========================================
  // DYNAMIC DATA
  // ========================================

  const analyticsData =
    useMemo(() => {
      switch (range) {
        case "30days":
          return monthlyData;

        case "1year":
          return yearlyData;

        default:
          return weeklyData;
      }
    }, [range]);

  // ========================================
  // TOTALS
  // ========================================

  const totalUsers =
    analyticsData.reduce(
      (acc, item) =>
        acc + item.users,
      0
    );

  const totalRevenue =
    analyticsData.reduce(
      (acc, item) =>
        acc + item.revenue,
      0
    );

  const totalSessions =
    analyticsData.reduce(
      (acc, item) =>
        acc + item.sessions,
      0
    );

  // ========================================
  // EXPORT CSV
  // ========================================

  const exportCSV = () => {
    const headers = [
      "Time",
      "Users",
      "Revenue",
      "Sessions",
      "Conversion",
    ];

    const rows = analyticsData.map(
      (item) => [
        item.day,
        item.users,
        item.revenue,
        item.sessions,
        item.conversion,
      ]
    );

    const csv = [
      headers.join(","),
      ...rows.map((r) =>
        r.join(",")
      ),
    ].join("\n");

    const blob = new Blob(
      [csv],
      {
        type: "text/csv;charset=utf-8;",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      "analytics-report.csv";

    link.click();
  };

  // ========================================
  // CARD COMPONENT
  // ========================================

  const StatCard = ({
    title,
    value,
    icon,
    color,
  }) => (
    <motion.div
      whileHover={{
        y: -5,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        relative
        overflow-hidden

        rounded-[28px]

        border
        border-gray-200/80
        dark:border-white/10

        bg-white
        dark:bg-[#0B1120]

        p-5
        sm:p-6

        shadow-sm
        hover:shadow-xl

        transition-all
        duration-300
      "
    >

      {/* GLOW */}
      <div
        className={`
          absolute
          top-0
          right-0

          w-32
          h-32

          rounded-full
          blur-3xl
          opacity-10

          ${color}
        `}
      />

      <div
        className="
          relative
          z-10

          flex
          items-center
          justify-between
        "
      >

        <div>

          <p
            className="
              text-sm
              text-gray-500
              dark:text-gray-400
            "
          >
            {title}
          </p>

          <h2
            className="
              mt-3

              text-3xl
              font-bold

              text-gray-900
              dark:text-white
            "
          >
            {value}
          </h2>

        </div>

        <div
          className="
            w-14
            h-14

            rounded-2xl

            flex
            items-center
            justify-center

            bg-white/10
            dark:bg-white/[0.04]

            border
            border-gray-200
            dark:border-white/10
          "
        >

          {icon}

        </div>

      </div>

    </motion.div>
  );

  // ========================================
  // CHART CARD
  // ========================================

  const ChartCard = ({
    title,
    description,
    children,
  }) => (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="
        rounded-[30px]

        border
        border-gray-200/80
        dark:border-white/10

        bg-white
        dark:bg-[#0B1120]

        p-5
        sm:p-6

        shadow-sm
      "
    >

      <div>

        <h2
          className="
            text-lg
            sm:text-xl

            font-semibold

            text-gray-900
            dark:text-white
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-1

            text-sm

            text-gray-500
            dark:text-gray-400
          "
        >
          {description}
        </p>

      </div>

      <div
        className="
          h-[260px]
          sm:h-[320px]

          mt-6
        "
      >
        {children}
      </div>

    </motion.div>
  );

  return (
    <div
      className="
        space-y-6
        sm:space-y-8
      "
    >

      {/* ======================================== */}
      {/* HEADER */}
      {/* ======================================== */}

      <div
        className="
          flex
          flex-col
          xl:flex-row

          xl:items-center
          xl:justify-between

          gap-5
        "
      >

        {/* LEFT */}
        <div>

          <h1
            className="
              text-3xl
              sm:text-4xl

              font-bold
              tracking-tight

              text-gray-900
              dark:text-white
            "
          >
            Analytics Dashboard
          </h1>

          <p
            className="
              mt-2

              text-sm
              sm:text-base

              text-gray-500
              dark:text-gray-400
            "
          >
            Advanced analytics &
            real-time business
            insights
          </p>

        </div>

        {/* RIGHT */}
        <div
          className="
            flex
            flex-col
            sm:flex-row

            gap-3

            w-full
            xl:w-auto
          "
        >

          {/* RANGE */}
          <div
            className="
              grid
              grid-cols-3

              rounded-2xl

              border
              border-gray-200
              dark:border-white/10

              bg-white
              dark:bg-[#0B1120]

              p-1
            "
          >

            {[
              {
                label: "7 Days",
                value: "7days",
              },
              {
                label: "30 Days",
                value: "30days",
              },
              {
                label: "1 Year",
                value: "1year",
              },
            ].map((item) => (

              <button
                key={item.value}
                onClick={() =>
                  setRange(
                    item.value
                  )
                }
                className={`
                  px-4
                  py-2.5

                  rounded-xl

                  text-sm
                  font-medium

                  transition-all

                  ${
                    range ===
                    item.value
                      ? `
                        bg-blue-600
                        text-white
                        shadow-lg
                      `
                      : `
                        text-gray-500
                        dark:text-gray-400
                      `
                  }
                `}
              >
                {item.label}
              </button>

            ))}

          </div>

          {/* EXPORT */}
          <button
            onClick={exportCSV}
            className="
              flex
              items-center
              justify-center
              gap-2

              px-5
              py-3

              rounded-2xl

              bg-blue-600
              hover:bg-blue-700

              text-white
              text-sm
              font-medium

              transition-all
              duration-300

              shadow-lg
              shadow-blue-500/20
            "
          >

            <Download size={17} />

            Export

          </button>

        </div>

      </div>

      {/* ======================================== */}
      {/* STATS */}
      {/* ======================================== */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4

          gap-5
        "
      >

        <StatCard
          title="Total Users"
          value={totalUsers.toLocaleString()}
          icon={
            <Users
              className="
                text-blue-500
              "
              size={24}
            />
          }
          color="bg-blue-500"
        />

        <StatCard
          title="Revenue"
          value={`$${totalRevenue.toLocaleString()}`}
          icon={
            <TrendingUp
              className="
                text-green-500
              "
              size={24}
            />
          }
          color="bg-green-500"
        />

        <StatCard
          title="Sessions"
          value={totalSessions.toLocaleString()}
          icon={
            <Activity
              className="
                text-purple-500
              "
              size={24}
            />
          }
          color="bg-purple-500"
        />

        <StatCard
          title="Conversion"
          value="82%"
          icon={
            <UserPlus
              className="
                text-orange-500
              "
              size={24}
            />
          }
          color="bg-orange-500"
        />

      </div>

      {/* ======================================== */}
      {/* CHARTS */}
      {/* ======================================== */}

      <div
        className="
          grid
          grid-cols-1
          2xl:grid-cols-2

          gap-5
          sm:gap-6
        "
      >

        {/* AREA CHART */}
        <ChartCard
          title="User Growth"
          description="Area chart visualization"
        >

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <AreaChart
              data={analyticsData}
            >

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
                    stopOpacity={0.5}
                  />

                  <stop
                    offset="95%"
                    stopColor="#3b82f6"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#334155"
                opacity={0.3}
              />

              <XAxis
                dataKey="day"
                tick={{
                  fill: "#94a3b8",
                  fontSize: 12,
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                hide={
                  window.innerWidth <
                  640
                }
                tick={{
                  fill: "#94a3b8",
                  fontSize: 12,
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="users"
                stroke="#3b82f6"
                strokeWidth={3}
                fill="url(#usersGradient)"
              />

            </AreaChart>

          </ResponsiveContainer>

        </ChartCard>

        {/* LINE CHART */}
        <ChartCard
          title="Revenue Trend"
          description="Revenue performance analysis"
        >

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <LineChart
              data={analyticsData}
            >

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#334155"
                opacity={0.3}
              />

              <XAxis
                dataKey="day"
                tick={{
                  fill: "#94a3b8",
                  fontSize: 12,
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                hide={
                  window.innerWidth <
                  640
                }
                tick={{
                  fill: "#94a3b8",
                  fontSize: 12,
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip />

              <Legend />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={{
                  r: 4,
                }}
              />

            </LineChart>

          </ResponsiveContainer>

        </ChartCard>

        {/* BAR CHART */}
        <ChartCard
          title="Sessions Analytics"
          description="User sessions overview"
        >

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <BarChart
              data={analyticsData}
            >

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#334155"
                opacity={0.3}
              />

              <XAxis
                dataKey="day"
                tick={{
                  fill: "#94a3b8",
                  fontSize: 12,
                }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                hide={
                  window.innerWidth <
                  640
                }
                tick={{
                  fill: "#94a3b8",
                  fontSize: 12,
                }}
                axisLine={false}
                tickLine={false}
              />

              <Tooltip />

              <Bar
                dataKey="sessions"
                fill="#14b8a6"
                radius={[
                  10,
                  10,
                  0,
                  0,
                ]}
              />

            </BarChart>

          </ResponsiveContainer>

        </ChartCard>

        {/* PIE CHART */}
        <ChartCard
          title="Traffic Sources"
          description="Device usage statistics"
        >

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <PieChart>

              <Pie
                data={trafficData}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={
                  window.innerWidth <
                  640
                    ? 45
                    : 70
                }
                outerRadius={
                  window.innerWidth <
                  640
                    ? 75
                    : 100
                }
                paddingAngle={5}
              >

                {trafficData.map(
                  (
                    entry,
                    index
                  ) => (

                    <Cell
                      key={index}
                      fill={
                        COLORS[index]
                      }
                    />

                  )
                )}

              </Pie>

              <Tooltip />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </ChartCard>

      </div>

    </div>
  );
};

export default Analytics;