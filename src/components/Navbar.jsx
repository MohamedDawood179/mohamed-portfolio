import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 100,
    padding: isScrolled ? '0.75rem 0' : '1.5rem 0',
    transition: 'padding 0.4s',
  };

  const innerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: 'rgba(5,5,5,0.85)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '1.25rem',
    padding: '0.875rem 1.75rem',
  };

  const linkStyle = { fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-secondary)', transition: 'color 0.2s', cursor: 'pointer' };

  return (
    <nav style={navStyle}>
      <div className="container">
        <div style={innerStyle}>
          {/* Logo */}
          <a href="#" style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.04em', fontFamily: 'Outfit, sans-serif' }}>
            MAD<span style={{ color: 'var(--primary-color)' }}>.</span>
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                style={linkStyle}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="primary-gradient"
              style={{ padding: '0.6rem 1.4rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 700, transition: 'transform 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-toggle"
            style={{ color: '#fff', display: 'none' }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            style={{ position: 'absolute', top: '100%', left: 0, width: '100%', padding: '0.75rem 1.25rem' }}
          >
            <div style={{ background: 'rgba(10,10,10,0.95)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '1.25rem', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {navLinks.map(link => (
                <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)} className="primary-gradient" style={{ textAlign: 'center', padding: '0.9rem', borderRadius: '0.875rem', fontWeight: 700 }}>
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
