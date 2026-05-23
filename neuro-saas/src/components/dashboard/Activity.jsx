import React, { useEffect, useState } from "react";
import axios from "axios";

const Activity = () => {
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/activity"
      );
      setActivity(res.data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border">

      <h2 className="text-lg font-semibold mb-4">
        Recent Activity
      </h2>

      <div className="space-y-3">

        {activity.map((a) => (
          <div key={a._id} className="text-sm">
            <p className="font-medium">{a.message}</p>
            <p className="text-gray-400 text-xs">
              {new Date(a.createdAt).toLocaleString()}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default Activity;