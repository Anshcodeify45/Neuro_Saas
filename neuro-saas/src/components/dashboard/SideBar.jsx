import React from "react";
import {
  useLocation,
  Link,
} from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Menu,
  X,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({
  open,
  setOpen,
}) => {
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: (
        <LayoutDashboard size={20} />
      ),
    },
    {
      name: "Users",
      path: "/dashboard/users",
      icon: <Users size={20} />,
    },
    {
      name: "Analytics",
      path: "/dashboard/analytics",
      icon: (
        <BarChart3 size={20} />
      ),
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: (
        <Settings size={20} />
      ),
    },
  ];

  return (
    <>
      {/* ========================= */}
      {/* MOBILE MENU BUTTON */}
      {/* ========================= */}

      {!open && (
        <button
          onClick={() =>
            setOpen(true)
          }
          className="
            fixed
            top-4
            left-4
            z-[70]

            lg:hidden

            w-11
            h-11

            rounded-xl

            border
            border-white/10

            bg-[#081028]/90
            backdrop-blur-xl

            flex
            items-center
            justify-center

            text-white

            shadow-lg
          "
        >
          <Menu size={22} />
        </button>
      )}

      {/* ========================= */}
      {/* MOBILE BACKDROP */}
      {/* ========================= */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setOpen(false)
            }
            className="
              fixed
              inset-0
              z-40

              bg-black/60
              backdrop-blur-sm

              lg:hidden
            "
          />
        )}
      </AnimatePresence>

      {/* ========================= */}
      {/* SIDEBAR */}
      {/* ========================= */}

      <motion.aside
        initial={false}
        animate={{
          x:
            open || window.innerWidth >= 1024
              ? 0
              : -300,
          width:
            window.innerWidth >= 1024
              ? open
                ? 260
                : 88
              : 260,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          fixed
          top-0
          left-0
          z-50

          h-screen

          bg-white
          dark:bg-[#081028]

          border-r
          border-gray-200
          dark:border-white/10

          shadow-2xl

          flex
          flex-col

          overflow-hidden
        "
      >

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <div
          className="
            h-20
            min-h-[80px]

            flex
            items-center
            justify-between

            px-5

            border-b
            border-gray-200
            dark:border-white/10
          "
        >

          {/* LOGO */}

          <div
            className={`
              flex
              items-center
              gap-3

              transition-all
              duration-300

              ${
                open
                  ? "opacity-100"
                  : "lg:opacity-0"
              }
            `}
          >

            <div
              className="
                w-11
                h-11

                rounded-2xl

                bg-gradient-to-br
                from-blue-500
                to-indigo-600

                flex
                items-center
                justify-center

                text-white
                font-bold

                shadow-lg
                shadow-blue-500/20
              "
            >
              N
            </div>

            {open && (
              <div>

                <h1
                  className="
                    text-lg
                    font-bold
                    text-gray-900
                    dark:text-white
                  "
                >
                  NeuroDash
                </h1>

                <p
                  className="
                    text-xs
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  Admin Panel
                </p>

              </div>
            )}

          </div>

          {/* TOGGLE */}

          <button
            onClick={() =>
              setOpen(!open)
            }
            className="
              w-10
              h-10

              rounded-xl

              flex
              items-center
              justify-center

              text-gray-600
              dark:text-gray-300

              hover:bg-gray-100
              dark:hover:bg-white/10

              transition
            "
          >

            {/* MOBILE */}
            <span className="lg:hidden">
              <X size={20} />
            </span>

            {/* DESKTOP */}
            <span className="hidden lg:block">
              <Menu size={20} />
            </span>

          </button>

        </div>

        {/* ========================= */}
        {/* NAVIGATION */}
        {/* ========================= */}

        <div
          className="
            flex-1
            overflow-y-auto

            px-3
            py-5

            space-y-2
          "
        >

          {menu.map((item, i) => {
            const active =
              location.pathname ===
              item.path;

            return (
              <Link
                key={i}
                to={item.path}
                onClick={() => {
                  if (
                    window.innerWidth <
                    1024
                  ) {
                    setOpen(false);
                  }
                }}
                className={`
                  group
                  relative

                  flex
                  items-center

                  gap-3

                  h-14

                  rounded-2xl

                  px-4

                  transition-all
                  duration-300

                  ${
                    active
                      ? `
                        bg-blue-600
                        text-white
                        shadow-lg
                        shadow-blue-500/20
                      `
                      : `
                        text-gray-600
                        dark:text-gray-300

                        hover:bg-gray-100
                        dark:hover:bg-white/[0.05]
                      `
                  }
                `}
              >

                {/* ACTIVE BAR */}

                {active && (
                  <motion.div
                    layoutId="activeSidebar"
                    className="
                      absolute
                      left-0
                      top-3
                      bottom-3

                      w-1

                      rounded-r-full

                      bg-white
                    "
                  />
                )}

                {/* ICON */}

                <div
                  className="
                    min-w-[24px]

                    flex
                    items-center
                    justify-center
                  "
                >
                  {item.icon}
                </div>

                {/* TEXT */}

                <AnimatePresence>

                  {(open ||
                    window.innerWidth <
                      1024) && (
                    <motion.span
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: -10,
                      }}
                      className="
                        font-medium
                        whitespace-nowrap
                      "
                    >
                      {item.name}
                    </motion.span>
                  )}

                </AnimatePresence>

                {/* TOOLTIP */}

                {!open && (
                  <div
                    className="
                      hidden
                      lg:group-hover:flex

                      absolute
                      left-[95px]

                      px-3
                      py-2

                      rounded-xl

                      bg-gray-900

                      text-white
                      text-sm

                      whitespace-nowrap

                      shadow-xl

                      z-50
                    "
                  >
                    {item.name}
                  </div>
                )}

              </Link>
            );
          })}

        </div>

        {/* ========================= */}
        {/* FOOTER */}
        {/* ========================= */}

        <div
          className={`
            border-t
            border-gray-200
            dark:border-white/10

            p-4

            transition-all
            duration-300

            ${
              open
                ? "opacity-100"
                : "lg:opacity-0"
            }
          `}
        >

          {open && (
            <div
              className="
                rounded-2xl

                bg-gray-100
                dark:bg-white/[0.04]

                border
                border-gray-200
                dark:border-white/10

                p-4
              "
            >

              <p
                className="
                  text-sm
                  font-medium
                  text-gray-900
                  dark:text-white
                "
              >
                NeuroDash v1.0
              </p>

              <p
                className="
                  text-xs
                  mt-1
                  text-gray-500
                  dark:text-gray-400
                "
              >
                Responsive admin dashboard
              </p>

            </div>
          )}

        </div>

      </motion.aside>
    </>
  );
};

export default Sidebar;