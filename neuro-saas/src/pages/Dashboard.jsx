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

      {/* ========================= */}
      {/* BACKGROUND GLOW */}
      {/* ========================= */}

      <div
        className="
          absolute
          top-0
          left-0

          w-[500px]
          h-[500px]

          bg-blue-500/10

          blur-[120px]

          rounded-full
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0

          w-[400px]
          h-[400px]

          bg-purple-500/10

          blur-[120px]

          rounded-full
        "
      />

      {/* ========================= */}
      {/* CONTENT */}
      {/* ========================= */}

      <div
        className="
          relative
          z-10

          px-4
          sm:px-6
          lg:px-8

          py-6
          sm:py-8
        "
      >

        {/* ========================= */}
        {/* CONTAINER */}
        {/* ========================= */}

        <div
          className="
            max-w-[1600px]
            mx-auto

            space-y-6
            sm:space-y-7
          "
        >

          {/* ========================= */}
          {/* HERO HEADER */}
          {/* ========================= */}

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

              rounded-[32px]

              border
              border-gray-200
              dark:border-white/10

              bg-white/80
              dark:bg-white/[0.03]

              backdrop-blur-2xl

              shadow-[0_10px_50px_rgba(0,0,0,0.08)]
              dark:shadow-[0_10px_50px_rgba(0,0,0,0.35)]

              p-5
              sm:p-6
              lg:p-8
            "
          >

            {/* HEADER GLOW */}

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

              <div>

                {/* BADGE */}

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

                    text-sm
                    font-medium

                    mb-5
                  "
                >

                  <Sparkles size={16} />

                  AI Powered Dashboard

                </div>

                {/* TITLE */}

                <h1
                  className="
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl

                    font-bold

                    tracking-tight

                    text-gray-900
                    dark:text-white

                    leading-tight
                  "
                >
                  Dashboard Overview
                </h1>

                {/* DESC */}

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
                  performance,
                  analytics,
                  revenue and
                  realtime activity
                  through a clean,
                  modern and
                  responsive admin
                  dashboard.
                </p>

              </div>

              {/* RIGHT */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row

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

                    px-5
                    py-4

                    min-w-[220px]
                  "
                >

                  <div
                    className="
                      relative

                      flex
                      items-center
                      justify-center

                      w-12
                      h-12

                      rounded-2xl

                      bg-green-500/10
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

                  <div>

                    <p
                      className="
                        text-xs
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

                        text-lg
                        font-semibold

                        text-gray-900
                        dark:text-white
                      "
                    >
                      All Systems Active
                    </h3>

                  </div>

                </div>

                {/* UPDATE */}

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

                    px-5
                    py-4

                    min-w-[220px]
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      justify-center

                      w-12
                      h-12

                      rounded-2xl

                      bg-blue-500/10

                      text-blue-500
                    "
                  >

                    <Clock3 size={20} />

                  </div>

                  <div>

                    <p
                      className="
                        text-xs
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

                        text-lg
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

          {/* ========================= */}
          {/* STATS */}
          {/* ========================= */}

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
              delay: 0.1,
            }}
          >
            <Stats />
          </motion.div>

          {/* ========================= */}
          {/* CHART + ACTIVITY */}
          {/* ========================= */}

          <div
            className="
              grid
              grid-cols-1
              2xl:grid-cols-12

              gap-6

              items-start
            "
          >

            {/* CHART */}

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
                delay: 0.2,
              }}
              className="
                2xl:col-span-8

                min-w-0
              "
            >
              <ChartBox />
            </motion.div>

            {/* ACTIVITY */}

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
                delay: 0.3,
              }}
              className="
                2xl:col-span-4

                min-w-0
              "
            >
              <Activity />
            </motion.div>

          </div>

          {/* ========================= */}
          {/* TABLE */}
          {/* ========================= */}

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
              delay: 0.4,
            }}
            className="
              min-w-0

              overflow-hidden
            "
          >

            <div
              className="
                rounded-[32px]
                dark:bg-white/[0.03]
                backdrop-blur-2xl
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                p-2
                sm:p-3
              "
            >
              <Table />
            </div>

          </motion.div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;