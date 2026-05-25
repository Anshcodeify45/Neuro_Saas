import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      desc: "For individuals getting started",
      features: ["Basic features", "Community support", "Limited usage"],
      highlight: false,
    },
    {
      name: "Pro",
      price: "$19",
      desc: "For professionals and developers",
      features: ["All Starter features", "Priority support", "Advanced tools"],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "$49",
      desc: "For large teams and companies",
      features: ["All Pro features", "Dedicated support", "Custom solutions"],
      highlight: false,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto px-6 mb-16">

        <h2 className="text-4xl font-semibold text-gray-900 tracking-tight">
          Simple, Transparent Pricing
        </h2>

        <p className="mt-4 text-gray-500 text-lg">
          Choose a plan that fits your workflow. Upgrade or downgrade anytime.
        </p>

      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 grid gap-6 md:grid-cols-3">

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl border bg-white p-8 transition shadow-sm hover:shadow-md ${
              plan.highlight ? "border-blue-500" : "border-gray-200"
            }`}
          >

            {/* Recommended tag */}
            {plan.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}

            {/* Plan name */}
            <h3 className="text-lg font-semibold text-gray-900">
              {plan.name}
            </h3>

            {/* Price */}
            <div className="mt-4 flex items-end gap-1">
              <span className="text-4xl font-bold text-gray-900">
                {plan.price}
              </span>
              <span className="text-sm text-gray-500 mb-1">/ month</span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 mt-3">
              {plan.desc}
            </p>

            {/* Features */}
            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-500 mt-[2px]">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`mt-8 w-full py-3 rounded-xl font-medium transition ${
                plan.highlight
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
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