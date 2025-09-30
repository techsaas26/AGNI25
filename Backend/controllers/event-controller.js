import Event from '../models/Event.js';

export const uploadEvent = async (req, res) => {
  try {
    const { title, description, date, venue, type, day, time } = req.body;
    const imageUrl = req.file.path;

    const event = await Event.create({ title, imageUrl, description, date, venue, type, day, time });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const filter = {};
    if (req.query.type) filter.type = req.query.type;
    if (req.query.day) filter.day = Number(req.query.day);
    if (req.query.time) filter.time = req.query.time;

    const events = await Event.find(filter).sort({ date: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};