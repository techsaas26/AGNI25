import express from "express";
import { uploadAgenda } from "../controllers/agenda-controller.js";
import { uploadEvent } from "../controllers/event-controller.js";
import { uploadProshow } from "../controllers/proshow-controller.js";

const router = express.Router();

router.post("/agenda", uploadAgenda);
router.post("/event", uploadEvent);
router.post("/proshow", uploadProshow);

export default router;