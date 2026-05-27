import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import axios from "axios";

import { motion } from "framer-motion";

import {
  Activity as ActivityIcon,
  ShieldCheck,
  Pencil,
  Trash2,
  Zap,
} from "lucide-react";

const Activity = () => {
  const [activity, setActivity] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // =========================
  // FETCH DATA
  // =========================

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/activity"
        );

        console.log(
          "ACTIVITY API =>",
          res.data
        );

        // SUPPORT MULTIPLE API STRUCTURES
        let finalData = [];

        if (Array.isArray(res.data)) {
          finalData = res.data;
        } else if (
          Array.isArray(
            res.data.activities
          )
        ) {
          finalData =
            res.data.activities;
        } else if (
          Array.isArray(res.data.data)
        ) {
          finalData = res.data.data;
        }

        // SORT LATEST FIRST
        finalData.sort(
          (a, b) =>
            new Date(b.createdAt) -
            new Date(a.createdAt)
        );

        setActivity(finalData);
      } catch (err) {
        console.log(
          "ACTIVITY ERROR =>",
          err.response ||
            err.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // =========================
  // GROUP BY DATE
  // =========================

  const grouped = useMemo(() => {
    return activity.reduce(
      (acc, item) => {
        const date = item.createdAt
          ? new Date(
              item.createdAt
            ).toDateString()
          : "Unknown";

        if (!acc[date]) {
          acc[date] = [];
        }

        acc[date].push(item);

        return acc;
      },
      {}
    );
  }, [activity]);

  // =========================
  // ICONS
  // =========================

  const getIcon = (type) => {
    switch (type) {
      case "auth":
        return (
          <ShieldCheck size={15} />
        );

      case "update":
        return <Pencil size={15} />;

      case "delete":
        return <Trash2 size={15} />;

      default:
        return <Zap size={15} />;
    }
  };

  // =========================
  // DATE LABEL
  // =========================

  const formatDateLabel = (
    dateStr
  ) => {
    const date = new Date(dateStr);

    const today = new Date();

    if (
      date.toDateString() ===
      today.toDateString()
    ) {
      return "Today";
    }

    const yesterday = new Date();

    yesterday.setDate(
      today.getDate() - 1
    );

    if (
      date.toDateString() ===
      yesterday.toDateString()
    ) {
      return "Yesterday";
    }

    return date.toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

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
        rounded-[28px]
        border
        border-gray-200/80
        dark:border-white/10

        bg-white/90
        dark:bg-[#0B1120]/90

        backdrop-blur-xl

        shadow-xl
        shadow-black/[0.04]

        overflow-hidden

        h-auto
        xl:h-[720px]

        flex
        flex-col
      "
    >

      {/* TOP GLOW */}
      <div
        className="
          absolute
          -top-20
          -right-20

          w-72
          h-72

          rounded-full

          bg-blue-500/10
          blur-3xl
        "
      />

      {/* HEADER */}
      <div
        className="
          relative
          z-10

          flex
          items-start
          sm:items-center
          justify-between

          gap-4

          px-5
          sm:px-6

          pt-5
          sm:pt-6

          pb-5

          border-b
          border-gray-100
          dark:border-white/5
        "
      >

        {/* LEFT */}
        <div>

          <div className="flex items-center gap-3">

            <div
              className="
                w-11
                h-11

                rounded-2xl

                flex
                items-center
                justify-center

                bg-blue-100
                dark:bg-blue-500/10

                text-blue-600
                dark:text-blue-400
              "
            >
              <ActivityIcon
                size={20}
              />
            </div>

            <div>

              <h2
                className="
                  text-xl
                  font-semibold
                  tracking-tight

                  text-gray-900
                  dark:text-white
                "
              >
                Recent Activity
              </h2>

              <p
                className="
                  text-sm
                  text-gray-500
                  dark:text-gray-400

                  mt-1
                "
              >
                Live user actions and
                realtime updates
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div
          className="
            shrink-0

            flex
            items-center
            gap-2

            px-3
            py-2

            rounded-2xl

            border
            border-blue-200
            dark:border-blue-500/10

            bg-blue-50
            dark:bg-blue-500/10

            text-blue-600
            dark:text-blue-400

            text-xs
            font-semibold
          "
        >

          <span
            className="
              w-2
              h-2
              rounded-full
              bg-blue-500
              animate-pulse
            "
          />

          Live Feed

        </div>

      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          flex-1

          overflow-y-auto

          px-5
          sm:px-6

          py-5

          space-y-8

          custom-scrollbar
        "
      >

        {/* LOADING */}
        {loading ? (

          <div
            className="
              h-[350px]

              flex
              items-center
              justify-center

              text-sm
              text-gray-400
            "
          >
            Loading activity...
          </div>

        ) : Object.keys(grouped)
            .length === 0 ? (

          <div
            className="
              h-[350px]

              flex
              items-center
              justify-center

              text-sm
              text-gray-400
            "
          >
            No recent activity
          </div>

        ) : (

          Object.entries(grouped).map(
            ([date, items]) => (

              <div key={date}>

                {/* DATE */}
                <div
                  className="
                    flex
                    items-center
                    gap-3

                    mb-6
                  "
                >

                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.2em]

                      text-blue-500

                      whitespace-nowrap
                    "
                  >
                    {formatDateLabel(
                      date
                    )}
                  </span>

                  <div
                    className="
                      h-px
                      flex-1

                      bg-gradient-to-r
                      from-blue-500/30
                      to-transparent
                    "
                  />

                </div>

                {/* TIMELINE */}
                <div
                  className="
                    relative

                    ml-3

                    border-l
                    border-blue-500/20

                    pl-6

                    space-y-5
                  "
                >

                  {items.map(
                    (a, index) => (

                      <motion.div
                        key={
                          a._id || index
                        }
                        initial={{
                          opacity: 0,
                          x: -20,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay:
                            index * 0.05,
                        }}
                        className="
                          relative
                          group
                        "
                      >

                        {/* ICON */}
                        <div
                          className="
                            absolute

                            -left-[39px]
                            top-5

                            w-8
                            h-8

                            rounded-full

                            flex
                            items-center
                            justify-center

                            bg-[#0f172a]

                            border
                            border-white/10

                            text-white

                            shadow-lg
                          "
                        >

                          {getIcon(
                            a.type
                          )}

                        </div>

                        {/* CARD */}
                        <div
                          className="
                            relative

                            rounded-3xl

                            border
                            border-gray-200/80
                            dark:border-white/10

                            bg-white
                            dark:bg-white/[0.04]

                            backdrop-blur-xl

                            p-5

                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:shadow-xl
                            hover:border-blue-500/20
                          "
                        >

                          {/* HOVER GLOW */}
                          <div
                            className="
                              absolute
                              inset-0

                              opacity-0
                              group-hover:opacity-100

                              transition-opacity
                              duration-500

                              rounded-3xl

                              bg-gradient-to-r
                              from-blue-500/[0.03]
                              to-indigo-500/[0.03]
                            "
                          />

                          <div
                            className="
                              relative
                              z-10
                            "
                          >

                            <div
                              className="
                                flex
                                flex-col
                                sm:flex-row

                                sm:items-start
                                sm:justify-between

                                gap-4
                              "
                            >

                              {/* TEXT */}
                              <div className="flex-1">

                                <h3
                                  className="
                                    text-base
                                    sm:text-lg

                                    font-semibold

                                    text-gray-900
                                    dark:text-white
                                  "
                                >
                                  {a.action ||
                                    "New Activity"}
                                </h3>

                                <p
                                  className="
                                    mt-2

                                    text-sm

                                    leading-7

                                    text-gray-500
                                    dark:text-gray-400
                                  "
                                >
                                  {a.details ||
                                    "No details available"}
                                </p>

                              </div>

                              {/* TIME */}
                              <div
                                className="
                                  shrink-0

                                  px-3
                                  py-1.5

                                  rounded-xl

                                  bg-gray-100
                                  dark:bg-white/5

                                  text-xs
                                  font-medium

                                  text-gray-500
                                  dark:text-gray-400
                                "
                              >

                                {a.createdAt
                                  ? new Date(
                                      a.createdAt
                                    ).toLocaleTimeString(
                                      "en-IN",
                                      {
                                        hour:
                                          "2-digit",
                                        minute:
                                          "2-digit",
                                      }
                                    )
                                  : "--:--"}

                              </div>

                            </div>

                          </div>

                        </div>

                      </motion.div>

                    )
                  )}

                </div>

              </div>

            )
          )

        )}

      </div>

    </motion.div>
  );
};

export default Activity;