import mongoose from "mongoose";

const proShowSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String },
  date: { type: Date },
  venue: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('ProShow', proShowSchema);