import React, {
  useEffect,
  useState,
} from "react";

import {
  Users,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

import { getStats } from "../../api/analyticsApi";

const Stats = () => {
  const [stats, setStats] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res =
          await getStats();

        setStats(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  // =========================
  // STATS DATA
  // =========================

  const data = [
    {
      title: "Total Users",
      value:
        stats?.totalUsers || 0,
      icon: (
        <Users size={22} />
      ),
      iconColor:
        "text-blue-500",
      iconBg:
        "bg-blue-500/10",
      growth: "+12.5%",
      chartColor:
        "from-blue-500/20",
    },
    {
      title: "Revenue",
      value: `$${
        stats?.revenue || 0
      }`,
      icon: (
        <DollarSign size={22} />
      ),
      iconColor:
        "text-green-500",
      iconBg:
        "bg-green-500/10",
      growth: "+8.2%",
      chartColor:
        "from-green-500/20",
    },
    {
      title: "Growth",
      value: `${
        stats?.growth || 0
      }%`,
      icon: (
        <TrendingUp size={22} />
      ),
      iconColor:
        "text-purple-500",
      iconBg:
        "bg-purple-500/10",
      growth: "+4.8%",
      chartColor:
        "from-purple-500/20",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3
        gap-5
      "
    >

      {data.map((item, i) => (
        <motion.div
          key={i}
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
            delay: i * 0.08,
          }}
          whileHover={{
            y: -5,
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

            backdrop-blur-xl

            shadow-[0_10px_40px_rgba(0,0,0,0.08)]
            dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]

            p-5
            sm:p-6

            min-h-[190px]
          "
        >

          {/* ========================= */}
          {/* BACKGROUND GLOW */}
          {/* ========================= */}

          <div
            className={`
              absolute
              -top-10
              -right-10

              w-40
              h-40

              rounded-full

              blur-3xl

              bg-gradient-to-br
              ${item.chartColor}
              to-transparent

              opacity-70
            `}
          />

          {/* ========================= */}
          {/* TOP */}
          {/* ========================= */}

          <div
            className="
              relative
              z-10

              flex
              items-start
              justify-between
            "
          >

            {/* LEFT */}

            <div>

              <p
                className="
                  text-sm
                  font-medium
                  text-gray-500
                  dark:text-gray-400
                "
              >
                {item.title}
              </p>

              {loading ? (
                <div
                  className="
                    mt-5
                    h-10
                    w-28

                    rounded-xl

                    bg-gray-200
                    dark:bg-white/10

                    animate-pulse
                  "
                />
              ) : (
                <h2
                  className="
                    mt-4

                    text-3xl
                    sm:text-4xl

                    font-bold

                    tracking-tight

                    text-gray-900
                    dark:text-white
                  "
                >
                  {item.value}
                </h2>
              )}

            </div>

            {/* ICON */}

            <div
              className={`
                ${item.iconBg}
                ${item.iconColor}

                w-14
                h-14

                rounded-2xl

                flex
                items-center
                justify-center

                shadow-lg
              `}
            >
              {item.icon}
            </div>

          </div>

          {/* ========================= */}
          {/* BOTTOM */}
          {/* ========================= */}

          <div
            className="
              relative
              z-10

              mt-8

              flex
              items-center
              justify-between
              gap-3
            "
          >

            {/* GROWTH */}

            <div
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                bg-green-500/10

                px-3
                py-1.5
              "
            >

              <ArrowUpRight
                size={14}
                className="
                  text-green-500
                "
              />

              <span
                className="
                  text-xs
                  sm:text-sm

                  font-semibold

                  text-green-500
                "
              >
                {item.growth}
              </span>

            </div>

            {/* MINI GRAPH */}

            <div
              className="
                flex
                items-end
                gap-1.5

                h-10
              "
            >

              {[35, 55, 40, 70, 60].map(
                (bar, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      height: 0,
                    }}
                    animate={{
                      height: `${bar}%`,
                    }}
                    transition={{
                      delay:
                        index * 0.08,
                    }}
                    className="
                      w-2

                      rounded-full

                      bg-gradient-to-t
                      from-blue-500
                      to-blue-300
                    "
                  />
                )
              )}

            </div>

          </div>

          {/* ========================= */}
          {/* HOVER BORDER */}
          {/* ========================= */}

          <div
            className="
              absolute
              inset-0

              rounded-3xl

              border
              border-transparent

              hover:border-blue-500/20

              transition-all
              duration-300

              pointer-events-none
            "
          />

        </motion.div>
      ))}

    </div>
  );
};

export default Stats;