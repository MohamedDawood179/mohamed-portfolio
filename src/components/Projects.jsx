import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, CheckCircle2, ChevronRight } from 'lucide-react';
import { Github } from './BrandIcons';

const projects = [
  {
    name: 'The Reader App',
    tag: '🏆 Live on Stores',
    description: 'A social reading platform combined with e-commerce, allowing users to discover, review, and purchase books seamlessly.',
    tech: ['Flutter', 'REST API', 'SignalR', 'BLoC', 'Firebase'],
    image: '/projects/readers_club.png',
    highlight: true,
    tagColor: '#007AFF',
    github: 'https://github.com/MohamedDawood179',
    live: 'https://apps.apple.com/eg/app/the-reader-%D8%A7%D9%84%D9%82%D8%A7%D8%B1%D8%A6/id6447383737',
    details: [
      'Built a social platform for readers with features like book tracking, reviews, and community interaction.',
      'Integrated Firebase Authentication (Google Sign-In) and Cloud Messaging.',
      'Implemented BLoC for scalable state management and performance optimization.',
      'Developed timeline, store, and notification systems to enhance user engagement.',
      'Consumed REST APIs for dynamic content and user activity.',
      'Currently Live on Google Play and App Store.'
    ]
  },
  {
    name: 'Phlex',
    tag: 'Graduation Project',
    description: 'AI-powered Physical Therapy app with computer vision for real-time exercise feedback and personalized recovery plans.',
    tech: ['Flutter', 'FastAPI', 'ML', 'Computer Vision'],
    image: '/projects/phlex.png',
    tagColor: '#10B981',
    github: 'https://github.com/MohamedDawood179',
    details: [
      'Graduation Project: AI-powered mobile app for personalized exercise plans and remote doctor guidance.',
      'Implemented computer vision to analyze patient movements and deliver real-time feedback with accuracy scores.',
      'Designed a recommendation system based on age, gender, body measurements, injury type, and fitness level.',
      'Developed scalable backend APIs using FastAPI and deployed them on Railway.',
      'Contributed as a core developer, implementing app settings and profile management (edit, logout, delete account).',
      'Built a notification system to improve user engagement and communication.',
      'Delivered full-featured app with multilingual support and customizable themes.'
    ]
  },
  {
    name: 'Tamredak',
    tag: 'MedTech',
    description: 'Nursing management system for hospitals to coordinate staff shifts, patient records, and real-time task tracking.',
    tech: ['Flutter', 'Clean Arch', 'REST API', 'WhatsApp'],
    image: '/projects/tamredak.png',
    tagColor: '#EC4899',
    github: 'https://github.com/MohamedDawood179',
    details: [
      'Developed a management system to handle nursing staff and patient care tasks.',
      'Implemented nurse management features (add, edit, delete, and real-time status tracking).',
      'Built task assignment functionality based on patient data.',
      'Integrated WhatsApp communication to share patient details with nurses.',
      'Designed task tracking with manager-controlled status updates.',
      'Created a transactions database to store tasks, patient data, and nurse information.',
      'Added support for uploading nurse timetables for scheduling and record-keeping.'
    ]
  },
  {
    name: 'Pettix',
    tag: 'Social & Adoption',
    description: 'A full-scale platform for pet adoption, connecting users with shelters, clinics, and emergency rescue teams.',
    tech: ['Flutter', 'Firebase', 'Maps', 'Payment'],
    image: '/projects/pettix.png',
    tagColor: '#F97316',
    github: 'https://github.com/MohamedDawood179',
    details: [
      'Full-scale Flutter application connecting users with shelters, clinics, charities, and emergency rescue teams.',
      'Built social timeline and real-time chat using Firebase.',
      'Integrated e-commerce store, clinics directory, and rescue system.',
      'Used BLoC, Provider, and GetX for scalable state management.',
      'Implemented REST APIs, push notifications, maps, and payment integration.',
      'Applied clean architecture and built complex responsive UI.'
    ]
  },
  {
    name: 'One Talent',
    tag: 'EdTech',
    description: 'E-learning application providing high-quality courses with interactive video players and progress tracking.',
    tech: ['Flutter', 'SignalR', 'BLoC', 'Clean Arch'],
    image: '/projects/one_talent.png',
    tagColor: '#6366f1',
    github: 'https://github.com/MohamedDawood179',
    details: [
      'Contributed as a core Flutter developer in building a full-featured e-learning mobile application.',
      'Developed a scalable architecture using Clean Architecture principles with BLoC state management.',
      'Built a course management system including course browsing, categories, search, and filtering.',
      'Implemented a video learning module for streaming educational content smoothly.',
      'Developed user authentication and profile management system.',
      'Integrated course enrollment and progress tracking system.',
      'Built a notification system to deliver updates and announcements.',
      'Consumed RESTful APIs for dynamic data handling and real-time synchronization.'
    ]
  },
];

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)',
        padding: '1.5rem',
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        style={{
          width: '100%', maxWidth: '800px',
          maxHeight: '90vh', overflowY: 'auto',
          background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '2rem', position: 'relative',
          boxShadow: '0 30px 100px rgba(0,0,0,0.8)',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header/Image */}
        <div style={{ position: 'relative', height: '300px' }}>
          <img src={project.image} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }} />
          <button onClick={onClose} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '2.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: project.tagColor, background: `${project.tagColor}15`, padding: '0.4rem 1rem', borderRadius: '999px', border: `1px solid ${project.tagColor}30`, display: 'inline-block', marginBottom: '1rem' }}>
                {project.tag}
              </span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>{project.name}</h2>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="glass-card" style={{ width: '46px', height: '46px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Github size={20} /></a>}
              {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="primary-gradient" style={{ padding: '0 1.5rem', height: '46px', borderRadius: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 700 }}><ExternalLink size={18} /> Live Demo</a>}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {project.tech.map(t => (
              <span key={t} style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.05)', padding: '0.4rem 1rem', borderRadius: '0.6rem' }}>{t}</span>
            ))}
          </div>

          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem' }}>Project Highlights</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {project.details.map((detail, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={18} style={{ color: project.tagColor, flexShrink: 0, marginTop: '4px' }} />
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index, onOpen }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(15,15,15,0.85)',
        backdropFilter: 'blur(16px)',
        border: project.highlight ? '1px solid rgba(0,122,255,0.5)' : '1px solid rgba(255,255,255,0.07)',
        borderRadius: '1.5rem',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: project.highlight ? '0 0 40px rgba(0,122,255,0.15)' : 'none',
        transition: 'all 0.3s',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
        <img
          src={project.image}
          alt={project.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s', transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s',
        }}>
          <button
            onClick={() => onOpen(project)}
            style={{ padding: '0.8rem 1.8rem', borderRadius: '1rem', background: '#fff', color: '#000', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', border: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            Project Details <ChevronRight size={18} />
          </button>
        </div>
        <div style={{
          position: 'absolute', top: '1rem', left: '1rem',
          background: project.highlight ? 'var(--primary-color)' : 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)',
          color: '#fff',
          fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '0.3rem 0.75rem', borderRadius: '999px',
        }}>
          {project.tag}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.875rem' }}>
          {project.tech.slice(0, 3).map(t => (
            <span key={t} style={{ fontSize: '0.62rem', fontWeight: 700, color: 'var(--primary-color)', border: '1px solid rgba(0,122,255,0.3)', padding: '0.2rem 0.6rem', borderRadius: '0.4rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{t}</span>
          ))}
          {project.tech.length > 3 && <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>+{project.tech.length - 3} more</span>}
        </div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>{project.name}</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7, flex: 1, marginBottom: '1.5rem' }}>{project.description}</p>
        
        <button
          onClick={() => onOpen(project)}
          style={{ width: '100%', padding: '0.75rem', borderRadius: '0.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
        >
          Explore Case Study
        </button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" style={{ background: 'var(--bg-color)' }}>
      <div className="container">
        <div style={{ marginBottom: '4rem' }}>
          <span className="section-label">Featured Work</span>
          <h2 style={{ fontSize: '3rem', fontWeight: 800 }}>
            Building Digital <span className="text-gradient">Experiences</span>
          </h2>
        </div>
        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'start' }}>
          {projects.map((p, i) => <ProjectCard key={p.name} project={p} index={i} onOpen={setSelectedProject} />)}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          #projects h2 { font-size: 2.2rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
