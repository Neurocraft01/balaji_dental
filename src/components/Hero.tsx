'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            {/* Decorative Elements */}
            <div className={`${styles.heroDecor} ${styles.heroDecor1}`}></div>
            <div className={`${styles.heroDecor} ${styles.heroDecor2}`}></div>
            <div className={`${styles.heroDecor} ${styles.heroDecor3}`}></div>

            <div className={styles.heroContainer}>
                {/* Left Content */}
                <div className={styles.heroContent}>
                    <div className={styles.badge}>
                        <span className="material-symbols-outlined">verified</span>
                        #1 Dental Clinic in Pimpri-Chinchwad
                    </div>

                    <h1 className={styles.title}>
                        Your Smile,
                        <span className={styles.highlight}>Redefined.</span>
                    </h1>

                    <p className={styles.description}>
                        Experience modern dentistry where cutting-edge technology meets
                        compassionate care. Dr. Nitin Sadhwani brings 18+ years of expertise
                        to give you the smile you deserve.
                    </p>

                    <div className={styles.buttonGroup}>
                        <Link href="/appointment" className={styles.btnPrimary}>
                            <span className="material-symbols-outlined">calendar_month</span>
                            Book Appointment
                        </Link>
                        <Link href="/services" className={styles.btnSecondary}>
                            Explore Services
                        </Link>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>18+</span>
                            <span className={styles.statLabel}>Years Experience</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>4.8★</span>
                            <span className={styles.statLabel}>Patient Rating</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statValue}>5000+</span>
                            <span className={styles.statLabel}>Happy Patients</span>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className={styles.heroImage}>
                    <div className={styles.imageFrame}></div>
                    <div className={styles.heroImageInner}>
                        <img
                            src="/hero-design.jpg"
                            alt="Modern Dental Clinic"
                        />
                    </div>

                    {/* Floating Badge */}
                    <div className={styles.floatingBadge}>
                        <div className={styles.icon}>
                            <span className="material-symbols-outlined">workspace_premium</span>
                        </div>
                        <div className={styles.text}>
                            <strong>IDA Certified</strong>
                            <span>Indian Dental Association</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <span>Scroll</span>
                <div className={styles.scrollLine}></div>
            </div>
        </section>
    );
};

export default Hero;
