"use client";
import React, { useState } from 'react';

const FloatingButtons = () => {
    const [showChat, setShowChat] = useState(false);

    return (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', display: 'flex', flexDirection: 'column', gap: '15px', zIndex: 1000, alignItems: 'flex-end' }}>

            {/* Simple Chatbot Simulation */}
            {showChat && (
                <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '10px 10px 0 10px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', marginBottom: '5px', maxWidth: '250px' }}>
                    <p style={{ fontSize: '0.9rem', marginBottom: '10px' }}><strong>Dr. Kashish AI:</strong><br />Hi! How can I help you with your dental needs today?</p>
                    <a href="/appointment" className="btn btn-primary" style={{ fontSize: '0.8rem', padding: '5px 10px' }}>Book Appointment</a>
                </div>
            )}

            {/* Chat Bot Toggle */}
            <button
                onClick={() => setShowChat(!showChat)}
                style={{ width: '60px', height: '60px', borderRadius: '50%', border: 'none', backgroundColor: '#333', color: 'white', fontSize: '1.5rem', cursor: 'pointer', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                aria-label="Chat"
            >
                💬
            </button>

            {/* WhatsApp */}
            <a
                href="https://wa.me/919975150505"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#25D366', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                aria-label="WhatsApp"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z" />
                </svg>
            </a>

            {/* Call Button */}
            <a
                href="tel:+919975150505"
                style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#0D47A1', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                aria-label="Call Now"
            >
                📞
            </a>
        </div>
    );
};

export default FloatingButtons;
