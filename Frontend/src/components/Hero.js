import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  const targetDate = new Date("2025-10-09T00:00:00");

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section d-flex flex-column justify-content-center align-items-center text-center">
      {/* Big retro title */}
      <motion.h1
        className="hero-title"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        AGNI'25
      </motion.h1>

      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Vintage beats. Classic streets. Timeless feels.
      </motion.p>

      <p className="hero-date">Oct 09, 10, 11</p>

      {/* Countdown */}
      <div className="hero-countdown">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="count-box">
            <span>{value}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* Retro background circles */}
      <div className="hero-animation">
        {[...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            className={`circle circle-${i}`}
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
