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

module.exports = router;