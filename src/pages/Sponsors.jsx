import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SponsorCard from '../components/SponsorCard';

function Sponsors() {
  const sponsors = [
    { name: 'Google', logo: '/assets/images/google.png', description: ['Tech giant', 'Cloud', 'AI'] },
    { name: 'Microsoft', logo: '/assets/images/microsoft.png', description: ['Software', 'Cloud', 'Gaming'] },
    { name: 'Adobe', logo: '/assets/images/adobe.png', description: ['Design', 'Creativity', 'Photoshop'] }
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Sponsors</h2>
      <Swiper spaceBetween={30} slidesPerView={3} loop={true} autoplay={{ delay: 3000 }}>
        {sponsors.map((s,i) => (
          <SwiperSlide key={i}>
            <SponsorCard {...s} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Sponsors;
