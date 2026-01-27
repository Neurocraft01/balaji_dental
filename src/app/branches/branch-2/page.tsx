import React from 'react';

const reviews = [
    { name: "Pradeep Chauhan", text: "Nitin sir listened to the issues very carefully and provided best possible advice... Definitely recommended." },
    { name: "Neha Gaikwad", text: "Cozy and friendly environment with superb advice. Doctor was extremely gentle and friendly. Very affordable and hygienic clinic." },
    { name: "Rajesh Singh", text: "Quick service and dentist Mr. Sadhwani is very humble." }
];

const Branch2Page = () => {
    return (
        <div className="container section">
            <h1 className="section-title">Pimpri-Chinchwad Branch</h1>

            <div className="grid grid-2">
                <div>
                    <div className="card" style={{ marginBottom: '2rem' }}>
                        <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Location & Contact</h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                            <strong>Address:</strong><br />
                            #144 & 149 A, U-A-J-1/53, Yogi Co-op-housing Complex,<br />
                            Ajmera Road, Pimpri,<br />
                            Landmark: Opp. Hanuman Gym., Pune
                        </p>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                            <strong>Phone:</strong> +91 99751 50505
                        </p>
                        <a
                            href="https://maps.app.goo.gl/2XXPvcQvfWyjECbP7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                        >
                            Get Directions
                        </a>
                    </div>

                    <div className="card">
                        <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Opening Hours</h2>
                        <ul style={{ listStyle: 'none', lineHeight: '2' }}>
                            <li className="flex justify-between"><span>Mon - Sat</span> <span>10:00 AM - 02:00 PM</span></li>
                            <li className="flex justify-between" style={{ paddingBottom: '0.5rem', borderBottom: '1px solid #eee', marginBottom: '0.5rem' }}><span style={{ visibility: 'hidden' }}>Mon - Sat</span> <span>05:30 PM - 09:30 PM</span></li>
                            <li className="flex justify-between" style={{ color: 'var(--error)' }}><span>Sunday</span> <span>Closed</span></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div style={{ height: '300px', backgroundColor: '#eee', borderRadius: 'var(--radius)', marginBottom: '2rem' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.203099999999!2d73.8!3d18.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM2JzAwLjAiTiA3M8KwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className="card">
                        <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Amenities & Info</h2>
                        <ul style={{ listStyle: 'none', lineHeight: '1.8' }}>
                            <li>✅ Wheelchair-accessible seating & toilet</li>
                            <li>✅ Gender-neutral toilets</li>
                            <li>✅ LGBTQ+ friendly</li>
                            <li>✅ Appointment recommended</li>
                            <li>✅ NFC mobile payments & Google Pay accepted</li>
                        </ul>
                        <div style={{ marginTop: '1rem' }}>
                            <strong>Services:</strong> <span>Cosmetic dentistry, Pediatric care, On-site services</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <h2 className="section-title">Patient Reviews</h2>
                <div className="grid grid-3">
                    {reviews.map((r, i) => (
                        <div key={i} className="card">
                            <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>"{r.text}"</p>
                            <strong>- {r.name}</strong>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Branch2Page;
