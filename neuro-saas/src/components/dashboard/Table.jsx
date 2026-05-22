import React from "react";

const Table = () => {
  const users = [
    { name: "Amit", email: "amit@gmail.com", status: "Active" },
    { name: "Ravi", email: "ravi@gmail.com", status: "Inactive" },
    { name: "Sneha", email: "sneha@gmail.com", status: "Active" },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">

      {/* TITLE */}
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Recent Users
      </h2>

      {/* TABLE */}
      <div className="overflow-x-auto">

        <table className="w-full text-left">

          {/* HEADER */}
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-300">
              <th className="py-3">Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {users.map((u, i) => (
              <tr
                key={i}
                className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="py-3 text-gray-800 dark:text-white">
                  {u.name}
                </td>

                <td className="text-gray-600 dark:text-gray-300">
                  {u.email}
                </td>

                <td>
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${
                      u.status === "Active"
                        ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                        : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
                    }`}
                  >
                    {u.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
};

export default Table;