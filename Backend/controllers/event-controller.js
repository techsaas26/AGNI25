import Event from "../models/Event.js";

export const uploadEvent = async (req, res) => {
  console.log("uploadEvent endpoint hit :)");
  try {
    const { title, imgUrl, club, description, venue, type, day, time, isPaid } = req.body;

    if(!club || !imgUrl || !day || !title) {
      return res.status(400).json({ error: "Some Fields are required" });
    }

    try {
      const event = await Event.create({
        title,
        club,
        imgUrl,
        description,
        venue,
        type,
        day,
        time,
        isPaid,
      });
      res.status(201).json({
        success: true,
        event,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: "Server Error" });
    }
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
    if (req.query.isPaid) filter.isPaid = req.query.isPaid;

    const events = await Event.find(filter).sort({ date: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};