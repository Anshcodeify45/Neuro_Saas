import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* MAIN FOOTER */}
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-12
          sm:py-14
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10
        "
      >
        {/* BRAND */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h2
            className="
              text-2xl
              sm:text-3xl
              font-bold
              text-blue-600
            "
          >
            NeuroSaaS
          </h2>

          <p
            className="
              text-sm
              sm:text-base
              text-gray-500
              mt-4
              leading-relaxed
              max-w-sm
            "
          >
            A modern SaaS platform for
            deploying, managing, and scaling
            web applications with real-time
            insights.
          </p>
        </div>

        {/* PRODUCT */}
        <div>
          <h3
            className="
              text-sm
              font-semibold
              text-gray-900
              uppercase
              tracking-wide
              mb-4
            "
          >
            Product
          </h3>

          <ul className="space-y-3">
            {[
              "Dashboard",
              "Analytics",
              "Activity Logs",
              "API Access",
            ].map((item, index) => (
              <li
                key={index}
                className="
                  text-sm
                  text-gray-600
                  hover:text-blue-600
                  cursor-pointer
                  transition-colors
                  duration-200
                "
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3
            className="
              text-sm
              font-semibold
              text-gray-900
              uppercase
              tracking-wide
              mb-4
            "
          >
            Company
          </h3>

          <ul className="space-y-3">
            {[
              "About",
              "Careers",
              "Contact",
              "Privacy Policy",
            ].map((item, index) => (
              <li
                key={index}
                className="
                  text-sm
                  text-gray-600
                  hover:text-blue-600
                  cursor-pointer
                  transition-colors
                  duration-200
                "
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h3
            className="
              text-sm
              font-semibold
              text-gray-900
              uppercase
              tracking-wide
              mb-4
            "
          >
            Resources
          </h3>

          <ul className="space-y-3">
            {[
              "Documentation",
              "Help Center",
              "System Status",
              "Security",
            ].map((item, index) => (
              <li
                key={index}
                className="
                  text-sm
                  text-gray-600
                  hover:text-blue-600
                  cursor-pointer
                  transition-colors
                  duration-200
                "
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-200">
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            py-5
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          {/* COPYRIGHT */}
          <p
            className="
              text-sm
              text-center
              md:text-left
              text-gray-500
            "
          >
            © {new Date().getFullYear()}{" "}
            NeuroSaaS. All rights reserved.
          </p>

          {/* LINKS */}
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
              sm:gap-6
              text-sm
              text-gray-500
            "
          >
            {["Terms", "Privacy", "Cookies"].map(
              (item, index) => (
                <span
                  key={index}
                  className="
                    hover:text-blue-600
                    cursor-pointer
                    transition-colors
                    duration-200
                  "
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;