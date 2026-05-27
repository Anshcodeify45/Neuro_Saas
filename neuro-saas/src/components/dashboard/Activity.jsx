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

  // ===================================
  // FETCH ACTIVITY
  // ===================================

  useEffect(() => {
    const fetchActivity =
      async () => {
        try {
          const res = await axios.get(
            "http://localhost:5000/api/activity"
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
                "User Login",
              details:
                "Admin logged into dashboard",
              type: "auth",
              createdAt:
                new Date(),
            },
            {
              _id: 2,
              action:
                "Analytics Updated",
              details:
                "Revenue statistics refreshed",
              type: "update",
              createdAt:
                new Date(),
            },
            {
              _id: 3,
              action:
                "User Deleted",
              details:
                "A test account was removed",
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
        duration: 0.3,
      }}
      className="
        relative
        overflow-hidden
        bg-white/70
        backdrop-blur-2xl
        min-h-[630px]
        flex
        flex-col
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

          blur-[120px]

          rounded-full
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
          border-gray-200/70
          dark:border-white/5
        "
      >
        <div>
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                w-12
                h-12

                rounded-2xl

                bg-blue-500/10

                flex
                items-center
                justify-center

                text-blue-500
              "
            >
              <ActivityIcon
                size={20}
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
                Live user actions and
                system updates
              </p>
            </div>
          </div>
        </div>

        <div
          className="
            hidden
            sm:flex

            items-center
            gap-2

            px-4
            py-2

            rounded-2xl

            bg-blue-500/10

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
        "
      >
        {loading ? (
          <div
            className="
              flex
              items-center
              justify-center

              h-[400px]

              text-gray-400
            "
          >
            Loading activity...
          </div>
        ) : Object.keys(grouped)
            .length === 0 ? (
          <div
            className="
              flex
              items-center
              justify-center

              h-[400px]

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
                      tracking-[0.2em]
                      uppercase

                      text-blue-500
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

                {/* ITEMS */}
                <div
                  className="
                    relative

                    border-l
                    border-blue-500/20

                    ml-4
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
                          x: -10,
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
                        "
                      >
                        {/* ICON */}
                        <div
                          className="
                            absolute

                            -left-[47px]
                            top-5

                            w-9
                            h-9

                            rounded-full

                            bg-[#0f172a]

                            border
                            border-white/10

                            flex
                            items-center
                            justify-center

                            text-white
                          "
                        >
                          {getIcon(
                            a.type
                          )}
                        </div>

                        {/* CARD */}
                        <div
                          className="
                            rounded-3xl

                            border
                            border-gray-200/70
                            dark:border-white/10

                            bg-white/80
                            dark:bg-white/[0.03]

                            backdrop-blur-xl

                            p-5

                            hover:border-blue-500/20
                            hover:shadow-xl

                            transition-all
                            duration-300
                          "
                        >
                          <div
                            className="
                              flex
                              items-start
                              justify-between

                              gap-4
                            "
                          >
                            <div>
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