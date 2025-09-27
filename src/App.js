import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RetroEvents from "./components/RetroEvents";
import SponsorCarousel from "./components/Sponsor";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-dark text-light" style={{ minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <RetroEvents />
      <SponsorCarousel />
      <Footer />
    </div>
  );
};

export default App;
