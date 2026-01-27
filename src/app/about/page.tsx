import React from 'react';

const AboutPage = () => {
    return (
        <div className="container section">
            <h1 className="section-title">About Balaji Dental Clinic</h1>

            <div className="grid grid-2" style={{ marginBottom: '4rem', alignItems: 'center' }}>
                <div>
                    <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                        Balaji Dental Clinic is a premier dental healthcare provider in Pune, founded with a vision to deliver world-class dental treatments with a personal touch.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        We understand that visiting the dentist can be daunting for many. That's why we have created a warm, welcoming environment where you can feel at ease. Our state-of-the-art facility is equipped with the latest dental technology to ensure precise diagnoses and effective treatments.
                    </p>
                    <p>
                        Our mission is to provide comprehensive dental care that improves not just your smile, but your overall quality of life.
                    </p>
                </div>
                <div style={{ height: '300px', backgroundColor: '#eef', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#888' }}>Clinic/Team Image</span>
                </div>
            </div>

            <h2 className="section-title">Meet Our Doctors</h2>
            <div className="grid grid-2">
                <div className="card text-center">
                    <div style={{ width: '150px', height: '150px', borderRadius: '50%', backgroundColor: '#eee', margin: '0 auto 1.5rem' }}></div>
                    <h3 style={{ color: 'var(--primary-color)' }}>Dr. Kashish Sadhwani</h3>
                    <p style={{ color: 'var(--secondary-color)', fontWeight: 'bold', marginBottom: '1rem' }}>Principal Dentist</p>
                    <p style={{ fontSize: '0.95rem', textAlign: 'left' }}>
                        Dr. Kashish is known for her gentle approach and keen eye for aesthetics. She specializes in cosmetic dentistry and root canal treatments, ensuring every patient leaves with a confident smile. Patients often praise her for her detailed explanations and comforting demeanor.
                    </p>
                </div>

                <div className="card text-center">
                    <div style={{ width: '150px', height: '150px', borderRadius: '50%', backgroundColor: '#eee', margin: '0 auto 1.5rem' }}></div>
                    <h3 style={{ color: 'var(--primary-color)' }}>Dr. Nitin Sadhwani</h3>
                    <p style={{ color: 'var(--secondary-color)', fontWeight: 'bold', marginBottom: '1rem' }}>Principal Dentist</p>
                    <p style={{ fontSize: '0.95rem', textAlign: 'left' }}>
                        Dr. Nitin brings extensive experience in restorative and surgical dentistry. His calm presence and skilled hands make even complex procedures like implants and extractions pain-free and efficient. He is dedicated to ethical practice and patient well-being.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
