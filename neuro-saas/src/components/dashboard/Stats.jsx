import React, { useEffect, useState } from "react";
import { Users, DollarSign, TrendingUp } from "lucide-react";
import { getStats } from "../../api/analyticsApi";

const Stats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      const res = await getStats();
      setStats(res.data);
    };

    fetchStats();
  }, []);

  const data = [
    {
      title: "Total Users",
      value: stats?.totalUsers || 0,
      icon: <Users size={20} />,
    },
    {
      title: "Revenue",
      value: `$${stats?.revenue || 0}`,
      icon: <DollarSign size={20} />,
    },
    {
      title: "Growth",
      value: `${stats?.growth || 0}%`,
      icon: <TrendingUp size={20} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      {data.map((item, i) => (
        <div
          key={i}
          className="bg-white dark:bg-gray-900 p-5 rounded-xl border shadow-sm"
        >

          <div className="mb-2 text-gray-500">
            {item.title}
          </div>

          <div className="text-2xl font-bold flex items-center gap-2">
            {item.icon}
            {item.value}
          </div>

        </div>
      ))}

    </div>
  );
};

export default Stats;