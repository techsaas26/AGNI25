import mongoose from "mongoose";

const agendaSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  imageUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
}); 

export default mongoose.model("Agenda", agendaSchema);