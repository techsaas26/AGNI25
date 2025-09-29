import mongoose from "mongoose";

const agendaSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
}); 

export default mongoose.model("Agenda", agendaSchema);