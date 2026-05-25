import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-white to-white" />
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200/30 blur-[140px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">

        {/* Badge (slightly cleaner) */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
          🚀 Next-Gen SaaS Platform
        </div>

        {/* Heading (unchanged, just tighter tracking) */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
          Build, Manage & Scale
          <br />
          <span className="text-blue-600">Modern Web Applications</span>
        </h1>

        {/* Subtext (slightly more realistic tone) */}
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A modern SaaS platform to deploy, monitor, and manage applications with
          real-time insights, system tracking, and secure infrastructure.
        </p>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">

          <Link to="/login">
            <button className="px-7 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:shadow-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </Link>

          <button
            onClick={() => setShowDemo(true)}
            className="px-7 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition"
          >
            View Demo
          </button>

        </div>

        {/* DASHBOARD PREVIEW (your best version, only refined) */}
        <div className="mt-16 mx-auto max-w-5xl">

          <div className="rounded-2xl border border-gray-200 shadow-xl bg-white overflow-hidden">

            {/* top bar (slightly cleaner realism) */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>

              <div className="ml-auto text-xs text-gray-400">
                dashboard.neurosaas.app
              </div>
            </div>

            {/* CONTENT */}
            <div className="h-[420px] bg-gray-50 flex flex-col p-6 gap-5">

              {/* KPI Cards (slightly improved spacing) */}
              <div className="grid grid-cols-3 gap-4">

                <div className="bg-white border rounded-xl p-4 shadow-sm">
                  <p className="text-xs text-gray-500">Total Users</p>
                  <p className="text-xl font-semibold mt-1 text-gray-900">1,248</p>
                </div>

                <div className="bg-white border rounded-xl p-4 shadow-sm">
                  <p className="text-xs text-gray-500">Active Sessions</p>
                  <p className="text-xl font-semibold mt-1 text-gray-900">312</p>
                </div>

                <div className="bg-white border rounded-xl p-4 shadow-sm">
                  <p className="text-xs text-gray-500">Activity Logs</p>
                  <p className="text-xl font-semibold mt-1 text-gray-900">8,420</p>
                </div>

              </div>

              {/* Middle Section */}
              <div className="grid grid-cols-5 gap-4 flex-1">

                {/* Chart */}
                <div className="col-span-3 bg-white border rounded-xl p-4 shadow-sm flex flex-col justify-center">

                  <p className="text-xs text-gray-500 mb-3">Analytics Overview</p>

                  <div className="h-full flex items-end gap-2">
                    <div className="w-6 h-20 bg-blue-200 rounded"></div>
                    <div className="w-6 h-28 bg-blue-300 rounded"></div>
                    <div className="w-6 h-16 bg-blue-200 rounded"></div>
                    <div className="w-6 h-32 bg-blue-400 rounded"></div>
                    <div className="w-6 h-24 bg-blue-300 rounded"></div>
                  </div>

                </div>

                {/* Activity */}
                <div className="col-span-2 bg-white border rounded-xl p-4 shadow-sm">

                  <p className="text-xs text-gray-500 mb-3">Recent Activity</p>

                  <div className="space-y-3 text-xs text-gray-600">

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

              {/* Table */}
              <div className="bg-white border rounded-xl p-4 shadow-sm">

                <p className="text-xs text-gray-500 mb-3">Latest Users</p>

                <div className="grid grid-cols-3 text-xs text-gray-600 border-b pb-2">
                  <span>Name</span>
                  <span>Email</span>
                  <span>Status</span>
                </div>

                <div className="grid grid-cols-3 text-xs py-2 border-b">
                  <span>Anish</span>
                  <span>anish@mail.com</span>
                  <span className="text-green-600">Active</span>
                </div>

                <div className="grid grid-cols-3 text-xs py-2">
                  <span>John</span>
                  <span>john@mail.com</span>
                  <span className="text-yellow-600">Pending</span>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      {/* MODAL (unchanged, already good) */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

          <div className="bg-white rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden">

            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Product Demo</h2>
              <p className="text-sm text-gray-500 mt-1">
                Overview of NeuroSaaS dashboard experience
              </p>
            </div>

            <div className="h-72 bg-gray-100 flex items-center justify-center text-gray-500">
              Demo Preview Placeholder (Video / GIF / Screenshots)
            </div>

            <div className="p-4 flex justify-end">
              <button
                onClick={() => setShowDemo(false)}
                className="px-5 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
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