import React from "react";

const Users = () => {
  const users = [
    { name: "Amit", role: "Admin", status: "Active" },
    { name: "Ravi", role: "User", status: "Inactive" },
    { name: "Sneha", role: "User", status: "Active" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users</h2>

      <div className="bg-white dark:bg-gray-900 rounded-xl p-4">
        {users.map((u, i) => (
          <div key={i} className="flex justify-between border-b py-3">
            <span>{u.name}</span>
            <span>{u.role}</span>
            <span>{u.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;