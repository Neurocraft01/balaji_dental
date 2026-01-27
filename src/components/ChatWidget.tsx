"use client";
import React, { useState } from 'react';
import styles from './ChatWidget.module.css';
import Link from 'next/link';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ text: string, sender: 'bot' | 'user' }[]>([
        { text: "Hello! 👋 Welcome to Balaji Dental Clinic.", sender: 'bot' },
        { text: "I'm your virtual assistant. How can we help you achieve a healthier smile today?", sender: 'bot' }
    ]);

    const handleReply = (msg: string) => {
        setMessages(prev => [...prev, { text: msg, sender: 'user' }]);

        // Simulating bot response
        setTimeout(() => {
            let reply = "";
            if (msg.includes("Appointment")) reply = "Great! You can book an appointment directly through our Appointment page. Shall I take you there?";
            else if (msg.includes("Price")) reply = "Our consultation fees are very affordable. For specific treatment costs, it's best to visit for a checkup so we can give an accurate estimate.";
            else if (msg.includes("Emergency")) reply = "For emergencies, please call us immediately at +91 99751 50505.";
            else reply = "Thank you for your interest. One of our team members will assist you shortly on WhatsApp.";

            setMessages(prev => [...prev, { text: reply, sender: 'bot' }]);
        }, 800);
    };

    return (
        <>
            {isOpen && (
                <div className={styles.chatContainer}>
                    <div className={styles.chatHeader}>
                        <div className={styles.avatar}>
                            <img src="/doctor-1.jpg" alt="Dr. Support" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className={styles.chatInfo}>
                            <h3>Dr. Kashish</h3>
                            <div className={styles.status}><span className={styles.dot}></span> Online Now</div>
                        </div>
                        <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    <div className={styles.chatBody}>
                        {messages.map((m, i) => (
                            <div key={i} className={`${styles.message} ${m.sender === 'bot' ? styles.botMessage : styles.userMessage}`}>
                                {m.text}
                            </div>
                        ))}
                    </div>

                    <div className={styles.quickReplies}>
                        <button className={styles.replyChip} onClick={() => window.location.href = '/appointment'}>Start Booking</button>
                        <button className={styles.replyChip} onClick={() => handleReply("What are the prices?")}>Check Prices</button>
                        <button className={styles.replyChip} onClick={() => handleReply("I have a dental emergency!")}>Emergency</button>
                        <button className={styles.replyChip} onClick={() => window.open('https://wa.me/919975150505', '_blank')}>Chat on WhatsApp</button>
                    </div>
                </div>
            )}

            <div className={styles.floatingGroup}>
                {/* Chat Toggle */}
                <button
                    className={`${styles.floatBtn} ${styles.chatToggle}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Chat"
                >
                    {isOpen ? <span className="material-symbols-outlined">expand_more</span> : <span className="material-symbols-outlined">forum</span>}
                </button>

                {/* WhatsApp */}
                <a
                    href="https://wa.me/919975150505"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.floatBtn} ${styles.whatsappBtn}`}
                    aria-label="WhatsApp"
                >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" style={{ width: '30px' }} />
                </a>

                {/* Call */}
                <a
                    href="tel:+919975150505"
                    className={`${styles.floatBtn} ${styles.callBtn}`}
                    aria-label="Call Now"
                >
                    <span className="material-symbols-outlined">call</span>
                </a>
            </div>
        </>
    );
};

export default ChatWidget;
