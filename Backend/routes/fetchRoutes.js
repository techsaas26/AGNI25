import express from "express";
import { getAllProshows } from "../controllers/proshow-controller.js";
import { getAllEvents } from "../controllers/event-controller.js";
import { getAllAgendas } from "../controllers/agenda-controller.js";

const router = express.Router();

router.get("/agenda", getAllAgendas);
router.get("/event", getAllEvents);
router.get("/proshow", getAllProshows);

export default router;