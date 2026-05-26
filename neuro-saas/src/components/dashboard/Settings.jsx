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


  const [name, setName] =
    useState("Admin");

  const [email, setEmail] =
    useState(
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
          w-14
          h-7
          rounded-full
          transition-all
          duration-300
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
            w-5
            h-5
            rounded-full
            bg-white
            transition-all
            duration-300
            ${
              enabled
                ? "translate-x-7"
                : ""
            }
          `}
        />

      </button>
    );
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}


      <div
        className="
          flex
          flex-col
          lg:flex-row
          lg:items-center
          lg:justify-between
          gap-5
        "
      >

        <div>

          <h1
            className="
              text-3xl
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
            gap-2
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
            w-fit
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
          whileHover={{ y: -4 }}
          className="
            xl:col-span-1
            rounded-3xl
            border border-gray-200
            dark:border-white/10
            bg-white
            dark:bg-white/[0.03]
            p-6
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
                  w-28
                  h-28
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
                  w-10
                  h-10
                  rounded-xl
                  bg-blue-600
                  text-white
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >

                <Camera size={18} />

              </button>

            </div>

            <h2
              className="
                mt-5
                text-xl
                font-semibold
                text-gray-900
                dark:text-white
              "
            >
              {name}
            </h2>

            <p
              className="
                text-sm
                text-gray-500
                dark:text-gray-400
                mt-1
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
          whileHover={{ y: -4 }}
          className="
            xl:col-span-2
            rounded-3xl
            border border-gray-200
            dark:border-white/10
            bg-white
            dark:bg-white/[0.03]
            p-6
            shadow-sm
          "
        >

          <h2
            className="
              text-xl
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
                  className="
                    text-gray-400
                  "
                />

                <input
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(
                      e.target.value
                    )
                  }
                  className="
                    bg-transparent
                    outline-none
                    w-full
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
                  className="
                    text-gray-400
                  "
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  className="
                    bg-transparent
                    outline-none
                    w-full
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
                  className="
                    text-gray-400
                  "
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
                >

                  {showPassword ? (
                    <EyeOff
                      size={18}
                      className="
                        text-gray-400
                      "
                    />
                  ) : (
                    <Eye
                      size={18}
                      className="
                        text-gray-400
                      "
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
          whileHover={{ y: -4 }}
          className="
            rounded-3xl
            border border-gray-200
            dark:border-white/10
            bg-white
            dark:bg-white/[0.03]
            p-6
            shadow-sm
          "
        >

          <h2
            className="
              text-xl
              font-semibold
              text-gray-900
              dark:text-white
              mb-6
            "
          >
            App Preferences
          </h2>

          <div className="space-y-6">

            {/* NOTIFICATIONS */}
            <div
              className="
                flex
                items-center
                justify-between
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
                    w-12
                    h-12
                    rounded-2xl
                    bg-blue-500/10
                    text-blue-500
                    flex
                    items-center
                    justify-center
                  "
                >

                  <Bell size={20} />

                </div>

                <div>

                  <h3
                    className="
                      font-medium
                      text-gray-900
                      dark:text-white
                    "
                  >
                    Notifications
                  </h3>

                  <p
                    className="
                      text-sm
                      text-gray-500
                      dark:text-gray-400
                    "
                  >
                    Receive email alerts
                  </p>

                </div>

              </div>

              <Toggle
                enabled={
                  notifications
                }
                setEnabled={
                  setNotifications
                }
              />

            </div>

            {/* DARK ANALYTICS */}
            <div
              className="
                flex
                items-center
                justify-between
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
                    w-12
                    h-12
                    rounded-2xl
                    bg-purple-500/10
                    text-purple-500
                    flex
                    items-center
                    justify-center
                  "
                >

                  <Moon size={20} />

                </div>

                <div>

                  <h3
                    className="
                      font-medium
                      text-gray-900
                      dark:text-white
                    "
                  >
                    Dark Analytics
                  </h3>

                  <p
                    className="
                      text-sm
                      text-gray-500
                      dark:text-gray-400
                    "
                  >
                    Dark chart appearance
                  </p>

                </div>

              </div>

              <Toggle
                enabled={
                  darkAnalytics
                }
                setEnabled={
                  setDarkAnalytics
                }
              />

            </div>

            {/* AUTOSAVE */}
            <div
              className="
                flex
                items-center
                justify-between
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
                    w-12
                    h-12
                    rounded-2xl
                    bg-green-500/10
                    text-green-500
                    flex
                    items-center
                    justify-center
                  "
                >

                  <Globe size={20} />

                </div>

                <div>

                  <h3
                    className="
                      font-medium
                      text-gray-900
                      dark:text-white
                    "
                  >
                    Auto Save
                  </h3>

                  <p
                    className="
                      text-sm
                      text-gray-500
                      dark:text-gray-400
                    "
                  >
                    Save changes instantly
                  </p>

                </div>

              </div>

              <Toggle
                enabled={autoSave}
                setEnabled={
                  setAutoSave
                }
              />

            </div>

          </div>

        </motion.div>

        {/* SECURITY */}
        <motion.div
          whileHover={{ y: -4 }}
          className="
            rounded-3xl
            border border-gray-200
            dark:border-white/10
            bg-white
            dark:bg-white/[0.03]
            p-6
            shadow-sm
          "
        >

          <h2
            className="
              text-xl
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
                    w-12
                    h-12
                    rounded-2xl
                    bg-orange-500/10
                    text-orange-500
                    flex
                    items-center
                    justify-center
                  "
                >

                  <Shield size={20} />

                </div>

                <div>

                  <h3
                    className="
                      font-medium
                      text-gray-900
                      dark:text-white
                    "
                  >
                    Two Factor Auth
                  </h3>

                  <p
                    className="
                      text-sm
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
                p-5
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
                    w-12
                    h-12
                    rounded-2xl
                    bg-blue-500/10
                    text-blue-500
                    flex
                    items-center
                    justify-center
                  "
                >

                  <Smartphone size={20} />

                </div>

                <div>

                  <h3
                    className="
                      font-medium
                      text-gray-900
                      dark:text-white
                    "
                  >
                    Active Devices
                  </h3>

                  <p
                    className="
                      text-sm
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