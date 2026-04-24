import React from 'react';
import { motion } from 'framer-motion';

const techCategories = [
  {
    title: 'Core & Architecture',
    skills: [
      { name: 'Flutter Development', level: 'Production-level', icon: '💙' },
      { name: 'Dart (Advanced OOP)', level: 'Expert', icon: '🎯' },
      { name: 'Clean Architecture', level: 'Expert', icon: '🏛️' },
      { name: 'Modular & Scalable Structure', level: 'Expert', icon: '📦' },
    ]
  },
  {
    title: 'State & Real-time',
    skills: [
      { name: 'BLoC / GetX', level: 'Expert', icon: '🔄' },
      { name: 'SignalR / Real-time', level: 'Advanced', icon: '📡' },
      { name: 'Push Notifications (FCM)', level: 'Advanced', icon: '🔔' },
      { name: 'Background Services', level: 'Advanced', icon: '⚙️' },
    ]
  },
  {
    title: 'Backend & Data',
    skills: [
      { name: 'Firebase Ecosystem', level: 'Advanced', icon: '🔥' },
      { name: 'RESTful APIs Integration', level: 'Expert', icon: '🌐' },
      { name: 'Local Storage (Hive/SP)', level: 'Expert', icon: '💾' },
      { name: 'Dependency Injection', level: 'Advanced', icon: '💉' },
    ]
  },
  {
    title: 'UI & Specialized',
    skills: [
      { name: 'Responsive & Adaptive UI', level: 'Expert', icon: '📱' },
      { name: 'Video Streaming/EdTech', level: 'Advanced', icon: '🎥' },
      { name: 'Complex Form Handling', level: 'Expert', icon: '📝' },
      { name: 'Performance Optimization', level: 'Advanced', icon: '⚡' },
    ]
  }
];

const softSkills = [
  { name: 'Problem Solving', icon: '🧩' },
  { name: 'Communication', icon: '🗣️' },
  { name: 'Adaptability', icon: '🌊' },
  { name: 'Time Management', icon: '⏰' },
  { name: 'Team Collaboration', icon: '🤝' },
];

const Skills = () => {
  return (
    <section id="skills" style={{ background: 'var(--surface-color)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span className="section-label">My Technical Arsenal</span>
          <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
        </div>

        {/* Tech Skills */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', marginBottom: '6rem' }}>
          {techCategories.map((cat, catIdx) => (
            <div key={cat.title}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--primary-color)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '24px', height: '2px', background: 'var(--primary-color)', borderRadius: '999px' }} />
                {cat.title}
              </h3>
              
              <div className="skills-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                {cat.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: (catIdx * 0.1) + (index * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="glass-card"
                    style={{
                      padding: '1.75rem 1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    <span style={{ fontSize: '2.2rem', marginBottom: '1rem', display: 'block' }}>
                      {skill.icon}
                    </span>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff', lineHeight: 1.3 }}>
                      {skill.name}
                    </h4>
                    <span style={{
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--primary-color)',
                      background: 'rgba(0,122,255,0.08)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '0.4rem',
                    }}>
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div style={{ padding: '4rem', borderRadius: '2.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff' }}>Soft Skills</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Essential skills for effective engineering and teamwork</p>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                style={{
                  padding: '1rem 2rem',
                  borderRadius: '1rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#fff',
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{skill.icon}</span>
                {skill.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
          #skills h2 { font-size: 2.2rem !important; }
          #skills div[style*="padding: 4rem"] { padding: 2rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
