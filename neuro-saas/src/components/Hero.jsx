import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-white to-white" />

      <div
        className="
          absolute
          top-[-120px]
          left-1/2
          -translate-x-1/2
          w-[320px]
          sm:w-[500px]
          lg:w-[700px]
          h-[320px]
          sm:h-[500px]
          lg:h-[700px]
          bg-blue-200/30
          blur-[120px]
          rounded-full
        "
      />

      {/* MAIN */}
      <div
        className="
          relative
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-20
          sm:py-24
          lg:py-28
          text-center
        "
      >

        {/* BADGE */}
        <div
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-1.5
            rounded-full
            bg-blue-50
            border border-blue-100
            text-blue-600
            text-xs
            sm:text-sm
            font-medium
            mb-6
          "
        >
          🚀 Next-Gen SaaS Platform
        </div>

        {/* HEADING */}
        <h1
          className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            xl:text-7xl
            font-bold
            tracking-tight
            text-gray-900
            leading-tight
          "
        >
          Build, Manage & Scale
          <br />

          <span className="text-blue-600">
            Modern Web Applications
          </span>
        </h1>

        {/* SUBTEXT */}
        <p
          className="
            mt-6
            text-base
            sm:text-lg
            lg:text-xl
            text-gray-600
            max-w-3xl
            mx-auto
            leading-relaxed
            px-2
          "
        >
          A modern SaaS platform to deploy, monitor, and manage applications
          with real-time insights, system tracking, and secure infrastructure.
        </p>

        {/* CTA */}
        <div
          className="
            mt-10
            flex
            flex-col
            sm:flex-row
            items-center
            justify-center
            gap-4
          "
        >

          <Link
            to="/login"
            className="w-full sm:w-auto"
          >
            <button
              className="
                w-full
                sm:w-auto
                px-7
                py-3
                rounded-xl
                bg-blue-600
                text-white
                font-medium
                shadow-md
                hover:shadow-lg
                hover:bg-blue-700
                transition
              "
            >
              Get Started
            </button>
          </Link>

          <button
            onClick={() => setShowDemo(true)}
            className="
              w-full
              sm:w-auto
              px-7
              py-3
              rounded-xl
              border border-gray-300
              text-gray-700
              font-medium
              hover:bg-gray-50
              transition
            "
          >
            View Demo
          </button>

        </div>

        {/* DASHBOARD PREVIEW */}
        <div
          className="
            mt-14
            sm:mt-16
            mx-auto
            max-w-6xl
          "
        >

          <div
            className="
              rounded-2xl
              border border-gray-200
              shadow-xl
              bg-white
              overflow-hidden
            "
          >

            {/* TOP BAR */}
            <div
              className="
                flex
                items-center
                gap-2
                px-4
                sm:px-5
                py-3
                border-b border-gray-100
              "
            >

              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>

              <div
                className="
                  ml-auto
                  text-[10px]
                  sm:text-xs
                  text-gray-400
                  truncate
                "
              >
                dashboard.neurosaas.app
              </div>

            </div>

            {/* CONTENT */}
            <div
              className="
                bg-gray-50
                flex
                flex-col
                p-3
                sm:p-5
                lg:p-6
                gap-4
                sm:gap-5
              "
            >

              {/* KPI CARDS */}
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-3
                  gap-4
                "
              >

                <div
                  className="
                    bg-white
                    border
                    rounded-xl
                    p-4
                    shadow-sm
                  "
                >

                  <p className="text-xs text-gray-500">
                    Total Users
                  </p>

                  <p
                    className="
                      text-lg
                      sm:text-xl
                      font-semibold
                      mt-1
                      text-gray-900
                    "
                  >
                    1,248
                  </p>

                </div>

                <div
                  className="
                    bg-white
                    border
                    rounded-xl
                    p-4
                    shadow-sm
                  "
                >

                  <p className="text-xs text-gray-500">
                    Active Sessions
                  </p>

                  <p
                    className="
                      text-lg
                      sm:text-xl
                      font-semibold
                      mt-1
                      text-gray-900
                    "
                  >
                    312
                  </p>

                </div>

                <div
                  className="
                    bg-white
                    border
                    rounded-xl
                    p-4
                    shadow-sm
                  "
                >

                  <p className="text-xs text-gray-500">
                    Activity Logs
                  </p>

                  <p
                    className="
                      text-lg
                      sm:text-xl
                      font-semibold
                      mt-1
                      text-gray-900
                    "
                  >
                    8,420
                  </p>

                </div>

              </div>

              {/* MIDDLE SECTION */}
              <div
                className="
                  grid
                  grid-cols-1
                  lg:grid-cols-5
                  gap-4
                "
              >

                {/* CHART */}
                <div
                  className="
                    lg:col-span-3
                    bg-white
                    border
                    rounded-xl
                    p-4
                    shadow-sm
                    min-h-[220px]
                  "
                >

                  <p
                    className="
                      text-xs
                      text-gray-500
                      mb-4
                    "
                  >
                    Analytics Overview
                  </p>

                  <div
                    className="
                      h-[150px]
                      sm:h-[180px]
                      flex
                      items-end
                      justify-center
                      gap-2
                    "
                  >

                    <div className="w-5 sm:w-6 h-20 bg-blue-200 rounded"></div>
                    <div className="w-5 sm:w-6 h-28 bg-blue-300 rounded"></div>
                    <div className="w-5 sm:w-6 h-16 bg-blue-200 rounded"></div>
                    <div className="w-5 sm:w-6 h-32 bg-blue-400 rounded"></div>
                    <div className="w-5 sm:w-6 h-24 bg-blue-300 rounded"></div>

                  </div>

                </div>

                {/* ACTIVITY */}
                <div
                  className="
                    lg:col-span-2
                    bg-white
                    border
                    rounded-xl
                    p-4
                    shadow-sm
                  "
                >

                  <p
                    className="
                      text-xs
                      text-gray-500
                      mb-3
                    "
                  >
                    Recent Activity
                  </p>

                  <div
                    className="
                      space-y-3
                      text-xs
                      text-gray-600
                    "
                  >

                    <div className="p-2 bg-gray-50 rounded">
                      User logged in
                    </div>

                    <div className="p-2 bg-gray-50 rounded">
                      New user registered
                    </div>

                    <div className="p-2 bg-gray-50 rounded">
                      Profile updated
                    </div>

                    <div className="p-2 bg-gray-50 rounded">
                      System backup completed
                    </div>

                  </div>

                </div>

              </div>

              {/* TABLE */}
              <div
                className="
                  bg-white
                  border
                  rounded-xl
                  p-4
                  shadow-sm
                  overflow-x-auto
                "
              >

                <p
                  className="
                    text-xs
                    text-gray-500
                    mb-3
                  "
                >
                  Latest Users
                </p>

                <div className="min-w-[500px]">

                  <div
                    className="
                      grid
                      grid-cols-3
                      text-xs
                      text-gray-600
                      border-b
                      pb-2
                      font-medium
                    "
                  >

                    <span>Name</span>
                    <span>Email</span>
                    <span>Status</span>

                  </div>

                  <div
                    className="
                      grid
                      grid-cols-3
                      text-xs
                      py-3
                      border-b
                    "
                  >

                    <span>Anish</span>

                    <span className="truncate">
                      anish@mail.com
                    </span>

                    <span className="text-green-600">
                      Active
                    </span>

                  </div>

                  <div
                    className="
                      grid
                      grid-cols-3
                      text-xs
                      py-3
                    "
                  >

                    <span>John</span>

                    <span className="truncate">
                      john@mail.com
                    </span>

                    <span className="text-yellow-600">
                      Pending
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* MODAL */}
      {showDemo && (

        <div
          className="
            fixed
            inset-0
            bg-black/60
            flex
            items-center
            justify-center
            z-50
            p-4
          "
        >

          <div
            className="
              bg-white
              rounded-2xl
              w-full
              max-w-5xl
              shadow-2xl
              overflow-hidden
              max-h-[90vh]
              overflow-y-auto
            "
          >

            {/* HEADER */}
            <div className="p-5 sm:p-6 border-b">

              <h2
                className="
                  text-lg
                  sm:text-xl
                  font-semibold
                "
              >
                Product Demo
              </h2>

              <p
                className="
                  text-sm
                  text-gray-500
                  mt-1
                "
              >
                Overview of NeuroSaaS dashboard experience
              </p>

            </div>

            {/* IMAGE */}
            <div
              className="
                relative
                bg-gray-100
                flex
                items-center
                justify-center
                p-3
                sm:p-6
              "
            >

              <div
                className="
                  w-full
                  rounded-2xl
                  overflow-hidden
                  shadow-2xl
                  border border-gray-200
                "
              >

                {/* TOP BAR */}
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-3
                    bg-gray-200
                  "
                >

                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>

                  <div
                    className="
                      ml-4
                      text-[10px]
                      sm:text-xs
                      text-gray-500
                      truncate
                    "
                  >
                    neuro-saas-dashboard.vercel.app
                  </div>

                </div>

                {/* DASHBOARD IMAGE */}
                <img
                  src="/dashboard.png"
                  alt="Dashboard Preview"
                  className="
                    w-full
                    object-cover
                  "
                />

              </div>

            </div>

            {/* FOOTER */}
            <div
              className="
                p-4
                flex
                justify-end
              "
            >

              <button
                onClick={() => setShowDemo(false)}
                className="
                  w-full
                  sm:w-auto
                  px-5
                  py-2
                  rounded-lg
                  bg-gray-100
                  hover:bg-gray-200
                  transition
                "
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </section>
  );
};

export default Hero;