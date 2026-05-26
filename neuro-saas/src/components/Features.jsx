import React from "react";

const Features = () => {
  const features = [
    {
      title: "Fast Deployment",
      desc: "Deploy applications in seconds with optimized CI/CD workflows.",
    },
    {
      title: "Secure Infrastructure",
      desc: "Enterprise-grade security with encrypted data handling and access control.",
    },
    {
      title: "Scalable Architecture",
      desc: "Built to scale from startup workloads to enterprise-level systems.",
    },
    {
      title: "Real-time Analytics",
      desc: "Monitor system performance and user activity in real time.",
    },
    {
      title: "API Integration",
      desc: "Connect seamlessly with third-party services and internal APIs.",
    },
    {
      title: "Team Collaboration",
      desc: "Manage teams, roles, and workflows in a unified workspace.",
    },
  ];

  return (
    <section
      className="
        py-14
        sm:py-16
        lg:py-24
        bg-white
      "
    >
      {/* HEADER */}
      <div
        className="
          text-center
          max-w-3xl
          mx-auto
          px-4
          sm:px-6
          mb-12
          sm:mb-16
        "
      >
        <h2
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-semibold
            text-gray-900
            tracking-tight
            leading-tight
          "
        >
          Built for Modern SaaS Teams
        </h2>

        <p
          className="
            mt-4
            text-gray-500
            text-sm
            sm:text-base
            lg:text-lg
            leading-relaxed
          "
        >
          Everything you need to build,
          deploy, and manage scalable
          applications without complexity.
        </p>
      </div>

      {/* GRID */}
      <div
        className="
          max-w-6xl
          mx-auto
          px-4
          sm:px-6
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
          sm:gap-6
        "
      >
        {features.map((item, index) => (
          <div
            key={index}
            className="
              group
              border
              border-gray-200
              rounded-2xl
              p-5
              sm:p-6
              bg-white
              hover:border-gray-300
              hover:shadow-lg
              transition-all
              duration-300
            "
          >
            {/* TITLE */}
            <h3
              className="
                text-lg
                sm:text-xl
                font-semibold
                text-gray-900
                group-hover:text-blue-600
                transition
              "
            >
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                mt-3
                text-sm
                sm:text-base
                text-gray-500
                leading-relaxed
              "
            >
              {item.desc}
            </p>

            {/* UNDERLINE */}
            <div
              className="
                mt-5
                w-0
                group-hover:w-14
                h-[2px]
                bg-blue-500
                transition-all
                duration-300
              "
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;