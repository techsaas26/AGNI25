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
          title: 'Club - Aakriti • Hop Hustle',
          venue: 'Campus Arena',
          description: 'Jump, hop, and balance your way through numbered boxes with a marker to guide your moves. Agility, accuracy and tons of fun!',
          pricing: 'Free',
          image: '/Hop hustle.jpg',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Club - ACM • Bid and Built',
          venue: 'Campus Arena',
          description: 'Crack quirky product quizzes, win items in a bidding war, invent something wild and pitch it with a hilarious skit.',
          pricing: 'Free',
          image: '/ACM-CEG_BID&BUILD.jpeg',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Club - AU Podium • Speechify the Song',
          venue: 'Campus Arena',
          description: 'A secret song is turned into a dramatic, funny or confusing speech—teams race against time to guess it right!',
          pricing: 'Free',
          image: '/Speechify the song.png',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Club - AUSEC • Bizzare Bazaar',
          venue: 'Campus Arena',
          description: 'Sell the quirkiest products in the most creative ways. Wit and persuasion rule this hilarious marketing showdown!',
          pricing: 'Free',
          image: '/clubs.jpg',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: "Club - CSAU • Hit Bull's Eye",
          venue: 'Campus Arena',
          description: 'Toss sponge balls at moving targets on screen. Accuracy, reflexes and strategy decide your score!',
          pricing: 'Free',
          image: '/Instagram post - 1.png',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Club - EQ • EQ Compass',
          venue: 'Campus Arena',
          description: 'Pick your corner—Logical, Emotional, Funny, or Calm—after hearing a quirky situation, then justify your choice!',
          pricing: 'Free',
          image: '/EQ Compass poster.jpeg',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Club - LitClub • Two Sides of a Coin',
          venue: 'Red Building Room: 73',
          description: 'Two participants play wild characters, swap, downplay each other, then face a universe-switching showdown.',
          pricing: 'Free',
          image: '/TWO SIDES OF A COIN - LitClub.png',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Club - Maathavam • நீ தான்டா Artist uhh',
          venue: 'Campus Arena',
          description: 'Dive into colors, sounds and flavors of Tamil culture with events that entertain, inspire and celebrate tradition!',
          pricing: 'Free',
          image: '/clubs.jpg',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Club - Pixels • Bid for the Shot',
          venue: 'Campus Arena',
          description: 'Become a savvy art collector—bid with your limited Pixels currency to snag the coolest photography treasures.',
          pricing: 'Free',
          image: '/clubs.jpg',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Club - QA • Arena Quiz',
          venue: 'Red Building Room: 75',
          description: 'Sports trivia face-off with audio‑visual twists—from cricket and football to RPGs and F1 circuits.',
          pricing: 'Free',
          image: '/Arena Quiz - Quizzers Anonymous.png',
          startTime: '10.30 A.M',
          endTime: '4.30 P.M'
        },
        {
          title: 'Club - Robotics • Escape Room',
          venue: 'Red Building Room: 82',
          description: 'Crack codes, solve circuits and decode riddles in a robotics-inspired escape challenge. Brains over bots!',
          pricing: 'Free',
          image: '/r.jpg',
          startTime: '10.30 A.M',
          endTime: '4.30 P.M'
        },
        {
          title: 'Club - SQC • Quality Quest: Roll & Rise',
          venue: 'Campus Arena',
          description: 'Roll the dice, tell truths (and sneaky lies) and climb to victory in a Snakes & Ladders-inspired quest.',
          pricing: 'Free',
          image: '/s.png',
          startTime: '2.30 P.M',
          endTime: '4.30'
        },
        {
          title: 'Club - GT • Pass the Puzzle',
          venue: 'Campus Arena',
          description: 'Race through a relay of brain‑teasing puzzles—solve your piece and pass it on to sprint to victory.',
          pricing: 'Free',
          image: '/PTP GT.png',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Club - Theatron • Channel Surfing',
          venue: 'Red Building Room: 76',
          description: 'Put creativity to the test—crack product quizzes, grab items in a bid and sell it with a skit!',
          pricing: 'Free',
          image: '/channel surfing_theatron.png',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Club - Scribbles • Cover Story',
          venue: 'Drawing Hall 10',
          description: 'A fun editorial challenge—craft the most compelling cover story under pressure.',
          pricing: 'Free',
          image: '/cover_story-scribbles.png',
          startTime: '10.30 A.M',
          endTime: '4.30 P.M'
        },
        {
          title: 'Club - Saptham • Nadha Vaibhavam',
          venue: 'Ada Lovelace Audi',
          description: 'The music and instrumentals solo competition',
          pricing: 'Free',
          image: '/Agni Posters.zip - 3.png',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Club - Saptham • Natya Vaibhavam',
          venue: 'Ada Lovelace Audi',
          description: 'Step into the world of rhythm, expression and tradition! The bharatnatyam solo competition',
          pricing: 'Free',
          image: '/Agni Posters.zip - 1.png',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Club - Sruthilaya • Solo Instrumentation',
          venue: 'Vivek Audi',
          description: 'Solo Instrumentation Competition',
          pricing: 'Free',
          image: '/Solo instru -1.png',
          startTime: '3.00 P.M',
          endTime: '4.30 P.M'
        },
        {
          title: 'Club - Sruthilaya • Solo Singing',
          venue: 'Ada Lovelace Audi',
          description: 'Solo Singing Competition',
          pricing: 'Free',
          image: '/Solo singing -1.png',
          startTime: '1.00 P.M',
          endTime: '4.30 P.M'
        },
        

      ],
      'Day 2': [
        { 
          title: 'Club - Astro • Balloon Buzz',
          venue: 'Campus Arena',
          description: 'Pick a balloon, pop it and collect letters to form astronomy-themed words—speed, strategy and stellar fun!',
          pricing: 'Free',
          image: '/clubs.jpg',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        { 
          title: 'Club - Intra Variety • Echoes of The Past',
          venue: 'Vivek Audi',
          description: 'Dig the past and have fun!',
          pricing: 'Free',
          image: '/i1.png',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Adaptunes',
          venue: 'Vivek Auditorium',
          description: 'Test your spontaneity as you groove to surprise tracks. Creativity and speed win the day!',
          pricing: 'Free',
          image: '/Adaptunes.jpeg',
          startTime: 'TBA',
          endTime: 'TBA',
          club: 'Twisters',
          purchaseLink: 'https://forms.gle/N3ruyJXsj77XpQhR7',
          pricingDetails: 'On-the-spot registrations available'
        },
        {
          title: 'Club - AU Podium • Roast vs Defend',
          venue: 'Red Building Room: 83',
          description: 'One participant hilariously roasts a topic while another defends it—wit, comebacks and laughs guaranteed.',
          pricing: 'Free',
          image: '/ro.png',
          startTime: '10.30 A.M',
          endTime: '12.15 P.M'
        },
        {
          title: 'Club - AUSEC • Money Feud',
          venue: 'Campus Arena',
          description: 'An entrepreneurial game show—startup surveys, quirky crises and money-sense challenges collide.',
          pricing: 'Free',
          image: '/clubs.jpg',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Club - EQ • Veil of Doubt',
          venue: 'Campus Arena',
          description: 'Werewolf-style deception—villagers vs wolves. Bluff, deduce and survive through night and day rounds.',
          pricing: 'Free',
          image: '/Veil of dobt event.jpeg',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Club - GB • Eco Sculpt',
          venue: 'Campus Arena',
          description: 'Eco‑friendly clay modelling—craft sustainable, themed masterpieces that celebrate imagination.',
          pricing: 'Free',
          image: '/GB- EcoSculpt.jpg',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Club - Leo • Hangin For Clues',
          venue: 'Red Building Room: 84',
          description: 'Crack clues and shout answers to save your team from the hangman—heroes, heroines, movies and songs!',
          pricing: 'Free',
          image: '/Hangin_For_Clues.png',
          startTime: '1.30 P.M',
          endTime: '4.30 P.M'
        },
        {
          title: 'Club - Quizzers Anonymous • Kollywood Quiz',
          venue: 'Red Building Room: 75',
          description: 'A quiz on your favourite Tamil Movise and songs!',
          pricing: 'Free',
          image: '/k.png',
          startTime: '10.30 A.M',
          endTime: '1.30 P.M'
        },
        {
          title: 'Club - LitClub • Assassin',
          venue: 'Campus Arena',
          description: 'Villagers, Detectives and a Serial Killer—bluff, deduce and solve the murder mystery before it is too late.',
          pricing: 'Free',
          image: '/assa.png',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Solo Dance',
          venue: 'Vivek Auditorium',
          description: 'Own the spotlight with your unique moves. Bring your passion and ignite the stage!',
          pricing: 'Free',
          image: '/soloDance.jpeg',
          startTime: 'TBA',
          endTime: 'TBA',
          club: 'Twisters',
          purchaseLink: 'https://forms.gle/ejovES9kG1H3YQsc7',
          pricingDetails: 'On-the-spot registrations available'
        },
        {
          title: 'Duo Dance',
          venue: 'Vivek Auditorium',
          description: 'Showcase your coordination and chemistry as a dynamic duo.',
          pricing: 'Free',
          image: '/DuoDance.jpeg',
          startTime: 'TBA',
          endTime: 'TBA',
          club: 'Twisters',
          purchaseLink: 'https://forms.gle/CEz3bakbDZbdSuMm6',
          pricingDetails: 'On-the-spot registrations available'
        },
        {
          title: 'Club - Pixels • The Reverse Click',
          venue: 'Campus Arena',
          description: 'Shoot photos to match quirky captions like “Lonely at the top” or “Echoes of silence” under time pressure.',
          pricing: 'Free',
          image: '/clubs.jpg',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Club - QA • Motion Quiz',
          venue: 'Campus Arena',
          description: 'All about animation—from classics to game engines—with AV twists and sabotage to keep you on your toes.',
          pricing: 'Free',
          image: '/clubs.jpg',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Club - Saptham • Follow The Moves',
          venue: 'Campus Arena',
          description: 'Electrifying dance-off—memory dance challenge across styles from Western to Bharatanatyam to Kathak.',
          pricing: 'Free',
          image: '/Agni Posters.png.png',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Club - Sruthilaya • The Singing Telephone',
          venue: 'Red Building Room: 82',
          description: 'Chinese Whispers with tunes—freshers hum a melody down the chain; can the last player guess it right?',
          pricing: 'Free',
          image: '/SRUTHILAYA - SINGING TELEPHONE.png',
          startTime: '10.30 A.M',
          endTime: '4.30 P.M'
        },
        {
          title: 'Club - SQC • Quality Charades',
          venue: 'Red Building Room: 84',
          description: 'Hot-seat problem solving with Kaizen, Six Sigma, PDCA and RCA—turn defects and complaints into wins.',
          pricing: 'Free',
          image: '/QUALITY CHARADES_SQC.png',
          startTime: '10.30 A.M',
          endTime: '12.15 P.M'
        },
        {
          title: 'Club - GT • Mission: Among Us',
          venue: 'Campus Arena',
          description: 'Two-round thriller—trivia and puzzles, then live gameplay with Crewmates, Impostors and sabotage.',
          pricing: 'Free',
          image: '/MAU GT 3.png',
          startTime: 'TBA',
          endTime: 'TBA'
        },
        {
          title: 'Club - Theatron • Reverse Theatre',
          venue: 'Red Building Room: 76',
          description: 'Teams act their story backwards—from the ending to the beginning—for laughs and creative chaos.',
          pricing: 'Free',
          image: '/reverse theatre_theatron.png',
          startTime: '10.30 A.M',
          endTime: '4.30 P.M'
          
        },
        {
          title: 'Club - FINS AU • Predict and Profit',
          venue: 'Campus Arena',
          description: 'Two rounds—predict real stock moves, then bid on mystery companies with limited clues to top the charts.',
          pricing: 'Free',
          image: '/clubs.jpg',
          startTime: 'TBA',
          endTime: 'TBA'
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
    /*'Signature': {
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
    },*/
    'Proshows': {
      'Day 1': [
        {
          title: 'Movie Screening',
          venue: 'Main Sports Gallery',
          description: 'A relaxed big‑screen experience to kick off the celebrations.',
          pricing: 'Free',
          image: '/moviescreening.png',
          startTime: '7.00 P.M',
          endTime: '10.00 P.M'
        }
      ],
      'Day 2': [
        {
          title: 'Concert Night',
          venue: 'Sports Ground',
          description: "A concert ticket isn't just an entry pass, it's your gateway to an unforgettable night of music, celebration and togetherness.😉 Let the beats move you, the lights inspire you and the fest ignite memories that last a lifetime.🔥",
          pricing: 'Paid',
          image: '/concertnight.png',
          startTime: '7.00 P.M',
          endTime: '9.45 P.M',
          club: 'SAAS',
          purchaseLink: 'https://forms.gle/gYMsPeeKugQmuK1u7',
          pricingDetails: 'Gold – ₹200, Silver – ₹100'
        }
      ],
      'Day 3': [
        {
          title: 'Talent of Agni',
          venue: 'Main Sports Gallery',
          description: 'Showcase of incredible campus talent across arts, music and performance.',
          pricing: 'Free',
          image: '/talent.png',
          startTime: '8.00 P.M',
          endTime: '9.45 P.M'
        }
      ]
    },
    'Vivek Audi Events': {
      'Day 1': [
        {
          title: 'Solo Dance',
          venue: 'Vivek Auditorium',
          description: 'Own the spotlight with your unique moves. Bring your passion and ignite the stage!',
          pricing: 'Free',
          image: '/soloDance.jpeg',
          startTime: 'TBA',
          endTime: 'TBA',
          club: 'Twisters',
          purchaseLink: 'https://forms.gle/ejovES9kG1H3YQsc7',
          pricingDetails: 'On-the-spot registrations available'
        },
        {
          title: 'Duo Dance',
          venue: 'Vivek Auditorium',
          description: 'Showcase your coordination and chemistry as a dynamic duo.',
          pricing: 'Free',
          image: '/DuoDance.jpeg',
          startTime: 'TBA',
          endTime: 'TBA',
          club: 'Twisters',
          purchaseLink: 'https://forms.gle/CEz3bakbDZbdSuMm6',
          pricingDetails: 'On-the-spot registrations available'
        },
        {
          title: 'Adaptunes',
          venue: 'Vivek Auditorium',
          description: 'Test your spontaneity as you groove to surprise tracks. Creativity and speed win the day!',
          pricing: 'Free',
          image: '/Adaptunes.jpeg',
          startTime: 'TBA',
          endTime: 'TBA',
          club: 'Twisters',
          purchaseLink: 'https://forms.gle/N3ruyJXsj77XpQhR7',
          pricingDetails: 'On-the-spot registrations available'
        },
      ]
    }
  };

  const categories = CATEGORY_IMAGES.map((src, i) => ({ 
    name: [/*'Signature', 'Iconic'*/, 'Clubs', 'Proshows', /*'Vivek Audi Events'*/][i], 
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
          const fallbackClub = CLUBS[clubIndex % CLUBS.length];
          const club = ev.club || fallbackClub;
          allEvents.push({ ...ev, eventDay: dayName, club });
          clubIndex += 1;
        });
      });
      return allEvents;
    } else {
      const events = eventData[selectedCategory]?.[selectedDay] || [];
      return events.map((ev, i) => {
        const fallbackClub = CLUBS[i % CLUBS.length];
        return { ...ev, eventDay: selectedDay, club: ev.club || fallbackClub };
      });
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
                {currentEvent?.purchaseLink && (
                  <button
                    className="ticket-button"
                    onClick={() => window.open(currentEvent.purchaseLink, '_blank')}
                  >
                    Get Your Tickets ({currentEvent.pricingDetails || 'Pricing inside'})
                  </button>
                )}
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