import Proshow from "../models/Proshow.js";

export const uploadProshow = async (req, res) => {
  console.log("uploadProshow endpoint hit :)");
  try {
    const { name, imgUrl, date } = req.body;

    if (!name || !imgUrl) {
      return res.status(400).json({ error: "Name and Image URL are required" });
    }

    try {
      const proShow = await Proshow.create({
        name,
        imgUrl,
        date,
      });

      res.status(201).json({
        success: true,
        proShow,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: "Server Error" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllProshows = async (req, res) => {
  console.log("getAllProshows endpoint hit :)");
  try {
    const proShows = await Proshow.find().sort({ date: 1 });
    res.json(proShows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};