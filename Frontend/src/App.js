import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RetroEvents from "./components/RetroEvents";
import SponsorCarousel from "./components/Sponsor";
import Footer from "./components/Footer";

// Pages
import Events from "./pages/Events";
import Merchandise from "./pages/Merchandise";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <Router>
      <div className="bg-dark text-light" style={{ minHeight: "100vh" }}>
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <RetroEvents />
                <SponsorCarousel />
                <Footer />
              </>
            }
          />

          {/* Other Pages */}
          <Route path="/events" element={<Events />} />
          <Route path="/merchandise" element={<Merchandise />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
