import React from 'react';

const reviews = [
    {
        name: "Vikram Shankpale",
        text: "Maa ki treatment ke liye ache dentist ki search me tha... Dr. Kashish ji har chiz ko ekdam achese explain kr batate rahe jis se maa ka treatment kaise jaa raha hai samjh me ata raha. Ye sunkar mai relax ho gaya. Dr. Kashish sirf daaton ka ilaj hi nahi karte wo logon ko khulkar hasta hua dekhne ka irada rakhte hai."
    },
    {
        name: "Shuman Kumari",
        text: "Absolutely amazing experience! Dr. Kashish is incredibly skilled, gentle, and made the whole process so comfortable. My treatment was smooth and I’m beyond happy with the results. Highly recommend her to anyone looking for a great dentist!"
    },
    {
        name: "Pradeep Chauhan",
        text: "I visited this clinic recently for my teeth related issues. Nitin sir and his wife are highly skilled practitioners. They listened to the issues very carefully and provided best possible advice and suggestions with good treatment for root canal and teeth filling. Definitely would recommended."
    },
    {
        name: "Swati Rastogi",
        text: "I had an excellent experience with my dental treatment! The staff was incredibly friendly and made me feel at ease from the moment I walked in. The dentist was gentle, explained everything clearly, and ensured I was comfortable throughout."
    },
    {
        name: "Harleen Realtors™",
        text: "I have known Dr. Kashish and Dr. Nitin for a while. The best part of treatment with them is all the steps are well explained. I must say both of them have a very fine hand. No discomfort, easy bounce back. And most importantly no unnecessary charges."
    },
    {
        name: "Smart 272",
        text: "Doctors and staff of Balaji Dental Clinic takes very good care of patients. Dr. Kashish is an excellent dentist. She took the time to explain every procedure she was doing. Doctor was very supportive, and thorough when explaining."
    },
    {
        name: "Raghunandan Shinde",
        text: "Very nice service, Doctor and staff is very polite. Doctor explained me each and every aspect regarding the treatment. I really appreciate the Dr Kashish I highly recommend every one to visit the clinic."
    }
];

const TestimonialsPage = () => {
    return (
        <div className="container section">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
                <h1 className="section-title">Patient Stories</h1>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: '#fdd835', fontSize: '1.5rem', fontWeight: 'bold' }}>
                    <span>5.0</span>
                    <span>★★★★★</span>
                    <span style={{ color: 'var(--text-light)', fontSize: '1rem', fontWeight: 'normal' }}>(Based on Google Reviews)</span>
                </div>
            </div>

            <div className="grid grid-3">
                {reviews.map((review, index) => (
                    <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={{ fontStyle: 'italic', color: 'var(--text-light)', marginBottom: 'auto' }}>"{review.text}"</p>
                        <div style={{ marginTop: '1.5rem', borderTop: '1px solid #eee', paddingTop: '1rem' }}>
                            <strong style={{ color: 'var(--primary-color)' }}>{review.name}</strong>
                            <div style={{ color: '#fdd835' }}>★★★★★</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center" style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)' }}>
                <h2 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>Share Your Experience</h2>
                <p style={{ marginBottom: '2rem' }}>We value your feedback. Please let us know about your visit.</p>
                <a
                    href="https://maps.app.goo.gl/fUZcMF4PpHJr7LrQ7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                >
                    Write a Review on Google
                </a>
            </div>
        </div>
    );
};

export default TestimonialsPage;
