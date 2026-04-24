import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Send } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '7rem', paddingBottom: '4rem', overflow: 'hidden', position: 'relative' }}>

      {/* Background glow blobs */}
      <div style={{ position: 'absolute', top: '20%', right: '5%', width: '500px', height: '500px', background: 'var(--primary-color)', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.07, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '400px', height: '400px', background: 'var(--accent-color)', borderRadius: '50%', filter: 'blur(150px)', opacity: 0.07, pointerEvents: 'none' }} />

      <div className="container" style={{ width: '100%' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

          {/* Left: Text */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              style={{
                display: 'inline-block',
                padding: '0.375rem 1rem',
                borderRadius: '999px',
                border: '1px solid rgba(0,122,255,0.4)',
                background: 'rgba(0,122,255,0.1)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--primary-color)',
                marginBottom: '2rem',
              }}
            >
              ✦ Available for New Projects
            </motion.span>

            <h1 style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1.25rem' }}>
              Mohamed<br />
              <span className="text-gradient">Ashraf</span> Dawood
            </h1>

            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '1.5rem' }}>
              Flutter Developer
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: '480px', marginBottom: '3rem' }}>
              Building scalable, high-performance mobile applications with Flutter. Specialized in Clean Architecture and pixel-perfect UIs.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }} className="hero-btns">
              <a href="#projects" className="primary-gradient" style={{
                padding: '0.9rem 2rem', borderRadius: '1rem', fontWeight: 700, fontSize: '0.95rem',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                boxShadow: '0 8px 32px rgba(0,122,255,0.35)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,122,255,0.5)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,122,255,0.35)'; }}
              >
                View Projects <ChevronRight size={18} />
              </a>
              <a href="Mohamed_Dawood_CV.pdf" download style={{
                padding: '0.9rem 2rem', borderRadius: '1rem', fontWeight: 700, fontSize: '0.95rem',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                border: '1px solid rgba(255,255,255,0.12)', color: '#fff',
                transition: 'background 0.2s, border-color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              >
                <Download size={18} /> Download CV
              </a>
              <a href="#contact" style={{
                padding: '0.9rem 2rem', borderRadius: '1rem', fontWeight: 700, fontSize: '0.95rem',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                border: '1px solid rgba(255,255,255,0.12)', color: '#fff',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              >
                <Send size={18} /> Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
            className="photo-wrapper"
          >
            {/* Glow ring behind photo */}
            <div style={{ position: 'absolute', inset: '-20px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))', filter: 'blur(40px)', opacity: 0.25 }} />

            <div style={{
              position: 'relative', zIndex: 1,
              width: '380px', height: '420px',
              borderRadius: '2.5rem',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
            }} className="photo-container">
              <img
                src="profile.jpg"
                alt="Mohamed Ashraf Dawood"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                onError={e => { e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800'; }}
              />
              {/* Gradient overlay at bottom */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }} />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="glass-card badge-flutter"
              style={{ position: 'absolute', top: '18%', right: '-10px', padding: '0.6rem 1.1rem', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', zIndex: 2 }}
            >
              💙 Flutter
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="glass-card badge-bloc"
              style={{ position: 'absolute', bottom: '22%', left: '-20px', padding: '0.6rem 1.1rem', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', zIndex: 2 }}
            >
              📦 BLoC
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
              className="glass-card badge-firebase"
              style={{ position: 'absolute', bottom: '8%', right: '5%', padding: '0.6rem 1.1rem', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', zIndex: 2 }}
            >
              🔥 Firebase
            </motion.div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 4rem !important; text-align: center; }
          .hero-grid > div { display: flex; flex-direction: column; align-items: center; }
          .hero-grid p { margin-left: auto !important; margin-right: auto !important; }
          .hero-btns { justify-content: center; }
          .photo-container { width: 300px !important; height: 340px !important; }
          .badge-flutter { top: 10% !important; right: 0 !important; }
          .badge-bloc { bottom: 15% !important; left: 0 !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
