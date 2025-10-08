import React, { useState } from 'react';
import Modal from '../components/Modal';
import './Events.css';

// --- FIXED: Centralized configuration for categories ---
// This avoids mismatches between display names and data keys.
const CATEGORY_CONFIG = [
  {
    name: 'Signature Events',      // The key used in eventData
    image: '/signature.jpg',       // The image path
    displayName: 'Signature',      // The short name for the card title
  },
  {
    name: 'Iconic Events',
    image: '/iconic.jpg',
    displayName: 'Iconic',
  },
  {
    name: 'Clubs',
    image: '/clubs.jpg',
    displayName: 'Clubs',
  },
  {
    name: 'Proshow events',
    image: '/proshows.jpg',
    displayName: 'Proshows',
  },
];

// --- FIXED: Defined the missing API endpoint constant ---
// TODO: Replace 'YOUR_API_ENDPOINT_HERE' with your actual registration API URL.
const REGISTER_ENDPOINT = 'YOUR_API_ENDPOINT_HERE';

function Events() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDay, setSelectedDay] = useState('All Days');
  const [registering, setRegistering] = useState(false);

  // --- Complete and UPDATED eventData JSON object ---
  const eventData = {
    'Clubs': {
      'Day 1': [
        { 
          title: 'Club - Aakriti • Hop Hustle',
          description: 'Jump, hop, and balance your way through numbered boxes with a marker to guide your moves. Agility, accuracy and tons of fun!',
          pricing: 'Free',
          image: '/Hop hustle.jpg',
        },
        {
          title: 'Club - ACM • Bid and Built',
          description: 'Crack quirky product quizzes, win items in a bidding war, invent something wild and pitch it with a hilarious skit.',
          pricing: 'Free',
          image: '/ACM-CEG_BID&BUILD.jpeg',
        },
        {
          title: 'Club - AU Podium • Speechify the Song',
          description: 'A secret song is turned into a dramatic, funny or confusing speech—teams race against time to guess it right!',
          pricing: 'Free',
          image: '/Speechify the song.png',
        },
        {
          title: 'Club - AUSEC • Bizzare Bazaar',
          description: 'Sell the quirkiest products in the most creative ways. Wit and persuasion rule this hilarious marketing showdown!',
          pricing: 'Free',
          image: '/clubs.jpg',
        },
        {
          title: "Club - CSAU • Hit Bull's Eye",
          description: 'Toss sponge balls at moving targets on screen. Accuracy, reflexes and strategy decide your score!',
          pricing: 'Free',
          image: '/Instagram post - 1.png',
        },
        {
          title: 'Club - EQ • EQ Compass',
          description: 'Pick your corner—Logical, Emotional, Funny, or Calm—after hearing a quirky situation, then justify your choice!',
          pricing: 'Free',
          image: '/EQ Compass poster.jpeg',
        },
        {
          title: 'Club - LitClub • Two Sides of a Coin',
          description: 'Two participants play wild characters, swap, downplay each other, then face a universe-switching showdown.',
          pricing: 'Free',
          image: '/TWO SIDES OF A COIN - LitClub.png',
        },
        {
          title: 'Club - Maathavam • நீ தான்டா Artist uhh',
          description: 'Dive into colors, sounds and flavors of Tamil culture with events that entertain, inspire and celebrate tradition!',
          pricing: 'Free',
          image: '/clubs.jpg',
        },
        {
          title: 'Club - Pixels • Bid for the Shot',
          description: 'Become a savvy art collector—bid with your limited Pixels currency to snag the coolest photography treasures.',
          pricing: 'Free',
          image: '/clubs.jpg',
        },
        {
          title: 'Club - QA • Arena Quiz',
          description: 'Sports trivia face-off with audio‑visual twists—from cricket and football to RPGs and F1 circuits.',
          pricing: 'Free',
          image: '/Arena Quiz - Quizzers Anonymous.png',
        },
        {
          title: 'Club - Robotics • Escape Room',
          description: 'Crack codes, solve circuits and decode riddles in a robotics-inspired escape challenge. Brains over bots!',
          pricing: 'Free',
          image: '/r.jpg',
        },
        {
          title: 'Club - SQC • Quality Quest: Roll & Rise',
          description: 'Roll the dice, tell truths (and sneaky lies) and climb to victory in a Snakes & Ladders-inspired quest.',
          pricing: 'Free',
          image: '/s.png',
        },
        {
          title: 'Club - GT • Pass the Puzzle',
          description: 'Race through a relay of brain‑teasing puzzles—solve your piece and pass it on to sprint to victory.',
          pricing: 'Free',
          image: '/PTP GT.png',
        },
        {
          title: 'Club - Theatron • Channel Surfing',
          description: 'Put creativity to the test—crack product quizzes, grab items in a bid and sell it with a skit!',
          pricing: 'Free',
          image: '/channel surfing_theatron.png',
        },
        {
          title: 'Club - Scribbles • Cover Story',
          description: 'A fun editorial challenge—craft the most compelling cover story under pressure.',
          pricing: 'Free',
          image: '/cover_story-scribbles.png',
        },
      ],
      'Day 2': [
        { 
          title: 'Club - Astro • Balloon Buzz',
          description: 'Pick a balloon, pop it and collect letters to form astronomy-themed words—speed, strategy and stellar fun!',
          pricing: 'Free',
          image: '/clubs.jpg',
        },
        {
          title: 'Club - AU Podium • Roast vs Defend',
          description: 'One participant hilariously roasts a topic while another defends it—wit, comebacks and laughs guaranteed.',
          pricing: 'Free',
          image: '/ro.png',
        },
        {
          title: 'Club - AUSEC • Money Feud',
          description: 'An entrepreneurial game show—startup surveys, quirky crises and money-sense challenges collide.',
          pricing: 'Free',
          image: '/clubs.jpg',
        },
        {
          title: 'Club - EQ • Veil of Doubt',
          description: 'Werewolf-style deception—villagers vs wolves. Bluff, deduce and survive through night and day rounds.',
          pricing: 'Free',
          image: '/Veil of dobt event.jpeg',
        },
        {
          title: 'Club - GB • Eco Sculpt',
          description: 'Eco‑friendly clay modelling—craft sustainable, themed masterpieces that celebrate imagination.',
          pricing: 'Free',
          image: '/GB- EcoSculpt.jpg',
        },
        {
          title: 'Club - Leo • Hangin For Clues',
          description: 'Crack clues and shout answers to save your team from the hangman—heroes, heroines, movies and songs!',
          pricing: 'Free',
          image: '/Hangin_For_Clues.png',
        },
        {
          title: 'Club - Quizzers Anonymous • Kollywood Quiz',
          description: 'A quiz on your favourite Tamil Movise and songs!',
          pricing: 'Free',
          image: '/k.png',
        },
        {
          title: 'Club - LitClub • Assassin',
          description: 'Villagers, Detectives and a Serial Killer—bluff, deduce and solve the murder mystery before it is too late.',
          pricing: 'Free',
          image: '/assa.png',
        },
        {
          title: 'Club - Pixels • The Reverse Click',
          description: 'Shoot photos to match quirky captions like “Lonely at the top” or “Echoes of silence” under time pressure.',
          pricing: 'Free',
          image: '/clubs.jpg',
        },
        {
          title: 'Club - QA • Motion Quiz',
          description: 'All about animation—from classics to game engines—with AV twists and sabotage to keep you on your toes.',
          pricing: 'Free',
          image: '/clubs.jpg',
        },
        {
          title: 'Club - Saptham • Follow The Moves',
          description: 'Electrifying dance-off—memory dance challenge across styles from Western to Bharatanatyam to Kathak.',
          pricing: 'Free',
          image: '/Agni Posters.png.png',
        },
        {
          title: 'Club - Sruthilaya • The Singing Telephone',
          description: 'Chinese Whispers with tunes—freshers hum a melody down the chain; can the last player guess it right?',
          pricing: 'Free',
          image: '/SRUTHILAYA - SINGING TELEPHONE.png',
        },
        {
          title: 'Club - SQC • Quality Charades',
          description: 'Hot-seat problem solving with Kaizen, Six Sigma, PDCA and RCA—turn defects and complaints into wins.',
          pricing: 'Free',
          image: '/QUALITY CHARADES_SQC.png',
        },
        {
          title: 'Club - GT • Mission: Among Us',
          description: 'Two-round thriller—trivia and puzzles, then live gameplay with Crewmates, Impostors and sabotage.',
          pricing: 'Free',
          image: '/MAU GT 3.png',
        },
        {
          title: 'Club - Theatron • Reverse Theatre',
          description: 'Teams act their story backwards—from the ending to the beginning—for laughs and creative chaos.',
          pricing: 'Free',
          image: '/reverse theatre_theatron.png',
        },
        {
          title: 'Club - FINS AU • Predict and Profit',
          description: 'Two rounds—predict real stock moves, then bid on mystery companies with limited clues to top the charts.',
          pricing: 'Free',
          image: '/clubs.jpg',
        }
      ]
    },
    'Iconic Events': {
      'Day 1': [
        { 
          title: 'Fashion show', 
          description: 'Retro Fashion show in agni 25 will showcase the evolution of fashion trends over the decades.', 
          pricing: 'Free',
          image: '/fashion.jpg',
          purchaseLink: 'https://forms.gle/nFA7znaGCRbM2Qrg7',
        }
      ]
    },
    'Proshow events': {
      'Day 0': [
        { 
          title: 'Movie Screening', 
          description: 'A relaxed big-screen experience to kick off the celebrations.', 
          pricing: 'Free',
          image: '/moviescreening.png',
        }
      ],
      'Day 1': [
        {
          title: 'Concert Night',
          description: "A concert ticket isn't just an entry pass, it's your gateway to an unforgettable night of music, celebration and togetherness.😉 Let the beats move you, the lights inspire you and the fest ignite memories that last a lifetime.🔥",
          pricing: 'Paid',
          image: '/concertnight.png',
          club: 'SAAS',
          purchaseLink: 'https://forms.gle/gYMsPeeKugQmuK1u7',
          pricingDetails: 'Gold – ₹200, Silver – ₹100'
        }
      ],
      'Day 2': [
        {
          title: 'Talent of Agni',
          description: 'Showcase of incredible campus talent across arts, music and performance.',
          pricing: 'Free',
          image: '/talent.png',
        }
      ]
    },
    'Signature Events': {
      'Day 1': [
        {
          title: 'Club - Sruthilaya • Solo Singing',
          description: 'Solo Singing Competition',
          pricing: 'Free',
          image: '/Solo singing -1.png',
        },
        {
          title: 'Club - Sruthilaya • Solo Instrumentation',
          description: 'Solo Instrumentation Competition',
          pricing: 'Free',
          image: '/Solo instru -1.png',
        },
        {
          title: 'Club - Saptham • Nadha Vaibhavam',
          description: 'The music and instrumentals solo competition',
          pricing: 'Free',
          image: '/Agni Posters.zip - 3.png',
        },
        {
          title: 'Club - Saptham • Natya Vaibhavam',
          description: 'Step into the world of rhythm, expression and tradition! The bharatnatyam solo competition',
          pricing: 'Free',
          image: '/Agni Posters.zip - 1.png',
        },
      ],
      'Day 2': [
        { 
          title: 'Club - Intra Variety • Echoes of The Past',
          description: 'Dig the past and have fun!',
          pricing: 'Free',
          image: '/i1.png',
        },
        {
          title: 'Solo Dance',
          description: 'Own the spotlight with your unique moves. Bring your passion and ignite the stage!',
          pricing: 'Free',
          image: '/soloDance.jpeg',
          club: 'Twisters',
          purchaseLink: 'https://forms.gle/ejovES9kG1H3YQsc7',
          pricingDetails: 'On-the-spot registrations available'
        },
        {
          title: 'Duo Dance',
          description: 'Showcase your coordination and chemistry as a dynamic duo.',
          pricing: 'Free',
          image: '/DuoDance.jpeg',
          club: 'Twisters',
          purchaseLink: 'https://forms.gle/CEz3bakbDZbdSuMm6',
          pricingDetails: 'On-the-spot registrations available'
        },
        {
          title: 'Adaptunes',
          description: 'Test your spontaneity as you groove to surprise tracks. Creativity and speed win the day!',
          pricing: 'Free',
          image: '/Adaptunes.jpeg',
          club: 'Twisters',
          purchaseLink: 'https://forms.gle/N3ruyJXsj77XpQhR7',
          pricingDetails: 'On-the-spot registrations available'
        },
      ]
    }
  };
  
  const days = ['All Days', 'Day 0', 'Day 1', 'Day 2'];

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setSelectedDay('All Days');
  };

  const handleDayClick = (day) => {
    // This allows toggling a day filter off by clicking it again
    if (selectedDay === day) {
      setSelectedDay('All Days');
    } else {
      setSelectedDay(day);
    }
  };

  const handleEventClick = (event) => {
    setCurrentEvent(event);
    setModalOpen(true);
  };

  const handleRegisterNow = async () => {
    if (!currentEvent) return;
    setRegistering(true);
    try {
      await fetch(REGISTER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: currentEvent.title,
          day: currentEvent.eventDay,
          club: currentEvent.club,
          category: selectedCategory,
        }),
      });
      alert('Registration request submitted successfully!');
    } catch (err) {
      alert('Failed to submit registration. Please try again.');
      console.error('Registration Error:', err);
    } finally {
      setRegistering(false);
    }
  };

  // --- FIXED: Reworked filtering logic to be simpler and safer ---
  // Removed dependency on the undefined 'CLUBS' array.
  const getFilteredEvents = () => {
    if (!selectedCategory || !eventData[selectedCategory]) return [];

    if (selectedDay === 'All Days') {
      // Flatten all events from all days within the selected category
      return Object.entries(eventData[selectedCategory]).flatMap(([dayName, dayEvents]) => 
        dayEvents.map(ev => ({ ...ev, eventDay: dayName }))
      );
    } else {
      // Get events for the specific day
      const events = eventData[selectedCategory]?.[selectedDay] || [];
      return events.map(ev => ({ ...ev, eventDay: selectedDay }));
    }
  };

  const currentEvents = getFilteredEvents();

  return (
    <div className="events-container">
      {/* Falling fireballs overlay */}
      <div className="ember-rain" aria-hidden="true">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={`ember-${i}`}
            className="ember"
            style={{
              "--x": `${Math.random() * 100}vw`,
              "--delay": `${Math.random() * 5}s`,
              "--dur": `${6 + Math.random() * 6}s`,
              "--size": `${3 + Math.random() * 5}px`,
            }}
          />
        ))}
      </div>

      {/* Campfire Elements */}
      <div className="campfire-base"></div>
      {/* Left Fire */}
      <div className="fire-container fire-left">
        <div className="main-flame"></div>
        <div className="flame flame-1"></div>
        <div className="flame flame-2"></div>
        <div className="flame flame-3"></div>
        {[...Array(6)].map((_, i) => (
          <div key={`l-${i}`} className="spark"></div>
        ))}
      </div>
      <div className="smoke smoke-left"></div>

      {/* Right Fire */}
      <div className="fire-container fire-right">
        <div className="main-flame"></div>
        <div className="flame flame-1"></div>
        <div className="flame flame-2"></div>
        <div className="flame flame-3"></div>
        {[...Array(6)].map((_, i) => (
          <div key={`r-${i}`} className="spark"></div>
        ))}
      </div>
      <div className="smoke smoke-right"></div>
      
      <div className="events-content">
        <h1 className="events-title">Events</h1>

        {/* --- FIXED: Category cards now use the robust CATEGORY_CONFIG --- */}
        {!selectedCategory && (
          <div className="categories-grid">
            {CATEGORY_CONFIG.map((category) => (
              <div
                key={category.name}
                className="category-card"
                onClick={() => handleCategoryClick(category.name)} // Uses the correct key
              >
                <div className="category-image">
                  <img
                    src={category.image}
                    alt={category.name}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x200/4a4a4a/ffffff?text=${category.displayName}`;
                    }}
                  />
                </div>
                {/* Uses the shorter, friendly display name */}
                <div className="category-name">{category.displayName} Events</div>
              </div>
            ))}
          </div>
        )}

        {selectedCategory && (
          <div className="events-section">
            <div className="category-header">
              <h2 className="category-heading">{selectedCategory}</h2>
            </div>
            
            <div className="back-button-container">
              <button
                className="back-button"
                onClick={() => setSelectedCategory(null)}
              >
                ← Back to Categories
              </button>
            </div>
            
            <div className="days-navigation">
              <div className="days-buttons">
                {days.filter(day => day !== 'All Days').map((day) => (
                  <button
                    key={day}
                    className={`day-button ${selectedDay === day ? 'day-button-active' : ''}`}
                    onClick={() => handleDayClick(day)}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div className="events-grid">
              {currentEvents.map((event, index) => (
                <div
                  key={`${event.title}-${index}`}
                  className="event-card"
                  onClick={() => handleEventClick(event)}
                >
                  <div className="event-image">
                    <img
                      src={event.image}
                      alt={event.title}
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/300x200/333/ffffff?text=${event.title}`;
                      }}
                    />
                  </div>
                  <div className="event-title">{event.title}</div>
                  <div className="event-day">{event.eventDay}</div>
                </div>
              ))}
            </div>

            {currentEvents.length === 0 && (
              <div className="no-events">
                No events found for {selectedCategory} {selectedDay !== 'All Days' ? `on ${selectedDay}` : ''}.
              </div>
            )}
          </div>
        )}

        <Modal show={modalOpen} onClose={() => setModalOpen(false)} unstyled>
          {currentEvent && (
            <div
              className="modal-with-blur-bg"
              style={{ '--modal-bg-image': `url(${currentEvent.image})` }}
            >
              <div className="modal-content-blur">
                <h3 className="modal-title">{currentEvent.title}</h3>
                <div className="modal-details">
                  <p><strong>Description:</strong> {currentEvent.description}</p>
                  <p><strong>Day:</strong> {currentEvent.eventDay}</p>
                  {/* --- FIXED: Conditionally render club info --- */}
                  {currentEvent.club && <p><strong>Club:</strong> {currentEvent.club}</p>}
                </div>

                {/* --- FIXED: Improved button logic for registration/tickets --- */}
                <div className="modal-actions">
                  {currentEvent.purchaseLink && (
                    <button
                      className="ticket-button"
                      onClick={() => window.open(currentEvent.purchaseLink, '_blank')}
                    >
                      {currentEvent.pricing === 'Free' 
                        ? 'Register for Free' 
                        : `Get Tickets (${currentEvent.pricingDetails || 'Paid'})`}
                    </button>
                  )}
                  
                  {/* This button shows only for Signature Events without a Google Form link */}
                  {selectedCategory === 'Signature Events' && !currentEvent.purchaseLink && (
                    <button
                      className="register-button"
                      onClick={handleRegisterNow}
                      disabled={registering}
                    >
                      {registering ? 'Registering…' : 'Register Now'}
                    </button>
                  )}
                  
                  <button
                    className="back-button"
                    onClick={() => setModalOpen(false)}
                  >
                    ← Back
                  </button>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}

export default Events;