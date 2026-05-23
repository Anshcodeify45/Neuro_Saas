const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/roleMiddleware");

const {
  getUsers,
} = require("../controllers/userController");

router.get("/", getUsers);
router.get("/", protect, adminOnly, getUsers);

module.exports = router;