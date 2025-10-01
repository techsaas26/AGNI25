import express from "express";
import { verifyPayment } from "../controllers/payment-controller.js";

const router = express.Router();

router.post("/verify", verifyPayment);

export default router;
