import React, { useEffect, useState } from "react";
import { fetchUsers } from "../../api/userApi";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // FETCH USERS
  const loadUsers = async () => {
    try {
      const res = await fetchUsers();
      setUsers(res.data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  if (loading) {
    return (
      <div className="p-6 text-gray-500">
        Loading users...
      </div>
    );
  }

  return (
    <div className="p-6">

      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-4">
        Users
      </h1>

      {/* TABLE */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow border overflow-hidden">

        <table className="w-full text-left">

          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Joined</th>
            </tr>
          </thead>

          <tbody>

            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b dark:border-gray-700"
              >

                <td className="p-3">
                  {user.name}
                </td>

                <td className="p-3 text-gray-500">
                  {user.email}
                </td>

                <td className="p-3 text-gray-400 text-sm">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
};

export default Users;