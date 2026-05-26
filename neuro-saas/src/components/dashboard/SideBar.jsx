import React from "react";
import { useLocation, Link } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Menu,
  X,
} from "lucide-react";

const Sidebar = ({ open, setOpen }) => {
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Users",
      path: "/dashboard/users",
      icon: <Users size={20} />,
    },
    {
      name: "Analytics",
      path: "/dashboard/analytics",
      icon: <BarChart3 size={20} />,
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (
    <>
      {/* MOBILE BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/50 backdrop-blur-sm
          transition-opacity duration-300
          lg:hidden
          ${
            open
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 z-50
          h-screen
          bg-white/90
          dark:bg-[#081028]/95
          backdrop-blur-xl
          border-r border-gray-200 dark:border-white/10
          shadow-2xl
          flex flex-col
          transition-all duration-300 ease-in-out

          /* MOBILE */
          ${
            open
              ? "translate-x-0 w-72"
              : "-translate-x-full"
          }

          /* TABLET + DESKTOP */
          lg:translate-x-0
          ${
            open
              ? "lg:w-64"
              : "lg:w-20"
          }
        `}
      >

        {/* HEADER */}
        <div
          className="
            h-20
            flex
            items-center
            justify-between
            px-4
            border-b
            border-gray-200
            dark:border-gray-800
            shrink-0
          "
        >

          {/* LOGO */}
          <div
            className={`
              overflow-hidden
              transition-all duration-300
              ${
                open
                  ? "opacity-100 w-auto"
                  : "lg:opacity-0 lg:w-0"
              }
            `}
          >
            <h1
              className="
                text-xl
                font-bold
                text-blue-600
                whitespace-nowrap
              "
            >
              NeuroDash
            </h1>
          </div>

          {/* TOGGLE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="
              p-2
              rounded-xl
              hover:bg-gray-100
              dark:hover:bg-gray-800
              transition
              shrink-0
            "
          >
            {/* MOBILE CLOSE ICON */}
            <span className="lg:hidden">
              <X size={20} />
            </span>

            {/* DESKTOP MENU ICON */}
            <span className="hidden lg:block">
              <Menu size={20} />
            </span>
          </button>

        </div>

        {/* NAVIGATION */}
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
              location.pathname === item.path;

            return (
              <Link
                key={i}
                to={item.path}
                onClick={() => {
                  // CLOSE SIDEBAR ON MOBILE
                  if (
                    window.innerWidth < 1024
                  ) {
                    setOpen(false);
                  }
                }}
                title={!open ? item.name : ""}
                className={`
                  relative
                  flex
                  items-center
                  gap-3
                  px-3
                  py-3
                  rounded-2xl
                  transition-all
                  duration-200
                  group

                  ${
                    active
                      ? `
                        bg-blue-50
                        dark:bg-blue-950/40
                        text-blue-600
                        dark:text-blue-400
                      `
                      : `
                        text-gray-600
                        dark:text-gray-300
                        hover:bg-gray-100
                        dark:hover:bg-gray-800/70
                      `
                  }
                `}
              >

                {/* ACTIVE INDICATOR */}
                {active && (
                  <span
                    className="
                      absolute
                      left-0
                      top-2
                      bottom-2
                      w-1
                      bg-blue-600
                      rounded-r-full
                    "
                  />
                )}

                {/* ICON */}
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    min-w-[40px]
                  "
                >
                  {item.icon}
                </div>

                {/* TEXT */}
                <div
                  className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                      open
                        ? "w-auto opacity-100"
                        : "lg:w-0 lg:opacity-0"
                    }
                  `}
                >
                  <span
                    className="
                      font-medium
                      whitespace-nowrap
                    "
                  >
                    {item.name}
                  </span>
                </div>

                {/* TOOLTIP */}
                {!open && (
                  <div
                    className="
                      hidden
                      lg:group-hover:flex
                      absolute
                      left-20
                      px-3
                      py-2
                      rounded-lg
                      bg-gray-900
                      text-white
                      text-sm
                      whitespace-nowrap
                      shadow-lg
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

        {/* FOOTER */}
        <div
          className={`
            border-t
            border-gray-200
            dark:border-gray-800
            p-4
            transition-all
            duration-300
            overflow-hidden
            ${
              open
                ? "opacity-100"
                : "lg:opacity-0 lg:h-0 lg:p-0"
            }
          `}
        >

          <p
            className="
              text-xs
              text-gray-500
              text-center
            "
          >
            NeuroDash v1.0
          </p>

        </div>

      </aside>
    </>
  );
};

export default Sidebar;