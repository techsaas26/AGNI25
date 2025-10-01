import crypto from "crypto";
import Registration from "../models/Registration.js";
import Event from "../models/Event.js";
import logger from "../utils/logger.js";

// ---------------- Verify Payment ----------------
export const verifyPayment = async (req, res, next) => {
  try {
    const { order_id, payment_id, signature, eventId } = req.body;
    const A_ID = req.A_ID; // from userExtractor middleware

    logger.info(`Verifying payment for user A_ID: ${A_ID}, eventId: ${eventId}`);

    if (!order_id || !payment_id || !signature || !eventId) {
      logger.warn(`Missing payment details for user A_ID: ${A_ID}`);
      return res.status(400).json({ error: "Missing payment details" });
    }

    const body = `${order_id}|${payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    if (expectedSignature !== signature) {
      logger.warn(`Invalid payment signature for user A_ID: ${A_ID}`);
      return res.status(400).json({ error: "Invalid payment signature" });
    }

    // Check if event exists
    const event = await Event.findById(eventId);
    if (!event) {
      logger.warn(`Event not found: ${eventId}`);
      return res.status(404).json({ error: "Event not found" });
    }

    // Prevent duplicate registration
    const existingRegistration = await Registration.findOne({ A_ID, eventID: eventId });
    if (existingRegistration) {
      logger.warn(`User already registered: A_ID ${A_ID}, eventId ${eventId}`);
      return res.status(400).json({ error: "Already registered" });
    }

    // Create registration
    const registration = await Registration.create({
      A_ID,
      eventID: eventId,
      eventname: event.title,
      isPaid: true,
      paymentId: payment_id,
    });

    logger.info(`Payment verified & registration created: A_ID ${A_ID}, eventId ${eventId}`);
    res.status(201).json({
      message: "Payment verified & registered successfully",
      registration,
    });
  } catch (err) {
    logger.error(`Error verifying payment: ${err.stack}`);
    next(err); // pass error to centralized error handler
  }
};
