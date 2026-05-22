import React from "react";

const Stats = () => {
  const data = [
    { title: "Users", value: "1,240" },
    { title: "Revenue", value: "$8,420" },
    { title: "Orders", value: "320" },
    { title: "Growth", value: "24%" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {data.map((item, i) => (
        <div
          key={i}
          className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
        >
          <h3 className="text-gray-500">{item.title}</h3>
          <p className="text-2xl font-bold text-blue-600 mt-2">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stats;