import Event from "../models/Event.js";
import Agenda from "../models/Agenda.js";
import ProShow from "../models/ProShow.js";
import Registration from "../models/Registration.js";
import razorpay from "../utils/pay.js";
import logger from "../utils/logger.js";

// ---------------- GET all events ----------------
export const getAllEvents = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.type) filter.type = req.query.type;
    if (req.query.day) filter.day = Number(req.query.day);
    if (req.query.time) filter.time = req.query.time;
    if (req.query.isPaid) filter.isPaid = req.query.isPaid === "true";

    const events = await Event.find(filter).sort({ day: 1, time: 1 });
    logger.info(`Fetched ${events.length} events`);
    res.status(200).json(events);
  } catch (err) {
    logger.error("Error fetching events", err);
    next(err);
  }
};

// ---------------- GET all agendas ----------------
export const getAllAgendas = async (req, res, next) => {
  try {
    const agendas = await Agenda.find().sort({ day: 1 });
    logger.info(`Fetched ${agendas.length} agendas`);
    res.status(200).json(agendas);
  } catch (err) {
    logger.error("Error fetching agendas", err);
    next(err);
  }
};

// ---------------- GET all proshows ----------------
export const getAllProshows = async (req, res, next) => {
  try {
    const proShows = await ProShow.find().sort({ date: 1 });
    logger.info(`Fetched ${proShows.length} proshows`);
    res.status(200).json(proShows);
  } catch (err) {
    logger.error("Error fetching proshows", err);
    next(err);
  }
};

// ---------------- GET particular event ----------------
export const getParticularEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      logger.error(`Event not found: ID ${req.params.id}`);
      return res.status(404).json({ error: "Event not found" });
    }
    logger.info(`Fetched event: ${event.title} (ID: ${event._id})`);
    res.status(200).json(event);
  } catch (err) {
    logger.error("Error fetching particular event", err);
    next(err);
  }
};

// ---------------- Register for an event ----------------
export const registerEvent = async (req, res, next) => {
  try {
    const { eventId } = req.body;
    const A_ID = req.A_ID; // from userExtractor
    const user = req.user;

    if (!user) {
      logger.warn("Unauthorized registration attempt");
      return res.status(401).json({ error: "Unauthorized" });
    }

    const event = await Event.findById(eventId);
    if (!event) {
      logger.error(`Event not found for registration: ID ${eventId}`);
      return res.status(404).json({ error: "Event not found" });
    }

    // Check if already registered
    const existing = await Registration.findOne({ A_ID, eventID: eventId });
    if (existing) {
      logger.warn(`User ${A_ID} already registered for event ${eventId}`);
      return res.status(400).json({ error: "Already registered" });
    }

    // ---------------- Free Event ----------------
    if (!event.isPaid) {
      const registration = await Registration.create({ user, event });
      logger.info(`User ${A_ID} registered for free event ${eventId}`);
      return res.status(201).json({
        message: "Registered successfully (Free Event)",
        registration,
      });
    }

    // ---------------- Paid Event ----------------
    const amount = event.price ? event.price * 100 : 5000; // default ₹50
    const options = {
      amount,
      currency: "INR",
      receipt: `event_${eventId}_${A_ID}_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    logger.info(`Payment order created for user ${A_ID} | Event ${eventId} | Order ${order.id}`);

    res.status(200).json({
      message: "Payment required",
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      eventId: event._id,
    });
  } catch (err) {
    logger.error("Error registering for event", err);
    next(err);
  }
};
