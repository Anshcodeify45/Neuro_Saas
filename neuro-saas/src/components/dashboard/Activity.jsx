import React, { useEffect, useState } from "react";
import axios from "axios";

const Activity = () => {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/api/activity");
      setActivity(res.data);
    };

    fetchData();
  }, []);

  // Group by date
  const groupByDate = (data) => {
    return data.reduce((acc, item) => {
      const date = new Date(item.createdAt).toDateString();
      if (!acc[date]) acc[date] = [];
      acc[date].push(item);
      return acc;
    }, {});
  };

  const grouped = groupByDate(activity);

  // Icons
  const getIcon = (type) => {
    switch (type) {
      case "auth":
        return "🔐";
      case "update":
        return "✏️";
      case "delete":
        return "🗑️";
      default:
        return "⚡";
    }
  };

  const formatDateLabel = (dateStr) => {
    const date = new Date(dateStr);
    const today = new Date();

    if (date.toDateString() === today.toDateString()) return "Today";

    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === yesterday.toDateString()) return "Yesterday";

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border h-[312px] flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          Recent Activity
        </h2>

        <span className="text-xs text-gray-400">
          Live feed
        </span>
      </div>

      {/* Content */}
      <div className="space-y-8 max-h-[320px] overflow-y-auto pr-2 hide-scrollbar">

        {Object.keys(grouped).length === 0 ? (
          <p className="text-sm text-gray-400">No activity yet</p>
        ) : (
          Object.entries(grouped).map(([date, items]) => (
            <div key={date}>

              {/* Date label */}
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3">
                {formatDateLabel(date)}
              </h3>

              {/* Timeline */}
              <div className="relative pl-6 border-l border-gray-200 dark:border-gray-800 space-y-4">

                {items.map((a) => (
                  <div key={a._id} className="relative">

                    {/* Dot */}
                    <div className="absolute -left-[9px] top-1.5 text-sm bg-white dark:bg-gray-900">
                      {getIcon(a.type)}
                    </div>

                    {/* Card */}
                    <div className="p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition">

                      <div className="flex justify-between items-start gap-3">

                        <div>
                          <p className="font-medium text-gray-800 dark:text-white">
                            {a.action}
                          </p>

                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {a.details}
                          </p>
                        </div>

                        <span className="text-[11px] text-gray-400 whitespace-nowrap">
                          {new Date(a.createdAt).toLocaleTimeString("en-IN", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>

                      </div>
                    </div>

                  </div>
                ))}

              </div>
            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default Activity;