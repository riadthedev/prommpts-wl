'use client';

import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import DarkVeil from '../components/DarkVeil';

export default function Confirmed() {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(true);
  const [pageLoading, setPageLoading] = useState(true);

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
    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    // Stop page loading after 1.5 seconds
    const loadingTimer = setTimeout(() => {
      setPageLoading(false);
    }, 1500);

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
      clearTimeout(confettiTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  if (pageLoading) {
    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <DarkVeil>
          <div style={{ textAlign: 'center', maxWidth: '600px', padding: '2rem' }}>
            {/* Skeleton for heading */}
            <div style={{
              width: '350px',
              height: '48px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '0.5rem',
              marginBottom: '2rem',
              margin: '0 auto 2rem auto',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }} />
            
            {/* Skeleton for main message */}
            <div style={{
              width: '400px',
              height: '24px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '0.5rem',
              marginBottom: '1rem',
              margin: '0 auto 1rem auto',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }} />
            
            {/* Skeleton for description */}
            <div style={{
              width: '450px',
              height: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '0.5rem',
              margin: '0 auto',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
            }} />
          </div>
        </DarkVeil>
        <style jsx>{`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}</style>
      </div>
    );
  }

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