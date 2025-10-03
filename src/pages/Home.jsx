import React, { useRef, useEffect, useState } from "react";

function Home() {
  const aboutRef = useRef(null);
  const whyRef = useRef(null);
  const contactRef = useRef(null);
  const merchRef = useRef(null);
  const sponsorsRef = useRef(null);
  const teamRef = useRef(null);
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    fetch('/team.json')
      .then(r => r.ok ? r.json() : [])
      .then(data => Array.isArray(data) ? setTeamMembers(data) : setTeamMembers([]))
      .catch(() => setTeamMembers([]));
  }, []);

  const SPONSOR_LOGOS = [
    { name: 'OnePlus', src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=800&auto=format&fit=crop' },
    { name: 'The Hindu', src: 'https://images.unsplash.com/photo-1520975928316-56f2ceec0b87?q=80&w=800&auto=format&fit=crop' },
    { name: 'Coca-Cola', src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop' },
    { name: 'Google', src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop' },
    { name: 'Microsoft', src: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=800&auto=format&fit=crop' },
    { name: 'Adobe', src: 'https://images.unsplash.com/photo-1520974735194-6c0a5c1d5b3b?q=80&w=800&auto=format&fit=crop' }
  ];

  // Replaceable hero images: update these URLs (or point to /public/ files or imported assets)
  const HERO_IMAGES = [
    'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1200&auto=format&fit=crop'
  ];

  // Countdown set to 20 days from now
  // Countdown to October 9, 2025 3:00 PM
const [countdown, setCountdown] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

useEffect(() => {
  const target = new Date("2025-10-09T15:00:00").getTime();

  const tick = () => {
    const now = Date.now();
    const diff = Math.max(0, target - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    setCountdown({ days, hours, mins, secs });
  };

  tick();
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);
}, []);


  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // Background classes to cycle through for sections. Add more class names here
  // if you want to rotate more images (e.g. 'palette3-bg').
  const bgClasses = ['palette-bg', 'palette2-bg'];
  const sectionBg = (index) => bgClasses[index % bgClasses.length];

  return (
    <div className="palette-bg" style={{ fontFamily: "Poppins, sans-serif", color: "#fff", position: "relative" }}>
      {/* Fire rain overlay for Home */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="fire-drop" style={{ left: `${Math.random()*100}%`, animationDuration: `${6 + Math.random()*6}s`, animationDelay: `${Math.random()*4}s` }} />
        ))}
      </div>

      {/* Tune in cloud */}
      <div className="tune-in-cloud">
        <div className="tune-in-content">
          Click here to discover and tune in for more details!!
          <div className="tune-in-arrow"></div>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {HERO_IMAGES.map((src, i) => (
            <div key={i} className="hero-tile"><div className="hero-img" style={{ backgroundImage: `url('${src}')` }}></div></div>
          ))}
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          {/*<h1 className="display-font headline-sandal retro-title" style={{ fontSize: "100.5 rem", lineHeight: 0.85, letterSpacing: '1px' }}>AGNI</h1>*/}
          <div
  className="hero-text-bg"
  style={{
    backgroundImage: "url('/landing-design.png')",
    backgroundSize: "cover",       // ensures it fills the container
    backgroundPosition: "center",   // centers the image
    display: "inline-block",        // so h1 width matches text
    padding: "10rem 20rem",           // optional padding around text
  }}
>
  <h1
    className="display-font headline-sandal retro-title"
    style={{
      fontSize: "6.5rem",
      lineHeight: 0.85,
      letterSpacing: "1px",
      color: "white",   // adjust text color if needed
      margin: 0
    }}
  >
    AGNI
  </h1>

</div>

          <p style={{ maxWidth: 720, marginTop: "0.75rem" }}>Vintage Beats • Classic Streets • Timeless Feels • Join the fire.</p>

          <div className="countdown" aria-live="polite">
            <div className="countdown-item">
              <div className="countdown-number">{String(countdown.days).padStart(2, '0')}</div>
              <div className="countdown-label">Days</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{String(countdown.hours).padStart(2, '0')}</div>
              <div className="countdown-label">Hours</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{String(countdown.mins).padStart(2, '0')}</div>
              <div className="countdown-label">Mins</div>
            </div>
            <div className="countdown-item">
              <div className="countdown-number">{String(countdown.secs).padStart(2, '0')}</div>
              <div className="countdown-label">Secs</div>
            </div>
          </div>

          <div className="hero-cta">
            <button onClick={() => scrollToSection(aboutRef)}>About</button>
            <button onClick={() => scrollToSection(sponsorsRef)}>Sponsors</button>
            <button onClick={() => scrollToSection(whyRef)}>Why AGNI?</button>
            <button onClick={() => scrollToSection(merchRef)}>Merch</button>
            <button onClick={() => scrollToSection(teamRef)}>Our Team</button>
          </div>
        </div>
      </section>

  {/* Sponsors Section */}
  <section ref={sponsorsRef} className={sectionBg(0)} style={{ padding: "5rem 2rem" }}>
        <h2 className="display-font headline-sandal" style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2.4rem", letterSpacing: "1px" }}>Sponsors</h2>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", alignItems: "stretch" }}>
          {SPONSOR_LOGOS.map((item, i) => (
            <div key={i} className="sponsor-item">
              <div className="sponsor-card">
                <img alt={item.name} src={item.src} />
              </div>
              <div className="sponsor-name">{item.name}</div>
            </div>
          ))}
        </div>
      </section>

  {/* About Us Section */}
  <section ref={aboutRef} className={sectionBg(1)} style={{ padding: "4rem 2rem" }}>
        <h2 className="display-font headline-sandal" style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2.4rem', letterSpacing: '1px' }}>About Us</h2>
        <p style={{ maxWidth: "800px", margin: "1rem auto" }}>
          AGNI25 has been a legacy of innovation, creativity, and excellence in cultural and technical
          events at CEG. Over the years, it has brought students together to celebrate talent, technology, and
          teamwork, inspiring generations.
        </p>
      </section>

  {/* Why AGNI? Section - Flip Cards */}
  <section ref={whyRef} className={sectionBg(2)} style={{ padding: "4rem 2rem" }}>
        <h2 className="display-font headline-sandal" style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2.4rem', letterSpacing: '1px' }}>Why AGNI25?</h2>
        <div className="flip-grid">
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-side flip-front" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=1200&auto=format&fit=crop')" }}>
                <h3>Legacy of Innovation</h3>
              </div>
              <div className="flip-side flip-back">
                <p>AGNI has built a reputation over the years for blending creativity, technology, and student talent into a vibrant festival.</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-side flip-front" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop')" }}>
                <h3>Cultural & Technical Showcase</h3>
              </div>
              <div className="flip-side flip-back">
                <p>From proshows and club activities to technical competitions—events designed to engage beyond academics.</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-side flip-front" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1200&auto=format&fit=crop')" }}>
                <h3>Community & Collaboration</h3>
              </div>
              <div className="flip-side flip-back">
                <p>Fosters leadership, networking, and collaboration among students—making it a cornerstone of campus life.</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-inner">
              <div className="flip-side flip-front" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop')" }}>
                <h3>Why Participate?</h3>
              </div>
              <div className="flip-side flip-back">
                <p>Build your portfolio, meet industry mentors, grow your network, and gain real-world experience across domains.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* Contact Us Section */}
<section ref={contactRef} className={sectionBg(3)} style={{ padding: "4rem 2rem" }}>
  <div className="contact-wrap">
    <h2 className="display-font headline-sandal" style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.4rem', letterSpacing: '1px' }}>Contact Us</h2>
    
    <div className="contact-icons" style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '2.5rem',
      fontSize: '26px', // 15% bigger
      transform: 'scale(1.15)',
    }}>
      {/* Facebook */}
      <a 
        className="contact-icon facebook" 
        href="https://www.facebook.com/techofes.co.in" 
        target="_blank" rel="noreferrer" 
        aria-label="Facebook"
        style={{
          color: '#1877F2',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          width: 60, height: 60, borderRadius: '50%', background: '#fff',
          boxShadow: '0 0 0 rgba(255, 140, 0, 0)', transition: '0.3s',
        }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 15px 5px rgba(255, 140, 0, 0.5)'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 0 rgba(255, 140, 0, 0)'}
      >
        f
      </a>

      {/* Instagram */}
      <a 
        className="contact-icon instagram" 
        href="https://www.instagram.com/saas_ceg/" 
        target="_blank" rel="noreferrer" 
        aria-label="Instagram"
        style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          width: 60, height: 60, borderRadius: '50%',
          background: 'linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)',
          color: '#fff', fontWeight: 'bold',
          boxShadow: '0 0 0 rgba(255, 140, 0, 0)', transition: '0.3s',
        }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 15px 5px rgba(255, 140, 0, 0.5)'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 0 rgba(255, 140, 0, 0)'}
      >
        🅾
      </a>

      {/* Email */}
      <a 
        className="contact-icon email" 
        href="mailto:saasceg25@gmail.com" 
        aria-label="Email"
        style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          width: 60, height: 60, borderRadius: '50%',
          background: '#ff7f50', color: '#fff', fontWeight: 'bold',
          boxShadow: '0 0 0 rgba(255, 140, 0, 0)', transition: '0.3s',
        }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 15px 5px rgba(255, 140, 0, 0.5)'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 0 rgba(255, 140, 0, 0)'}
      >
        ✉
      </a>

      {/* WhatsApp */}
      <a 
        className="contact-icon whatsapp" 
        href="https://www.whatsapp.com/channel/0029VaE66JJ9xVJeMj7E8M08" 
        target="_blank" rel="noreferrer" 
        aria-label="WhatsApp"
        style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          width: 60, height: 60, borderRadius: '50%',
          background: '#25D366', color: '#fff', fontWeight: 'bold',
          boxShadow: '0 0 0 rgba(255, 140, 0, 0)', transition: '0.3s',
        }}
        onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 15px 5px rgba(255, 140, 0, 0.5)'}
        onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 0 rgba(255, 140, 0, 0)'}
      >
        ☎
      </a>
    </div>
  </div>
</section>

  {/* Merchandise Section */}
<section
  ref={merchRef}
  className={sectionBg(4)}
  style={{ padding: "4rem 2rem", textAlign: "center" }}
>
  <h2
    className="display-font headline-sandal"
    style={{
      textAlign: 'center',
      marginBottom: '1rem',
      fontSize: '2.4rem',
      letterSpacing: '1px',
    }}
  >
    Merchandise
  </h2>
  <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'left' }}>
    <p style={{ marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
      <strong>Unlock Your Style with the Official Agni25 T-Shirt!</strong>
    </p>
    <div className="feature-grid" style={{ marginTop: '1rem' }}>
      <div className="feature-card">
        <div className="feature-head" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div className="feature-icon" style={{ fontSize: '1.2rem' }}>★</div>
          <div style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '0.5px' }}>Unlock Your Style</div>
        </div>
        <div className="feature-text" style={{ fontSize: '1rem', lineHeight: '1.5' }}>
          Get ready to celebrate the 25th anniversary of Agni in style! Exclusive Agni25 t‑shirts that are a must‑have for every student.
        </div>
      </div>
      <div className="feature-card">
        <div className="feature-head" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div className="feature-icon" style={{ fontSize: '1.2rem' }}>★</div>
          <div style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '0.5px' }}>Designs & Discounts</div>
        </div>
        <div className="feature-text" style={{ fontSize: '1rem', lineHeight: '1.5' }}>
          Explore vibrant and creative designs for this year's tee and discover attractive discounts to showcase your Agni pride.
        </div>
      </div>
      <div className="feature-card">
        <div className="feature-head" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div className="feature-icon" style={{ fontSize: '1.2rem' }}>★</div>
          <div style={{ fontSize: '1.25rem', fontWeight: 600, letterSpacing: '0.5px' }}>Wear Your Story</div>
        </div>
        <div className="feature-text" style={{ fontSize: '1rem', lineHeight: '1.5' }}>
          Show your spirit, wear your story. Get your limited edition Agni25 t‑shirt today!
        </div>
      </div>
    </div>
    <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
      <button onClick={() => window.location.assign('/merch')}>
        Discover Designs and Discounts
      </button>
    </div>
  </div>
</section>


  {/* Our Team Horizontal Scroller */}
  <section ref={teamRef} className={sectionBg(5)} style={{ padding: "4rem 0" }}>
        <h2 className="display-font headline-sandal" style={{ textAlign: "center", marginBottom: "1rem", fontSize: '2.4rem', letterSpacing: '1px' }}>Our Team</h2>
        <div id="teamScroller" style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>
          <div className="no-scrollbar" style={{ display: 'flex', overflowX: 'auto', scrollBehavior: 'smooth', gap: '1rem', padding: '0 2.5rem' }}>
            {teamMembers.map((m, i) => {
              const imgSrc = m?.image ? (m.image.startsWith('/') ? m.image : `/${m.image}`) : `https://source.unsplash.com/featured/300x300/?student,face&sig=${i}`;
              return (
                <div key={i} className="card" style={{ width: 200, flex: '0 0 auto', textAlign: 'center' }}>
                  <div style={{ width: 160, height: 160, margin: '0.5rem auto', borderRadius: 14, overflow: 'hidden', background: 'rgba(255,255,255,0.06)' }}>
                    <img alt={m.name} src={imgSrc} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/agni-logo.png'; }} />
                  </div>
                  <div style={{ fontSize: 13, opacity: .9 }}>{m.role}</div>
                  <div style={{ fontWeight: 600 }}>{m.name}</div>
                </div>
              );
            })}
          </div>
          <button onClick={() => { const sc = document.querySelector('#teamScroller .no-scrollbar'); sc && sc.scrollBy({ left: -260, behavior: 'smooth' }); }}
                  style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', width: 44, height: 44, borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.2)', cursor: 'pointer' }}>
            ‹
          </button>
          <button onClick={() => { const sc = document.querySelector('#teamScroller .no-scrollbar'); sc && sc.scrollBy({ left: 260, behavior: 'smooth' }); }}
                  style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', width: 44, height: 44, borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.2)', cursor: 'pointer' }}>
            ›
          </button>
        </div>
      </section>

      {/* Footer */}
      {/*<footer
        style={{
          textAlign: "center",
          padding: "2rem",
          background: "linear-gradient(135deg, #ff6a00, #ee0979)",
        }}
      >
        &copy; 2025 AGNI. All Rights Reserved.
      </footer>*/}
    </div>
  );
}


export default Home;
