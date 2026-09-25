"use client";

import React, { useState } from 'react';

export default function PhotographyWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [waitlist, setWaitlist] = useState({ name: '', email: '', city: 'Langley', how: 'Facebook' });
  const [waitlistStatus, setWaitlistStatus] = useState(null);

  const submitWaitlist = async (e) => {
    e.preventDefault();
    setWaitlistStatus('sending');
    try {
      const res = await fetch('https://formsubmit.co/ajax/mosstimberco@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: 'New Moss & Timber waitlist signup',
          Name: waitlist.name,
          Email: waitlist.email,
          City: waitlist.city,
          'How heard': waitlist.how
        })
      });
      if (res.ok) { setWaitlistStatus('done'); trackLead(); }
      else { setWaitlistStatus('error'); }
    } catch (err) { setWaitlistStatus('error'); }
  };

  const trackLead = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead');
    }
  };

  const goBooking = () => {
    trackLead();
    setCurrentPage('booking');
  };

  const packages = [
    {
      id: 1,
      name: 'The Seedling',
      count: '5 photos',
      price: 100,
      features: ['5 hand-picked, edited photos', 'High-resolution digital downloads', 'Personal printing rights included', 'Delivered within 7 days'],
      desc: 'The essentials — a holiday card, a frame for the mantel, a new profile picture.',
      badge: null
    },
    {
      id: 2,
      name: 'The Grove',
      count: '10 photos',
      price: 150,
      features: ['10 hand-picked, edited photos', 'High-resolution digital downloads', 'Personal printing rights included', 'Delivered within 7 days'],
      desc: 'The family favourite — plenty for grandparents, gallery walls, and the group chat.',
      badge: 'MOST LOVED'
    },
    {
      id: 3,
      name: 'The Old Growth',
      count: '25 photos',
      price: 250,
      features: ['25 hand-picked, edited photos', 'High-resolution digital downloads', 'Personal printing rights included', 'Delivered within 7 days'],
      desc: 'The whole afternoon, distilled — every giggle, glance, and golden-hour glow.',
      badge: null
    }
  ];

  const faqItems = [
    { q: 'What should we wear for our session?', a: 'Come as yourselves, just a little polished. Earthy tones, layers, and textures love the fall light — think moss greens, warm browns, soft creams. Skip the neon and big logos and you’ll look timeless.' },
    { q: 'What happens if it rains?', a: 'This is the Pacific Northwest — we have a plan. We’ll shift you to the next available fair-weather slot at no charge, and your reservation is always held free.' },
    { q: 'When will we get our photos?', a: 'Your preview gallery lands within 7 days of the shoot. The moment you pick a collection, your high-resolution downloads are ready.' },
    { q: 'How does payment actually work?', a: 'There isn’t one — not upfront, anyway. You reserve for free, we shoot, you preview the gallery, and only then do you choose a collection. Love them, pay. Don’t, walk away. That’s the whole deal.' },
    { q: 'Where do the sessions happen?', a: 'Out in the open, under real trees. In Surrey we love Bear Creek Park and Hawthorn Park; in Langley it’s Campbell Valley and Derby Reach. We’ll name your exact meeting spot when you book — no mystery, no surprises.' },
    { q: 'Can we bring the dog? Grandma? The whole crew?', a: 'Please do. Kids can be kids, dogs can be dogs, grandparents get the good bench. Mini sessions comfortably fit up to 6\u20138 people — just mention the headcount when you book.' },
    { q: 'Can we reschedule if something comes up?', a: 'Of course — life with kids is unpredictable. Move to any open slot at no charge, as long as you let us know at least 24 hours ahead.' },
    { q: 'Do you shoot anything besides families?', a: 'Yes — Moss & Timber also photographs food, menus, and products for Langley & Surrey businesses. Flat-rate sets, 48-hour turnaround. Scroll to the business section below or mention it when you book.' }
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Claim your slot',
      desc: 'Pick a time that suits your crew from our live calendar. It’s completely free — no card, no deposit, no fine print.'
    },
    {
      number: 2,
      title: 'Wander & play',
      desc: 'Meet us at the park at golden hour. No stiff poses, no “say cheese” marathons — just your family, being yourselves, while we do the work.'
    },
    {
      number: 3,
      title: 'Fall in love, then pay',
      desc: 'Within 7 days your gallery arrives. Choose the collection that fits your walls — or walk away owing nothing at all.'
    }
  ];

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Moss & Timber Photography",
          "description": "Family mini photo sessions and food & e-commerce photography in Langley & Surrey, BC. Free to reserve — pay only for photos you love.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Langley",
            "addressRegion": "BC",
            "addressCountry": "CA"
          },
          "url": "https://mosstimberco.com",
          "image": "https://mosstimberco.com/photos/hero-family.jpg",
          "telephone": "+1-778-840-4033",
          "email": "mosstimberco@gmail.com",
          "priceRange": "$$",
          "sameAs": ["https://www.facebook.com/profile.php?id=61594366961855", "https://www.instagram.com/mossandtimber"],
          "areaServed": ["Langley, BC", "Surrey, BC"]
        })}
      </script>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqItems.map((item) => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": { "@type": "Answer", "text": item.a }
          }))
        })}
      </script>
      <div style={{ fontFamily: "'Montserrat', sans-serif", backgroundColor: '#F5F1E8', color: '#2C3E2F', minHeight: '100vh' }}>

        {/* Navigation */}
        <nav style={{ backgroundColor: '#F5F1E8', padding: '1.25rem 1.5rem', borderBottom: '1px solid #D4C5B9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1100px', margin: '0 auto' }}>
          <button onClick={() => setCurrentPage('home')} style={{ background: 'none', border: 'none', fontSize: '1.4rem', fontWeight: 'bold', cursor: 'pointer', color: '#2C3E2F', fontFamily: 'inherit' }}>
            Moss &amp; Timber
          </button>
          <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <button onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2C3E2F', fontSize: '0.95rem', fontFamily: 'inherit' }}>Sessions</button>
            <button onClick={() => { setCurrentPage('home'); setTimeout(() => document.getElementById('food')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2C3E2F', fontSize: '0.95rem', fontFamily: 'inherit' }}>For Business</button>
            <button onClick={goBooking} style={{ backgroundColor: '#2C3E2F', color: 'white', border: 'none', padding: '0.7rem 1.4rem', fontSize: '0.95rem', cursor: 'pointer', borderRadius: '50px', fontFamily: 'inherit' }}>Reserve free</button>
          </div>
        </nav>

        {currentPage === 'home' && (
          <>
            {/* Hero */}
            <section style={{ backgroundColor: '#2C3E2F', color: 'white', padding: '4rem 2rem' }}>
              <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
                <div>
                  <div style={{ border: '1px solid rgba(255, 255, 255, 0.35)', padding: '0.6rem 1.25rem', borderRadius: '30px', display: 'inline-block', marginBottom: '1.5rem', fontSize: '0.8rem', letterSpacing: '2px' }}>
                    FALL &amp; HOLIDAY MINIS — NOW BOOKING
                  </div>
                  <p style={{ fontSize: '1.15rem', fontStyle: 'italic', marginBottom: '0.75rem', opacity: 0.85 }}>Where family stories are rooted in nature.</p>
                  <h1 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'normal', lineHeight: 1.2 }}>Family photographer in Langley &amp; Surrey, BC</h1>
                  <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9, lineHeight: 1.6 }}>Thirty unhurried minutes under the maples of Langley &amp; Surrey. You pay nothing to reserve — and nothing at all unless you love the photos.</p>
                  <div>
                    <button onClick={goBooking} style={{ backgroundColor: '#A88E7F', color: 'white', border: 'none', padding: '1rem 2.5rem', fontSize: '1.05rem', cursor: 'pointer', borderRadius: '50px', fontFamily: 'inherit' }}>Reserve my session</button>
                    <button onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })} style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid white', padding: '1rem 2.5rem', fontSize: '1.05rem', cursor: 'pointer', borderRadius: '50px', fontFamily: 'inherit', marginLeft: '1rem' }}>See collections</button>
                  </div>
                  <p style={{ marginTop: '1.25rem', fontSize: '0.9rem', opacity: 0.85 }}>No card · No deposit · Walk away free if you don’t love them</p>
                </div>
                <div>
                  <img src="/photos/hero-family.jpg" alt="Fall family session — couple with their young child, Moss & Timber Photography" style={{ borderRadius: '16px', width: '100%', aspectRatio: '4/5', objectFit: 'cover' }} />
                </div>
              </div>
            </section>

            {/* Details */}
            <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
              <p style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#A88E7F', marginBottom: '1rem' }}>GOOD TO KNOW</p>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>Thirty minutes, zero risk, photos you’ll actually frame.</h2>
              <p style={{ color: '#666', marginBottom: '3rem', fontSize: '1.05rem' }}>For families who want beautiful photos without the fuss.</p>

              <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                <div style={{ backgroundColor: '#F9F7F4', padding: '2rem', borderRadius: '12px' }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>30 minutes</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>Short enough for wiggly toddlers, long enough for the real stuff — the laughs, the leaning-in, the in-between.</p>
                </div>
                <div style={{ backgroundColor: '#F9F7F4', padding: '2rem', borderRadius: '12px' }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>Fall &amp; Holiday 2026</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>Golden-hour sessions through October, plus Christmas minis November to mid-December — back in time for holiday cards.</p>
                </div>
                <div style={{ backgroundColor: '#F9F7F4', padding: '2rem', borderRadius: '12px' }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>Langley &amp; Surrey</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>Bear Creek &amp; Hawthorn Park in Surrey, Campbell Valley &amp; Derby Reach in Langley. Real parks, named upfront.</p>
                </div>
                <div style={{ backgroundColor: '#F9F7F4', padding: '2rem', borderRadius: '12px' }}>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>$0 to reserve</h3>
                  <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>No session fee. No deposit. No card. You only ever pay for photos you love, after you’ve seen them.</p>
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section style={{ padding: '4rem 2rem', backgroundColor: '#556B5F', color: 'white' }}>
              <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <p style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#C4B5A8', marginBottom: '1rem' }}>HOW IT WORKS</p>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>Simple, start to finish.</h2>
                <p style={{ color: '#D4C5B9', marginBottom: '3rem', fontSize: '1.05rem' }}>No deposits. No forms. No phone tag.</p>

                <div style={{ display: 'grid', gap: '2rem' }}>
                  {processSteps.map((step) => (
                    <div key={step.number} style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '2rem', borderRadius: '12px', borderLeft: '3px solid #A88E7F' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>
                        <div>
                          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>{step.number}. {step.title}</h3>
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
              <p style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#A88E7F', marginBottom: '1rem' }}>COLLECTIONS</p>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>Pay only for the photos you’d frame.</h2>
              <p style={{ color: '#666', marginBottom: '3rem', fontSize: '1.05rem' }}>Every collection includes professional editing, high-resolution downloads, and personal printing rights.</p>

              <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                {packages.map((pkg) => (
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
                  Nothing due today. You choose a collection only after your gallery arrives.
                </span>
              </div>
            </section>

            {/* Gallery */}
            <section style={{ padding: '4rem 2rem', backgroundColor: '#F9F7F4' }}>
              <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <p style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#A88E7F', marginBottom: '1rem' }}>RECENT WORK</p>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>Recent sessions.</h2>
                <p style={{ color: '#666', marginBottom: '3rem', fontSize: '1.05rem' }}>A few favourites from recent sessions around Langley &amp; Surrey.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                  {[...Array(12)].map((_, idx) => (
                    <img
                      key={idx}
                      src={`/photos/photo${idx + 1}.jpg`}
                      alt={`Family photo session in the park — Moss & Timber Photography, Langley & Surrey BC`}
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

            {/* Food & Business */}
            <section id="food" style={{ padding: '4rem 2rem', backgroundColor: '#2C3E2F', color: 'white' }}>
              <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#A88E7F', marginBottom: '1rem' }}>FOR LOCAL BUSINESS</p>
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 'normal' }}>Food &amp; products that look as good as they taste.</h2>
                  <p style={{ color: '#D4C5B9', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                    Moss &amp; Timber also shoots for Langley &amp; Surrey businesses — menu refreshes, delivery-app photos that actually sell the dish, and clean e-commerce product shots. Flat-rate sets, 48-hour turnaround, shot on location at your place.
                  </p>
                  <button onClick={goBooking} style={{ backgroundColor: '#A88E7F', color: 'white', border: 'none', padding: '1rem 2.5rem', fontSize: '1.05rem', cursor: 'pointer', borderRadius: '50px', fontFamily: 'inherit' }}>Ask about a business shoot</button>
                </div>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '1.5rem', borderRadius: '12px' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>The Menu Refresh</h3>
                    <p style={{ color: '#D4C5B9', fontSize: '0.95rem', lineHeight: 1.6 }}>10 signature dishes, styled and shot at your restaurant. Made for menus, Instagram, and delivery apps.</p>
                  </div>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '1.5rem', borderRadius: '12px' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>The Product Set</h3>
                    <p style={{ color: '#D4C5B9', fontSize: '0.95rem', lineHeight: 1.6 }}>Clean, consistent product photography for your online shop — no more phone snaps on the counter.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Urgency */}
            <section style={{ backgroundColor: '#556B5F', color: 'white', padding: '4rem 2rem', textAlign: 'center' }}>
              <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', padding: '0.8rem 1.5rem', borderRadius: '30px', display: 'inline-block', marginBottom: '2rem', fontSize: '0.85rem', letterSpacing: '1px' }}>
                  FALL MINI SESSIONS 2026 · LIMITED WEEKEND SLOTS
                </div>
                <h2 style={{ fontSize: '2.8rem', marginBottom: '1rem', fontWeight: 'normal' }}>Once a year, the maples turn.</h2>
                <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.95 }}>Every fall we open a small number of weekend mini sessions across Langley &amp; Surrey — golden light, falling leaves, the whole thing. When the slots are gone, they’re gone until next year. Christmas minis run November through mid-December — reserve early enough that your gallery’s back in time for cards.</p>
                <button onClick={goBooking} style={{ backgroundColor: '#A88E7F', color: 'white', border: 'none', padding: '1rem 2.5rem', fontSize: '1.05rem', cursor: 'pointer', borderRadius: '50px', fontFamily: 'inherit' }}>Reserve my session</button>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" style={{ padding: '4rem 2rem', backgroundColor: '#F9F7F4' }}>
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <p style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#A88E7F', marginBottom: '1rem' }}>BEFORE YOU ASK</p>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', fontWeight: 'normal' }}>Questions families actually ask.</h2>

                <div style={{ display: 'grid', gap: '1rem' }}>
                  {faqItems.map((item, idx) => (
                    <div key={idx} style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #D4C5B9', overflow: 'hidden' }}>
                      <button onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)} style={{ width: '100%', padding: '1.5rem', border: 'none', backgroundColor: 'transparent', textAlign: 'left', cursor: 'pointer', fontSize: '1rem', fontFamily: 'inherit', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#2C3E2F' }}>
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

            {/* Waitlist */}
            <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <p style={{ fontSize: '0.85rem', letterSpacing: '2px', color: '#A88E7F', marginBottom: '1rem' }}>FIRST TO KNOW</p>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem', fontWeight: 'normal' }}>Get first dibs on new dates</h2>
              <p style={{ color: '#666', marginBottom: '2rem', fontSize: '1rem' }}>Fall slots go to the waitlist before anyone else. Join free — no spam, just first pick of new dates in your city.</p>
              {waitlistStatus === 'done' ? (
                <div style={{ backgroundColor: '#F9F7F4', border: '1px solid #A88E7F', padding: '2rem', borderRadius: '12px', maxWidth: '500px', margin: '0 auto' }}>
                  <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>You’re on the list.</p>
                  <p style={{ color: '#666', fontSize: '0.95rem' }}>We’ll email you the moment new dates open in {waitlist.city}.</p>
                </div>
              ) : (
                <form onSubmit={submitWaitlist} style={{ maxWidth: '500px', margin: '0 auto', display: 'grid', gap: '1rem', textAlign: 'left' }}>
                  <input type="text" required placeholder="Your name" value={waitlist.name} onChange={(e) => setWaitlist({ ...waitlist, name: e.target.value })}
                    style={{ padding: '0.9rem 1.2rem', borderRadius: '12px', border: '1px solid #D4C5B9', fontSize: '1rem', fontFamily: 'inherit', backgroundColor: 'white', color: '#2C3E2F' }} />
                  <input type="email" required placeholder="Email address" value={waitlist.email} onChange={(e) => setWaitlist({ ...waitlist, email: e.target.value })}
                    style={{ padding: '0.9rem 1.2rem', borderRadius: '12px', border: '1px solid #D4C5B9', fontSize: '1rem', fontFamily: 'inherit', backgroundColor: 'white', color: '#2C3E2F' }} />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <select value={waitlist.city} onChange={(e) => setWaitlist({ ...waitlist, city: e.target.value })}
                      style={{ padding: '0.9rem 1.2rem', borderRadius: '12px', border: '1px solid #D4C5B9', fontSize: '1rem', fontFamily: 'inherit', backgroundColor: 'white', color: '#2C3E2F' }}>
                      <option>Langley</option>
                      <option>Surrey</option>
                      <option>Elsewhere in the Lower Mainland</option>
                    </select>
                    <select value={waitlist.how} onChange={(e) => setWaitlist({ ...waitlist, how: e.target.value })}
                      style={{ padding: '0.9rem 1.2rem', borderRadius: '12px', border: '1px solid #D4C5B9', fontSize: '1rem', fontFamily: 'inherit', backgroundColor: 'white', color: '#2C3E2F' }}>
                      <option>Facebook</option>
                      <option>Instagram</option>
                      <option>Google</option>
                      <option>Friend or family</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button type="submit" disabled={waitlistStatus === 'sending'}
                    style={{ backgroundColor: '#A88E7F', color: 'white', border: 'none', padding: '1rem 2.5rem', fontSize: '1.05rem', cursor: 'pointer', borderRadius: '50px', fontFamily: 'inherit', opacity: waitlistStatus === 'sending' ? 0.7 : 1 }}>
                    {waitlistStatus === 'sending' ? 'Joining…' : 'Join the waitlist'}
                  </button>
                  {waitlistStatus === 'error' && (
                    <p style={{ color: '#a33', fontSize: '0.95rem', textAlign: 'center' }}>Something went wrong — please try again, or email mosstimberco@gmail.com.</p>
                  )}
                </form>
              )}
            </section>

            {/* Footer */}
            <section style={{ backgroundColor: '#556B5F', color: '#C4B5A8', padding: '3rem 2rem', textAlign: 'center' }}>
              <p style={{ marginBottom: '1rem' }}>Langley &amp; Surrey, BC</p>
              <button onClick={goBooking} style={{ backgroundColor: 'transparent', color: '#C4B5A8', border: '1px solid #C4B5A8', padding: '0.8rem 1.5rem', fontSize: '0.95rem', cursor: 'pointer', borderRadius: '50px', fontFamily: 'inherit', marginBottom: '2rem' }}>Get in Touch</button>
              <p style={{ fontSize: '0.9rem' }}>© 2026 Moss &amp; Timber Photography. All rights reserved.</p>
            </section>
          </>
        )}

        {currentPage === 'booking' && (
          <section style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto', minHeight: '100vh' }}>
            <button onClick={() => setCurrentPage('home')} style={{ background: 'none', border: 'none', color: '#A88E7F', cursor: 'pointer', fontSize: '1rem', marginBottom: '2rem', fontFamily: 'inherit' }}>← Back</button>

            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontWeight: 'normal' }}>Pick your time</h2>
              <p style={{ color: '#666', marginBottom: '2rem' }}>Reserve your session — it’s free. Choose a slot below; we’ll confirm by email with your exact meeting spot and prep tips.</p>

              <iframe
                src="https://calendly.com/mosstimberco/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                width="100%"
                height="700"
                frameBorder="0"
                style={{ borderRadius: '12px', marginBottom: '2rem' }}
                title="Book your Moss & Timber photo session"
              />

              <div style={{ backgroundColor: '#F9F7F4', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem', borderLeft: '3px solid #A88E7F' }}>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>Booking is free — no card, no deposit. You’ll only ever pay if you love your gallery.</p>
              </div>
            </div>
          </section>
        )}

      </div>
    </>
  );
}
