import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerGrid}>
                    {/* Brand Col */}
                    <div className={styles.footerCol}>
                        <div className={styles.brand}>
                            <div className={styles.brandIcon}>
                                <span className="material-symbols-outlined">dentistry</span>
                            </div>
                            <span className={styles.brandText}>Balaji Dental</span>
                        </div>
                        <p className={styles.desc}>
                            Excellence in dental care for over 10 years. We combine medical expertise with a human touch to ensure your visits are comfortable and results are outstanding.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.colTitle}>Quick Links</h4>
                        <div className={styles.links}>
                            <Link href="/about" className={styles.linkItem}>About Us</Link>
                            <Link href="/services" className={styles.linkItem}>Our Services</Link>
                            <Link href="/gallery" className={styles.linkItem}>Clinical Gallery</Link>
                            <Link href="/testimonials" className={styles.linkItem}>Patient Feedback</Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.colTitle}>Services</h4>
                        <div className={styles.links}>
                            <Link href="/services" className={styles.linkItem}>Cosmetic Dentistry</Link>
                            <Link href="/services" className={styles.linkItem}>Emergency Dental</Link>
                            <Link href="/services" className={styles.linkItem}>Implant Surgery</Link>
                            <Link href="/services" className={styles.linkItem}>Pediatric Dentistry</Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.colTitle}>Contact Us</h4>
                        <div className={styles.links}>
                            <div className={styles.contactItem}>
                                <span className="material-symbols-outlined" style={{ fontSize: '1rem', color: 'var(--primary-color)' }}>call</span>
                                +91 99751 50505
                            </div>
                            <div className={styles.contactItem}>
                                <span className="material-symbols-outlined" style={{ fontSize: '1rem', color: 'var(--primary-color)' }}>mail</span>
                                info@balajidental.com
                            </div>
                            <div className={styles.contactItem}>
                                <span className="material-symbols-outlined" style={{ fontSize: '1rem', color: 'var(--primary-color)' }}>schedule</span>
                                Mon - Sat: 10AM - 9PM
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    © {new Date().getFullYear()} Balaji Dental Clinic. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
