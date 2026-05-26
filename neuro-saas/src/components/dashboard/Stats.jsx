import React, { useEffect, useState } from "react";

import {
  Users,
  DollarSign,
  TrendingUp,
} from "lucide-react";

import { motion } from "framer-motion";

import { getStats } from "../../api/analyticsApi";

import GlassCard from "./GlassCard";

const Stats = () => {
  const [stats, setStats] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getStats();

        setStats(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const data = [
    {
      title: "Total Users",
      value:
        stats?.totalUsers || 0,
      icon: <Users size={20} />,
      color: "text-blue-600",
      bg: "bg-blue-50 dark:bg-blue-500/10",
      growth: "+12.5%",
    },
    {
      title: "Revenue",
      value: `$${
        stats?.revenue || 0
      }`,
      icon: (
        <DollarSign size={20} />
      ),
      color: "text-green-600",
      bg: "bg-green-50 dark:bg-green-500/10",
      growth: "+8.2%",
    },
    {
      title: "Growth",
      value: `${
        stats?.growth || 0
      }%`,
      icon: (
        <TrendingUp size={20} />
      ),
      color:
        "text-purple-600",
      bg: "bg-purple-50 dark:bg-purple-500/10",
      growth: "+4.8%",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3
        gap-4
        sm:gap-5
      "
    >

      {data.map((item, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: i * 0.1,
          }}
        >

          <GlassCard
            className="
              relative
              overflow-hidden
              p-4
              sm:p-5
              lg:p-6
              min-h-[170px]
            "
          >

            {/* GLOW */}
            <div
              className="
                absolute
                top-0
                right-0
                w-24
                sm:w-32
                h-24
                sm:h-32
                bg-blue-500/10
                blur-3xl
                rounded-full
              "
            />

            {/* CONTENT */}
            <div
              className="
                relative
                z-10
                flex
                items-start
                justify-between
                gap-4
              "
            >

              {/* LEFT */}
              <div className="flex-1 min-w-0">

                <p
                  className="
                    text-xs
                    sm:text-sm
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
                      mt-4
                      h-8
                      w-24
                      rounded-lg
                      bg-gray-200
                      dark:bg-white/10
                      animate-pulse
                    "
                  />
                ) : (
                  <h2
                    className="
                      mt-3
                      text-2xl
                      sm:text-3xl
                      font-bold
                      text-gray-900
                      dark:text-white
                      break-words
                    "
                  >
                    {item.value}
                  </h2>
                )}

                <div
                  className="
                    mt-4
                    inline-flex
                    items-center
                    gap-1
                    rounded-full
                    bg-green-500/10
                    px-3
                    py-1
                  "
                >

                  <TrendingUp
                    size={12}
                    className="
                      text-green-500
                    "
                  />

                  <p
                    className="
                      text-[11px]
                      sm:text-xs
                      font-medium
                      text-green-500
                    "
                  >
                    {item.growth} growth
                  </p>

                </div>

              </div>

              {/* ICON */}
              <div
                className={`
                  ${item.bg}
                  ${item.color}

                  w-12
                  h-12
                  sm:w-14
                  sm:h-14

                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  shrink-0
                `}
              >
                {item.icon}
              </div>

            </div>

          </GlassCard>

        </motion.div>
      ))}

    </div>
  );
};

export default Stats;