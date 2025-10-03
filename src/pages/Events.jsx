import React, { useState } from 'react';
import Modal from '../components/Modal';
import './Events.css';

// Image lists: place these files in the public/ folder
const CATEGORY_IMAGES = ['/signature.jpg', '/iconic.jpg', '/clubs.jpg', '/proshows.jpg', '/carnivals.png'];
const CLUBS = ['SAAS', 'CTF', 'ACM', 'Spartanz'];
const REGISTER_ENDPOINT = '/api/register'; // dummy endpoint for now

function Events() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDay, setSelectedDay] = useState('All Days');
  const [registering, setRegistering] = useState(false);

  const eventData = {
    'Clubs': {
      'Day 1': [
        { 
          title: 'Movie Screening', 
          venue: 'Main Gallery', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
          pricing: 'Free',
          image: '/moviescreening.png',
          startTime: '1:30 PM',
          endTime: '3:00 PM'
        },
        { 
          title: 'Concert Night', 
          venue: 'Ground', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
          pricing: 'Paid',
          image: '/concertnight.png',
          startTime: '6:00 PM',
          endTime: '9:00 PM'
        }
      ],
      'Day 2': [
        { 
          title: 'Talent of Agni', 
          venue: 'Vivek Audi', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
          pricing: 'Free',
          image: '/talent.png',
          startTime: '10:00 AM',
          endTime: '12:00 PM'
        },
        { 
          title: 'Dance Battle', 
          venue: 'Vivek Audi', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
          pricing: 'Paid',
          image: '/dancebattle.png',
          startTime: '2:00 PM',
          endTime: '4:30 PM'
        }
      ],
      'Day 3': [
        { 
          title: 'Movie Screening', 
          venue: 'Main Gallery', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
          pricing: 'Free',
          image: '/moviescreening.png',
          startTime: '11:00 AM',
          endTime: '1:00 PM'
        }
      ]
    },
    'Iconic': {
      'Day 1': [
        { 
          title: 'Movie Screening', 
          venue: 'Main Gallery', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
          pricing: 'Free',
          image: '/moviescreening.png',
          startTime: '1:30 PM',
          endTime: '3:00 PM'
        },
        { 
          title: 'Dance Battle', 
          venue: 'Vivek Audi', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
          pricing: 'Paid',
          image: '/dancebattle.png',
          startTime: '4:00 PM',
          endTime: '6:30 PM'
        }
      ],
      'Day 2': [
        { 
          title: 'Talent of Agni', 
          venue: 'Vivek Audi', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
          pricing: 'Free',
          image: '/talent.png',
          startTime: '10:00 AM',
          endTime: '12:00 PM'
        },
        { 
          title: 'Movie Screening', 
          venue: 'Main Gallery', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
          pricing: 'Free',
          image: '/moviescreening.png',
          startTime: '2:30 PM',
          endTime: '4:00 PM'
        }
      ],
      'Day 3': [
        { 
          title: 'DJ Night', 
          venue: 'Ground', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
          pricing: 'Free',
          image: '/djnight.png',
          startTime: '7:00 PM',
          endTime: '10:00 PM'
        }
      ]
    },
    'Signature': {
      'Day 1': [
        { 
          title: 'Hackathon', 
          venue: 'CEG Square', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
          pricing: 'Paid',
          image: '/hackathon.png',
          startTime: '9:00 AM',
          endTime: '5:00 PM'
        },
        { 
          title: 'DJ Night', 
          venue: 'Ground', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
          pricing: 'Free',
          image: '/djnight.png',
          startTime: '7:00 PM',
          endTime: '10:00 PM'
        }
      ],
      'Day 2': [
        { 
          title: 'Talent of Agni', 
          venue: 'Vivek Audi', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
          pricing: 'Free',
          image: '/talent.png',
          startTime: '10:00 AM',
          endTime: '12:00 PM'
        },
        { 
          title: 'Movie Screening', 
          venue: 'Main Gallery', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
          pricing: 'Free',
          image: '/moviescreening.png',
          startTime: '2:30 PM',
          endTime: '4:00 PM'
        }
      ],
      'Day 3': [
        { 
          title: 'Movie Screening', 
          venue: 'Main Gallery', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
          pricing: 'Free',
          image: '/moviescreening.png',
          startTime: '11:00 AM',
          endTime: '1:00 PM'
        }
      ]
    },
    'Proshows': {
      'Day 1': [
        { 
          title: 'Talent of Agni', 
          venue: 'Vivek Audi', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
          pricing: 'Free',
          image: '/talent.png',
          startTime: '10:00 AM',
          endTime: '12:00 PM'
        }
      ],
      'Day 2': [
        { 
          title: 'Movie Screening', 
          venue: 'Main Gallery', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
          pricing: 'Free',
          image: '/moviescreening.png',
          startTime: '2:30 PM',
          endTime: '4:00 PM'
        }
      ],
      'Day 3': [
        { 
          title: 'DJ Night', 
          venue: 'Ground', 
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
          pricing: 'Free',
          image: '/djnight.png',
          startTime: '7:00 PM',
          endTime: '10:00 PM'
        }
      ]
    },
    'Carnivals': {
      'Day 1': [
        {
          title: 'Carnival Parade',
          venue: 'Main Ground',
          description: 'Colorful parade with music, costumes, and games for everyone.',
          pricing: 'Free',
          image: '/carnivals.png',
          startTime: '11:00 AM',
          endTime: '12:30 PM'
        },
        {
          title: 'Carnival Stalls',
          venue: 'Central Plaza',
          description: 'Food, fun, and mini-games across multiple lively stalls.',
          pricing: 'Free',
          image: '/carnivals.png',
          startTime: '3:00 PM',
          endTime: '5:00 PM'
        }
      ],
      'Day 2': [
        {
          title: 'Mask Making',
          venue: 'Art Corner',
          description: 'Bring your creativity to life with a quick mask making session.',
          pricing: 'Free',
          image: '/carnivals.png',
          startTime: '10:30 AM',
          endTime: '12:00 PM'
        },
        {
          title: 'Street Performers',
          venue: 'Walkway Stage',
          description: 'Juggling, mime, and impromptu skits to keep the crowd cheering.',
          pricing: 'Free',
          image: '/carnivals.png',
          startTime: '4:00 PM',
          endTime: '6:00 PM'
        }
      ],
      'Day 3': [
        {
          title: 'Carnival Closing Gala',
          venue: 'Open Arena',
          description: 'Grand wrap-up with music, lights, and a festive vibe.',
          pricing: 'Free',
          image: '/carnivals.png',
          startTime: '7:00 PM',
          endTime: '9:00 PM'
        }
      ]
    }
  };

  const categories = CATEGORY_IMAGES.map((src, i) => ({ 
    name: ['Signature', 'Iconic', 'Clubs', 'Proshows', 'Carnivals'][i], 
    image: src 
  }));

  const days = ['All Days', 'Day 1', 'Day 2', 'Day 3'];

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setSelectedDay('All Days');
  };

  const handleDayClick = (day) => {
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
          venue: currentEvent.venue,
          club: currentEvent.club,
          category: selectedCategory,
        }),
      });
      alert('Registration request submitted!');
    } catch (err) {
      alert('Failed to submit registration.');
      console.error('Register error:', err);
    } finally {
      setRegistering(false);
    }
  };

  // Get events based on selected day
  const getFilteredEvents = () => {
    if (!selectedCategory) return [];

    if (selectedDay === 'All Days') {
      const allEvents = [];
      let clubIndex = 0;
      Object.entries(eventData[selectedCategory]).forEach(([dayName, dayEvents]) => {
        dayEvents.forEach(ev => {
          const club = CLUBS[clubIndex % CLUBS.length];
          allEvents.push({ ...ev, eventDay: dayName, club });
          clubIndex += 1;
        });
      });
      return allEvents;
    } else {
      const events = eventData[selectedCategory]?.[selectedDay] || [];
      return events.map((ev, i) => ({ ...ev, eventDay: selectedDay, club: CLUBS[i % CLUBS.length] }));
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

        {/* Category Cards */}
        {!selectedCategory && (
          <div className="categories-grid">
            {categories.map((category) => (
              <div
                key={category.name}
                className={`category-card ${category.name === 'Carnivals' ? 'category-card--center-span' : ''}`}
                onClick={() => handleCategoryClick(category.name)}
              >
                <div className="category-image">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/300x200/4a4a4a/ffffff?text=${category.name}+Events`;
                    }}
                  />
                </div>
                <div className="category-name">{category.name} Events</div>
              </div>
            ))}
          </div>
        )}

        {/* Days Navigation and Events */}
        {selectedCategory && (
          <div className="events-section">
            <div className="category-header">
              <h2 className="category-heading">{selectedCategory} Events</h2>
            </div>
            
            <div className="back-button-container">
              <button
                className="back-button"
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedDay('All Days');
                  setCurrentEvent(null);
                }}
              >
                ← Back
              </button>
            </div>
            
            {/* Days Navigation */}
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

            {/* Events Grid */}
            <div className="events-grid">
              {currentEvents.map((event, index) => (
                <div
                  key={index}
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

            {/* No Events Message */}
            {currentEvents.length === 0 && (
              <div className="no-events">
                No events found for {selectedCategory} {selectedDay !== 'All Days' ? `on ${selectedDay}` : ''}
              </div>
            )}
          </div>
        )}

       
        <Modal show={modalOpen} onClose={() => {
        setModalOpen(false);
        setCurrentEvent(null);
      }} unstyled>
        {currentEvent && (
          <div 
            className="modal-with-blur-bg"
            style={{ '--modal-bg-image': `url(${currentEvent.image})` }}
          >
            <div className="modal-content-blur">
              <h3 className="modal-title">{currentEvent.title}</h3>
              <div className="modal-details">
                <div className="time-info">
                  <p><strong>Timings:</strong> {currentEvent.startTime} - {currentEvent.endTime}</p>
                </div>
                <p><strong>Description:</strong> {currentEvent.description}</p>
                <p><strong>Venue:</strong> {currentEvent.venue}</p>
                <p><strong>Day:</strong> {currentEvent.eventDay || (selectedDay !== 'All Days' ? selectedDay : 'All Days')}</p>
                <p><strong>Club:</strong> {currentEvent.club}</p>
              </div>
              <div className="modal-actions">
                {selectedCategory === 'Signature' && (
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