import { Routes, Route, Link } from "react-router-dom";
import AgendaUploadForm from "../pages/AgendaUploadForm";
import ProshowUploadForm from "../pages/ProshowUploadForm";
import EventUploadForm from "../pages/EventUploadForm";

const Admin = () => {
  return (
    <div>
      <nav style={{ display: "flex", gap: "10px", padding: "10px" }}>
        <Link to="/qwerty/agenda">Agenda Upload</Link>
        <Link to="/qwerty/proshow">Proshow Upload</Link>
        <Link to="/qwerty/event">Event Upload</Link>
      </nav>

      <Routes>
        <Route path="agenda" element={<AgendaUploadForm />} />
        <Route path="proshow" element={<ProshowUploadForm />} />
        <Route path="event" element={<EventUploadForm />} />
      </Routes>
    </div>
  );
};

export default Admin;
