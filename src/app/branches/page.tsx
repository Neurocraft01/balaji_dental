import React from 'react';
import Link from 'next/link';

const BranchesPage = () => {
    return (
        <div className="container section">
            <h1 className="section-title">Our Locations</h1>
            <p className="text-center" style={{ marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
                Balaji Dental Clinic serves patients across Pune with two convenient locations.
                Whether you are in Kalewadi or Pimpri-Chinchwad, world-class dental care is never far away.
            </p>

            <div className="grid grid-2">
                {/* Branch 1 - Kalewadi */}
                <div className="card">
                    <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Kalewadi Branch (Main)</h2>
                    <div style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                        <p><strong>Address:</strong><br />Shop. No 108, Sai Plaza, near HOTEL ATHVAN, Nandadeep Colony, Kalewadi, Pune, Pimpri-Chinchwad, Maharashtra 411017, India</p>
                        <p style={{ marginTop: '0.5rem' }}><strong>Contact:</strong> +91 99751 50505</p>
                        <p><strong>Timing:</strong> Mon-Sat: 10:30 AM - 9:00 PM</p>
                    </div>

                    <div style={{ width: '100%', height: '200px', backgroundColor: '#eee', marginBottom: '1.5rem', borderRadius: 'var(--radius)' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711156642!2d73.7335965!3d18.5245986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e6ae911761%3A0x6b77c5f8845cf16d!2sBalaji%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <a
                        href="https://maps.app.goo.gl/fUZcMF4PpHJr7LrQ7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{ width: '100%', textAlign: 'center' }}
                    >
                        Get Directions
                    </a>
                </div>

                {/* Branch 2 - Pimpri */}
                <div className="card">
                    <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Pimpri-Chinchwad Branch</h2>
                    <div style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                        <p><strong>Address:</strong><br />53, Ajmera Main Rd, Nehru Nagar, Pimpri Colony, Pimpri-Chinchwad, Maharashtra 411018</p>
                        <p style={{ marginTop: '0.5rem' }}><strong>Contact:</strong> +91 99751 50505</p>
                        <p><strong>Timing:</strong> Mon-Sat: 10:30 AM - 9:00 PM</p>
                    </div>

                    <div style={{ width: '100%', height: '200px', backgroundColor: '#eee', marginBottom: '1.5rem', borderRadius: 'var(--radius)' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711156642!2d73.7935965!3d18.6245986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e6ae911761%3A0x6b77c5f8845cf16d!2sBalaji%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        {/* Note: Map Embed URL should be specific to Branch 2, used generic placeholder logic here but can infer from user link if I had coordinates. I'll leave the iframe as generic or user can update. */}
                    </div>

                    <Link href="/branches/branch-2" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                        View Full Branch Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BranchesPage;
