import React, { useEffect, useState } from "react";
import TeamMemberCard from "../components/TeamMemberCard";
import Herosection from "../components/Herosection";

function Home() {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch("/team.json")
      .then((r) => (r.ok ? r.json() : []))
      .then((data) => (Array.isArray(data) ? setTeamMembers(data) : []))
      .catch(() => setTeamMembers([]));
  }, []);

  const SPONSOR_LOGOS = [
    { name: "OnePlus", src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop" },
    { name: "The Hindu", src: "https://images.unsplash.com/photo-1520975928316-56f2ceec0b87?q=80&w=800&auto=format&fit=crop" },
    { name: "Coca-Cola", src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop" },
    { name: "Google", src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" },
    { name: "Microsoft", src: "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=800&auto=format&fit=crop" },
    { name: "Adobe", src: "https://images.unsplash.com/photo-1520974735194-6c0a5c1d5b3b?q=80&w=800&auto=format&fit=crop" },
  ];

  const bgClasses = ["palette-bg", "palette2-bg"];
  const sectionBg = (index) => bgClasses[index % bgClasses.length];

  return (
    <div className="landing-bg" style={{ fontFamily: "Poppins, sans-serif", color: "#fff", overflowX: "hidden" }}>

      {/* 🔥 Fire Rain Overlay */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="fire-drop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* 🟣 HERO SECTION */}
      
      <Herosection />

      {/* 🔵 ABOUT */}
      <section
        id="about"
        style={{
          position: "relative",
          backgroundImage: "url('/agni.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          padding: "4rem 1.5rem", // FIXED: Reduced top padding from 6rem to 4rem
          textAlign: "center",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(18,16,16,0.69)", zIndex: 1 }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.3rem", marginBottom: "1.5rem", fontWeight: 600 }}>About Us</h2>
          <p style={{ lineHeight: 1.8, fontSize: "1.1rem" }}>
            As the saying goes, “A small match lights a big fire,” SAAS organizes an intra-college cultural fest - AGNI - every year. The three-day fest includes movie screening, concert night, and a plethora of events for students to participate and enjoy with their friends.
          </p>
        </div>
      </section>

      {/* 🟢 MAIN EVENTS */}
      <section
        id="main-events"
        className={sectionBg(2)}
        style={{ padding: "4rem 1.5rem", textAlign: "center" }}
      >
        <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>Why AGNI</h2>

        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          {[
            { title: "Concert Night", img: "/concert.jpg", info: "Electrifying performances by top artists!" },
            { title: "Movie Night", img: "/movie.jpg", info: "Relax and enjoy popular movies under the stars." },
            { title: "Talent of AGNI", img: "/talent2.png", info: "Showcasing the best student talents." },
          ].map((event, i) => (
            <div key={i} className="event-card" style={{ position: "relative", width: "32%", borderRadius: "12px", overflow: "hidden", cursor: "pointer", maxHeight: "200px" }}>
              <img src={event.img} alt={event.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", background: "rgba(0,0,0,0.6)", color: "#fff", padding: "0.5rem", textAlign: "center" }}>
                <h3 style={{ margin: "0 0 0.2rem 0", fontSize: "1.1rem" }}>{event.title}</h3>
                <p style={{ margin: 0, fontSize: "0.85rem" }}>{event.info}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: "1100px", margin: "1rem auto 0 auto", display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          {[
            { title: "Inauguration and Chenda Melam", img: "/chenda.jpg", info: "Kick off AGNI25 with an inspiring ceremony." },
            { title: "Fashion Show", img: "/fashion.jpg", info: "Witness creativity and style at our fashion showcase." },
          ].map((event, i) => (
            <div key={i} className="event-card" style={{ position: "relative", width: "48%", borderRadius: "12px", overflow: "hidden", cursor: "pointer", maxHeight: "200px" }}>
              <img src={event.img} alt={event.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", background: "rgba(0,0,0,0.6)", color: "#fff", padding: "0.5rem", textAlign: "center" }}>
                <h3 style={{ margin: "0 0 0.2rem 0", fontSize: "1.1rem" }}>{event.title}</h3>
                <p style={{ margin: 0, fontSize: "0.85rem" }}>{event.info}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="/events" style={{ display: "inline-block", marginTop: "1.5rem", padding: "0.6rem 1.8rem", background: "#FF6B6B", color: "#fff", borderRadius: "8px", fontWeight: 600, textDecoration: "none", transition: "background 0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#FF4B4B")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#FF6B6B")}
        >
          Register Now
        </a>
      </section>

{/* 🟠 MERCH */}
<section id="merch" style={{ position: "relative", backgroundImage: "url('/agni.png')", backgroundSize: "cover", backgroundPosition: "center", color: "#fff", overflow: "hidden", padding: "4rem 1.5rem" }}>
  <div style={{ position: "absolute", inset: 0, background: "rgba(18,16,16,0.69)", zIndex: 1 }} />
  <div style={{ position: "relative", zIndex: 2, maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
    <h2 style={{ fontSize: "2.2rem", marginBottom: "1.5rem" }}>Merchandise</h2>
    <p style={{ fontSize: "1.1rem", marginBottom: "2rem", textAlign: "center" }}>
      <strong>Unlock Your Style with the Official Agni25 T-Shirt!</strong>
    </p>

    {/* The className has been added here */}
    <div className="merch-scroller" style={{ display: "flex", justifyContent: "center", gap: "1.25rem", overflowX: "auto", paddingBottom: "1rem" }}>
      {[
        { title: "Unlock Your Style", text: "Get ready to celebrate the 25th anniversary of Agni in style! Exclusive Agni25 t-shirts that are a must-have for every student." },
        { title: "Designs & Discounts", text: "Explore vibrant and creative designs for this year's tee and discover attractive discounts to showcase your Agni pride." },
        { title: "Wear Your Story", text: "Show your spirit, wear your story. Get your limited edition Agni25 t-shirt today!" },
      ].map((f, i) => (
        <div key={i} style={{ background: "rgba(255,255,255,0.08)", borderRadius: "10px", padding: "1rem", color: "#fff", minWidth: "250px", maxWidth: "280px", flexShrink: 0, textAlign: "left" }}>
          <h4 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.5rem" }}>★ {f.title}</h4>
          <p style={{ lineHeight: 1.6, margin: 0 }}>{f.text}</p>
        </div>
      ))}
    </div>

    <button
      onClick={() => window.location.assign("/merch")}
      style={{ marginTop: "2rem", padding: "0.75rem 1.25rem", borderRadius: "6px", background: "#fff", color: "#111", border: "none", cursor: "pointer", fontWeight: 600 }}
    >
      Discover Designs & Discounts
    </button>
  </div>
</section>

      {/* 🟣 TEAM */}
      <section
  id="team"
  className={sectionBg(4)}
  style={{
    padding: "4rem 1.5rem", // Changed: Added bottom padding for balance
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "auto",
    paddingBottom: "2rem",
  }}
>
  <h2 style={{ fontSize: "2.2rem", marginBottom: "2rem" }}>Our Team</h2>
  <div style={{ width: "100%", maxWidth: "1200px", overflow: "hidden", position: "relative" }} id="teamScroller">
    <div
      className="no-scrollbar"
      style={{
        display: "flex",
        gap: "1rem",
        overflowX: "auto",
        scrollBehavior: "smooth",
        paddingBottom: "0",
        marginBottom: "2rem",
        alignItems: "stretch",
      }}
    >
      {teamMembers.map((m, i) => (
        <div
          key={i}
          style={{
            flex: "0 0 auto",
            display: "flex",
          }}
        >
          <TeamMemberCard {...m} style={{ height: "100%" }} />
        </div>
      ))}
    </div>

    {/* Added className="scroll-arrow" */}
    <button
      className="scroll-arrow" 
      onClick={() =>
        document.querySelector("#teamScroller .no-scrollbar")?.scrollBy({ left: -260, behavior: "smooth" })
      }
      style={{
        position: "absolute",
        left: 0,
        top: "50%",
        transform: "translateY(-50%)",
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: "none",
        background: "rgba(255,255,255,0.2)",
        cursor: "pointer",
        fontSize: "24px",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
      }}
    >
      ‹
    </button>

    {/* Added className="scroll-arrow" */}
    <button
      className="scroll-arrow"
      onClick={() =>
        document.querySelector("#teamScroller .no-scrollbar")?.scrollBy({ left: 260, behavior: "smooth" })
      }
      style={{
        position: "absolute",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: "none",
        background: "rgba(255,255,255,0.2)",
        cursor: "pointer",
        fontSize: "24px",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2,
      }}
    >
      ›
    </button>
  </div>
</section>

      {/* 🔴 CONTACT */}
      <section
        id="contact"
        style={{
          background: "linear-gradient(rgba(18,16,16,0.69), rgba(18,16,16,0.69)), url('/agni.png') center/cover no-repeat",
          padding: "4rem 1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "1100px", width: "100%" }}>
          <h2 style={{ fontSize: "2.2rem", margin: "0 0 2rem 0", textAlign: "center" }}>Contact Us</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                background: "rgba(48, 45, 45, 0.67)",
                borderRadius: "12px",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h3 style={{ marginBottom: "0.5rem", marginTop: 0 }}>
                  Student Association and Arts Society (SAAS)
                </h3>
                <p style={{ margin: 0 }}>College of Engineering, Guindy</p>
                <p style={{ margin: 0 }}>Anna University, Chennai - 600025</p>
                <p style={{ marginTop: "1rem" }}>
                  Email:{" "}
                  <a
                    href="mailto:saasceg25@gmail.com"
                    style={{ color: "#fff", textDecoration: "underline" }}
                  >
                    saasceg26@gmail.com
                  </a>
                </p>
              </div>
              <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                <a href="https://www.facebook.com/techofes.co.in" target="_blank" rel="noreferrer" style={{ fontSize: "1.5rem", color: "#fff" }}>f</a>
                <a href="https://www.instagram.com/saas_ceg/" target="_blank" rel="noreferrer" style={{ fontSize: "1.5rem", color: "#fff" }}>◎</a>
                <a href="https://www.whatsapp.com/channel/0029VaE66JJ9xVJeMj7E8M08" target="_blank" rel="noreferrer" style={{ fontSize: "1.5rem", color: "#fff" }}>☎</a>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div style={{ borderRadius: 12, overflow: "hidden" }}>
                <iframe
                  src="https://www.google.com/maps?q=College%20of%20Engineering%2C%20Guindy&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Anna University CEG Map"
                ></iframe>
              </div>
              <div style={{ fontSize: "0.9rem", opacity: 0.9, textAlign: "center" }}>
                <a
                  href="https://www.google.com/maps/place/College+of+Engineering,+Guindy"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "underline", color: "#fff" }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* --- Mobile Responsive Styles --- */
        @media (max-width: 768px) {
          /* Stack hero images vertically */
          #hero {
            flex-direction: column;
          }

          /* Make event cards full-width */
          #main-events .event-card { 
            width: 100% !important; 
            max-height: 180px;
          }
          #main-events div[style*="flex-wrap: wrap"] { 
            gap: 0.75rem; 
          }

          /* Reduce padding and font sizes on all sections for mobile */
          section {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
          }

          /* Specifically set team section bottom padding to 0 */
          section#team {
              padding-bottom: 0 !important;
          }

          h2 {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;