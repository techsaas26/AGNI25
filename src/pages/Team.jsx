import React, { useMemo, useState, useEffect } from 'react';
import TeamMemberCard from '../components/TeamMemberCard';
import Modal from '../components/Modal';

const ROLE_SPECS = [
  { title: 'Presidents', count: 2 },
  { title: 'Vice Presidents', count: 2 },
  { title: 'General Secretary', count: 1 },
  { title: 'Joint Secretary', count: 1 },
  { title: 'Sports Secretary', count: 1 },
  { title: 'Corporate Secretary', count: 2 },
  { title: 'Finance', count: 2 },
  { title: 'Events', count: 3 },
  { title: 'Logistics', count: 2 },
  { title: 'Human Resource', count: 3 },
  { title: 'Marketing', count: 2 },
  { title: 'Contents', count: 1 },
  { title: 'Technical Design', count: 2 },
  { title: 'Graphics Design', count: 3 },
  { title: 'Permissions / Documentations', count: 1 }
];

const RANDOM_NAMES = [
  'Aarav','Bhavana','Chirag','Diya','Eshan','Fatima','Gaurav','Harini','Ishaan','Jaya','Kiran','Lakshmi','Mohan','Navya','Omkar','Prisha','Qadir','Rhea','Samar','Tanvi','Utkarsh','Vidya','Wasim','Xenia','Yash','Zara'
];

const IMAGE_TOPICS = ['face','portrait','student','people','team'];
const randomFrom = (arr) => arr[Math.floor(Math.random()*arr.length)];
const randomPerson = (role) => ({
  name: randomFrom(RANDOM_NAMES) + ' ' + randomFrom(RANDOM_NAMES),
  role,
  image: `https://source.unsplash.com/featured/300x300/?${randomFrom(IMAGE_TOPICS)}`
});

function Team() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);
  const [grouped, setGrouped] = useState([]);

  useEffect(() => {
    // Try loading team.json from public folder; if it fails, fall back to random data
    fetch('/team.json')
      .then(res => {
        if (!res.ok) throw new Error('team.json not found');
        return res.json();
      })
      .then(async (data) => {
        // data is expected to be an array of members in the order matching ROLE_SPECS
        // We'll validate each image by preloading it. If a path fails, try .jpg/.webp fallbacks and finally /agni-logo.png
        const tryImage = (path) => new Promise(resolve => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = path;
        });

        const resolveImagePath = async (imgName) => {
          if (!imgName) return '/agni-logo.png';
          const base = imgName.startsWith('/') ? imgName : `/${imgName}`;
          const candidates = [base, base.replace(/\.png$/i, '.jpg'), base.replace(/\.png$/i, '.webp'), base + '?v=1'];
          for (const c of candidates) {
            // eslint-disable-next-line no-await-in-loop
            const ok = await tryImage(c);
            if (ok) return c;
          }
          return '/agni-logo.png';
        };

        const groups = [];
        let cursor = 0;
        for (const spec of ROLE_SPECS) {
          const raw = data.slice(cursor, cursor + spec.count);
          const members = await Promise.all(raw.map(async (m) => ({
            name: m.name,
            role: m.role,
            image: await resolveImagePath(m.image),
            instagram: m.instagram || '',
            linkedin: m.linkedin || ''
          })));
          cursor += spec.count;
          groups.push({ title: spec.title, members });
        }
        setGrouped(groups);
      })
      .catch(() => {
        // fallback: generate random people grouped by ROLE_SPECS
        const groups = ROLE_SPECS.map(spec => ({
          title: spec.title,
          members: Array.from({ length: spec.count }, () => randomPerson(spec.title))
        }));
        setGrouped(groups);
      });
  }, []);

  const handleClick = member => {
    setCurrentMember(member);
    setModalOpen(true);
  };

  return (
    <div style={{ padding: '2rem 1rem' }}>
      {grouped.map((group, gi) => (
        <section key={gi} style={{ margin: '1.5rem auto', maxWidth: '1300px' }}>
          <h2 className="display-font" style={{ margin: '0 0 1rem 0' }}>{group.title}</h2>
          <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
            {group.members.map((m, mi) => (
              <TeamMemberCard key={mi} {...m} onClick={() => handleClick(m)} />
            ))}
          </div>
        </section>
      ))}

      <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
        <h3>{currentMember?.name}</h3>
        <p>{currentMember?.role}</p>
        <p>Details about the member can go here...</p>
      </Modal>
    </div>
  );
}

export default Team;
