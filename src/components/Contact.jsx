import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Github, Linkedin, Facebook } from './BrandIcons';

const contactInfo = [
  { icon: <Phone size={20} />, label: 'Phone', value: '01025143723', href: 'tel:01025143723' },
  { icon: <Mail size={20} />, label: 'Email', value: 'mohameddawood17919@gmail.com', href: 'mailto:mohameddawood17919@gmail.com' },
  { icon: <MapPin size={20} />, label: 'Location', value: 'Kafr El Sheikh, Egypt', href: null },
];

const socials = [
  { icon: <Github size={20} />, href: 'https://github.com/MohamedDawood179', label: 'GitHub' },
  { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/mohamed-dawood-a0a2a4253?utm_source=share_via&utm_content=profile&utm_medium=member_ios', label: 'LinkedIn' },
  { icon: <Facebook size={20} />, href: 'https://www.facebook.com/share/1K2KTw9ckC/?mibextid=wwXIfr', label: 'Facebook' },
];

const Contact = () => {
  return (
    <section id="contact" style={{ background: 'var(--bg-color)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: '0', right: '0', width: '400px', height: '400px', background: 'var(--primary-color)', opacity: 0.05, filter: 'blur(120px)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">Get In Touch</span>
          <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>
            Let's Start a <span className="text-gradient">Project</span> Together
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0 auto' }}>
            I'm currently available for new opportunities. Feel free to reach out via any of the following channels.
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="contact-info-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
            {contactInfo.map(({ icon, label, value, href }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card"
                style={{ padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(0,122,255,0.1)', border: '1px solid rgba(0,122,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', marginBottom: '1.25rem' }}>
                  {icon}
                </div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{label}</div>
                {href ? (
                  <a href={href} style={{ fontSize: '1rem', fontWeight: 600, color: '#fff', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--primary-color)'}
                    onMouseLeave={e => e.currentTarget.style.color = '#fff'}>
                    {value}
                  </a>
                ) : (
                  <span style={{ fontSize: '1rem', fontWeight: 600 }}>{value}</span>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '3rem' }}
          >
            <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Connect on Social Media</div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              {socials.map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary-color)'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .contact-info-grid { grid-template-columns: 1fr !important; }
          #contact h2 { font-size: 2.2rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
