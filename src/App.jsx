import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Schedule from './pages/Schedule';
import Merchandise from './pages/Merchandise';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* --- Your Existing Routes --- */}
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/merch" element={<Merchandise />} />

        {/* --- Optional but Recommended: Catch-all Route --- */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
