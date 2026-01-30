'use client';

import styles from './LocationMap.module.css';

export default function LocationMap() {
    const locations = [
        {
            name: "Main Clinic - Pimpri-Chinchwad",
            address: "123 Main Street, Pimpri-Chinchwad, Pune - 411018",
            phone: "+91 98765 43210",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.2658890738455!2d73.80491!3d18.62875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM3JzQzLjUiTiA3M8KwNDgnMTcuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
        },
        {
            name: "Kalewadi Branch",
            address: "456 Dental Plaza, Kalewadi, Pune - 411017",
            phone: "+91 98765 43211",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.2658890738455!2d73.80491!3d18.62875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM3JzQzLjUiTiA3M8KwNDgnMTcuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
        }
    ];

    return (
        <section className={styles.locationSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>Find Us</span>
                    <h2 className={styles.title}>Visit Our Clinics</h2>
                    <p className={styles.subtitle}>
                        Experience world-class dental care at our state-of-the-art facilities
                    </p>
                </div>

                <div className={styles.locationsGrid}>
                    {locations.map((location, index) => (
                        <div key={index} className={styles.locationCard}>
                            <div className={styles.mapContainer}>
                                <iframe
                                    src={location.mapUrl}
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, borderRadius: '12px' }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Map of ${location.name}`}
                                />
                            </div>

                            <div className={styles.locationInfo}>
                                <h3 className={styles.locationName}>{location.name}</h3>

                                <div className={styles.infoItem}>
                                    <span className="material-symbols-outlined">location_on</span>
                                    <p>{location.address}</p>
                                </div>

                                <div className={styles.infoItem}>
                                    <span className="material-symbols-outlined">call</span>
                                    <a href={`tel:${location.phone}`}>{location.phone}</a>
                                </div>

                                <button className={styles.directionsBtn}>
                                    <span className="material-symbols-outlined">directions</span>
                                    Get Directions
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
