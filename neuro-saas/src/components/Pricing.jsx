import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      desc: "For individuals getting started",
      features: [
        "Basic features",
        "Community support",
        "Limited usage",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$19",
      desc: "For professionals and developers",
      features: [
        "All Starter features",
        "Priority support",
        "Advanced tools",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$49",
      desc: "For large teams and companies",
      features: [
        "All Pro features",
        "Dedicated support",
        "Custom solutions",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 overflow-hidden">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">

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
          Simple, Transparent Pricing
        </h2>

        <p
          className="
            mt-4
            text-sm
            sm:text-base
            lg:text-lg
            text-gray-500
            leading-relaxed
          "
        >
          Choose a plan that fits your workflow.
          Upgrade or downgrade anytime.
        </p>

      </div>

      {/* Cards */}
      <div
        className="
          max-w-6xl
          mx-auto
          px-4
          sm:px-6
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
          lg:gap-8
        "
      >

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`
              relative
              rounded-2xl
              border
              bg-white
              p-6
              sm:p-8
              transition-all
              duration-300
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              flex
              flex-col
              ${
                plan.highlight
                  ? `
                    border-blue-500
                    md:scale-[1.02]
                    shadow-blue-100
                  `
                  : "border-gray-200"
              }
            `}
          >

            {/* Recommended tag */}
            {plan.highlight && (
              <div
                className="
                  absolute
                  -top-3
                  left-1/2
                  -translate-x-1/2
                  bg-blue-600
                  text-white
                  text-xs
                  sm:text-sm
                  px-3
                  py-1
                  rounded-full
                  whitespace-nowrap
                "
              >
                Most Popular
              </div>
            )}

            {/* Plan name */}
            <h3
              className="
                text-lg
                sm:text-xl
                font-semibold
                text-gray-900
              "
            >
              {plan.name}
            </h3>

            {/* Price */}
            <div
              className="
                mt-5
                flex
                items-end
                gap-1
                flex-wrap
              "
            >

              <span
                className="
                  text-4xl
                  sm:text-5xl
                  font-bold
                  text-gray-900
                  leading-none
                "
              >
                {plan.price}
              </span>

              <span
                className="
                  text-sm
                  text-gray-500
                  mb-1
                "
              >
                / month
              </span>

            </div>

            {/* Description */}
            <p
              className="
                text-sm
                sm:text-base
                text-gray-500
                mt-4
                leading-relaxed
              "
            >
              {plan.desc}
            </p>

            {/* Features */}
            <ul
              className="
                mt-6
                space-y-3
                text-sm
                sm:text-base
                text-gray-600
                flex-1
              "
            >

              {plan.features.map((f, i) => (
                <li
                  key={i}
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >

                  <span
                    className="
                      text-green-500
                      mt-[2px]
                      shrink-0
                    "
                  >
                    ✓
                  </span>

                  <span>{f}</span>

                </li>
              ))}

            </ul>

            {/* Button */}
            <button
              className={`
                mt-8
                w-full
                py-3.5
                rounded-xl
                font-medium
                text-sm
                sm:text-base
                transition-all
                duration-200
                ${
                  plan.highlight
                    ? `
                      bg-blue-600
                      text-white
                      hover:bg-blue-700
                      shadow-sm
                    `
                    : `
                      border
                      border-gray-300
                      text-gray-700
                      hover:bg-gray-50
                    `
                }
              `}
            >
              Get Started
            </button>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Pricing;