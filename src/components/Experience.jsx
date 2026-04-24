import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Junior Flutter Developer',
    company: '5 Dimensions Company',
    location: 'Remote / On-site',
    period: 'Dec 2024 – Present',
    type: 'Full-time',
    description: 'Spearheading the development of production-ready mobile applications, focusing on scalable architecture and real-time features.',
    achievements: [
      'Developed and maintained the "The Reader App" social e-commerce platform.',
      'Contributed to the "One Talent" e-learning application development.',
      'Implemented BLoC for efficient and predictable state management.',
      'Integrated REST APIs and real-time SignalR services.',
    ],
  },
  {
    title: 'Flutter Developer Intern',
    company: '5 Dimensions Company',
    location: 'On-site',
    period: 'Aug 2024 – Dec 2024',
    type: 'Internship',
    description: 'Mastered professional Flutter development workflows and Clean Architecture principles under senior mentorship.',
    achievements: [
      'Built core UI components for "The Reader App".',
      'Assisted in integrating Firebase services and bug fixing.',
      'Refined technical skills in Dart and mobile UI patterns.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" style={{ background: 'var(--bg-color)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '400px', background: 'var(--primary-color)', opacity: 0.03, filter: 'blur(120px)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container">
        <div style={{ marginBottom: '4rem' }}>
          <span className="section-label">My Journey</span>
          <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '3rem' }} className="timeline-container">
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: '11px', top: 0, bottom: 0, width: '2px', background: 'rgba(255,255,255,0.07)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                style={{ position: 'relative' }}
              >
                {/* Dot */}
                <div style={{
                  position: 'absolute',
                  left: '-2.75rem',
                  top: '1.75rem',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'var(--bg-color)',
                  border: '3px solid var(--primary-color)',
                  boxShadow: '0 0 16px rgba(0,122,255,0.5)',
                }} />

                <div className="glass-card exp-card" style={{ padding: '2.5rem' }}>
                  {/* Header */}
                  <div className="exp-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.5rem' }}>{exp.title}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-color)', fontWeight: 600 }}>
                        <Briefcase size={15} /> {exp.company}
                      </div>
                    </div>
                    <div className="exp-meta" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '0.3rem 0.75rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.07)' }}>
                        <Calendar size={13} /> {exp.period}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        <MapPin size={13} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                    {exp.description}
                  </p>

                  <div className="exp-achievements" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    {exp.achievements.map((ach, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                        <div style={{ marginTop: '7px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-color)', flexShrink: 0 }} />
                        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{ach}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience h2 { font-size: 2.2rem !important; }
          .exp-card { padding: 1.5rem !important; }
          .exp-meta { alignItems: flex-start !important; }
          .exp-achievements { grid-template-columns: 1fr !important; }
          .timeline-container { paddingLeft: 2rem !important; }
          .timeline-container > div:first-child { left: 7px !important; }
          .timeline-container div[style*="left: -2.75rem"] { left: -1.85rem !important; width: 18px !important; height: 18px !important; top: 1.6rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
