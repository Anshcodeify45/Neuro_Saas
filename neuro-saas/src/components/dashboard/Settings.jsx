import React, { useState } from "react";

const Settings = () => {
  const [name, setName] = useState("Admin");
  const [email, setEmail] = useState("admin@neurodash.ai");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>

      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl space-y-4">
        
        <div>
          <label className="text-sm">Name</label>
          <input
            className="w-full p-2 border rounded mt-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm">Email</label>
          <input
            className="w-full p-2 border rounded mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Changes
        </button>

      </div>
    </div>
  );
};

export default Settings;