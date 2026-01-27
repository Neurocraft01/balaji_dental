import Hero from "@/components/Hero";
import Link from "next/link";
import styles from "./HomeNew.module.css"; // Using new styles

export default function Home() {
  return (
    <>
      <Hero />

      {/* Intro / About Dr. Nitin Section */}
      <section className={styles.section}>
        <div className={styles.introGrid}>
          <div className={styles.introContent}>
            <span className={styles.subHeading}>Welcome to Balaji Dental Clinic</span>
            <h2 className={styles.heading}>Advanced Dentistry, <br />Personalized Care.</h2>
            <p className={styles.paragraph}>
              Balaji Dental Clinic & Implant Center is a premier dentistry clinic in Pimpri-Chinchwad, Pune.
              Led by <strong>Dr. Nitin Sadhwani</strong> (BDS), we bring over 18 years of experience in creating healthy, beautiful smiles.
            </p>
            <p className={styles.paragraph}>
              Whether you need complex <strong>Dental Implant Fixing</strong>, <strong>Impaction Removal</strong>, or simple
              aesthetic enhancements, our state-of-the-art facility ensures precise results with maximum comfort.
            </p>

            <div className={styles.timingsGrid}>
              <div className={styles.timeCard}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Morning Hours</h4>
                <p style={{ color: 'var(--text-light)' }}>10:00 AM - 02:00 PM</p>
              </div>
              <div className={styles.timeCard}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Evening Hours</h4>
                <p style={{ color: 'var(--text-light)' }}>05:30 PM - 09:30 PM</p>
              </div>
              <div className={styles.timeCard}>
                <h4 style={{ color: 'var(--primary-color)', marginBottom: '0.5rem' }}>Days</h4>
                <p style={{ color: 'var(--text-light)' }}>Mon - Sat</p>
              </div>
            </div>
          </div>

          <div className={styles.doctorCard}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#ddd',
                backgroundImage: `url('/doctor-2.jpg')`, backgroundSize: 'cover'
              }}></div>
              <div>
                <h3 className={styles.docName}>Dr. Nitin Sadhwani</h3>
                <span className={styles.docTitle}>BDS, Dentist</span>
              </div>
            </div>

            <div className={styles.docBio}>
              <p style={{ marginBottom: '1rem' }}>
                <strong>18 Years Experience Overall</strong><br />
                Completed BDS from Bapuji College of Dental Sciences, Davangere (2008).
                Active member of the Indian Dental Association.
              </p>
              <ul style={{ paddingLeft: '1.2rem', marginBottom: '1rem' }}>
                <li>✨ Cosmetic/Aesthetic Dentistry</li>
                <li>🦷 Impacted Tooth Extraction</li>
                <li>🔩 Dental Implant Fixing</li>
                <li>👑 Crowns and Bridges Fixing</li>
              </ul>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-color)', fontWeight: 'bold' }}>
                <span className="material-symbols-outlined">verified</span> Medical Registration Verified
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight (JustDial Specifics) */}
      <section className={`${styles.section} ${styles.bgSurface}`}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
          <span className={styles.subHeading}>Our Expertise</span>
          <h2 className={styles.heading} style={{ marginTop: '0.5rem' }}>Specialized Treatments</h2>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.iconCircle}><span className="material-symbols-outlined">dentistry</span></div>
            <h3>Impaction / Extraction</h3>
            <p className={styles.paragraph} style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Safe and painless removal of impacted teeth with quick recovery protocols.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconCircle}><span className="material-symbols-outlined">biotech</span></div>
            <h3>Dental Implants</h3>
            <p className={styles.paragraph} style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Permanent fixing of artificial teeth that look and feel completely natural.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconCircle}><span className="material-symbols-outlined">auto_fix</span></div>
            <h3>Cosmetic Dentistry</h3>
            <p className={styles.paragraph} style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Smile designing, veneers, and whitening for aesthetic perfection.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.iconCircle}><span className="material-symbols-outlined">bridge</span></div>
            <h3>Crowns & Bridges</h3>
            <p className={styles.paragraph} style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
              High-quality restoration for damaged or missing teeth.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/services" style={{ textDecoration: 'underline', color: 'var(--secondary-color)', fontWeight: 'bold' }}>
            View Full Service Menu
          </Link>
        </div>
      </section>

      {/* Reviews Section Integration */}
      <section className={styles.section}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <span className={styles.subHeading}>Patient Satisfaction</span>
          <h2 className={styles.heading}>What Our Patients Say</h2>
          <div style={{
            backgroundColor: '#fff', padding: '1rem 2rem', borderRadius: '1rem',
            boxShadow: 'var(--shadow-md)', display: 'flex', alignItems: 'center', gap: '1rem'
          }}>
            <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>4.8</span>
            <div style={{ textAlign: 'left' }}>
              <div style={{ color: 'var(--gold-accent)' }}>★★★★★</div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>Based on 112 Ratings (JustDial & Google)</span>
            </div>
          </div>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureCard} style={{ backgroundColor: '#F0F9FF', fontStyle: 'italic' }}>
            <p>"Cooperative and friendly staff mentioned multiple times."</p>
            <span style={{ display: 'block', marginTop: '1rem', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>- Common Feedback</span>
          </div>
          <div className={styles.featureCard} style={{ backgroundColor: '#F0F9FF', fontStyle: 'italic' }}>
            <p>"Excellent and knowledgeable dentist praised by several reviewers."</p>
            <span style={{ display: 'block', marginTop: '1rem', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>- Patient Review</span>
          </div>
          <div className={styles.featureCard} style={{ backgroundColor: '#F0F9FF', fontStyle: 'italic' }}>
            <p>"Good treatment and thorough explanation of procedures appreciated."</p>
            <span style={{ display: 'block', marginTop: '1rem', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>- Patient Review</span>
          </div>
        </div>
      </section>

      {/* Branch & CTA */}
      <div className={styles.ctaSection}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Ready for your Smile Transformation?</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem', opacity: 0.9 }}>
          Visit Dr. Nitin Sadhwani at our Pimpri-Chinchwad center or Kalewadi branch.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/appointment" className="btn btn-primary" style={{
            backgroundColor: 'var(--white)', color: 'var(--primary-color)', padding: '1rem 2rem', borderRadius: '99px', fontWeight: 'bold', textDecoration: 'none'
          }}>
            Book Appointment
          </Link>
          <Link href="/branches" style={{
            border: '2px solid white', color: 'white', padding: '1rem 2rem', borderRadius: '99px', fontWeight: 'bold', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem'
          }}>
            <span className="material-symbols-outlined">location_on</span> View Locations
          </Link>
        </div>
      </div>
    </>
  );
}
