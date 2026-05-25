import express from "express";
import Activity from "../models/Activity.js";
const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const activities = await Activity.find()
      .sort({ createdAt: -1 })
      .limit(10);

    res.json(activities);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;