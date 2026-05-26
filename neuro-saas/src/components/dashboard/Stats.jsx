import React, { useEffect, useState } from "react";
import { Users, DollarSign, TrendingUp } from "lucide-react";
import { getStats } from "../../api/analyticsApi";
import GlassCard from "./GlassCard";

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
        <GlassCard className="p-6 relative overflow-hidden">

      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="flex items-center justify-between relative z-10">

        <div>
          <p className="text-sm text-gray-400">
            {item.title}
          </p>

      <h2 className="text-3xl font-bold mt-3">
        {item.value}
      </h2>

      <p className="text-xs text-green-400 mt-2">
        +12.5% growth
      </p>
    </div>

    <div className={`${item.bg} p-4 rounded-2xl`}>
      {item.icon}
    </div>

  </div>
</GlassCard>
      ))}

    </div>
  );
};

export default Stats;