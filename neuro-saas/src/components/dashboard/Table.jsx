import React, { useState } from "react";

import {
  Search,
  MoreHorizontal,
  Filter,
  Download,
} from "lucide-react";

import { motion } from "framer-motion";

const Table = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState("All");

  const users = [
    {
      name: "Amit Sharma",
      email: "amit@gmail.com",
      status: "Active",
      role: "Admin",
      revenue: "$12,400",
    },

    {
      name: "Ravi Kumar",
      email: "ravi@gmail.com",
      status: "Inactive",
      role: "Manager",
      revenue: "$8,120",
    },

    {
      name: "Sneha Patel",
      email: "sneha@gmail.com",
      status: "Active",
      role: "Developer",
      revenue: "$15,890",
    },

    {
      name: "John Doe",
      email: "john@gmail.com",
      status: "Active",
      role: "Designer",
      revenue: "$9,200",
    },

    {
      name: "Priya Singh",
      email: "priya@gmail.com",
      status: "Inactive",
      role: "HR",
      revenue: "$6,400",
    },
  ];

  // FILTER USERS
  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      u.email
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All"
        ? true
        : u.status === statusFilter;

    return (
      matchesSearch && matchesStatus
    );
  });

  // EXPORT CSV
  const exportCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Role",
      "Revenue",
      "Status",
    ];

    const rows = filteredUsers.map((u) => [
      u.name,
      u.email,
      u.role,
      u.revenue,
      u.status,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((e) => e.join(",")),
    ].join("\n");

    const blob = new Blob(
      [csvContent],
      {
        type: "text/csv;charset=utf-8;",
      }
    );

    const link =
      document.createElement("a");

    const url =
      URL.createObjectURL(blob);

    link.setAttribute("href", url);

    link.setAttribute(
      "download",
      "users.csv"
    );

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
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
        rounded-2xl sm:rounded-3xl
        border border-gray-200 dark:border-white/10
        bg-white dark:bg-white/[0.03]
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,0.12)]
        p-4 sm:p-6
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          top-0
          left-0
          w-48 sm:w-72
          h-48 sm:h-72
          bg-blue-500/10
          blur-[100px]
          rounded-full
        "
      ></div>

      {/* HEADER */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          gap-5
          mb-6 sm:mb-8
        "
      >
        {/* TITLE */}
        <div>
          <h2
            className="
              text-xl sm:text-2xl
              font-semibold
              text-gray-900
              dark:text-white
            "
          >
            User Management
          </h2>

          <p
            className="
              text-xs sm:text-sm
              text-gray-500
              dark:text-gray-400
              mt-1
            "
          >
            Manage users, monitor
            activity, and track
            performance
          </p>
        </div>

        {/* ACTIONS */}
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            gap-3
            w-full
          "
        >
          {/* SEARCH */}
          <div
            className="
              flex
              items-center
              gap-2
              px-4
              py-3
              rounded-2xl
              border border-gray-200 dark:border-white/10
              bg-gray-50 dark:bg-white/[0.03]
              w-full
              lg:flex-1
              focus-within:border-blue-500/50
              transition-all
            "
          >
            <Search
              size={18}
              className="text-gray-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              type="text"
              placeholder="Search users..."
              className="
                bg-transparent
                outline-none
                w-full
                text-sm
                text-gray-700
                dark:text-white
                placeholder:text-gray-400
              "
            />
          </div>

          {/* FILTER + EXPORT */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-3
              w-full
              lg:w-auto
            "
          >
            {/* FILTER */}
            <div className="relative w-full sm:w-auto">

              <Filter
                size={14}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(
                    e.target.value
                  )
                }
                className="
                  appearance-none
                  w-full
                  sm:w-auto
                  pl-10
                  pr-8
                  py-3
                  rounded-2xl
                  border border-gray-200 dark:border-white/10
                  bg-gray-50 dark:bg-white/[0.03]
                  text-sm
                  outline-none
                  text-gray-700
                  dark:text-gray-300
                  backdrop-blur-xl
                  cursor-pointer
                "
              >
                <option value="All">
                  All Users
                </option>

                <option value="Active">
                  Active
                </option>

                <option value="Inactive">
                  Inactive
                </option>

              </select>

            </div>

            {/* EXPORT */}
            <button
              onClick={exportCSV}
              className="
                flex
                items-center
                justify-center
                gap-2
                px-4
                py-3
                rounded-2xl
                bg-blue-600
                hover:bg-blue-700
                text-white
                text-sm
                transition-all
                shadow-lg
                shadow-blue-500/20
                w-full
                sm:w-auto
              "
            >
              <Download size={16} />

              Export CSV
            </button>

          </div>

        </div>

      </div>

      {/* TABLE */}
      <div
        className="
          relative
          z-10
          overflow-x-auto
          rounded-2xl
          border border-gray-200 dark:border-white/10
        "
      >

        <table className="w-full min-w-[700px]">

          {/* HEADER */}
          <thead
            className="
              sticky
              top-0
              z-10
              bg-gray-100/80
              dark:bg-[#0f172a]/80
              backdrop-blur-xl
            "
          >

            <tr
              className="
                text-left
                text-[10px] sm:text-xs
                uppercase
                tracking-wider
                text-gray-500
                dark:text-gray-400
              "
            >

              <th className="px-4 sm:px-6 py-4 sm:py-5 font-medium">
                User
              </th>

              <th className="px-4 sm:px-6 py-4 sm:py-5 font-medium">
                Role
              </th>

              <th className="px-4 sm:px-6 py-4 sm:py-5 font-medium">
                Revenue
              </th>

              <th className="px-4 sm:px-6 py-4 sm:py-5 font-medium">
                Status
              </th>

              <th className="px-4 sm:px-6 py-4 sm:py-5 text-right font-medium">
                Action
              </th>

            </tr>

          </thead>

          {/* BODY */}
          <tbody>

            {filteredUsers.length === 0 ? (

              <tr>

                <td
                  colSpan="5"
                  className="
                    text-center
                    py-16
                    text-gray-400
                  "
                >
                  No users found
                </td>

              </tr>

            ) : (

              filteredUsers.map(
                (user, i) => (

                  <motion.tr
                    key={i}
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: i * 0.05,
                    }}
                    className="
                      border-t
                      border-gray-100
                      dark:border-white/5
                      hover:bg-blue-500/[0.03]
                      transition-all
                      duration-200
                      group
                    "
                  >

                    {/* USER */}
                    <td className="px-4 sm:px-6 py-4 sm:py-5">

                      <div
                        className="
                          flex
                          items-center
                          gap-3 sm:gap-4
                        "
                      >

                        {/* AVATAR */}
                        <div
                          className="
                            relative
                            w-10 sm:w-11
                            h-10 sm:h-11
                            rounded-2xl
                            bg-gradient-to-br
                            from-blue-500
                            via-indigo-500
                            to-purple-500
                            flex
                            items-center
                            justify-center
                            text-white
                            font-semibold
                            shadow-lg
                            shrink-0
                          "
                        >

                          {user.name.charAt(0)}

                          {/* ONLINE DOT */}
                          <div
                            className="
                              absolute
                              bottom-0
                              right-0
                              w-3
                              h-3
                              rounded-full
                              border-2
                              border-white
                              dark:border-[#0f172a]
                              bg-green-500
                            "
                          ></div>

                        </div>

                        {/* USER INFO */}
                        <div className="min-w-0">

                          <h3
                            className="
                              font-semibold
                              text-sm sm:text-base
                              text-gray-900
                              dark:text-white
                              truncate
                            "
                          >
                            {user.name}
                          </h3>

                          <p
                            className="
                              text-xs sm:text-sm
                              text-gray-500
                              dark:text-gray-400
                              mt-1
                              truncate
                            "
                          >
                            {user.email}
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* ROLE */}
                    <td className="px-4 sm:px-6 py-4 sm:py-5">

                      <div
                        className="
                          inline-flex
                          items-center
                          px-3
                          py-1.5
                          rounded-xl
                          bg-purple-500/10
                          text-purple-500
                          text-xs
                          font-medium
                          whitespace-nowrap
                        "
                      >
                        {user.role}
                      </div>

                    </td>

                    {/* REVENUE */}
                    <td
                      className="
                        px-4 sm:px-6
                        py-4 sm:py-5
                        font-semibold
                        text-sm sm:text-base
                        text-gray-900
                        dark:text-white
                        whitespace-nowrap
                      "
                    >
                      {user.revenue}
                    </td>

                    {/* STATUS */}
                    <td className="px-4 sm:px-6 py-4 sm:py-5">

                      <span
                        className={`
                          inline-flex
                          items-center
                          gap-2
                          px-3
                          py-1.5
                          rounded-xl
                          text-xs
                          font-medium
                          whitespace-nowrap
                          ${
                            user.status ===
                            "Active"
                              ? `
                                bg-green-500/10
                                text-green-500
                              `
                              : `
                                bg-red-500/10
                                text-red-500
                              `
                          }
                        `}
                      >

                        <div
                          className={`
                            w-2
                            h-2
                            rounded-full
                            ${
                              user.status ===
                              "Active"
                                ? "bg-green-500"
                                : "bg-red-500"
                            }
                          `}
                        ></div>

                        {user.status}

                      </span>

                    </td>

                    {/* ACTION */}
                    <td
                      className="
                        px-4 sm:px-6
                        py-4 sm:py-5
                        text-right
                      "
                    >

                      <button
                        className="
                          p-2.5
                          rounded-xl
                          hover:bg-white/10
                          transition-all
                          opacity-70
                          group-hover:opacity-100
                        "
                      >

                        <MoreHorizontal
                          size={18}
                          className="
                            text-gray-500
                            dark:text-gray-300
                          "
                        />

                      </button>

                    </td>

                  </motion.tr>

                )
              )

            )}

          </tbody>

        </table>

      </div>

      {/* FOOTER */}
      <div
        className="
          relative
          z-10
          mt-6
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-4
        "
      >

        <p
          className="
            text-sm
            text-gray-500
            dark:text-gray-400
            text-center sm:text-left
          "
        >
          Showing {filteredUsers.length} users
        </p>

        {/* PAGINATION */}
        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            sm:justify-end
            gap-2
          "
        >

          <button
            className="
              px-4
              py-2
              rounded-xl
              border border-gray-200 dark:border-white/10
              bg-gray-50 dark:bg-white/[0.03]
              text-sm
              hover:bg-blue-500/10
              transition-all
            "
          >
            Previous
          </button>

          <button
            className="
              px-4
              py-2
              rounded-xl
              bg-blue-600
              text-white
              text-sm
              shadow-lg
              shadow-blue-500/20
            "
          >
            1
          </button>

          <button
            className="
              px-4
              py-2
              rounded-xl
              border border-gray-200 dark:border-white/10
              bg-gray-50 dark:bg-white/[0.03]
              text-sm
              hover:bg-blue-500/10
              transition-all
            "
          >
            2
          </button>

          <button
            className="
              px-4
              py-2
              rounded-xl
              border border-gray-200 dark:border-white/10
              bg-gray-50 dark:bg-white/[0.03]
              text-sm
              hover:bg-blue-500/10
              transition-all
            "
          >
            Next
          </button>

        </div>

      </div>

    </motion.div>
  );
};

export default Table;