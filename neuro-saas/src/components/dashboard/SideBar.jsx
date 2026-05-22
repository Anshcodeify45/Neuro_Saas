import React from "react";
import { useLocation, Link } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Menu,
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
    <div
      className={`h-full sticky top-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 flex flex-col
      ${open ? "w-64" : "w-20"}`}
    >
      {/* HEADER */}
      <div className="h-20 flex items-center justify-between px-5 border-b border-gray-200 dark:border-gray-800">

        {open && (
          <h1 className="text-2xl font-bold tracking-tight text-blue-600">
            NeuroDash
          </h1>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Menu
            size={20}
            className="text-gray-600 dark:text-gray-300"
          />
        </button>
      </div>

      {/* MENU */}
      <div className="flex-1 px-3 py-6">
        <ul className="space-y-2">

          {menu.map((item, i) => {
            const active = location.pathname === item.path;

            return (
              <li key={i}>
                <Link
                  to={item.path}
                  className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
                  ${
                    active
                      ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {/* ACTIVE INDICATOR */}
                  {active && (
                    <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-blue-600"></span>
                  )}

                  {/* ICON */}
                  <span className="flex items-center justify-center">
                    {item.icon}
                  </span>

                  {/* TEXT */}
                  {open && (
                    <span className="font-medium tracking-wide">
                      {item.name}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}

        </ul>
      </div>

      {/* FOOTER */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-800">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
            A
          </div>

          {open && (
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                Admin
              </p>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                admin@neurodash.ai
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default Sidebar;