import express from "express";
import { getUserDetails, getUserRegistrations } from "../controllers/profile-controller.js";
import { userExtractor } from "../utils/middleware.js";

const router = express.Router();

// Protect routes with userExtractor (checks token, sets req.A_ID)
router.get("/", userExtractor, getUserDetails);
router.get("/registrations", userExtractor, getUserRegistrations);

export default router;
