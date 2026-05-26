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
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Users", path: "/dashboard/users", icon: <Users size={20} /> },
    { name: "Analytics", path: "/dashboard/analytics", icon: <BarChart3 size={20} /> },
    { name: "Settings", path: "/dashboard/settings", icon: <Settings size={20} /> },
  ];

  return (
    <>
      {/* BACKDROP (mobile only) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed lg:static z-50 h-full
          bg-white/80
          dark:bg-[#081028]/90
          backdrop-blur-xl
          border-r
          border-white/10
          shadow-2xl
          transition-all duration-300 ease-in-out
          flex flex-col
          ${open ? "w-64" : "w-20"}
        `}
      >
        {/* HEADER */}
        <div className="h-20 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">

          {/* LOGO */}
          {open && (
            <h1 className="text-xl font-bold text-blue-600 transition-all">
              NeuroDash
            </h1>
          )}

          {/* TOGGLE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Menu size={20} />
          </button>

        </div>

        {/* MENU */}
        <div className="flex-1 px-2 py-4 space-y-2">

          {menu.map((item, i) => {
            const active = location.pathname === item.path;

            return (
              <Link
                key={i}
                to={item.path}
                title={!open ? item.name : ""}
                className={`
                  flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200
                  relative group
                  ${
                    active
                      ? "bg-blue-50 dark:bg-blue-950 text-blue-600"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
                  }
                `}
              >
                {/* ICON */}
                <div className="flex items-center justify-center w-8">
                  {item.icon}
                </div>

                {/* TEXT (hide when collapsed) */}
                {open && (
                  <span className="font-medium whitespace-nowrap">
                    {item.name}
                  </span>
                )}

                {/* ACTIVE INDICATOR */}
                {active && (
                  <span className="absolute left-0 top-2 bottom-2 w-1 bg-blue-600 rounded-r-full"></span>
                )}
              </Link>
            );
          })}

        </div>

        {/* FOOTER (optional branding) */}
        {open && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-800 text-xs text-gray-500">
            NeuroDash v1.0
          </div>
        )}

      </div>
    </>
  );
};

export default Sidebar;