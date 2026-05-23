const express = require("express");
const router = express.Router();
const Activity = require("../models/Activity");

// GET RECENT ACTIVITY
router.get("/", async (req, res) => {
  try {
    const data = await Activity.find()
      .sort({ createdAt: -1 })
      .limit(10);

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/seed", async (req, res) => {
  const Activity = require("../models/Activity");

  await Activity.create([
    { message: "New User Registered", type: "user" },
    { message: "Revenue Updated", type: "finance" },
    { message: "New Subscription", type: "billing" },
  ]);

  res.json({ success: true });
});

module.exports = router;