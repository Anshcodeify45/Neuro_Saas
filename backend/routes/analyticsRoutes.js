const express = require("express");
const router = express.Router();
const User = require("../models/User");

// 📊 GET DASHBOARD STATS
router.get("/stats", async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();

    // mock revenue logic (replace later with real payments)
    const revenue = totalUsers * 49;

    // fake growth formula (simple SaaS logic)
    const growth = totalUsers > 0 ? ((totalUsers / 100) * 10).toFixed(2) : 0;

    res.json({
      totalUsers,
      revenue,
      growth,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/user-trend", async (req, res) => {
  try {
    const users = await User.find();

    // create last 7 days labels
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    // mock distribution logic (real SaaS later uses timestamps)
    const data = days.map((day, index) => {
      return {
        name: day,
        users: Math.floor(Math.random() * (users.length + 5)),
      };
    });

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;