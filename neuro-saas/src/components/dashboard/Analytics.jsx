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
  CalendarDays,
} from "lucide-react";

import { motion } from "framer-motion";

// DATA


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


// COMPONENT


const Analytics = () => {
  const [range, setRange] =
    useState("7days");

  // CHANGE DATA BASED ON RANGE
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

  // TOTAL USERS
  const totalUsers =
    analyticsData.reduce(
      (acc, item) =>
        acc + item.users,
      0
    );

  // REVENUE
  const totalRevenue =
    analyticsData.reduce(
      (acc, item) =>
        acc + item.revenue,
      0
    );

  // SESSIONS
  const totalSessions =
    analyticsData.reduce(
      (acc, item) =>
        acc + item.sessions,
      0
    );

  // EXPORT CSV
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

  return (
    <div className="space-y-8">

      {/* HEADER */}


      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-5
        "
      >

        <div>

          <h1
            className="
              text-3xl
              font-bold
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
              text-gray-500
              dark:text-gray-400
            "
          >
            Advanced analytics &
            real-time business insights
          </p>

        </div>

        {/* BUTTONS */}
        <div
          className="
            flex
            items-center
            gap-3
            flex-wrap
          "
        >

          {/* RANGE BUTTONS */}
          <div
            className="
              flex
              items-center
              rounded-2xl
              border border-gray-200
              dark:border-white/10
              bg-white
              dark:bg-white/[0.03]
              p-1
            "
          >

            <button
              onClick={() =>
                setRange("7days")
              }
              className={`
                px-4
                py-2
                rounded-xl
                text-sm
                transition-all
                ${
                  range === "7days"
                    ? `
                      bg-blue-600
                      text-white
                    `
                    : `
                      text-gray-500
                      dark:text-gray-400
                    `
                }
              `}
            >
              Last 7 Days
            </button>

            <button
              onClick={() =>
                setRange("30days")
              }
              className={`
                px-4
                py-2
                rounded-xl
                text-sm
                transition-all
                ${
                  range === "30days"
                    ? `
                      bg-blue-600
                      text-white
                    `
                    : `
                      text-gray-500
                      dark:text-gray-400
                    `
                }
              `}
            >
              Last 30 Days
            </button>

            <button
              onClick={() =>
                setRange("1year")
              }
              className={`
                px-4
                py-2
                rounded-xl
                text-sm
                transition-all
                ${
                  range === "1year"
                    ? `
                      bg-blue-600
                      text-white
                    `
                    : `
                      text-gray-500
                      dark:text-gray-400
                    `
                }
              `}
            >
              1 Year
            </button>

          </div>

          {/* EXPORT */}
          <button
            onClick={exportCSV}
            className="
              flex
              items-center
              gap-2
              px-5
              py-3
              rounded-2xl
              bg-blue-600
              hover:bg-blue-700
              text-white
              text-sm
              shadow-lg
              shadow-blue-500/20
              transition-all
            "
          >

            <Download size={17} />

            Export

          </button>

        </div>

      </div>

      {/* STATS */}


      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-4
          gap-6
        "
      >

        {/* USERS */}
        <motion.div
          whileHover={{ y: -5 }}
          className="
            rounded-3xl
            p-6
            bg-white
            dark:bg-white/[0.03]
            border border-gray-200
            dark:border-white/10
            shadow-sm
          "
        >

          <div
            className="
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
                Total Users
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
                {totalUsers.toLocaleString()}
              </h2>

            </div>

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
              "
            >

              <Users size={26} />

            </div>

          </div>

        </motion.div>

        {/* REVENUE */}
        <motion.div
          whileHover={{ y: -5 }}
          className="
            rounded-3xl
            p-6
            bg-white
            dark:bg-white/[0.03]
            border border-gray-200
            dark:border-white/10
            shadow-sm
          "
        >

          <div
            className="
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
                Revenue
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
                $
                {totalRevenue.toLocaleString()}
              </h2>

            </div>

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-green-500/10
                flex
                items-center
                justify-center
                text-green-500
              "
            >

              <TrendingUp size={26} />

            </div>

          </div>

        </motion.div>

        {/* SESSIONS */}
        <motion.div
          whileHover={{ y: -5 }}
          className="
            rounded-3xl
            p-6
            bg-white
            dark:bg-white/[0.03]
            border border-gray-200
            dark:border-white/10
            shadow-sm
          "
        >

          <div
            className="
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
                Sessions
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
                {totalSessions.toLocaleString()}
              </h2>

            </div>

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-purple-500/10
                flex
                items-center
                justify-center
                text-purple-500
              "
            >

              <Activity size={26} />

            </div>

          </div>

        </motion.div>

        {/* CONVERSION */}
        <motion.div
          whileHover={{ y: -5 }}
          className="
            rounded-3xl
            p-6
            bg-white
            dark:bg-white/[0.03]
            border border-gray-200
            dark:border-white/10
            shadow-sm
          "
        >

          <div
            className="
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
                Conversion
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
                82%
              </h2>

            </div>

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-orange-500/10
                flex
                items-center
                justify-center
                text-orange-500
              "
            >

              <UserPlus size={26} />

            </div>

          </div>

        </motion.div>

      </div>


      {/* GRAPHS */}
  

      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
        "
      >


        {/* 1. AREA CHART */}


        <div
          className="
            rounded-3xl
            p-6
            bg-white
            dark:bg-white/[0.03]
            border border-gray-200
            dark:border-white/10
          "
        >

          <h2
            className="
              text-xl
              font-semibold
              text-gray-900
              dark:text-white
            "
          >
            User Growth
          </h2>

          <p
            className="
              text-sm
              text-gray-500
              dark:text-gray-400
              mt-1
            "
          >
            Area chart visualization
          </p>

          <div className="h-[320px] mt-6">

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
                  stroke="#1f2937"
                />

                <XAxis
                  dataKey="day"
                  tick={{
                    fill: "#94a3b8",
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  tick={{
                    fill: "#94a3b8",
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

          </div>

        </div>

        {/* 2. LINE CHART */}

        <div
          className="
            rounded-3xl
            p-6
            bg-white
            dark:bg-white/[0.03]
            border border-gray-200
            dark:border-white/10
          "
        >

          <h2
            className="
              text-xl
              font-semibold
              text-gray-900
              dark:text-white
            "
          >
            Revenue Trend
          </h2>

          <p
            className="
              text-sm
              text-gray-500
              dark:text-gray-400
              mt-1
            "
          >
            Revenue performance analysis
          </p>

          <div className="h-[320px] mt-6">

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
                  stroke="#1f2937"
                />

                <XAxis
                  dataKey="day"
                  tick={{
                    fill: "#94a3b8",
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  tick={{
                    fill: "#94a3b8",
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
                    r: 5,
                  }}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* ================= */}
        {/* 3. BAR CHART */}
        {/* ================= */}

        <div
          className="
            rounded-3xl
            p-6
            bg-white
            dark:bg-white/[0.03]
            border border-gray-200
            dark:border-white/10
          "
        >

          <h2
            className="
              text-xl
              font-semibold
              text-gray-900
              dark:text-white
            "
          >
            Sessions Analytics
          </h2>

          <p
            className="
              text-sm
              text-gray-500
              dark:text-gray-400
              mt-1
            "
          >
            User sessions overview
          </p>

          <div className="h-[320px] mt-6">

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
                  stroke="#1f2937"
                />

                <XAxis
                  dataKey="day"
                  tick={{
                    fill: "#94a3b8",
                  }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  tick={{
                    fill: "#94a3b8",
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

          </div>

        </div>

        {/* ================= */}
        {/* 4. PIE CHART */}
        {/* ================= */}

        <div
          className="
            rounded-3xl
            p-6
            bg-white
            dark:bg-white/[0.03]
            border border-gray-200
            dark:border-white/10
          "
        >

          <h2
            className="
              text-xl
              font-semibold
              text-gray-900
              dark:text-white
            "
          >
            Traffic Sources
          </h2>

          <p
            className="
              text-sm
              text-gray-500
              dark:text-gray-400
              mt-1
            "
          >
            Device usage statistics
          </p>

          <div className="h-[320px] mt-6">

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
                  innerRadius={70}
                  outerRadius={100}
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
                          COLORS[
                            index
                          ]
                        }
                      />

                    )
                  )}

                </Pie>

                <Tooltip />

                <Legend />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Analytics;