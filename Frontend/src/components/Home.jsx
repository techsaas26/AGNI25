import { Link } from "react-router-dom";
import Agenda from "../components/Agenda";
import Proshows from "../components/Proshows";
import Events from "../components/Events";

const Home = () => {
  return (
    <>
      <nav
        style={{
          position: "fixed",
          display: "flex",
          gap: "10px",
          padding: "10px",
          height: "50px",
        }}
      >
        <a href="#section1">Agenda & Proshows</a>
        <a href="#section2">Events</a>
        <Link to="/qwerty/agenda">Admin → Agenda Upload</Link>
      </nav>
      <div style={{ paddingTop: "50px" }}>
        {/* Section 1: Agenda + Proshows */}
        <section id="section1" style={{ margin: "20px 0", minHeight: "100vh" }}>
          <Agenda />
          <Proshows />
        </section>

        {/* Section 2: Events */}
        <section id="section2" style={{ margin: "20px 0", minHeight: "100vh" }}>
          <Events />
        </section>
      </div>
    </>
  );
};

export default Home;
