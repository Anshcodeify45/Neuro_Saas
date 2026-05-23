import React from "react";

import {
  Users,
  DollarSign,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";

const Stats = () => {
  const data = [
    {
      title: "Total Users",
      value: "12,480",
      growth: "+12.5%",
      desc: "Compared to last month",
      icon: <Users size={22} />,
      color:
        "from-blue-500 to-cyan-500",
    },
    {
      title: "Revenue",
      value: "$48,240",
      growth: "+18.2%",
      desc: "Monthly revenue growth",
      icon: <DollarSign size={22} />,
      color:
        "from-green-500 to-emerald-500",
    },
    {
      title: "Orders",
      value: "1,320",
      growth: "+8.1%",
      desc: "New orders this week",
      icon: <ShoppingCart size={22} />,
      color:
        "from-purple-500 to-pink-500",
    },
    {
      title: "Growth",
      value: "24%",
      growth: "+4.3%",
      desc: "Business performance",
      icon: <TrendingUp size={22} />,
      color:
        "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {data.map((item, i) => (
        <div
          key={i}
          className="group relative overflow-hidden bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >

          {/* GLOW EFFECT */}
          <div
            className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-3xl`}
          ></div>

          {/* TOP */}
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.title}
              </p>

              <h2 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
                {item.value}
              </h2>
            </div>

            {/* ICON */}
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-lg`}
            >
              {item.icon}
            </div>

          </div>

          {/* BOTTOM */}
          <div className="mt-6">

            <div className="flex items-center gap-2">

              <span className="text-green-500 font-semibold text-sm">
                {item.growth}
              </span>

              <span className="text-gray-500 text-sm">
                this month
              </span>

            </div>

            <p className="text-sm text-gray-400 mt-2">
              {item.desc}
            </p>

          </div>

        </div>
      ))}

    </div>
  );
};

export default Stats;