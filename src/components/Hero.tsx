import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            {/* Background with Overlays */}
            <div className={styles.backgroundWrapper}>
                <div className={styles.overlayGradient}></div>
                {/* Using the provided design image which was high quality */}
                <div
                    className={styles.heroImage}
                    style={{
                        background: 'url("/hero-design.jpg") center/cover no-repeat'
                    }}
                    role="img"
                    aria-label="Luxury Dental Clinic Interior"
                ></div>
            </div>

            {/* Hero Content */}
            <div className={styles.contentContainer}>
                <div className={styles.badge}>
                    <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>verified</span>
                    <span>#1 Dental Clinic in Pimpri-Chinchwad</span>
                </div>

                <h1 className={styles.title}>
                    World-Class Dentistry <br />
                    <span className={styles.highlight}>With a Gentle Touch.</span>
                </h1>

                <p className={styles.description}>
                    Experience 2026's standard of dental care with Dr. Nitin Sadhwani (18+ Years Exp).
                    Painless treatments, advanced implantology, and a smile that lasts a lifetime.
                </p>

                <div className={styles.trustIndicators}>
                    <div className={styles.ratingBox}>
                        <div className={styles.ratingVal}>4.8 <span className={styles.stars}>★★★★★</span></div>
                        <div className={styles.ratingLabel}>112+ Jd Ratings</div>
                    </div>
                    <div className={styles.ratingBox} style={{ borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '2rem' }}>
                        <div className={styles.ratingVal}>18+</div>
                        <div className={styles.ratingLabel}>Years of Excellence</div>
                    </div>
                </div>

                <div className={styles.buttonGroup}>
                    <Link href="/appointment" className={styles.btnPrimary}>
                        Book Appointment
                    </Link>
                    <Link href="/services" className={styles.btnSecondary}>
                        View Treatments
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
