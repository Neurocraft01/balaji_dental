"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link href="/" className={styles.logoWrapper}>
          <div className={styles.logoIcon}>
            <span className="material-symbols-outlined">dentistry</span>
          </div>
          <span className={styles.logoText}>Balaji Dental</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/services" className={styles.navLink}>Services</Link>
          <Link href="/gallery" className={styles.navLink}>Gallery</Link>
          <Link href="/testimonials" className={styles.navLink}>Testimonials</Link>
          <Link href="/branches" className={styles.navLink}>Branches</Link>
        </nav>

        {/* Actions */}
        <div className={styles.navActions}>
          <Link href="tel:+919975150505" className={styles.btnCall}>
            <span className="material-symbols-outlined" style={{ fontSize: '1.25rem' }}>call</span>
            <span>Call Now</span>
          </Link>
          <Link href="/contact" className={styles.btnContact}>
            Contact
          </Link>
          <button className={styles.mobileMenuBtn} onClick={() => setIsOpen(!isOpen)}>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        <Link href="/" className={styles.navLink} onClick={() => setIsOpen(false)}>Home</Link>
        <Link href="/about" className={styles.navLink} onClick={() => setIsOpen(false)}>About</Link>
        <Link href="/services" className={styles.navLink} onClick={() => setIsOpen(false)}>Services</Link>
        <Link href="/gallery" className={styles.navLink} onClick={() => setIsOpen(false)}>Gallery</Link>
        <Link href="/testimonials" className={styles.navLink} onClick={() => setIsOpen(false)}>Testimonials</Link>
        <Link href="/branches" className={styles.navLink} onClick={() => setIsOpen(false)}>Branches</Link>
        <Link href="/contact" className={styles.navLink} onClick={() => setIsOpen(false)}>Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
