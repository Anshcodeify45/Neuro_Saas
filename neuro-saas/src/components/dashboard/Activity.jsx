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
  Clock3,
  ArrowUpRight,
} from "lucide-react";

const Activity = () => {
  const [activity, setActivity] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // ===================================
  // FETCH ACTIVITY
  // ===================================

  useEffect(() => {
    const fetchActivity =
      async () => {
        try {
          const res = await axios.get(
            "https://neuro-saas.onrender.com/api/activity"
          );

          let finalData = [];

          // SUPPORT MULTIPLE RESPONSE STRUCTURES
          if (
            Array.isArray(res.data)
          ) {
            finalData = res.data;
          } else if (
            Array.isArray(
              res.data.activities
            )
          ) {
            finalData =
              res.data.activities;
          } else if (
            Array.isArray(
              res.data.data
            )
          ) {
            finalData =
              res.data.data;
          }

          // FALLBACK FORMAT FIX
          finalData = finalData.map(
            (item, i) => ({
              _id:
                item._id || i,

              action:
                item.action ||
                item.title ||
                "New Activity",

              details:
                item.details ||
                item.description ||
                "System update detected",

              type:
                item.type ||
                "activity",

              createdAt:
                item.createdAt ||
                item.date ||
                new Date(),
            })
          );

          // SORT LATEST FIRST
          finalData.sort(
            (a, b) =>
              new Date(
                b.createdAt
              ) -
              new Date(
                a.createdAt
              )
          );

          setActivity(finalData);
        } catch (err) {
          console.log(err);

          // DEMO DATA IF API FAILS
          setActivity([
            {
              _id: 1,
              action:
                "Admin Login",
              details:
                "Dashboard accessed from Chrome browser",
              type: "auth",
              createdAt:
                new Date(),
            },

            {
              _id: 2,
              action:
                "Analytics Updated",
              details:
                "Revenue metrics refreshed successfully",
              type: "update",
              createdAt:
                new Date(),
            },

            {
              _id: 3,
              action:
                "User Removed",
              details:
                "Test account deleted from database",
              type: "delete",
              createdAt:
                new Date(),
            },
          ]);
        } finally {
          setLoading(false);
        }
      };

    fetchActivity();
  }, []);

  // ===================================
  // GROUP BY DATE
  // ===================================

  const grouped =
    useMemo(() => {
      return activity.reduce(
        (acc, item) => {
          const date =
            new Date(
              item.createdAt
            ).toDateString();

          if (!acc[date]) {
            acc[date] = [];
          }

          acc[date].push(item);

          return acc;
        },
        {}
      );
    }, [activity]);

  // ===================================
  // ICONS
  // ===================================

  const getIcon = (type) => {
    switch (type) {
      case "auth":
        return (
          <ShieldCheck
            size={15}
          />
        );

      case "update":
        return (
          <Pencil size={15} />
        );

      case "delete":
        return (
          <Trash2 size={15} />
        );

      default:
        return <Zap size={15} />;
    }
  };

  // ===================================
  // ICON COLORS
  // ===================================

  const getIconStyle = (type) => {
    switch (type) {
      case "auth":
        return `
          bg-emerald-500/15
          text-emerald-500
          border-emerald-500/20
        `;

      case "update":
        return `
          bg-blue-500/15
          text-blue-500
          border-blue-500/20
        `;

      case "delete":
        return `
          bg-red-500/15
          text-red-500
          border-red-500/20
        `;

      default:
        return `
          bg-purple-500/15
          text-purple-500
          border-purple-500/20
        `;
    }
  };

  // ===================================
  // DATE LABEL
  // ===================================

  const formatDateLabel = (
    dateStr
  ) => {
    const date = new Date(
      dateStr
    );

    const today = new Date();

    if (
      date.toDateString() ===
      today.toDateString()
    ) {
      return "Today";
    }

    const yesterday =
      new Date();

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
        overflow-hidden

        h-full
        min-h-[600px]

        rounded-[28px]

        border
        border-gray-200/70
        dark:border-white/10

        bg-white/80
        dark:bg-[#081120]/80

        backdrop-blur-2xl

        flex
        flex-col
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          -top-20
          -right-20

          w-72
          h-72

          rounded-full

          bg-blue-500/10

          blur-[120px]
        "
      />

      {/* HEADER */}
      <div
        className="
          relative
          z-10

          flex
          items-start
          justify-between

          gap-4

          p-6

          border-b
          border-gray-200/60
          dark:border-white/5
        "
      >
        {/* LEFT */}
        <div
          className="
            flex
            items-center
            gap-4
          "
        >
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

              shadow-lg
              shadow-blue-500/10
            "
          >
            <ActivityIcon
              size={24}
            />
          </div>

          <div>
            <h2
              className="
                text-2xl
                font-bold

                text-gray-900
                dark:text-white
              "
            >
              Recent Activity
            </h2>

            <p
              className="
                mt-1

                text-sm

                text-gray-500
                dark:text-gray-400
              "
            >
              Live user actions &
              realtime updates
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="
            hidden
            sm:flex

            items-center
            gap-2

            px-4
            py-2.5

            rounded-2xl

            bg-blue-500/10

            border
            border-blue-500/10

            text-blue-500

            text-sm
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
          p-6
          space-y-8
          custom-scrollbar
          max-h-[600px]
        "
      >
        {/* LOADING */}
        {loading ? (
          <div
            className="
              flex
              items-center
              justify-center

              h-[400px]
            "
          >
            <div
              className="
                w-10
                h-10

                rounded-full

                border-4
                border-blue-500/20
                border-t-blue-500

                animate-spin
              "
            />
          </div>
        ) : Object.keys(grouped)
            .length === 0 ? (
          <div
            className="
              flex
              flex-col
              items-center
              justify-center

              h-[400px]

              text-center
            "
          >
            <div
              className="
                w-16
                h-16

                rounded-3xl

                bg-gray-100
                dark:bg-white/[0.04]

                flex
                items-center
                justify-center

                mb-4
              "
            >
              <ActivityIcon
                size={28}
                className="
                  text-gray-400
                "
              />
            </div>

            <h3
              className="
                text-lg
                font-semibold

                text-gray-700
                dark:text-gray-300
              "
            >
              No Activity Found
            </h3>

            <p
              className="
                mt-2

                text-sm

                text-gray-500
                dark:text-gray-400
              "
            >
              Recent actions will
              appear here
            </p>
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
                      tracking-[0.18em]
                      uppercase

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
                      flex-1
                      h-px

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

                    ml-4

                    border-l
                    border-blue-500/15

                    pl-8

                    space-y-5
                  "
                >
                  {items.map(
                    (a, index) => (
                      <motion.div
                        key={a._id}
                        initial={{
                          opacity: 0,
                          x: -15,
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
                          className={`
                            absolute

                            -left-[47px]
                            top-5

                            w-9
                            h-9

                            rounded-full

                            border

                            flex
                            items-center
                            justify-center

                            backdrop-blur-xl

                            shadow-lg

                            ${getIconStyle(
                              a.type
                            )}
                          `}
                        >
                          {getIcon(
                            a.type
                          )}
                        </div>

                        {/* CARD */}
                        <div
                          className="
                            relative
                            overflow-hidden

                            rounded-[24px]

                            border
                            border-gray-200/70
                            dark:border-white/10

                            bg-white/70
                            dark:bg-white/[0.03]

                            backdrop-blur-xl

                            p-5

                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:border-blue-500/20
                            hover:shadow-[0_10px_30px_rgba(59,130,246,0.08)]
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

                              bg-gradient-to-r
                              from-blue-500/[0.03]
                              to-indigo-500/[0.03]
                            "
                          />

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
                            <div className="flex-1">
                              <div
                                className="
                                  flex
                                  items-center
                                  gap-2
                                "
                              >
                                <h3
                                  className="
                                    text-base
                                    font-semibold

                                    text-gray-900
                                    dark:text-white
                                  "
                                >
                                  {a.action}
                                </h3>

                                <ArrowUpRight
                                  size={15}
                                  className="
                                    text-blue-500
                                    opacity-0
                                    group-hover:opacity-100

                                    transition-all
                                  "
                                />
                              </div>

                              <p
                                className="
                                  mt-2

                                  text-sm
                                  leading-7

                                  text-gray-500
                                  dark:text-gray-400
                                "
                              >
                                {a.details}
                              </p>
                            </div>

                            {/* TIME */}
                            <div
                              className="
                                shrink-0

                                flex
                                items-center
                                gap-2

                                px-3
                                py-2

                                rounded-xl

                                bg-gray-100/80
                                dark:bg-white/[0.04]

                                border
                                border-gray-200/60
                                dark:border-white/5

                                text-xs
                                font-medium

                                text-gray-500
                                dark:text-gray-400
                              "
                            >
                              <Clock3
                                size={13}
                              />

                              {new Date(
                                a.createdAt
                              ).toLocaleTimeString(
                                "en-IN",
                                {
                                  hour:
                                    "2-digit",
                                  minute:
                                    "2-digit",
                                }
                              )}
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