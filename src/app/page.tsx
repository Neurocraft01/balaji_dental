import Hero from "@/components/Hero";
import LocationMap from "@/components/LocationMap";
import Link from "next/link";
import styles from "./HomeNew.module.css";

export default function Home() {
  return (
    <>
      <Hero />

      {/* ========================================
          INTRO SECTION 
          ======================================== */}
      <section className={styles.section}>
        <div className={styles.introGrid}>
          {/* Left - Content */}
          <div className={styles.introContent}>
            <h2>Advanced Dentistry,<br />Personalized Care.</h2>
            <p>
              Balaji Dental Clinic & Implant Center is a premier dentistry clinic in Pimpri-Chinchwad, Pune.
              Led by <strong>Dr. Nitin Sadhwani</strong> (BDS), we bring over 18 years of experience in creating
              healthy, beautiful smiles with a gentle, patient-first approach.
            </p>
            <p>
              Whether you need complex <strong>Dental Implant Fixing</strong>, <strong>Impaction Removal</strong>,
              or simple aesthetic enhancements, our state-of-the-art facility ensures precise results with maximum comfort.
            </p>

            {/* Timings */}
            <div className={styles.timingsRow}>
              <div className={styles.timeItem}>
                <span className="material-symbols-outlined">schedule</span>
                Mon-Sat: 10:00 AM - 9:30 PM
              </div>
              <div className={styles.timeItem}>
                <span className="material-symbols-outlined">call</span>
                +91 99751 50505
              </div>
            </div>
          </div>

          {/* Right - Doctor Card */}
          <div className={styles.doctorInfo}>
            <div className={styles.doctorHeader}>
              <img
                src="/doctor-2.jpg"
                alt="Dr. Nitin Sadhwani"
                className={styles.doctorImage}
              />
              <div className={styles.doctorDetails}>
                <h3>Dr. Nitin Sadhwani</h3>
                <span className={styles.title}>BDS • Dental Surgeon</span>
              </div>
            </div>
            <div className={styles.doctorDetails}>
              <p>18 Years Experience. Completed BDS from Bapuji College of Dental Sciences. Active IDA Member.</p>
              <ul>
                <li>Cosmetic Dentistry</li>
                <li>Dental Implants</li>
                <li>Tooth Extraction</li>
                <li>Crowns & Bridges</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          SERVICES SECTION
          ======================================== */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Our Expertise</span>
            <h2 className={styles.sectionTitle}>Specialized Treatments</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive dental care with precision, comfort, and world-class results
            </p>
          </div>

          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <span className="material-symbols-outlined">dentistry</span>
              </div>
              <h3>Impaction / Extraction</h3>
              <p>Safe and painless removal of impacted teeth with quick recovery protocols and minimal discomfort.</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <span className="material-symbols-outlined">biotech</span>
              </div>
              <h3>Dental Implants</h3>
              <p>Permanent fixing of artificial teeth that look, feel, and function completely naturally.</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <span className="material-symbols-outlined">auto_fix</span>
              </div>
              <h3>Cosmetic Dentistry</h3>
              <p>Smile designing, veneers, and professional whitening for aesthetic perfection.</p>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <span className="material-symbols-outlined">healing</span>
              </div>
              <h3>Crowns & Bridges</h3>
              <p>High-quality restoration for damaged or missing teeth with natural appearance.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <Link href="/services" className="btn btn-gold">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================
          REVIEWS SECTION
          ======================================== */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>Patient Reviews</span>
          <h2 className={styles.sectionTitle}>What Our Patients Say</h2>

          <div className={styles.ratingBox}>
            <span className={styles.ratingNumber}>4.8</span>
            <div>
              <div className={styles.ratingStars}>★★★★★</div>
              <span className={styles.ratingLabel}>Based on 112+ Reviews</span>
            </div>
          </div>
        </div>

        <div className={styles.reviewsGrid}>
          <div className={styles.reviewCard}>
            <p>"Cooperative and friendly staff. The entire experience was comfortable and professional. Highly recommended!"</p>
            <span className={styles.reviewAuthor}>— Verified Patient</span>
          </div>
          <div className={styles.reviewCard}>
            <p>"Excellent and knowledgeable dentist. Dr. Nitin explained everything clearly and the treatment was painless."</p>
            <span className={styles.reviewAuthor}>— Google Review</span>
          </div>
          <div className={styles.reviewCard}>
            <p>"Good treatment and thorough explanation of procedures. Modern equipment and clean clinic environment."</p>
            <span className={styles.reviewAuthor}>— JustDial Review</span>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <LocationMap />

      {/* ========================================
          CTA SECTION
          ======================================== */}
      <section className={styles.ctaSection}>
        <h2>Ready for Your Smile Transformation?</h2>
        <p>
          Visit Dr. Nitin Sadhwani at our Pimpri-Chinchwad center or Kalewadi branch for world-class dental care.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/appointment" className={styles.ctaBtnPrimary}>
            <span className="material-symbols-outlined">calendar_month</span>
            Book Appointment
          </Link>
          <Link href="/branches" className={styles.ctaBtnSecondary}>
            <span className="material-symbols-outlined">location_on</span>
            View Locations
          </Link>
        </div>
      </section>
    </>
  );
}
