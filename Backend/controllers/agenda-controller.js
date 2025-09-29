import Agenda from '../models/Agenda.js';

const uploadAgenda = async (req, res) => {
  try {
    const { description } = req.body;
    const date = req.body.date || new Date().toISOString().slice(0, 10);
    const imageUrl = req.file.path;

    // Remove existing agenda for the date
    await Agenda.findOneAndDelete({ date });

    const agenda = new Agenda({ date, imageUrl, description });
    await agenda.save();
    res.status(201).json(agenda);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const getAgendaByDate = async (req, res) => {
  try {
    const date = req.query.date || new Date().toISOString().slice(0, 10);
    const agenda = await Agenda.findOne({ date });
    if (!agenda) return res.status(404).json({ message: 'No agenda found' });
    res.json(agenda);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const getAllAgendas = async (req, res) => {
  try {
    const agendas = await Agenda.find().sort({ date: 1 });
    res.json(agendas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export default {
  uploadAgenda,
  getAgendaByDate,
  getAllAgendas
};