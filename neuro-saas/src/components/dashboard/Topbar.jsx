import React, { useState, useEffect, useRef } from "react";

import {
  Search,
  Bell,
  LogOut,
  ChevronDown,
  Settings,
  User,
  Sparkles,
  Command,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

const Topbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [openMenu, setOpenMenu] =
    useState(false);

  const [
    notificationOpen,
    setNotificationOpen,
  ] = useState(false);

  const [
    mobileSearch,
    setMobileSearch,
  ] = useState(false);

  const menuRef = useRef();

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  // NAVIGATE PROFILE
  const handleProfile = () => {
    navigate("/dashboard/profile");
    setOpenMenu(false);
  };

  // NAVIGATE SETTINGS
  const handleSettings = () => {
    navigate("/dashboard/settings");
    setOpenMenu(false);
  };

  // CLOSE DROPDOWN OUTSIDE
  useEffect(() => {
    const handler = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(
          e.target
        )
      ) {
        setOpenMenu(false);
        setNotificationOpen(false);
        setMobileSearch(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handler
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handler
      );
  }, []);

  // NOTIFICATIONS
  const notifications = [
    {
      title: "New user registered",
      desc: "Amit Sharma joined today",
      time: "2m ago",
    },
    {
      title: "Server updated",
      desc: "Analytics synced successfully",
      time: "1h ago",
    },
    {
      title: "Payment received",
      desc: "₹12,000 subscription added",
      time: "3h ago",
    },
  ];

  return (
    <div
      ref={menuRef}
      className="
        w-full
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-5
      "
    >
      {/* TOP SECTION */}
      <div
        className="
          flex
          items-start
          sm:items-center
          justify-between
          gap-4
          w-full
        "
      >
        {/* LEFT */}
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">

            <h2
              className="
                text-lg
                sm:text-xl
                lg:text-2xl
                font-bold
                text-gray-900
                dark:text-white
                tracking-tight
                truncate
              "
            >
              Dashboard Overview
            </h2>

            <div
              className="
                hidden sm:flex
                items-center
                gap-1
                px-2.5
                py-1
                rounded-full
                bg-blue-500/10
                text-blue-600
                text-xs
                font-medium
              "
            >
              <Sparkles size={12} />
              Pro
            </div>

          </div>

          <p
            className="
              text-xs
              sm:text-sm
              text-gray-500
              dark:text-gray-400
              mt-1
              truncate
            "
          >
            Welcome back 👋{" "}
            <span className="font-medium">
              {user?.name}
            </span>
          </p>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* MOBILE SEARCH */}
          <button
            onClick={() =>
              setMobileSearch(
                !mobileSearch
              )
            }
            className="
              lg:hidden
              w-10
              h-10
              sm:w-11
              sm:h-11
              rounded-2xl
              border
              border-gray-200
              dark:border-white/10
              bg-white
              dark:bg-white/[0.03]
              flex
              items-center
              justify-center
              hover:scale-105
              transition
              flex-shrink-0
            "
          >
            <Search
              size={18}
              className="
                text-gray-600
                dark:text-gray-300
              "
            />
          </button>

          {/* NOTIFICATION */}
          <div className="relative">

            <button
              onClick={() =>
                setNotificationOpen(
                  !notificationOpen
                )
              }
              className="
                relative
                w-10
                h-10
                sm:w-11
                sm:h-11
                rounded-2xl
                border
                border-gray-200
                dark:border-white/10
                bg-white
                dark:bg-white/[0.03]
                flex
                items-center
                justify-center
                hover:scale-105
                transition
                flex-shrink-0
              "
            >
              <Bell
                size={18}
                className="
                  text-gray-600
                  dark:text-gray-300
                "
              />

              <span
                className="
                  absolute
                  top-2.5
                  right-2.5
                  w-2.5
                  h-2.5
                  rounded-full
                  bg-red-500
                  border-2
                  border-white
                  dark:border-gray-900
                "
              />
            </button>

            {/* NOTIFICATION DROPDOWN */}
            <AnimatePresence>

              {notificationOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    absolute
                    right-0
                    mt-3
                    w-[92vw]
                    sm:w-[340px]
                    max-w-[340px]
                    rounded-3xl
                    border
                    border-gray-200
                    dark:border-white/10
                    bg-white
                    dark:bg-gray-900
                    shadow-2xl
                    overflow-hidden
                    z-50
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      px-5
                      py-4
                      border-b
                      border-gray-200
                      dark:border-white/10
                    "
                  >
                    <h3
                      className="
                        font-semibold
                        text-gray-900
                        dark:text-white
                      "
                    >
                      Notifications
                    </h3>

                    <button
                      className="
                        text-xs
                        text-blue-600
                      "
                    >
                      Mark all read
                    </button>
                  </div>

                  <div className="max-h-[320px] overflow-y-auto">

                    {notifications.map(
                      (item, i) => (
                        <div
                          key={i}
                          className="
                            px-5
                            py-4
                            border-b
                            border-gray-100
                            dark:border-white/5
                            hover:bg-gray-50
                            dark:hover:bg-white/[0.03]
                            transition
                            cursor-pointer
                          "
                        >
                          <div
                            className="
                              flex
                              items-start
                              justify-between
                              gap-3
                            "
                          >
                            <div className="min-w-0">

                              <h4
                                className="
                                  text-sm
                                  font-medium
                                  text-gray-900
                                  dark:text-white
                                  truncate
                                "
                              >
                                {item.title}
                              </h4>

                              <p
                                className="
                                  text-xs
                                  text-gray-500
                                  dark:text-gray-400
                                  mt-1
                                "
                              >
                                {item.desc}
                              </p>

                            </div>

                            <span
                              className="
                                text-[11px]
                                text-gray-400
                                whitespace-nowrap
                              "
                            >
                              {item.time}
                            </span>

                          </div>

                        </div>
                      )
                    )}

                  </div>

                </motion.div>
              )}

            </AnimatePresence>

          </div>

          {/* USER MENU */}
          <div className="relative">

            <button
              onClick={() =>
                setOpenMenu(!openMenu)
              }
              className="
                flex
                items-center
                gap-2
                sm:gap-3
                px-2
                py-1.5
                rounded-2xl
                border
                border-gray-200
                dark:border-white/10
                bg-white
                dark:bg-white/[0.03]
                hover:scale-[1.01]
                transition-all
                max-w-[180px]
                sm:max-w-none
              "
            >
              {/* AVATAR */}
              <div
                className="
                  w-10
                  h-10
                  sm:w-11
                  sm:h-11
                  rounded-2xl
                  bg-gradient-to-br
                  from-blue-500
                  to-indigo-600
                  flex
                  items-center
                  justify-center
                  text-white
                  font-semibold
                  uppercase
                  shadow-lg
                  shadow-blue-500/20
                  flex-shrink-0
                "
              >
                {user?.name?.charAt(0)}
              </div>

              {/* USER INFO */}
              <div
                className="
                  hidden
                  md:flex
                  flex-col
                  items-start
                  min-w-0
                "
              >
                <p
                  className="
                    text-sm
                    font-semibold
                    text-gray-900
                    dark:text-white
                    truncate
                  "
                >
                  {user?.name}
                </p>

                <p
                  className="
                    text-[11px]
                    text-gray-500
                    truncate
                    max-w-[140px]
                  "
                >
                  {user?.email}
                </p>
              </div>

              <ChevronDown
                size={16}
                className="
                  text-gray-400
                  flex-shrink-0
                "
              />

            </button>

            {/* DROPDOWN */}
            <AnimatePresence>

              {openMenu && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    absolute
                    right-0
                    mt-3
                    w-[92vw]
                    sm:w-64
                    max-w-[260px]
                    rounded-3xl
                    border
                    border-gray-200
                    dark:border-white/10
                    bg-white
                    dark:bg-gray-900
                    shadow-2xl
                    overflow-hidden
                    z-50
                  "
                >
                  {/* TOP */}
                  <div
                    className="
                      px-5
                      py-5
                      border-b
                      border-gray-200
                      dark:border-white/10
                    "
                  >
                    <div className="flex items-center gap-3">

                      <div
                        className="
                          w-12
                          h-12
                          rounded-2xl
                          bg-gradient-to-br
                          from-blue-500
                          to-indigo-600
                          flex
                          items-center
                          justify-center
                          text-white
                          font-bold
                          flex-shrink-0
                        "
                      >
                        {user?.name?.charAt(0)}
                      </div>

                      <div className="min-w-0">

                        <h3
                          className="
                            font-semibold
                            text-gray-900
                            dark:text-white
                            truncate
                          "
                        >
                          {user?.name}
                        </h3>

                        <p
                          className="
                            text-xs
                            text-gray-500
                            truncate
                          "
                        >
                          {user?.email}
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* MENU ITEMS */}
                  <div className="p-2">

                    <button
                      onClick={handleProfile}
                      className="
                        w-full
                        flex
                        items-center
                        gap-3
                        px-4
                        py-3
                        rounded-2xl
                        hover:bg-gray-100
                        dark:hover:bg-white/[0.05]
                        transition
                        text-sm
                      "
                    >
                      <User size={17} />
                      Profile
                    </button>

                    <button
                      onClick={handleSettings}
                      className="
                        w-full
                        flex
                        items-center
                        gap-3
                        px-4
                        py-3
                        rounded-2xl
                        hover:bg-gray-100
                        dark:hover:bg-white/[0.05]
                        transition
                        text-sm
                      "
                    >
                      <Settings size={17} />
                      Account Settings
                    </button>

                    <button
                      onClick={handleLogout}
                      className="
                        w-full
                        flex
                        items-center
                        gap-3
                        px-4
                        py-3
                        rounded-2xl
                        hover:bg-red-50
                        dark:hover:bg-red-500/10
                        text-red-500
                        transition
                        text-sm
                      "
                    >
                      <LogOut size={17} />
                      Logout
                    </button>

                  </div>

                </motion.div>
              )}

            </AnimatePresence>

          </div>

        </div>

      </div>

      {/* DESKTOP SEARCH */}
      <motion.div
        whileFocus={{ scale: 1.01 }}
        className="
          hidden
          lg:flex
          items-center
          gap-3
          px-4
          py-3
          rounded-2xl
          w-full
          max-w-[420px]
          border
          border-gray-200
          dark:border-white/10
          bg-white
          dark:bg-white/[0.03]
          shadow-sm
          backdrop-blur-xl
          focus-within:ring-2
          focus-within:ring-blue-500/40
          transition-all
        "
      >
        <Search
          size={15}
          className="text-gray-400"
        />

        <input
          type="text"
          placeholder="Search analytics, users, reports..."
          className="
            flex-1
            bg-transparent
            outline-none
            text-sm
            text-gray-700
            dark:text-white
            placeholder:text-gray-400
          "
        />

        <div
          className="
            flex
            items-center
            gap-1
            px-2
            py-1
            rounded-lg
            bg-gray-100
            dark:bg-gray-800
            text-[11px]
            text-gray-500
          "
        >
          <Command size={12} />
          K
        </div>

      </motion.div>

      {/* MOBILE SEARCH BAR */}
      <AnimatePresence>

        {mobileSearch && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            className="
              lg:hidden
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-2xl
              border
              border-gray-200
              dark:border-white/10
              bg-white
              dark:bg-white/[0.03]
              shadow-sm
              backdrop-blur-xl
              w-full
            "
          >
            <Search
              size={16}
              className="text-gray-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className="
                flex-1
                bg-transparent
                outline-none
                text-sm
                text-gray-700
                dark:text-white
                placeholder:text-gray-400
              "
            />
          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
};

export default Topbar;