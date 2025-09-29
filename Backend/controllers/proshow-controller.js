import Proshow from "../models/Proshow.js";

const uploadProshow = async (req, res) => {
  try {
    const { title, description, date, venue } = req.body;
    const imageUrl = req.file.path;

    const proShow = await Proshow.create({
      title,
      description,
      date,
      venue,
      imageUrl,
    });

    res.status(201).json(proShow);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllProshows = async (req, res) => {
  try {
    const proShows = await ProShow.find().sort({ date: 1 });
    res.json(proShows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export default {
  uploadProshow,
  getAllProshows,
};