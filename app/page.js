"use client";

import React, { useState } from 'react';

export default function PhotographyWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [bookingStep, setBookingStep] = useState(1);
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    city: '',
    message: ''
  });
  const [emailSignup, setEmailSignup] = useState({ name: '', email: '', city: '' });
  const [expandedFaq, setExpandedFaq] = useState(null);

  const packages = [
    {
      id: 1,
      name: 'The Snapshot',
      count: '5 photos',
      price: 100,
      features: ['5 hand-picked, edited photos', 'High-resolution digital downloads', 'Personal printing rights included', 'Delivered within 7 days'],
      desc: 'Perfect for a holiday card and a frame or two.',
      badge: null
    },
    {
      id: 2,
      name: 'The Keepsake',
      count: '10 photos',
      price: 150,
      features: ['10 hand-picked, edited photos', 'High-resolution digital downloads', 'Personal printing rights included', 'Delivered within 7 days'],
      desc: 'The sweet spot — variety for grandparents, walls, and socials.',
      badge: 'MOST LOVED'
    },
    {
      id: 3,
      name: 'The Whole Story',
      count: '25 photos',
      price: 250,
      features: ['25 hand-picked, edited photos', 'High-resolution digital downloads', 'Personal printing rights included', 'Delivered within 7 days'],
      desc: 'For families who want every laugh, every glance, every detail.',
      badge: null
    }
  ];

  const faqItems = [
    { q: 'What should we wear for our session?', a: 'Think warm, candid, unmistakably you. Neutral tones, layers, and comfortable clothing photograph best. We recommend colors that match the season — earthy tones for fall and spring, pastels for spring portraits.' },
    { q: 'What happens if it rains?', a: 'Rain happens! We reschedule to the next available sunny weekend slot. Your reservation is held at no charge.' },
    { q: 'When will we get our photos?', a: 'Gallery previews are delivered within 7 days. High-resolution downloads arrive immediately upon package purchase.' },
    { q: 'How does payment work?', a: 'Zero upfront cost. You book for free, preview your gallery, then choose a package and pay only if you love the photos.' },
    { q: 'Where exactly is the photoshoot?', a: 'Exact location is shared once you book. We use beautiful natural-light settings throughout the Langley/Surrey area.' },
    { q: 'Can we bring our dog or extended family?', a: 'Absolutely! Let us know in your booking notes and we\'ll prepare accordingly. Mini sessions work best with up to 6-8 people.' }
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Reserve your spot',
      icon: '📅',
      desc: 'Pick a 30-minute time slot from our calendar. Booking is completely free — no card, no deposit.'
    },
    {
      number: 2,
      title: 'Show up & enjoy',
      icon: '✨',
      desc: 'Arrive at the park, meet your photographer, and let the kids be themselves. We\'ll handle the rest.'
    },
    {
      number: 3,
      title: 'Choose your package',
      icon: '📸',
      desc: 'Within 7 days you\'ll preview your gallery. Pick the package that fits — or simply walk away. No obligation.'
    }
  ];

  const handleBooking = (step) => {
    if (step === 'confirm') {
      alert(`🎉 Booking confirmed! We'll send a confirmation email to ${clientInfo.email} with session details.`);
      setCurrentPage('home');
      setBookingStep(1);
      setClientInfo({ name: '', email: '', city: '', message: '' });
    } else {
      setBookingStep(step);
    }
  };

  const handleClientInfoChange = (e) => {
    const { name, value } = e.target;
    setClientInfo(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ fontFamily: "'Georgia', serif", backgroundColor: '#F5F1E8', color: '#2C3E2F', minHeight: '100vh' }}>
      
      {/* Navigation */}
      <nav style={{ backgroundColor: '#F5F1E8', padding: '1.5rem', textAlign: 'center', borderBottom: '1px solid #D4C5B9' }}>
        <button onClick={() => setCurrentPage('home')} style={{ background: 'none', border: 'none', fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer', color: '#2C3E2F' }}>
          Moss & Timber
        </button>
      </nav>

      {currentPage === 'home' && (
        <>
          {/* Hero */}
          <section style={{ backgroundImage: 'linear-gradient(rgba(44, 62, 47, 0.5), rgba(44, 62, 47, 0.5)), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 600%22%3E%3Crect fill=%22%23556B5F%22 width=%221200%22 height=%22600%22/%3E%3C/svg%3E")', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '4rem 2rem', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ maxWidth: '600px' }}>
              <p style={{ fontSize: '0.85rem', letterSpacing: '2px', marginBottom: '1rem', opacity: 0.9 }}>MINI PHOTO SESSIONS</p>
              <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'normal', lineHeight: 1.2 }}>Where family stories are rooted in nature.</h1>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.95, lineHeight: 1.6 }}>Reserve your spot at no cost — choose a photo package only after you've seen the magic we captured together.</p>
              <button onClick={() => setCurrentPage('booking')} style={{ backgroundColor: '#A88E7F', color: 'white', border: 'none', padding: '1rem 2.5rem', fontSize: '1.05rem', cursor: 'pointer', borderRadius: '50px', fontFamily: 'inherit' }}>Book Now ↘</button>
              <button onClick={() => document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })} style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid white', padding: '1rem 2.5rem', fontSize: '1.05rem', cursor: 'pointer', borderRadius: '50px', fontFamily: 'inherit', marginLeft: '1rem' }}>View packages</button>
            </div>
          </section>

{/* Details */}
<section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
  <p style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#A88E7F', marginBottom: '1rem' }}>THE DETAILS</p>
  <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>Everything you need to know, at a glance.</h2>
  <p style={{ color: '#666', marginBottom: '3rem', fontSize: '1.05rem' }}>Designed for busy families who want beautiful photos without the all-day shoot or the all-in-one price tag.</p>
  
  <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
    <div style={{ backgroundColor: '#F9F7F4', padding: '2rem', borderRadius: '12px' }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⏱️</div>
      <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>30 minutes</h3>
      <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>Quick enough for toddlers, long enough for a real gallery of moments.</p>
    </div>
    <div style={{ backgroundColor: '#F9F7F4', padding: '2rem', borderRadius: '12px' }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📅</div>
      <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>Summer 2026</h3>
      <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>Saturday and Sunday afternoon time slots, scheduled around golden hour.</p>
    </div>
    <div style={{ backgroundColor: '#F9F7F4', padding: '2rem', borderRadius: '12px' }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📍</div>
      <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>Surrey BC</h3>
      <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>A lush, beautiful local area — exact location shared once you book.</p>
    </div>
    <div style={{ backgroundColor: '#F9F7F4', padding: '2rem', borderRadius: '12px' }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💰</div>
      <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>$0 to reserve</h3>
      <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>No session fee. No deposit. Choose a photo package only after the shoot.</p>
    </div>
  </div>
</section>

  {/* How It Works */}
          <section style={{ padding: '4rem 2rem', backgroundColor: '#556B5F', color: 'white' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <p style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#C4B5A8', marginBottom: '1rem' }}>HOW IT WORKS</p>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>Three easy steps from "let's do it" to "wow, look at us."</h2>
              <p style={{ color: '#D4C5B9', marginBottom: '3rem', fontSize: '1.05rem' }}>No quotes, no contracts, no pressure — just a simple flow built around how families actually book photos.</p>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                {processSteps.map((step, idx) => (
                  <div key={step.number} style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '2rem', borderRadius: '12px', borderLeft: '3px solid #A88E7F' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                      <div style={{ fontSize: '2.5rem', minWidth: '60px' }}>{step.icon}</div>
                      <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>{step.title}</h3>
                        <p style={{ fontSize: '1rem', lineHeight: 1.6, color: '#D4C5B9' }}>{step.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>


          {/* Packages */}
          <section id="packages" style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#A88E7F', marginBottom: '1rem' }}>PHOTO PACKAGES</p>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>Simple, honest pricing — only after you've seen the photos.</h2>
            <p style={{ color: '#666', marginBottom: '3rem', fontSize: '1.05rem' }}>All photos are professionally edited and delivered as high-resolution digital downloads with a personal-use license.</p>

            <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {packages.map((pkg, idx) => (
                <div key={pkg.id} style={{ backgroundColor: pkg.badge ? '#556B5F' : 'white', color: pkg.badge ? 'white' : '#2C3E2F', padding: '2rem', borderRadius: '16px', border: pkg.badge ? '2px solid #A88E7F' : '1px solid #D4C5B9', position: 'relative' }}>
                  {pkg.badge && (
                    <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#A88E7F', color: 'white', padding: '0.4rem 1rem', fontSize: '0.75rem', letterSpacing: '1px', borderRadius: '20px' }}>
                      {pkg.badge}
                    </div>
                  )}
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>{pkg.name}</h3>
                  <p style={{ fontSize: '0.9rem', opacity: pkg.badge ? 0.8 : 0.6, marginBottom: '1.5rem', letterSpacing: '1px' }}>{pkg.count}</p>
                  <p style={{ fontSize: '2.2rem', marginBottom: '1.5rem', fontWeight: 'normal' }}>${pkg.price}</p>
                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
                    {pkg.features.map((feature, i) => (
                      <li key={i} style={{ marginBottom: '0.8rem', fontSize: '0.95rem', display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '0.8rem' }}>✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <p style={{ fontSize: '0.95rem', opacity: pkg.badge ? 0.9 : 0.7, fontStyle: 'italic' }}>{pkg.desc}</p>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: '#2C3E2F', color: '#A88E7F', padding: '1.5rem', marginTop: '2rem', borderRadius: '12px', textAlign: 'center', fontSize: '0.95rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                🛡️ No payment required to book. Choose your package only after you preview the gallery.
              </span>
            </div>
          </section>

          {/* Gallery */}
<section style={{ padding: '4rem 2rem', backgroundColor: '#F9F7F4' }}>
  <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
    <p style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#A88E7F', marginBottom: '1rem' }}>A GLIMPSE OF THE STYLE</p>
    <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>Warm, candid, unmistakably outdoors.</h2>
    <p style={{ color: '#666', marginBottom: '3rem', fontSize: '1.05rem' }}>A peek at the natural-light, story-first style you can expect from your session.</p>
    
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
      {[...Array(12)].map((_, idx) => (
        <img 
          key={idx}
          src={`/photos/photo${idx + 1}.jpg`}
          alt={`Family photo ${idx + 1}`}
          style={{ 
            borderRadius: '12px', 
            width: '100%',
            aspectRatio: '4/5',
            objectFit: 'cover'
          }}
        />
      ))}
    </div>
  </div>
</section>

        
         

          

          {/* Urgency */}
          <section style={{ backgroundImage: 'linear-gradient(rgba(85, 107, 95, 0.6), rgba(85, 107, 95, 0.6)), url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1200 400%22%3E%3Crect fill=%22%23556B5F%22 width=%221200%22 height=%22400%22/%3E%3C/svg%3E")', backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', padding: '4rem 2rem', textAlign: 'center' }}>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', padding: '0.8rem 1.5rem', borderRadius: '30px', display: 'inline-block', marginBottom: '2rem', fontSize: '0.85rem', letterSpacing: '1px' }}>
                ⚪ LIMITED SUMMER SLOTS
              </div>
              <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem', fontWeight: 'normal' }}>One day. Thirty minutes. A gallery your family will hold onto for years.</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.95 }}>Summer weekends in Langley/Surrey book up fast — lock in your spot now while time slots are still open.</p>
              <button onClick={() => setCurrentPage('booking')} style={{ backgroundColor: '#A88E7F', color: 'white', border: 'none', padding: '1rem 2.5rem', fontSize: '1.05rem', cursor: 'pointer', borderRadius: '50px', fontFamily: 'inherit' }}>Reserve my Photoshoot</button>
            </div>
          </section>

{/* FAQ */}
          <section style={{ padding: '4rem 2rem', backgroundColor: '#F9F7F4' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#A88E7F', marginBottom: '1rem' }}>FREQUENTLY ASKED</p>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 'normal' }}>Real questions from real families.</h2>
              
              <div style={{ display: 'grid', gap: '1rem' }}>
                {faqItems.map((item, idx) => (
                  <div key={idx} style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #D4C5B9', overflow: 'hidden' }}>
                    <button onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)} style={{ width: '100%', padding: '1.5rem', border: 'none', backgroundColor: 'transparent', textAlign: 'left', cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 'normal' }}>{item.q}</span>
                      <span style={{ fontSize: '1.5rem' }}>{expandedFaq === idx ? '−' : '+'}</span>
                    </button>
                    {expandedFaq === idx && (
                      <div style={{ padding: '0 1.5rem 1.5rem', color: '#666', lineHeight: 1.6 }}>
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Email Waitlist */}
          <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#A88E7F', marginBottom: '1rem' }}>STAY IN THE KNOW</p>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '2rem', fontWeight: 'normal' }}>Join Mini-Session Waitlist</h2>
            <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1rem' }}>And be the first to know about mini-session dates in a city near you.</p>
            
            <div style={{ display: 'grid', gap: '1rem' }}>
              <input type="text" placeholder="Your name" value={emailSignup.name} onChange={(e) => setEmailSignup({...emailSignup, name: e.target.value})} style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #D4C5B9', fontSize: '1rem', fontFamily: 'inherit', backgroundColor: '#F9F7F4' }} />
              <input type="email" placeholder="you@email.com" value={emailSignup.email} onChange={(e) => setEmailSignup({...emailSignup, email: e.target.value})} style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #D4C5B9', fontSize: '1rem', fontFamily: 'inherit', backgroundColor: '#F9F7F4' }} />
              <input type="text" placeholder="Your city" value={emailSignup.city} onChange={(e) => setEmailSignup({...emailSignup, city: e.target.value})} style={{ padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #D4C5B9', fontSize: '1rem', fontFamily: 'inherit', backgroundColor: '#F9F7F4' }} />
              <button style={{ backgroundColor: '#A88E7F', color: 'white', border: 'none', padding: '0.8rem', fontSize: '1rem', cursor: 'pointer', borderRadius: '8px', fontFamily: 'inherit', fontWeight: 'normal' }}>Join the list</button>
            </div>
          </section>

          {/* Footer */}
          <section style={{ backgroundColor: '#556B5F', color: '#C4B5A8', padding: '3rem 2rem', textAlign: 'center' }}>
            <p style={{ marginBottom: '1rem' }}>📍 Langley/Surrey, BC</p>
            <button onClick={() => setCurrentPage('booking')} style={{ backgroundColor: 'transparent', color: '#C4B5A8', border: '1px solid #C4B5A8', padding: '0.8rem 1.5rem', fontSize: '0.95rem', cursor: 'pointer', borderRadius: '50px', fontFamily: 'inherit', marginBottom: '2rem' }}>Get in Touch</button>
            <p style={{ fontSize: '0.9rem' }}>© 2026 Moss & Timber Photography. All rights reserved.</p>
          </section>
        </>
      )}

      {currentPage === 'booking' && (
        <section style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto', minHeight: '100vh' }}>
          <button onClick={() => setCurrentPage('home')} style={{ background: 'none', border: 'none', color: '#A88E7F', cursor: 'pointer', fontSize: '1rem', marginBottom: '2rem' }}>← Back</button>
          
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>Pick your time</h2>
            <p style={{ color: '#666', marginBottom: '2rem' }}>Reserve your session — it's free. Click below to open our Calendly calendar.</p>
            
            <div style={{ backgroundColor: '#F9F7F4', padding: '2rem', borderRadius: '12px', textAlign: 'center', marginBottom: '2rem' }}>
              <p style={{ marginBottom: '1rem', fontWeight: 'normal' }}>📅 Interactive Calendar</p>
              <p style={{ color: '#666', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Replace the URL below with your Calendly link:</p>
              <p style={{ fontSize: '0.85rem', color: '#A88E7F', marginBottom: '1rem', fontStyle: 'italic' }}>https://calendly.com/mosstimberco/30min</p>
              <button onClick={() => alert('In production, this would open your live Calendly calendar. Replace the URL above with your actual Calendly booking link.')} style={{ backgroundColor: '#A88E7F', color: 'white', border: 'none', padding: '0.8rem 1.5rem', fontSize: '0.95rem', cursor: 'pointer', borderRadius: '8px', fontFamily: 'inherit' }}>Open Calendly Calendar</button>
            </div>

            <div style={{ backgroundColor: '#F9F7F4', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem', borderLeft: '3px solid #A88E7F' }}>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>✓ After selecting a time on Calendly, complete your details below:</p>
            </div>

            <div style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '1px', color: '#A88E7F', fontWeight: 'normal' }}>NAME</label>
                <input type="text" name="name" placeholder="Your name" value={clientInfo.name} onChange={handleClientInfoChange} style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #D4C5B9', fontSize: '1rem', fontFamily: 'inherit', backgroundColor: '#F9F7F4', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '1px', color: '#A88E7F', fontWeight: 'normal' }}>EMAIL</label>
                <input type="email" name="email" placeholder="you@email.com" value={clientInfo.email} onChange={handleClientInfoChange} style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #D4C5B9', fontSize: '1rem', fontFamily: 'inherit', backgroundColor: '#F9F7F4', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '1px', color: '#A88E7F', fontWeight: 'normal' }}>TYPE OF PHOTOSHOOT</label>
                <input type="text" name="message" placeholder="Family, maternity, newborn..." value={clientInfo.message} onChange={handleClientInfoChange} style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #D4C5B9', fontSize: '1rem', fontFamily: 'inherit', backgroundColor: '#F9F7F4', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', letterSpacing: '1px', color: '#A88E7F', fontWeight: 'normal' }}>ANY SPECIAL NOTES?</label>
                <textarea placeholder="Tell us a little about what you're looking for..." value={clientInfo.city} onChange={(e) => setClientInfo({...clientInfo, city: e.target.value})} style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid #D4C5B9', fontSize: '1rem', fontFamily: 'inherit', backgroundColor: '#F9F7F4', boxSizing: 'border-box', minHeight: '80px' }} />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={() => setCurrentPage('home')} style={{ backgroundColor: 'white', color: '#2C3E2F', border: '1px solid #D4C5B9', padding: '1rem 1.5rem', fontSize: '1rem', cursor: 'pointer', borderRadius: '8px', fontFamily: 'inherit', flex: 1 }}>Back</button>
              <button onClick={() => handleBooking('confirm')} style={{ backgroundColor: '#A88E7F', color: 'white', border: 'none', padding: '1rem 1.5rem', fontSize: '1rem', cursor: 'pointer', borderRadius: '8px', fontFamily: 'inherit', flex: 1 }}>Confirm Booking</button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}