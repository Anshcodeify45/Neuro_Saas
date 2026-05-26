import React, { useState } from "react";

import {
  User,
  Mail,
  Lock,
  Bell,
  Shield,
  Moon,
  Camera,
  Save,
  Smartphone,
  Globe,
  Eye,
  EyeOff,
} from "lucide-react";

import { motion } from "framer-motion";

const Settings = () => {
  const [name, setName] = useState("Admin");

  const [email, setEmail] = useState(
    "admin@neurodash.ai"
  );

  const [password, setPassword] =
    useState("");

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  const [
    notifications,
    setNotifications,
  ] = useState(true);

  const [
    darkAnalytics,
    setDarkAnalytics,
  ] = useState(true);

  const [twoFA, setTwoFA] =
    useState(false);

  const [
    autoSave,
    setAutoSave,
  ] = useState(true);

  const [
    loading,
    setLoading,
  ] = useState(false);

  // SAVE FUNCTION
  const handleSave = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      alert(
        "Settings updated successfully 🚀"
      );
    }, 1500);
  };

  // TOGGLE SWITCH
  const Toggle = ({
    enabled,
    setEnabled,
  }) => {
    return (
      <button
        onClick={() =>
          setEnabled(!enabled)
        }
        className={`
          relative
          w-12 sm:w-14
          h-6 sm:h-7
          rounded-full
          transition-all
          duration-300
          shrink-0
          ${
            enabled
              ? "bg-blue-600"
              : "bg-gray-300 dark:bg-gray-700"
          }
        `}
      >
        <span
          className={`
            absolute
            top-1
            left-1
            w-4 sm:w-5
            h-4 sm:h-5
            rounded-full
            bg-white
            transition-all
            duration-300
            ${
              enabled
                ? "translate-x-6 sm:translate-x-7"
                : ""
            }
          `}
        />
      </button>
    );
  };

  return (
    <div className="space-y-6 sm:space-y-8">

      {/* HEADER */}
      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-4
        "
      >
        <div>
          <h1
            className="
              text-2xl
              sm:text-3xl
              font-bold
              text-gray-900
              dark:text-white
            "
          >
            Settings
          </h1>

          <p
            className="
              mt-2
              text-sm
              text-gray-500
              dark:text-gray-400
            "
          >
            Manage your profile,
            preferences, and security
          </p>
        </div>

        {/* SAVE BUTTON */}
        <button
          onClick={handleSave}
          className="
            flex
            items-center
            justify-center
            gap-2
            w-full
            sm:w-fit
            px-5
            py-3
            rounded-2xl
            bg-blue-600
            hover:bg-blue-700
            text-white
            text-sm
            shadow-lg
            shadow-blue-500/20
            transition-all
          "
        >
          <Save size={18} />

          {loading
            ? "Saving..."
            : "Save Changes"}
        </button>
      </div>

      {/* PROFILE SECTION */}
      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-3
          gap-6
        "
      >

        {/* PROFILE CARD */}
        <motion.div
          whileHover={{
            y: window.innerWidth > 768 ? -4 : 0,
          }}
          className="
            xl:col-span-1
            rounded-3xl
            border border-gray-200
            dark:border-white/10
            bg-white
            dark:bg-white/[0.03]
            p-4
            sm:p-6
            shadow-sm
          "
        >

          {/* PROFILE IMAGE */}
          <div
            className="
              flex
              flex-col
              items-center
              text-center
            "
          >
            <div className="relative">

              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="profile"
                className="
                  w-24
                  h-24
                  sm:w-28
                  sm:h-28
                  rounded-3xl
                  object-cover
                  border-4
                  border-blue-500/20
                "
              />

              <button
                className="
                  absolute
                  bottom-0
                  right-0
                  w-9
                  h-9
                  sm:w-10
                  sm:h-10
                  rounded-xl
                  bg-blue-600
                  text-white
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >
                <Camera size={16} />
              </button>

            </div>

            <h2
              className="
                mt-5
                text-lg
                sm:text-xl
                font-semibold
                text-gray-900
                dark:text-white
                break-all
              "
            >
              {name}
            </h2>

            <p
              className="
                text-xs
                sm:text-sm
                text-gray-500
                dark:text-gray-400
                mt-1
                break-all
              "
            >
              {email}
            </p>

            <div
              className="
                mt-5
                px-4
                py-2
                rounded-xl
                bg-blue-500/10
                text-blue-600
                text-sm
                font-medium
              "
            >
              Administrator
            </div>

          </div>

        </motion.div>

        {/* SETTINGS FORM */}
        <motion.div
          whileHover={{
            y: window.innerWidth > 768 ? -4 : 0,
          }}
          className="
            xl:col-span-2
            rounded-3xl
            border border-gray-200
            dark:border-white/10
            bg-white
            dark:bg-white/[0.03]
            p-4
            sm:p-6
            shadow-sm
          "
        >

          <h2
            className="
              text-lg
              sm:text-xl
              font-semibold
              text-gray-900
              dark:text-white
              mb-6
            "
          >
            Personal Information
          </h2>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-5
            "
          >

            {/* NAME */}
            <div>

              <label
                className="
                  text-sm
                  text-gray-500
                  dark:text-gray-400
                  mb-2
                  block
                "
              >
                Full Name
              </label>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-2xl
                  border border-gray-200
                  dark:border-white/10
                  bg-gray-50
                  dark:bg-white/[0.02]
                "
              >

                <User
                  size={18}
                  className="text-gray-400 shrink-0"
                />

                <input
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  className="
                    bg-transparent
                    outline-none
                    w-full
                    text-sm
                    sm:text-base
                    text-gray-900
                    dark:text-white
                  "
                />

              </div>

            </div>

            {/* EMAIL */}
            <div>

              <label
                className="
                  text-sm
                  text-gray-500
                  dark:text-gray-400
                  mb-2
                  block
                "
              >
                Email Address
              </label>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-2xl
                  border border-gray-200
                  dark:border-white/10
                  bg-gray-50
                  dark:bg-white/[0.02]
                "
              >

                <Mail
                  size={18}
                  className="text-gray-400 shrink-0"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="
                    bg-transparent
                    outline-none
                    w-full
                    text-sm
                    sm:text-base
                    text-gray-900
                    dark:text-white
                  "
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div className="md:col-span-2">

              <label
                className="
                  text-sm
                  text-gray-500
                  dark:text-gray-400
                  mb-2
                  block
                "
              >
                Password
              </label>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-2xl
                  border border-gray-200
                  dark:border-white/10
                  bg-gray-50
                  dark:bg-white/[0.02]
                "
              >

                <Lock
                  size={18}
                  className="text-gray-400 shrink-0"
                />

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  placeholder="Enter new password"
                  className="
                    bg-transparent
                    outline-none
                    w-full
                    text-sm
                    sm:text-base
                    text-gray-900
                    dark:text-white
                  "
                />

                <button
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className="shrink-0"
                >
                  {showPassword ? (
                    <EyeOff
                      size={18}
                      className="text-gray-400"
                    />
                  ) : (
                    <Eye
                      size={18}
                      className="text-gray-400"
                    />
                  )}
                </button>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

      {/* PREFERENCES */}
      <div
        className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
        "
      >

        {/* APP SETTINGS */}
        <motion.div
          whileHover={{
            y: window.innerWidth > 768 ? -4 : 0,
          }}
          className="
            rounded-3xl
            border border-gray-200
            dark:border-white/10
            bg-white
            dark:bg-white/[0.03]
            p-4
            sm:p-6
            shadow-sm
          "
        >

          <h2
            className="
              text-lg
              sm:text-xl
              font-semibold
              text-gray-900
              dark:text-white
              mb-6
            "
          >
            App Preferences
          </h2>

          <div className="space-y-5">

            {/* ITEM */}
            {[
              {
                icon: Bell,
                color:
                  "bg-blue-500/10 text-blue-500",
                title: "Notifications",
                desc: "Receive email alerts",
                enabled: notifications,
                setEnabled:
                  setNotifications,
              },
              {
                icon: Moon,
                color:
                  "bg-purple-500/10 text-purple-500",
                title: "Dark Analytics",
                desc: "Dark chart appearance",
                enabled: darkAnalytics,
                setEnabled:
                  setDarkAnalytics,
              },
              {
                icon: Globe,
                color:
                  "bg-green-500/10 text-green-500",
                title: "Auto Save",
                desc: "Save changes instantly",
                enabled: autoSave,
                setEnabled:
                  setAutoSave,
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      min-w-0
                    "
                  >

                    <div
                      className={`
                        w-11
                        h-11
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        shrink-0
                        ${item.color}
                      `}
                    >
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0">

                      <h3
                        className="
                          font-medium
                          text-sm
                          sm:text-base
                          text-gray-900
                          dark:text-white
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          text-xs
                          sm:text-sm
                          text-gray-500
                          dark:text-gray-400
                        "
                      >
                        {item.desc}
                      </p>

                    </div>

                  </div>

                  <Toggle
                    enabled={item.enabled}
                    setEnabled={
                      item.setEnabled
                    }
                  />

                </div>
              );
            })}

          </div>

        </motion.div>

        {/* SECURITY */}
        <motion.div
          whileHover={{
            y: window.innerWidth > 768 ? -4 : 0,
          }}
          className="
            rounded-3xl
            border border-gray-200
            dark:border-white/10
            bg-white
            dark:bg-white/[0.03]
            p-4
            sm:p-6
            shadow-sm
          "
        >

          <h2
            className="
              text-lg
              sm:text-xl
              font-semibold
              text-gray-900
              dark:text-white
              mb-6
            "
          >
            Security
          </h2>

          <div className="space-y-6">

            {/* 2FA */}
            <div
              className="
                flex
                items-center
                justify-between
                gap-4
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                  min-w-0
                "
              >

                <div
                  className="
                    w-11
                    h-11
                    rounded-2xl
                    bg-orange-500/10
                    text-orange-500
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >

                  <Shield size={20} />

                </div>

                <div>

                  <h3
                    className="
                      font-medium
                      text-sm
                      sm:text-base
                      text-gray-900
                      dark:text-white
                    "
                  >
                    Two Factor Auth
                  </h3>

                  <p
                    className="
                      text-xs
                      sm:text-sm
                      text-gray-500
                      dark:text-gray-400
                    "
                  >
                    Extra security layer
                  </p>

                </div>

              </div>

              <Toggle
                enabled={twoFA}
                setEnabled={setTwoFA}
              />

            </div>

            {/* DEVICES */}
            <div
              className="
                rounded-2xl
                border border-gray-200
                dark:border-white/10
                p-4
                sm:p-5
                bg-gray-50
                dark:bg-white/[0.02]
              "
            >

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
                    bg-blue-500/10
                    text-blue-500
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >

                  <Smartphone size={20} />

                </div>

                <div className="min-w-0">

                  <h3
                    className="
                      font-medium
                      text-sm
                      sm:text-base
                      text-gray-900
                      dark:text-white
                    "
                  >
                    Active Devices
                  </h3>

                  <p
                    className="
                      text-xs
                      sm:text-sm
                      text-gray-500
                      dark:text-gray-400
                    "
                  >
                    Windows • Chrome
                  </p>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </div>
  );
};

export default Settings;