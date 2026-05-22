import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-blue-50 to-white">
      
      {/* Badge */}
      <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm mb-6">
        🚀 Next-Gen SaaS Platform
      </span>

      {/* Heading */}
      <h1 className="text-5xl font-bold text-gray-900 leading-tight max-w-3xl">
        Build & Scale Your Web Apps Faster with NeuroSaaS
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-gray-600 text-lg max-w-2xl">
        A modern SaaS platform to deploy, manage, and scale your applications with speed, security, and simplicity.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>

        <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
          View Demo
        </button>
      </div>

      {/* Mock UI Box */}
      <div className="mt-12 w-full max-w-4xl h-64 bg-white shadow-lg rounded-xl border flex items-center justify-center text-gray-400">
        Dashboard Preview Area
      </div>

    </section>
  );
};

export default Hero;