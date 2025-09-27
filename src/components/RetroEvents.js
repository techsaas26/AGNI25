import React from "react";
import { motion } from "framer-motion";
import "./RetroEvents.css";

const events = [
  "Rap Battle",
  "Street Dance",
  "LAN Gaming",
  "Battle of Bands",
  "Treasure Hunt",
  "Stand-up Comedy",
  "Short Film Contest",
  "Art Jam",
];

// Duplicate events to make infinite loop seamless
const loopEvents = [...events, ...events];

const RetroEvents = () => {
  return (
    <section className="retro-events-section">
      <h1 className="retro-events-heading">Key Events</h1>

      <div className="retro-carousel">
        <motion.div
          className="retro-slides-strip"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" }}
        >
          {loopEvents.map((event, i) => (
            <div className="retro-slide" key={i}>
              <h2 className="retro-slide-title">{event}</h2>
              <div className="sprocket-top" />
              <div className="sprocket-bottom" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RetroEvents;
