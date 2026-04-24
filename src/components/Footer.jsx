import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  const links = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '3rem 0', background: 'var(--bg-color)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
          <div>
            <a href="#" style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.04em', fontFamily: 'Outfit, sans-serif' }}>
              MAD<span style={{ color: 'var(--primary-color)' }}>.</span>
            </a>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
              Building the future of mobile applications.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '2rem' }}>
            {links.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                {l}
              </a>
            ))}
          </div>

          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            © {year} Mohamed Ashraf Dawood. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
