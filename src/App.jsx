import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Sponsors from './pages/Sponsors';
import Team from './pages/Team';
import Login from './components/Login';
import Register from './components/Register';
import Schedule from './pages/Schedule';
import Merchandise from './pages/Merchandise';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/merch" element={<Merchandise />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
