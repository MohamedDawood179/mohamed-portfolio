import React from 'react';
import { motion } from 'framer-motion';
import { Award, Smartphone, ShoppingBag, Star } from 'lucide-react';

const Achievements = () => (
  <section id="achievements" style={{ background: 'var(--surface-color)', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: 0, right: 0, width: '500px', height: '500px', background: 'var(--primary-color)', opacity: 0.04, filter: 'blur(120px)', borderRadius: '50%', pointerEvents: 'none' }} />

    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span className="section-label" style={{ color: 'var(--accent-color)' }}>Milestones</span>
        <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>
          Major <span className="text-gradient">Achievements</span>
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-card"
        style={{ padding: '3.5rem', position: 'relative', overflow: 'hidden' }}
      >
        <div className="achievements-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

          {/* Left */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,122,255,0.12)', border: '1px solid rgba(0,122,255,0.3)', color: 'var(--primary-color)', fontSize: '0.75rem', fontWeight: 700, padding: '0.4rem 1rem', borderRadius: '999px', marginBottom: '1.5rem' }}>
              <Award size={14} /> Featured Achievement
            </div>

            <h3 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Readers Club is <span style={{ color: 'var(--primary-color)' }}>Live</span> on App Stores
            </h3>

            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1rem' }}>
              Successfully launched a social reading & e-commerce platform that has reached thousands of real users — available on both iOS and Android.
            </p>

            {/* Store badges */}
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              {[
                { icon: <Smartphone size={22} />, store: 'App Store', sub: 'Available for iOS', href: 'https://apps.apple.com/eg/app/the-reader-%D8%A7%D9%84%D9%82%D8%A7%D8%B1%D8%A6/id6447383737' },
                { icon: <ShoppingBag size={22} />, store: 'Google Play', sub: 'Available for Android', href: 'https://play.google.com/store/search?q=the%20reader&c=apps&hl=en' },
              ].map(({ icon, store, sub, href }) => (
                <a key={store} href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', textDecoration: 'none' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)' }}>
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>{store}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{sub}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2.5rem' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
              ))}
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>Highly rated by users</span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://apps.apple.com/eg/app/the-reader-%D8%A7%D9%84%D9%82%D8%A7%D8%B1%D8%A6/id6447383737" target="_blank" rel="noopener noreferrer" style={{ padding: '0.85rem 1.75rem', borderRadius: '0.875rem', background: '#fff', color: '#000', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'opacity 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                <Smartphone size={17} /> Get App
              </a>
              <a href="#" style={{ padding: '0.85rem 1.75rem', borderRadius: '0.875rem', border: '1px solid rgba(255,255,255,0.12)', color: '#fff', fontWeight: 700, fontSize: '0.9rem', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                Case Study
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ scale: 0.92, rotate: 2 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
            className="achievement-img"
          >
            <div style={{ borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
              <img src="/projects/readers_club.png" alt="Readers Club" style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '120px', height: '120px', background: 'var(--accent-color)', borderRadius: '50%', filter: 'blur(60px)', opacity: 0.25 }} />
          </motion.div>
        </div>
      </motion.div>
    </div>

    <style>{`
      @media (max-width: 900px) {
        .achievements-inner { grid-template-columns: 1fr !important; gap: 3rem !important; }
        .achievement-img { order: -1; }
        #achievements h3 { font-size: 1.8rem !important; }
        #achievements h2 { font-size: 2.2rem !important; }
      }
    `}</style>
  </section>
);

export default Achievements;
