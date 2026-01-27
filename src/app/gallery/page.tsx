import React from 'react';

const GalleryPage = () => {
    return (
        <div className="container section">
            <h1 className="section-title">Our Gallery</h1>
            <p className="text-center" style={{ marginBottom: '3rem' }}>
                A glimpse into our state-of-the-art clinic and happy smiles.
            </p>

            <div className="grid grid-3">
                {/* Using placeholders with descriptive text */}
                {[
                    "Reception Area", "Treatment Room 1", "Advanced Equipment",
                    "Patient Consultation", "Kids Dental Area", "Dr. Kashish in Action",
                    "Success Story - Implant", "Success Story - Smile Design", "Sterilization Station"
                ].map((item, i) => (
                    <div key={i} className="card" style={{ padding: 0, overflow: 'hidden', height: '250px' }}>
                        <div style={{ width: '100%', height: '100%', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📸</span>
                            <span style={{ color: '#888' }}>{item}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleryPage;
