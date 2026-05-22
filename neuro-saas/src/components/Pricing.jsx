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
    <section className="px-6 py-20 bg-gray-50">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Simple Pricing
        </h2>
        <p className="text-gray-600 mt-4">
          Choose a plan that fits your needs
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-xl border shadow-sm transition hover:shadow-lg bg-white ${
              plan.highlight ? "border-blue-600 scale-105" : ""
            }`}
          >
            
            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900">
              {plan.name}
            </h3>

            {/* Price */}
            <p className="text-3xl font-bold text-blue-600 mt-3">
              {plan.price}
            </p>

            {/* Desc */}
            <p className="text-gray-600 mt-2">{plan.desc}</p>

            {/* Features */}
            <ul className="mt-5 space-y-2 text-gray-600">
              {plan.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`mt-6 w-full py-2 rounded-lg transition ${
                plan.highlight
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "border border-gray-300 hover:bg-gray-100"
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