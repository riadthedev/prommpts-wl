'use client';

import { useState } from 'react';
import DarkVeil from './components/DarkVeil';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      setMessage('Please fill in both name and email fields.');
      setMessageType('error');
      return;
    }

    setIsLoading(true);
    setMessage('');
    setMessageType('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setMessageType('success');
        setName('');
        setEmail('');
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
        setMessageType('error');
      }
    } catch (error) {
      setMessage('Network error. Please check your connection and try again.');
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <DarkVeil>
        <div style={{ textAlign: 'center', maxWidth: '600px', padding: '2rem' }}>
          <h1 style={{ fontFamily: 'var(--font-museo-moderno)', fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>
            PROMMMT
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'white', opacity: 0.9 }}>
            WE ARE CHANGING THE PROMPT ENGINEERING GAME FOREVER
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'white', opacity: 0.8 }}>
            Join the waitlist to be the first to know
          </p>
          
          {message && (
            <div style={{ 
              marginBottom: '1.5rem', 
              padding: '0.75rem 1rem', 
              borderRadius: '0.5rem',
              backgroundColor: messageType === 'success' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
              border: `1px solid ${messageType === 'success' ? 'rgba(34, 197, 94, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`,
              color: 'white'
            }}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
              <input 
                type="text" 
                placeholder="Enter your name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
                style={{ 
                  padding: '0.75rem 1rem', 
                  borderRadius: '0.5rem', 
                  border: '1px solid rgba(255, 255, 255, 0.3)', 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                  color: 'white', 
                  fontSize: '1rem',
                  minWidth: '250px',
                  width: '100%',
                  maxWidth: '300px',
                  opacity: isLoading ? 0.7 : 1
                }} 
              />
              <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
                style={{ 
                  padding: '0.75rem 1rem', 
                  borderRadius: '0.5rem', 
                  border: '1px solid rgba(255, 255, 255, 0.3)', 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                  color: 'white', 
                  fontSize: '1rem',
                  minWidth: '250px',
                  width: '100%',
                  maxWidth: '300px',
                  opacity: isLoading ? 0.7 : 1
                }} 
              />
              <button 
                type="submit"
                disabled={isLoading}
                style={{ 
                  padding: '0.75rem 1.5rem', 
                  borderRadius: '0.5rem', 
                  border: 'none', 
                  backgroundColor: isLoading ? '#ccc' : 'white', 
                  color: 'black', 
                  fontSize: '1rem', 
                  fontWeight: '600',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  width: '100%',
                  maxWidth: '300px',
                  opacity: isLoading ? 0.7 : 1
                }}
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>
          </form>
        </div>
      </DarkVeil>
    </div>
  );
}