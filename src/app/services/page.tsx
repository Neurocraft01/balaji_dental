import React from 'react';
import Link from 'next/link';
import styles from './Services.module.css';

const detailedServices = [
    {
        id: "implants",
        title: "Dental Implant Fixing",
        icon: "biotech",
        desc: "Restore your confidence with our world-class dental implant solutions. Implants are the gold standard for replacing missing teeth, offering a permanent, natural-looking, and functional solution that preserves your jawbone health.",
        features: ["Lifetime Durability", "Natural Look & Feel", "Minimally Invasive", "Preserves Bone Structure"],
        img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "impaction",
        title: "Impacted Tooth Extraction",
        icon: "dentistry",
        desc: "Painful wisdom teeth? Our expert surgical removal of impacted teeth ensures relief from pain and infection. We use advanced anaesthesia protocols to make the procedure virtually painless and ensure a smooth recovery.",
        features: ["Painless Procedure", "Quick Recovery", "Infection Control", "Expert Surgeons"],
        img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "cosmetic",
        title: "Cosmetic / Aesthetic Dentistry",
        icon: "auto_fix",
        desc: "Design your perfect smile with our comprehensive cosmetic treatments. From veneers and bonding to Hollywood smile makeovers, we blend art and science to correct imperfections and enhance your natural beauty.",
        features: ["Smile Design", "Teeth Whitening", "Veneers & Laminates", "Gap Closures"],
        img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: "restorative",
        title: "Crowns and Bridges Fixing",
        icon: "bridge",
        desc: "Strengthen damaged teeth or fill gaps with our high-quality Zirconia and Ceramic crowns. Our prosthetics are custom-fabricated to match your natural tooth shade and bite perfection.",
        features: ["Metal-Free Options", "High Strength", "Perfect Color Match", "Long-lasting"],
        img: "https://images.unsplash.com/photo-1598256989494-02630f6dc069?auto=format&fit=crop&q=80&w=800"
    }
];

const ServicesPage = () => {
    return (
        <>
            <div className={styles.headerSection}>
                <div className="container">
                    <h1 className="section-title">Comprehensive Dental Care</h1>
                    <p className={styles.intro}>
                        At Balaji Dental Clinic, we combine 18+ years of expertise with state-of-the-art technology to provide a full spectrum of dental treatments. From routine hygiene to complex surgeries, your smile is in safe hands.
                    </p>
                </div>
            </div>

            <div className={styles.servicesContainer}>
                {detailedServices.map((s, i) => (
                    <div key={i} className={styles.serviceBlock} id={s.id}>
                        <div className={styles.imageWrapper}>
                            <div
                                className={styles.imagePlaceholder}
                                style={{ background: `url('${s.img}') center/cover` }}
                            ></div>
                        </div>

                        <div className={styles.content}>
                            <div className={styles.iconBox}>
                                <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>{s.icon}</span>
                            </div>
                            <h2 className={styles.serviceTitle}>{s.title}</h2>
                            <p className={styles.serviceDesc}>{s.desc}</p>

                            <div className={styles.featureList}>
                                {s.features.map((f, idx) => (
                                    <div key={idx} className={styles.featureItem}>
                                        <span className="material-symbols-outlined" style={{ color: 'var(--success)', fontSize: '1.2rem' }}>check_circle</span>
                                        {f}
                                    </div>
                                ))}
                            </div>

                            <div style={{ marginTop: '1.5rem' }}>
                                <Link href="/appointment" className="btn btn-outline">
                                    Book Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="container">
                <div className={styles.ctaBox}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Not sure what you need?</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem', opacity: 0.9 }}>
                        Schedule a general consultation with Dr. Nitin Sadhwani for a comprehensive oral health assessment.
                    </p>
                    <Link href="/appointment" className="btn" style={{ backgroundColor: 'white', color: 'var(--primary-color)', fontWeight: 'bold' }}>
                        Book General Checkup
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ServicesPage;
