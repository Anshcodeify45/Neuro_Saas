import React from "react";

import {
  Sparkles,
  Clock3,
} from "lucide-react";

import { motion } from "framer-motion";

import Stats from "../components/dashboard/Stats";
import ChartBox from "../components/dashboard/ChartBox";
import Table from "../components/dashboard/Table";
import Activity from "../components/dashboard/Activity";

const Dashboard = () => {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden

        bg-[#f4f7fb]
        dark:bg-[#020817]

        transition-colors
        duration-300
      "
    >

      {/* BACKGROUND BLURS */}
      <div
        className="
          absolute
          top-[-150px]
          left-[-120px]

          w-[350px]
          sm:w-[500px]

          h-[350px]
          sm:h-[500px]

          bg-blue-500/10
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-[-120px]
          right-[-120px]

          w-[300px]
          sm:w-[450px]

          h-[300px]
          sm:h-[450px]

          bg-purple-500/10
          blur-[120px]
          rounded-full
          pointer-events-none
        "
      />

      {/* MAIN */}
      <div
        className="
          relative
          z-10

          w-full

          px-3
          sm:px-5
          lg:px-6

          py-4
          sm:py-6
        "
      >

        <div
          className="
            w-full
            max-w-[1600px]
            mx-auto

            space-y-5
            sm:space-y-6
          "
        >

          {/* HERO */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
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

              rounded-[28px]

              border
              border-gray-200
              dark:border-white/10

              bg-white/70
              dark:bg-white/[0.03]

              backdrop-blur-2xl

              shadow-[0_10px_40px_rgba(0,0,0,0.08)]
              dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]

              p-4
              sm:p-6
              lg:p-8
            "
          >

            {/* GLOW */}
            <div
              className="
                absolute
                top-0
                right-0

                w-72
                h-72

                bg-blue-500/10
                blur-[100px]
                rounded-full
              "
            />

            <div
              className="
                relative
                z-10

                flex
                flex-col
                xl:flex-row

                xl:items-center
                xl:justify-between

                gap-6
              "
            >

              {/* LEFT */}
              <div className="min-w-0">

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2

                    rounded-full

                    bg-blue-500/10

                    px-4
                    py-2

                    text-blue-600
                    dark:text-blue-400

                    text-xs
                    sm:text-sm
                    font-medium

                    mb-5
                  "
                >

                  <Sparkles size={15} />

                  AI Powered Dashboard

                </div>

                <h1
                  className="
                    text-2xl
                    sm:text-4xl
                    lg:text-5xl

                    font-bold

                    leading-tight

                    tracking-tight

                    text-gray-900
                    dark:text-white
                  "
                >
                  Dashboard Overview
                </h1>

                <p
                  className="
                    mt-4

                    max-w-2xl

                    text-sm
                    sm:text-base

                    leading-relaxed

                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  Monitor your users,
                  revenue,
                  realtime activity,
                  analytics and
                  system performance
                  through a clean
                  responsive admin dashboard.
                </p>

              </div>

              {/* RIGHT */}
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

                {/* STATUS */}
                <div
                  className="
                    flex
                    items-center
                    gap-3

                    rounded-2xl

                    border
                    border-gray-200
                    dark:border-white/10

                    bg-gray-50
                    dark:bg-white/[0.04]

                    px-4
                    py-4

                    min-w-0
                  "
                >

                  <div
                    className="
                      relative

                      flex
                      items-center
                      justify-center

                      w-11
                      h-11

                      rounded-2xl

                      bg-green-500/10
                      shrink-0
                    "
                  >

                    <div
                      className="
                        absolute
                        w-3
                        h-3
                        rounded-full
                        bg-green-500
                        animate-ping
                      "
                    />

                    <div
                      className="
                        relative
                        w-3
                        h-3
                        rounded-full
                        bg-green-500
                      "
                    />

                  </div>

                  <div className="min-w-0">

                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-wider

                        text-gray-500
                        dark:text-gray-400
                      "
                    >
                      System Status
                    </p>

                    <h3
                      className="
                        mt-1

                        text-sm
                        sm:text-base

                        font-semibold

                        text-gray-900
                        dark:text-white
                      "
                    >
                      All Systems Active
                    </h3>

                  </div>

                </div>

                {/* UPDATED */}
                <div
                  className="
                    flex
                    items-center
                    gap-3

                    rounded-2xl

                    border
                    border-gray-200
                    dark:border-white/10

                    bg-gray-50
                    dark:bg-white/[0.04]

                    px-4
                    py-4

                    min-w-0
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      justify-center

                      w-11
                      h-11

                      rounded-2xl

                      bg-blue-500/10

                      text-blue-500
                      shrink-0
                    "
                  >
                    <Clock3 size={18} />
                  </div>

                  <div className="min-w-0">

                    <p
                      className="
                        text-[10px]
                        uppercase
                        tracking-wider

                        text-gray-500
                        dark:text-gray-400
                      "
                    >
                      Last Updated
                    </p>

                    <h3
                      className="
                        mt-1

                        text-sm
                        sm:text-base

                        font-semibold

                        text-gray-900
                        dark:text-white
                      "
                    >
                      Just Now
                    </h3>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

          {/* STATS */}
          <Stats />

          {/* CHART + ACTIVITY */}
          <div
            className="
              grid
              grid-cols-1
              2xl:grid-cols-12

              gap-6

              items-start
            "
          >

            <div
              className="
                2xl:col-span-8
                min-w-0
              "
            >
              <ChartBox />
            </div>

            <div
              className="
                2xl:col-span-4
                min-w-0
              "
            >
              <Activity />
            </div>

          </div>

          {/* TABLE */}
          <div
            className="
              min-w-0
              overflow-hidden
            "
          >

            <div
              className="
                rounded-[30px]
                border
                border-gray-200/60
                dark:border-white/10

                bg-white/70
                dark:bg-white/[0.03]

                backdrop-blur-2xl

                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                dark:shadow-[0_10px_40px_rgba(0,0,0,0.30)]

                overflow-hidden
              "
            >
              <Table />
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;