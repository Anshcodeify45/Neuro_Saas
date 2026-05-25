import Activity from "../models/Activity.js";

export const logActivity = async ({
  userId,
  action,
  details,
  type,
}) => {
  try {
    await Activity.create({
      user: userId || null,
      action,
      details,
      type,
    });
  } catch (error) {
    console.log("Activity log error:", error.message);
  }
};