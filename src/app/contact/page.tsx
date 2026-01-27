import React from 'react';

const faqs = [
    { q: "Is the root canal treatment painful?", a: "No, with modern anesthesia and techniques, root canal treatment is virtually seamless and painless at our clinic." },
    { q: "How often should I visit the dentist?", a: "It is recommended to visit every 6 months for a routine check-up and cleaning to maintain optimal oral health." },
    { q: "Do you offer emergency dental services?", a: "Yes, we prioritize emergency cases for pain relief and trauma. Please call us immediately." },
    { q: "What are your payment options?", a: "We accept Cash, Google Pay, NFC mobile payments, and other digital modes." },
    { q: "Are walk-ins allowed?", a: "While we welcome walk-ins, we highly recommend booking an appointment to avoid long waiting times." }
];

const ContactPage = () => {
    return (
        <div className="container section">
            <h1 className="section-title">Get In Touch</h1>

            <div className="grid grid-2" style={{ marginBottom: '4rem' }}>
                <div className="card">
                    <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>Contact Information</h2>
                    <div style={{ lineHeight: '2' }}>
                        <p><strong>Main Branch Phone:</strong> +91 99751 50505</p>
                        <p><strong>Email:</strong> info@balajidental.com</p>
                        <p><strong>Locations:</strong> Kalewadi & Pimpri-Chinchwad</p>
                    </div>
                    <div style={{ marginTop: '2rem' }}>
                        <h3>Our Hours</h3>
                        <p>Monday - Saturday: 10:30 AM - 9:00 PM</p>
                        <p style={{ color: 'var(--error)' }}>Sunday: Closed</p>
                    </div>
                </div>

                <div className="card">
                    <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem' }}>Quick Inquiry</h2>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <input type="text" placeholder="Your Name" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
                        <input type="tel" placeholder="Phone Number" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
                        <textarea rows={4} placeholder="Your Message" style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}></textarea>
                        <button className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>

            <div className="section" style={{ backgroundColor: 'var(--surface)', padding: '3rem 2rem', borderRadius: 'var(--radius)' }}>
                <h2 className="section-title" style={{ fontSize: '2rem' }}>Frequently Asked Questions</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, i) => (
                        <div key={i} style={{ marginBottom: '1.5rem', borderBottom: '1px solid #e0e0e0', paddingBottom: '1rem' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>{faq.q}</h3>
                            <p style={{ color: 'var(--text-light)' }}>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
