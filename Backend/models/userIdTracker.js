import mongoose from "mongoose";

const userIdTrackerSchema = new mongoose.Schema({
  lastInsiderId: { type: Number, default: 2025000001 },
});

// Ensure tracker exists
userIdTrackerSchema.statics.ensureTrackerExists = async function () {
  let tracker = await this.findOne();
  if (!tracker) {
    tracker = new this();
    await tracker.save();
  }
  return tracker;
};

// Get next Insider ID
userIdTrackerSchema.statics.getNextId = async function () {
  const tracker = await this.ensureTrackerExists();
  tracker.lastInsiderId += 1;
  await tracker.save();
  return tracker.lastInsiderId;
};

export default mongoose.model("UserIdTracker", userIdTrackerSchema);
