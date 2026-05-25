import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">

      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600">
            NeuroSaaS
          </h2>

          <p className="text-sm text-gray-500 mt-4 leading-relaxed">
            A modern SaaS platform for deploying, managing, and scaling web applications
            with real-time insights.
          </p>
        </div>

        {/* PRODUCT */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Product
          </h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li className="hover:text-blue-600 cursor-pointer">Dashboard</li>
            <li className="hover:text-blue-600 cursor-pointer">Analytics</li>
            <li className="hover:text-blue-600 cursor-pointer">Activity Logs</li>
            <li className="hover:text-blue-600 cursor-pointer">API Access</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Company
          </h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Careers</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact</li>
            <li className="hover:text-blue-600 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Resources
          </h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li className="hover:text-blue-600 cursor-pointer">Documentation</li>
            <li className="hover:text-blue-600 cursor-pointer">Help Center</li>
            <li className="hover:text-blue-600 cursor-pointer">System Status</li>
            <li className="hover:text-blue-600 cursor-pointer">Security</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t">

        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} NeuroSaaS. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <span className="hover:text-blue-600 cursor-pointer">Terms</span>
            <span className="hover:text-blue-600 cursor-pointer">Privacy</span>
            <span className="hover:text-blue-600 cursor-pointer">Cookies</span>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;