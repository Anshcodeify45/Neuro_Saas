import React, { useState } from "react";
import { Search, MoreHorizontal } from "lucide-react";

const Table = () => {
  const [search, setSearch] = useState("");

  const users = [
    { name: "Amit Sharma", email: "amit@gmail.com", status: "Active" },
    { name: "Ravi Kumar", email: "ravi@gmail.com", status: "Inactive" },
    { name: "Sneha Patel", email: "sneha@gmail.com", status: "Active" },
    { name: "John Doe", email: "john@gmail.com", status: "Active" },
    { name: "Priya Singh", email: "priya@gmail.com", status: "Inactive" },
  ];

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm dark:border-gray-800 p-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Users
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage all registered users
          </p>
        </div>

        {/* SEARCH */}
        <div className="flex items-center bg-gray-100/70 dark:bg-gray-800/60 px-3 py-2 rounded-xl w-full md:w-72 border border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-blue-500 transition">

          <Search size={16} className="text-gray-500" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search users..."
            className="bg-transparent outline-none px-2 w-full text-sm text-gray-700 dark:text-white"
          />

        </div>

      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">

        <table className="w-full text-left">

          {/* HEADER */}
          <thead>
            <tr className="text-xs text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800">
              <th className="py-3 font-medium">User</th>
              <th className="font-medium">Email</th>
              <th className="font-medium">Status</th>
              <th className="text-right font-medium">Action</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>

            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-10 text-gray-400">
                  No users found
                </td>
              </tr>
            ) : (
              filteredUsers.map((user, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50/60 dark:hover:bg-gray-800/40 transition"
                >

                  {/* USER */}
                  <td className="py-4 flex items-center gap-3">

                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold text-sm">
                      {user.name.charAt(0)}
                    </div>

                    <span className="font-medium text-gray-900 dark:text-white">
                      {user.name}
                    </span>

                  </td>

                  {/* EMAIL */}
                  <td className="text-sm text-gray-500 dark:text-gray-400">
                    {user.email}
                  </td>

                  {/* STATUS */}
                  <td>
                    <span
                      className={`px-2.5 py-1 text-xs rounded-full font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-600 dark:bg-green-500/10 dark:text-green-400"
                          : "bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  {/* ACTION */}
                  <td className="text-right">
                    <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                      <MoreHorizontal size={18} className="text-gray-500 dark:text-gray-300" />
                    </button>
                  </td>

                </tr>
              ))
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Table;