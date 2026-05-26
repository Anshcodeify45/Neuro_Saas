import React, {
  useEffect,
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/activity"
        );

        setActivity(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  // =========================
  // GROUP BY DATE
  // =========================

  const groupByDate = (data) => {
    return data.reduce((acc, item) => {
      const date = new Date(
        item.createdAt
      ).toDateString();

      if (!acc[date]) {
        acc[date] = [];
      }

      acc[date].push(item);

      return acc;
    }, {});
  };

  const grouped =
    groupByDate(activity);

  // =========================
  // ICONS
  // =========================

  const getIcon = (type) => {
    switch (type) {
      case "auth":
        return (
          <ShieldCheck size={16} />
        );

      case "update":
        return <Pencil size={16} />;

      case "delete":
        return <Trash2 size={16} />;

      default:
        return <Zap size={16} />;
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
        y: 10,
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
        rounded-3xl
        border
        border-gray-200
        dark:border-white/10
        bg-white
        dark:bg-white/[0.03]
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,0.12)]

        p-4
        sm:p-5
        lg:p-6

        h-auto
        lg:h-[570px]
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute
          top-0
          right-0
          w-64
          h-64
          bg-blue-500/10
          blur-[100px]
          rounded-full
        "
      />

      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}

      <div
        className="
          relative
          z-10

          flex
          flex-col
          sm:flex-row

          sm:items-center
          sm:justify-between

          gap-4
          mb-6
        "
      >

        <div>

          <div className="flex items-center gap-2">

            <ActivityIcon
              size={20}
              className="
                text-blue-500
              "
            />

            <h2
              className="
                text-lg
                sm:text-xl
                font-semibold
                text-gray-900
                dark:text-white
              "
            >
              Recent Activity
            </h2>

          </div>

          <p
            className="
              text-sm
              text-gray-500
              dark:text-gray-400
              mt-1
            "
          >
            Live user actions and
            realtime system updates
          </p>

        </div>

        {/* LIVE FEED */}
        <div
          className="
            self-start
            sm:self-auto

            px-3
            py-1.5

            rounded-xl

            bg-blue-500/10
            text-blue-500

            text-xs
            font-medium

            border
            border-blue-500/10
          "
        >

          ● Live Feed

        </div>

      </div>

      {/* ========================= */}
      {/* CONTENT */}
      {/* ========================= */}

      <div
        className="
          relative
          z-10

          space-y-8

          overflow-y-auto

          lg:h-[470px]

          pr-1
          sm:pr-2

          custom-scrollbar
        "
      >

        {Object.keys(grouped)
          .length === 0 ? (

          <div
            className="
              h-[300px]
              flex
              items-center
              justify-center
              text-gray-400
              text-sm
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
                    mb-5
                  "
                >

                  <div
                    className="
                      text-[11px]
                      sm:text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-blue-500
                      whitespace-nowrap
                    "
                  >
                    {formatDateLabel(
                      date
                    )}
                  </div>

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

                    ml-2
                    sm:ml-3

                    border-l
                    border-blue-500/20

                    pl-5
                    sm:pl-8

                    space-y-4
                    sm:space-y-5
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
                          group
                        "
                      >

                        {/* ICON */}
                        <div
                          className="
                            absolute

                            -left-[35px]
                            sm:-left-[45px]

                            top-2

                            w-7
                            h-7
                            sm:w-8
                            sm:h-8

                            rounded-full

                            border
                            border-white/10

                            bg-[#0f172a]

                            flex
                            items-center
                            justify-center

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
                            overflow-hidden

                            rounded-2xl

                            border
                            border-gray-200
                            dark:border-white/10

                            bg-gray-50
                            dark:bg-white/[0.03]

                            backdrop-blur-xl

                            p-4

                            transition-all
                            duration-300

                            hover:border-blue-500/30
                            hover:bg-blue-500/[0.03]
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
                              duration-300

                              bg-gradient-to-r
                              from-blue-500/5
                              to-purple-500/5
                            "
                          />

                          <div className="relative z-10">

                            <div
                              className="
                                flex
                                flex-col
                                sm:flex-row

                                sm:items-start
                                sm:justify-between

                                gap-3
                              "
                            >

                              {/* TEXT */}
                              <div className="flex-1">

                                <h3
                                  className="
                                    font-semibold
                                    text-sm
                                    sm:text-base
                                    text-gray-900
                                    dark:text-white
                                  "
                                >
                                  {a.action}
                                </h3>

                                <p
                                  className="
                                    text-xs
                                    sm:text-sm

                                    text-gray-500
                                    dark:text-gray-400

                                    mt-1

                                    leading-relaxed
                                  "
                                >
                                  {a.details}
                                </p>

                              </div>

                              {/* TIME */}
                              <div
                                className="
                                  self-start

                                  whitespace-nowrap

                                  text-[11px]
                                  sm:text-xs

                                  text-gray-400

                                  bg-gray-100
                                  dark:bg-white/5

                                  px-2.5
                                  py-1

                                  rounded-lg
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