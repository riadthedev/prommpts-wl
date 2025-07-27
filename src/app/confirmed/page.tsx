'use client';

import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import DarkVeil from '../components/DarkVeil';

export default function Confirmed() {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial dimensions
    updateWindowDimensions();

    // Add resize listener
    window.addEventListener('resize', updateWindowDimensions);

    // Stop confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={300}
        />
      )}
      <DarkVeil>
        <div style={{ textAlign: 'center', maxWidth: '600px', padding: '2rem' }}>
          <h1 style={{ 
            fontFamily: 'var(--font-museo-moderno)', 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            marginBottom: '2rem', 
            color: 'white' 
          }}>
            🎉 Welcome to PROMMMT!
          </h1>
          <p style={{ 
            fontSize: '1.5rem', 
            marginBottom: '1rem', 
            color: 'white', 
            opacity: 0.9 
          }}>
            You've officially joined the waitlist!
          </p>
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'white', 
            opacity: 0.8 
          }}>
            Get ready to revolutionize your prompt engineering experience.
          </p>
        </div>
      </DarkVeil>
    </div>
  );
}