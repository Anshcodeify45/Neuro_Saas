import React, { useEffect, useState } from "react";

import {
  Search,
  Users as UsersIcon,
  MoreHorizontal,
  Download,
  Filter,
  UserPlus,
  X,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import { fetchUsers } from "../../api/userApi";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [showModal, setShowModal] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      role: "Developer",
      status: "Active",
    });

  // FETCH USERS
  const loadUsers = async () => {
    try {
      const res = await fetchUsers();

      const updatedUsers = res.data.map(
        (user, index) => ({
          ...user,

          status:
            index % 2 === 0
              ? "Active"
              : "Inactive",

          role:
            index % 3 === 0
              ? "Admin"
              : index % 3 === 1
              ? "Developer"
              : "Manager",
        })
      );

      setUsers(updatedUsers);

    } catch (err) {

      console.log(err.message);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // FILTER USERS
  const filteredUsers = users.filter(
    (user) => {
      const matchesSearch =
        user.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        user.email
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All"
          ? true
          : user.status === statusFilter;

      return (
        matchesSearch &&
        matchesStatus
      );
    }
  );

  // EXPORT CSV
  const exportCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Role",
      "Status",
      "Joined",
    ];

    const rows = filteredUsers.map(
      (u) => [
        u.name,
        u.email,
        u.role,
        u.status,
        new Date(
          u.createdAt
        ).toLocaleDateString(),
      ]
    );

    const csvContent = [
      headers.join(","),
      ...rows.map((e) =>
        e.join(",")
      ),
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

  // ADD USER
  const handleAddUser = (e) => {
    e.preventDefault();

    const newUser = {
      _id: Date.now(),

      name: formData.name,

      email: formData.email,

      role: formData.role,

      status: formData.status,

      createdAt: new Date(),
    };

    setUsers([newUser, ...users]);

    setFormData({
      name: "",
      email: "",
      role: "Developer",
      status: "Active",
    });

    setShowModal(false);
  };

  // LOADING
  if (loading) {
    return (
      <div className="p-4 sm:p-6">

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            gap-4 sm:gap-6
          "
        >

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="
                h-32 sm:h-36
                rounded-3xl
                bg-gray-200
                dark:bg-gray-800
                animate-pulse
              "
            ></div>
          ))}

        </div>

      </div>
    );
  }

  return (
    <div className="space-y-6 sm:space-y-8">

      {/* HEADER */}
      <div
        className="
          flex
          flex-col
          xl:flex-row
          xl:items-center
          xl:justify-between
          gap-5
        "
      >

        <div>

          <h1
            className="
              text-2xl sm:text-3xl
              font-bold
              text-gray-900
              dark:text-white
            "
          >
            User Management
          </h1>

          <p
            className="
              mt-2
              text-sm
              text-gray-500
              dark:text-gray-400
            "
          >
            Manage users, monitor
            accounts and track activity
          </p>

        </div>

        {/* ACTION BUTTONS */}
        <div
          className="
            flex
            flex-col
            sm:flex-row
            items-stretch
            sm:items-center
            gap-3
            w-full
            xl:w-auto
          "
        >

          {/* EXPORT */}
          <button
            onClick={exportCSV}
            className="
              flex
              items-center
              justify-center
              gap-2
              px-5
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

            <Download size={17} />

            Export CSV

          </button>

          {/* ADD USER */}
          <button
            onClick={() =>
              setShowModal(true)
            }
            className="
              flex
              items-center
              justify-center
              gap-2
              px-5
              py-3
              rounded-2xl
              border border-gray-200
              dark:border-white/10
              bg-white
              dark:bg-white/[0.03]
              hover:bg-gray-50
              dark:hover:bg-white/[0.05]
              text-sm
              transition-all
              w-full
              sm:w-auto
            "
          >

            <UserPlus size={17} />

            Add User

          </button>

        </div>

      </div>

      {/* STATS */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-4 sm:gap-6
        "
      >

        {/* TOTAL */}
        <div
          className="
            rounded-3xl
            p-5 sm:p-6
            border border-gray-200
            dark:border-white/10
            bg-white
            dark:bg-white/[0.03]
            shadow-sm
          "
        >

          <div
            className="
              flex
              items-center
              justify-between
            "
          >

            <div>

              <p
                className="
                  text-sm
                  text-gray-500
                  dark:text-gray-400
                "
              >
                Total Users
              </p>

              <h2
                className="
                  mt-2
                  text-2xl sm:text-3xl
                  font-bold
                  text-gray-900
                  dark:text-white
                "
              >
                {users.length}
              </h2>

            </div>

            <div
              className="
                w-12 h-12
                sm:w-14 sm:h-14
                rounded-2xl
                bg-blue-500/10
                flex
                items-center
                justify-center
                text-blue-500
              "
            >

              <UsersIcon size={24} />

            </div>

          </div>

        </div>

        {/* ACTIVE */}
        <div
          className="
            rounded-3xl
            p-5 sm:p-6
            border border-gray-200
            dark:border-white/10
            bg-white
            dark:bg-white/[0.03]
            shadow-sm
          "
        >

          <p
            className="
              text-sm
              text-gray-500
              dark:text-gray-400
            "
          >
            Active Users
          </p>

          <h2
            className="
              mt-2
              text-2xl sm:text-3xl
              font-bold
              text-green-500
            "
          >
            {
              users.filter(
                (u) =>
                  u.status === "Active"
              ).length
            }
          </h2>

        </div>

        {/* INACTIVE */}
        <div
          className="
            rounded-3xl
            p-5 sm:p-6
            border border-gray-200
            dark:border-white/10
            bg-white
            dark:bg-white/[0.03]
            shadow-sm
          "
        >

          <p
            className="
              text-sm
              text-gray-500
              dark:text-gray-400
            "
          >
            Inactive Users
          </p>

          <h2
            className="
              mt-2
              text-2xl sm:text-3xl
              font-bold
              text-red-500
            "
          >
            {
              users.filter(
                (u) =>
                  u.status ===
                  "Inactive"
              ).length
            }
          </h2>

        </div>

      </div>

      {/* TABLE CONTAINER */}
      <div
        className="
          rounded-3xl
          border border-gray-200
          dark:border-white/10
          bg-white
          dark:bg-white/[0.03]
          overflow-hidden
          shadow-sm
        "
      >

        {/* TOP BAR */}
        <div
          className="
            p-4 sm:p-6
            border-b
            border-gray-200
            dark:border-white/10
            flex
            flex-col
            xl:flex-row
            xl:items-center
            xl:justify-between
            gap-4
          "
        >

          {/* LEFT */}
          <div>

            <h2
              className="
                text-lg sm:text-xl
                font-semibold
                text-gray-900
                dark:text-white
              "
            >
              All Users
            </h2>

            <p
              className="
                text-sm
                text-gray-500
                dark:text-gray-400
                mt-1
              "
            >
              Showing{" "}
              {filteredUsers.length} users
            </p>

          </div>

          {/* RIGHT */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              items-stretch
              sm:items-center
              gap-3
              w-full
              xl:w-auto
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
                border border-gray-200
                dark:border-white/10
                bg-gray-50
                dark:bg-white/[0.03]
                w-full
                sm:min-w-[280px]
              "
            >

              <Search
                size={18}
                className="
                  text-gray-400
                "
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
                "
              />

            </div>

            {/* FILTER */}
            <div className="relative w-full sm:w-auto">

              <Filter
                size={15}
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
                  pl-10
                  pr-6
                  py-3
                  rounded-2xl
                  border border-gray-200
                  dark:border-white/10
                  bg-gray-50
                  dark:bg-white/[0.03]
                  text-sm
                  outline-none
                  cursor-pointer
                  w-full
                  sm:w-auto
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

          </div>

        </div>

        {/* MOBILE CARDS */}
        <div className="block lg:hidden p-4 space-y-4">

          {filteredUsers.map(
            (user, i) => (

              <motion.div
                key={user._id}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: i * 0.03,
                }}
                className="
                  rounded-3xl
                  border
                  border-gray-200
                  dark:border-white/10
                  p-4
                  bg-gray-50/50
                  dark:bg-white/[0.02]
                "
              >

                <div className="flex items-start justify-between gap-4">

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        w-12
                        h-12
                        rounded-2xl
                        bg-gradient-to-br
                        from-blue-500
                        to-purple-500
                        flex
                        items-center
                        justify-center
                        text-white
                        font-semibold
                      "
                    >

                      {user.name
                        ?.charAt(0)
                        ?.toUpperCase()}

                    </div>

                    <div>

                      <h3
                        className="
                          font-semibold
                          text-gray-900
                          dark:text-white
                        "
                      >
                        {user.name}
                      </h3>

                      <p
                        className="
                          text-sm
                          text-gray-500
                          dark:text-gray-400
                        "
                      >
                        {user.email}
                      </p>

                    </div>

                  </div>

                  <button
                    className="
                      p-2
                      rounded-xl
                      hover:bg-gray-200
                      dark:hover:bg-white/10
                    "
                  >

                    <MoreHorizontal
                      size={18}
                    />

                  </button>

                </div>

                <div
                  className="
                    mt-4
                    flex
                    flex-wrap
                    items-center
                    gap-2
                  "
                >

                  <span
                    className="
                      px-3
                      py-1.5
                      rounded-xl
                      bg-purple-500/10
                      text-purple-500
                      text-xs
                      font-medium
                    "
                  >
                    {user.role}
                  </span>

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

                </div>

                <p
                  className="
                    mt-4
                    text-sm
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  Joined:{" "}
                  {new Date(
                    user.createdAt
                  ).toLocaleDateString()}
                </p>

              </motion.div>

            )
          )}

        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden lg:block overflow-x-auto">

          <table className="w-full min-w-[900px]">

            {/* HEAD */}
            <thead
              className="
                bg-gray-100/70
                dark:bg-[#111827]/80
              "
            >

              <tr
                className="
                  text-left
                  text-xs
                  uppercase
                  tracking-wider
                  text-gray-500
                  dark:text-gray-400
                "
              >

                <th className="px-6 py-5">
                  User
                </th>

                <th className="px-6 py-5">
                  Role
                </th>

                <th className="px-6 py-5">
                  Status
                </th>

                <th className="px-6 py-5">
                  Joined
                </th>

                <th className="px-6 py-5 text-right">
                  Action
                </th>

              </tr>

            </thead>

            {/* BODY */}
            <tbody>

              {filteredUsers.map(
                (user, i) => (

                  <motion.tr
                    key={user._id}
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: i * 0.04,
                    }}
                    className="
                      border-t
                      border-gray-100
                      dark:border-white/5
                      hover:bg-blue-500/[0.03]
                    "
                  >

                    {/* USER */}
                    <td className="px-6 py-5">

                      <div
                        className="
                          flex
                          items-center
                          gap-4
                        "
                      >

                        <div
                          className="
                            w-11
                            h-11
                            rounded-2xl
                            bg-gradient-to-br
                            from-blue-500
                            to-purple-500
                            flex
                            items-center
                            justify-center
                            text-white
                            font-semibold
                          "
                        >

                          {user.name
                            ?.charAt(0)
                            ?.toUpperCase()}

                        </div>

                        <div>

                          <h3
                            className="
                              font-semibold
                              text-gray-900
                              dark:text-white
                            "
                          >
                            {user.name}
                          </h3>

                          <p
                            className="
                              text-sm
                              text-gray-500
                              dark:text-gray-400
                            "
                          >
                            {user.email}
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* ROLE */}
                    <td className="px-6 py-5">

                      <span
                        className="
                          px-3
                          py-1.5
                          rounded-xl
                          bg-purple-500/10
                          text-purple-500
                          text-xs
                          font-medium
                        "
                      >
                        {user.role}
                      </span>

                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-5">

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

                    {/* JOINED */}
                    <td
                      className="
                        px-6
                        py-5
                        text-sm
                        text-gray-500
                        dark:text-gray-400
                      "
                    >
                      {new Date(
                        user.createdAt
                      ).toLocaleDateString()}
                    </td>

                    {/* ACTION */}
                    <td className="px-6 py-5 text-right">

                      <button
                        className="
                          p-2.5
                          rounded-xl
                          hover:bg-gray-100
                          dark:hover:bg-white/10
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
              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* MODAL */}
      <AnimatePresence>

        {showModal && (

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
            className="
              fixed
              inset-0
              z-50
              bg-black/50
              backdrop-blur-sm
              flex
              items-center
              justify-center
              p-4
            "
          >

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              className="
                w-full
                max-w-lg
                max-h-[90vh]
                overflow-y-auto
                rounded-3xl
                border border-gray-200
                dark:border-white/10
                bg-white
                dark:bg-[#0f172a]
                p-5 sm:p-8
                shadow-2xl
              "
            >

              {/* HEADER */}
              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-4
                  mb-6
                "
              >

                <div>

                  <h2
                    className="
                      text-xl sm:text-2xl
                      font-bold
                      text-gray-900
                      dark:text-white
                    "
                  >
                    Add New User
                  </h2>

                  <p
                    className="
                      text-sm
                      text-gray-500
                      dark:text-gray-400
                      mt-1
                    "
                  >
                    Create a new user account
                  </p>

                </div>

                <button
                  onClick={() =>
                    setShowModal(false)
                  }
                  className="
                    p-2
                    rounded-xl
                    hover:bg-gray-100
                    dark:hover:bg-white/10
                    shrink-0
                  "
                >

                  <X size={20} />

                </button>

              </div>

              {/* FORM */}
              <form
                onSubmit={handleAddUser}
                className="space-y-5"
              >

                {/* NAME */}
                <div>

                  <label
                    className="
                      text-sm
                      font-medium
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name:
                          e.target.value,
                      })
                    }
                    className="
                      mt-2
                      w-full
                      px-4
                      py-3
                      rounded-2xl
                      border border-gray-200
                      dark:border-white/10
                      bg-gray-50
                      dark:bg-white/[0.03]
                      outline-none
                    "
                    placeholder="Enter name"
                  />

                </div>

                {/* EMAIL */}
                <div>

                  <label
                    className="
                      text-sm
                      font-medium
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email:
                          e.target.value,
                      })
                    }
                    className="
                      mt-2
                      w-full
                      px-4
                      py-3
                      rounded-2xl
                      border border-gray-200
                      dark:border-white/10
                      bg-gray-50
                      dark:bg-white/[0.03]
                      outline-none
                    "
                    placeholder="Enter email"
                  />

                </div>

                {/* ROLE */}
                <div>

                  <label
                    className="
                      text-sm
                      font-medium
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    Role
                  </label>

                  <select
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        role:
                          e.target.value,
                      })
                    }
                    className="
                      mt-2
                      w-full
                      px-4
                      py-3
                      rounded-2xl
                      border border-gray-200
                      dark:border-white/10
                      bg-gray-50
                      dark:bg-white/[0.03]
                      outline-none
                    "
                  >

                    <option>
                      Admin
                    </option>

                    <option>
                      Developer
                    </option>

                    <option>
                      Manager
                    </option>

                  </select>

                </div>

                {/* STATUS */}
                <div>

                  <label
                    className="
                      text-sm
                      font-medium
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    Status
                  </label>

                  <select
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        status:
                          e.target.value,
                      })
                    }
                    className="
                      mt-2
                      w-full
                      px-4
                      py-3
                      rounded-2xl
                      border border-gray-200
                      dark:border-white/10
                      bg-gray-50
                      dark:bg-white/[0.03]
                      outline-none
                    "
                  >

                    <option>
                      Active
                    </option>

                    <option>
                      Inactive
                    </option>

                  </select>

                </div>

                {/* BUTTONS */}
                <div
                  className="
                    flex
                    flex-col-reverse
                    sm:flex-row
                    items-stretch
                    sm:items-center
                    justify-end
                    gap-3
                    pt-4
                  "
                >

                  <button
                    type="button"
                    onClick={() =>
                      setShowModal(false)
                    }
                    className="
                      px-5
                      py-3
                      rounded-2xl
                      border border-gray-200
                      dark:border-white/10
                      w-full
                      sm:w-auto
                    "
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="
                      px-5
                      py-3
                      rounded-2xl
                      bg-blue-600
                      hover:bg-blue-700
                      text-white
                      transition-all
                      w-full
                      sm:w-auto
                    "
                  >
                    Add User
                  </button>

                </div>

              </form>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
};

export default Users;