import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Menu,
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(true);

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "Users", path: "/dashboard/users", icon: <Users size={18} /> },
    { name: "Analytics", path: "/dashboard/analytics", icon: <BarChart3 size={18} /> },
    { name: "Settings", path: "/dashboard/settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className={`h-screen transition-all duration-300
          ${open ? "w-64" : "w-20"}
          bg-white dark:bg-gray-900 shadow-md`}
        >

      {/* TOP */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">

        {open && (
          <h1 className="text-xl font-bold text-blue-600">
            NeuroDash
          </h1>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          <Menu size={18} />
        </button>

      </div>

      {/* MENU */}
      <ul className="mt-6 space-y-2 px-3">

        {menu.map((item, i) => {
          const active = location.pathname.startsWith(item.path);

          return (
            <li key={i}>
              <Link
                to={item.path}
                className={`relative flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group
                ${
                  active
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-semibold"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >

                {/* ICON */}
                <span className="text-lg">{item.icon}</span>

                {/* LABEL */}
                {open && <span>{item.name}</span>}

                {/* ACTIVE BAR */}
                {active && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-r-lg"></span>
                )}

              </Link>
            </li>
          );
        })}

      </ul>
    </div>
  );
};

export default Sidebar;