import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String },
  date: { type: Date },
  venue: { type: String },
  type: { type: String, enum: ['Club', 'Iconic', 'Signature'], required: true },
  day: { type: Number, enum: [1, 2], required: true },
  time: { type: String, enum: ['day', 'night'], required: true },
  paymentLink: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Event', eventSchema);