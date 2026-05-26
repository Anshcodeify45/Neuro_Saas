import React, { useState } from "react";

import {
  Camera,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Pencil,
  Save,
} from "lucide-react";

import { motion } from "framer-motion";

const Profile = () => {
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Anish Malhotra",
    email: "anish@neurodash.ai",
    phone: "+91 9876543210",
    location: "Bhubaneswar, India",
    role: "Frontend Developer",
    bio: "Building modern dashboards and scalable UI experiences.",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setEditing(false);

    console.log(profile);
  };

  return (
    <div
      className="
        min-h-screen
        bg-gray-50
        dark:bg-gray-950
        px-4
        sm:px-6
        lg:px-8
        py-5
        sm:py-6
      "
    >
      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto space-y-6">

        {/* HEADER */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
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
              My Profile
            </h1>

            <p
              className="
                text-sm
                text-gray-500
                dark:text-gray-400
                mt-1
              "
            >
              Manage your personal information and account settings
            </p>

          </div>

          {!editing ? (

            <button
              onClick={() => setEditing(true)}
              className="
                w-full
                sm:w-auto
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
                font-medium
                transition
              "
            >

              <Pencil size={16} />

              Edit Profile

            </button>

          ) : (

            <button
              onClick={handleSave}
              className="
                w-full
                sm:w-auto
                flex
                items-center
                justify-center
                gap-2
                px-5
                py-3
                rounded-2xl
                bg-green-600
                hover:bg-green-700
                text-white
                text-sm
                font-medium
                transition
              "
            >

              <Save size={16} />

              Save Changes

            </button>

          )}

        </div>

        {/* PROFILE GRID */}
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-3
            gap-6
          "
        >

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              xl:col-span-1
              bg-white
              dark:bg-gray-900
              rounded-3xl
              border
              border-gray-200
              dark:border-white/10
              shadow-sm
              p-5
              sm:p-6
            "
          >

            {/* PROFILE IMAGE */}
            <div className="flex flex-col items-center text-center">

              <div className="relative">

                <div
                  className="
                    w-24
                    h-24
                    sm:w-32
                    sm:h-32
                    rounded-3xl
                    bg-gradient-to-br
                    from-blue-500
                    to-indigo-600
                    flex
                    items-center
                    justify-center
                    text-white
                    text-3xl
                    sm:text-4xl
                    font-bold
                    shadow-xl
                  "
                >
                  {profile.name.charAt(0)}
                </div>

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
                    bg-white
                    dark:bg-gray-800
                    border
                    border-gray-200
                    dark:border-white/10
                    flex
                    items-center
                    justify-center
                    shadow-md
                  "
                >

                  <Camera size={16} />

                </button>

              </div>

              <h2
                className="
                  mt-5
                  text-xl
                  sm:text-2xl
                  font-bold
                  text-gray-900
                  dark:text-white
                "
              >
                {profile.name}
              </h2>

              <p className="text-sm text-blue-600 mt-1">
                {profile.role}
              </p>

              <p
                className="
                  text-sm
                  text-gray-500
                  dark:text-gray-400
                  mt-4
                  leading-relaxed
                  max-w-sm
                "
              >
                {profile.bio}
              </p>

            </div>

            {/* STATUS */}
            <div
              className="
                mt-8
                p-4
                rounded-2xl
                bg-green-50
                dark:bg-green-500/10
                border
                border-green-100
                dark:border-green-500/20
                flex
                items-start
                sm:items-center
                gap-3
              "
            >

              <div
                className="
                  min-w-[44px]
                  w-11
                  h-11
                  rounded-xl
                  bg-green-100
                  dark:bg-green-500/20
                  flex
                  items-center
                  justify-center
                "
              >

                <ShieldCheck
                  size={20}
                  className="text-green-600"
                />

              </div>

              <div>

                <p
                  className="
                    text-sm
                    font-semibold
                    text-green-700
                    dark:text-green-400
                  "
                >
                  Verified Account
                </p>

                <p
                  className="
                    text-xs
                    text-green-600/80
                    dark:text-green-400/70
                    mt-1
                  "
                >
                  Your profile is secure
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="
              xl:col-span-2
              bg-white
              dark:bg-gray-900
              rounded-3xl
              border
              border-gray-200
              dark:border-white/10
              shadow-sm
              p-5
              sm:p-6
            "
          >

            {/* HEADER */}
            <div className="mb-8">

              <h3
                className="
                  text-lg
                  sm:text-xl
                  font-semibold
                  text-gray-900
                  dark:text-white
                "
              >
                Personal Information
              </h3>

              <p
                className="
                  text-sm
                  text-gray-500
                  dark:text-gray-400
                  mt-1
                "
              >
                Update your account details here
              </p>

            </div>

            {/* FORM GRID */}
            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-5
                sm:gap-6
              "
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
                  name="name"
                  value={profile.name}
                  disabled={!editing}
                  onChange={handleChange}
                  className="
                    mt-2
                    w-full
                    px-4
                    py-3
                    rounded-2xl
                    border
                    border-gray-200
                    dark:border-white/10
                    bg-gray-50
                    dark:bg-white/[0.03]
                    outline-none
                    focus:ring-2
                    focus:ring-blue-500
                    text-gray-900
                    dark:text-white
                    text-sm
                    sm:text-base
                  "
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

                <div className="relative mt-2">

                  <Mail
                    size={18}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    disabled={!editing}
                    onChange={handleChange}
                    className="
                      w-full
                      pl-12
                      pr-4
                      py-3
                      rounded-2xl
                      border
                      border-gray-200
                      dark:border-white/10
                      bg-gray-50
                      dark:bg-white/[0.03]
                      outline-none
                      focus:ring-2
                      focus:ring-blue-500
                      text-gray-900
                      dark:text-white
                      text-sm
                      sm:text-base
                    "
                  />

                </div>

              </div>

              {/* PHONE */}
              <div>

                <label
                  className="
                    text-sm
                    font-medium
                    text-gray-700
                    dark:text-gray-300
                  "
                >
                  Phone Number
                </label>

                <div className="relative mt-2">

                  <Phone
                    size={18}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    type="text"
                    name="phone"
                    value={profile.phone}
                    disabled={!editing}
                    onChange={handleChange}
                    className="
                      w-full
                      pl-12
                      pr-4
                      py-3
                      rounded-2xl
                      border
                      border-gray-200
                      dark:border-white/10
                      bg-gray-50
                      dark:bg-white/[0.03]
                      outline-none
                      focus:ring-2
                      focus:ring-blue-500
                      text-gray-900
                      dark:text-white
                      text-sm
                      sm:text-base
                    "
                  />

                </div>

              </div>

              {/* LOCATION */}
              <div>

                <label
                  className="
                    text-sm
                    font-medium
                    text-gray-700
                    dark:text-gray-300
                  "
                >
                  Location
                </label>

                <div className="relative mt-2">

                  <MapPin
                    size={18}
                    className="
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                  />

                  <input
                    type="text"
                    name="location"
                    value={profile.location}
                    disabled={!editing}
                    onChange={handleChange}
                    className="
                      w-full
                      pl-12
                      pr-4
                      py-3
                      rounded-2xl
                      border
                      border-gray-200
                      dark:border-white/10
                      bg-gray-50
                      dark:bg-white/[0.03]
                      outline-none
                      focus:ring-2
                      focus:ring-blue-500
                      text-gray-900
                      dark:text-white
                      text-sm
                      sm:text-base
                    "
                  />

                </div>

              </div>

            </div>

            {/* BIO */}
            <div className="mt-6">

              <label
                className="
                  text-sm
                  font-medium
                  text-gray-700
                  dark:text-gray-300
                "
              >
                Bio
              </label>

              <textarea
                rows={5}
                name="bio"
                value={profile.bio}
                disabled={!editing}
                onChange={handleChange}
                className="
                  mt-2
                  w-full
                  px-4
                  py-3
                  rounded-2xl
                  border
                  border-gray-200
                  dark:border-white/10
                  bg-gray-50
                  dark:bg-white/[0.03]
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  text-gray-900
                  dark:text-white
                  resize-none
                  text-sm
                  sm:text-base
                "
              />

            </div>

          </motion.div>

        </div>

      </div>

    </div>
  );
};

export default Profile;