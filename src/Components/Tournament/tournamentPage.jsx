import React from 'react';
import { Link } from 'react-router-dom';

const tournaments = [
  {
    title: 'BGMI Pro Scrims',
    date: 'May 10, 2025',
    description: 'Join the ultimate BGMI scrims with top teams across the country.',
  },
  {
    title: 'HocxGaming Open Cup',
    date: 'June 5, 2025',
    description: 'Open for all players. Register your squad now and compete to win!',
  },
  {
    title: 'Summer Clash 2025',
    date: 'July 20, 2025',
    description: 'Exclusive tournament for new players to showcase their skills.',
  },
];
function TournamentPage() {
  return (
    <div className='tournament-page'>
      <h2
        style={{
          textAlign: 'center',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          marginBottom: '40px',
          letterSpacing: '2px',
        }}
      >
        Upcoming Tournaments
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        {tournaments.map((tournament, index) => (
          <div
            key={index}
            style={{
              flex: '1 1 300px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div>
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  textTransform: 'uppercase',
                }}
              >
                {tournament.title}
              </h3>
              <p style={{ color: '#777', marginBottom: '10px' }}>{tournament.date}</p>
              <p>{tournament.description}</p>
            </div>
            <Link
              to="/register"
              style={{
                marginTop: '20px',
                display: 'block',
                textAlign: 'center',
                padding: '10px 0',
                backgroundColor: '#1976d2',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
              }}
            >
              Register Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TournamentPage;
