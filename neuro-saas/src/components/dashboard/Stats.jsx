import React from "react";
import { Users, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";

const Stats = () => {
  const data = [
    {
      title: "Users",
      value: "1,240",
      icon: <Users size={20} />,
      color: "text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300",
    },
    {
      title: "Revenue",
      value: "$8,420",
      icon: <DollarSign size={20} />,
      color: "text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300",
    },
    {
      title: "Orders",
      value: "320",
      icon: <ShoppingCart size={20} />,
      color: "text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-300",
    },
    {
      title: "Growth",
      value: "24%",
      icon: <TrendingUp size={20} />,
      color: "text-orange-600 bg-orange-100 dark:bg-orange-900 dark:text-orange-300",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

      {data.map((item, i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow hover:shadow-lg transition group"
        >

          {/* ICON */}
          <div className={`w-10 h-10 flex items-center justify-center rounded-lg mb-3 ${item.color}`}>
            {item.icon}
          </div>

          {/* TITLE */}
          <h3 className="text-gray-500 dark:text-gray-400 text-sm">
            {item.title}
          </h3>

          {/* VALUE */}
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2 group-hover:scale-105 transition">
            {item.value}
          </p>

        </div>
      ))}

    </div>
  );
};

export default Stats;