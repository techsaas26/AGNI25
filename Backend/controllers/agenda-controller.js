import Agenda from "../models/Agenda.js";

export const uploadAgenda = async (req, res) => {
  console.log("uploadAgenda endpoint hit :)");
  try {
    const { day, imgUrl } = req.body;
    if (!imgUrl) {
      return res.status(400).json({ error: "Image URL are required" });
    }

    // Validate day-enum 
    const allowedDays = [1, 2];
    if (!allowedDays.includes(day)) {
      return res.status(400).json({
        error: `Invalid day. Allowed values are ${allowedDays.join(", ")}.`,
      });
    }

    try {
      // Remove existing agenda for the date
      await Agenda.findOneAndDelete({ day });

      const agenda = Agenda.create({ day, imgUrl });
      res.status(201).json({
        success: true,
        agenda,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: "Server Error" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllAgendas = async (req, res) => {
  console.log("getAllAgendas endpoint hit :)");
  try {
    const agendas = await Agenda.find().sort({ day: 1 });
    res.json(agendas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};