import React from "react";

const Features = () => {
  const features = [
    {
      title: "Fast Deployment",
      desc: "Deploy your applications in seconds with optimized workflows.",
    },
    {
      title: "Secure Platform",
      desc: "Enterprise-grade security with encrypted data handling.",
    },
    {
      title: "Scalable Architecture",
      desc: "Built to scale from startup to enterprise smoothly.",
    },
    {
      title: "Real-time Analytics",
      desc: "Monitor performance and user activity instantly.",
    },
    {
      title: "API Integration",
      desc: "Easily connect with third-party services and tools.",
    },
    {
      title: "Team Collaboration",
      desc: "Work together with your team in real time.",
    },
  ];

  return (
    <section className="px-6 py-20 bg-white">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">
          Powerful Features
        </h2>
        <p className="text-gray-600 mt-4">
          Everything you need to build and scale modern applications
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Features;