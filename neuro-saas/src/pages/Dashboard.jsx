import React from "react";

import Stats from "../components/dashboard/Stats";
import ChartBox from "../components/dashboard/ChartBox";
import Table from "../components/dashboard/Table";
import Activity from "../components/dashboard/Activity";

const Dashboard = () => {
  return (
    <div
      className="
        min-h-screen
        bg-gray-50
        dark:bg-gray-950
        px-4
        sm:px-6
        lg:px-8
        py-6
        sm:py-8
        space-y-6
        sm:space-y-8
        transition-colors
        duration-300
        overflow-hidden
      "
    >

      {/* HEADER */}
      <div className="max-w-7xl mx-auto">

        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-4
          "
        >

          {/* LEFT */}
          <div>

            <h1
              className="
                text-2xl
                sm:text-3xl
                lg:text-4xl
                font-semibold
                text-gray-900
                dark:text-white
                tracking-tight
              "
            >
              Dashboard
            </h1>

            <p
              className="
                text-sm
                sm:text-base
                text-gray-500
                dark:text-gray-400
                mt-2
                leading-relaxed
              "
            >
              Overview of your system performance,
              activity, and analytics
            </p>

          </div>

          {/* RIGHT */}
          <div
            className="
              text-xs
              sm:text-sm
              text-gray-400
              dark:text-gray-500
            "
          >
            Last updated: just now
          </div>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div
        className="
          max-w-7xl
          mx-auto
          space-y-6
          sm:space-y-8
        "
      >

        {/* STATS */}
        <div className="w-full overflow-hidden">
          <Stats />
        </div>

        {/* CHART + ACTIVITY */}
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-3
            gap-6
            items-start
          "
        >

          {/* CHART */}
          <div
            className="
              xl:col-span-2
              w-full
              overflow-hidden
            "
          >
            <ChartBox />
          </div>

          {/* ACTIVITY */}
          <div
            className="
              w-full
              overflow-hidden
            "
          >
            <Activity />
          </div>

        </div>

        {/* TABLE */}
        <div
          className="
            w-full
            overflow-x-auto
          "
        >
          <Table />
        </div>

      </div>

    </div>
  );
};

export default Dashboard;