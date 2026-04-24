import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const bullets = [
    { title: 'Scalable Architecture', desc: 'Implementing SOLID principles for future-proof apps.' },
    { title: 'Performance First', desc: 'Optimizing widget trees and memory usage.' },
    { title: 'Real-time Apps', desc: 'Expertise in Firebase and SignalR integrations.' },
    { title: 'UI/UX Mastery', desc: 'Translating complex designs into pixel-perfect code.' },
  ];

  return (
    <section id="about" style={{ background: 'var(--bg-color)' }}>
      <div className="container">
        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>

          {/* Left: Visual Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}
          >
            {/* Col 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '160px' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-color)', fontFamily: 'Outfit, sans-serif' }}>2+</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Years of Experience</span>
              </div>
              <div style={{ borderRadius: '1.5rem', overflow: 'hidden', height: '220px' }}>
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
                  alt="Code"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                />
              </div>
            </div>
            {/* Col 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }} className="about-col-2">
              <div style={{ borderRadius: '1.5rem', overflow: 'hidden', height: '390px' }}>
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
                  alt="Mobile"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">About Me</span>
            <h2 style={{ fontSize: '2.8rem', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.5rem' }}>
              Developing Apps that <span style={{ color: 'var(--primary-color)' }}>Inspire</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              With over 2 years of dedicated experience in Flutter development, I specialize in crafting robust, cross-platform mobile applications that prioritize performance and user experience.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              My approach is centered around <strong style={{ color: '#fff' }}>Clean Architecture</strong> and robust state management using <strong style={{ color: '#fff' }}>BLoC</strong>, ensuring every codebase is scalable, maintainable, and testable.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="about-bullets">
              {bullets.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{ marginTop: '6px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-color)', boxShadow: '0 0 10px var(--primary-color)', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .about-col-2 { margin-top: 0 !important; }
          .about-bullets { grid-template-columns: 1fr !important; }
          .about-grid h2 { font-size: 2.2rem !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
