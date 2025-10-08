import React, { useState, useEffect } from 'react';

// You might need to pass HERO_IMAGES as a prop if it's defined elsewhere
// const HeroSection = ({ HERO_IMAGES }) => {
const HeroSection = () => {
  // 1. A state to track if the view is mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // 2. This effect runs when the component mounts to check the window size
  useEffect(() => {
    // Function to update the isMobile state
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the listener when the component is unmounted
    return () => window.removeEventListener('resize', handleResize);
  }, []); // The empty array ensures this effect runs only once

  // 3. Define the style object. The minHeight changes based on the isMobile state.
  const heroStyle = {
    position: 'relative',
    minHeight: isMobile ? '50vh' : '100vh', // <-- THE KEY CHANGE IS HERE
    width: '100%',
    display: 'grid',
    placeItems: 'center',
  };

  return (
    <section id="herodiv" className="herodiv" style={heroStyle}>
      {/* This div acts ONLY as the background layer */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/landing.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
        }}
      />
      {/* You can add other content here */}
    </section>
  );
};

export default HeroSection;