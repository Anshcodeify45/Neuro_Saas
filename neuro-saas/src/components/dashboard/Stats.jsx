import React, { useEffect, useState } from "react";
import { Users, DollarSign, TrendingUp } from "lucide-react";
import { getStats } from "../../api/analyticsApi";

const Stats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getStats();
        setStats(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const data = [
    {
      title: "Total Users",
      value: stats?.totalUsers || 0,
      icon: <Users size={18} />,
      color: "text-blue-600",
      bg: "bg-blue-50 dark:bg-blue-500/10",
    },
    {
      title: "Revenue",
      value: `$${stats?.revenue || 0}`,
      icon: <DollarSign size={18} />,
      color: "text-green-600",
      bg: "bg-green-50 dark:bg-green-500/10",
    },
    {
      title: "Growth",
      value: `${stats?.growth || 0}%`,
      icon: <TrendingUp size={18} />,
      color: "text-purple-600",
      bg: "bg-purple-50 dark:bg-purple-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

      {data.map((item, i) => (
        <div
          key={i}
          className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
        >

          {/* TOP ROW */}
          <div className="flex items-center justify-between">

            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.title}
            </p>

            <div className={`p-2 rounded-lg ${item.bg} ${item.color}`}>
              {item.icon}
            </div>

          </div>

          {/* VALUE */}
          <div className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">
            {loading ? (
              <div className="h-7 w-20 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-md"></div>
            ) : (
              item.value
            )}
          </div>

          {/* FOOTER INDICATOR */}
          <div className="mt-3 text-xs text-gray-400">
            Updated just now
          </div>

        </div>
      ))}

    </div>
  );
};

export default Stats;