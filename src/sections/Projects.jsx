import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import jobPortalImg from '../assets/Online-job-portal.jpg';
import coursePortalImg from '../assets/online-courses-portal.jpg';
import smartCareerImg from '../assets/smart-career-development.jpg';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Online Job Portal',
            desc: 'Developed a job portal with structured listings and secure form validation. Added advanced filtering by job type, salary, and skills to improve search accuracy and user experience.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            color: 'var(--accent-primary)',
            image: jobPortalImg,
            demoLink: 'https://sanjays243.github.io/online-job-portal/',
            sourceLink: 'https://github.com/sanjays243/online-job-portal'
        },
        {
            title: 'Online Course Portal',
            desc: 'Built a responsive course exploration application with cross-device compatibility and accessibility support. Implemented real-time search and performance optimizations to improve speed and user experience.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            color: 'var(--accent-secondary)',
            image: coursePortalImg,
            demoLink: 'https://sanjays243.github.io/online-course-portal/',
            sourceLink: 'https://github.com/sanjays243/online-course-portal'
        },
        {
            title: 'Smart Career Development System',
            desc: 'Developed a career coaching platform with resume tools, ATS checks, and mock interviews for complete job preparation. Improved user engagement by adding real-time feedback and personalized user experience features.',
            tech: ['React', 'OpenAI API', 'Express', 'JWT'],
            color: '#10b981',
            image: smartCareerImg,
            demoLink: 'https://sanjays243.github.io/Smart-Career-Development-System/',
            sourceLink: 'https://github.com/sanjays243/Smart-Career-Development-System'
        },
        {
            title: 'AI-Based Faculty Performance Prediction System',
            desc: 'An AI-powered application designed to analyze and predict faculty performance using machine learning. Features interactive dashboards and insightful metrics to assist academic administration.',
            tech: ['React', 'Machine Learning', 'Python'],
            color: '#8b5cf6',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
            demoLink: 'https://ai-based-faculty-performance-predic.vercel.app/',
            sourceLink: 'https://github.com/sanjays243'
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Featured <span>Projects</span>
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((proj, idx) => (
                        <motion.div 
                            key={idx} 
                            className="project-card"
                            style={{ '--project-color': proj.color }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-content">
                                <div className="project-image" style={{ background: `linear-gradient(45deg, ${proj.color}20, ${proj.color}40)` }}>
                                    <img src={proj.image} alt={proj.title} />
                                    <div className="project-smoke"></div>
                                </div>
                                <div className="project-info">
                                    <h3>{proj.title}</h3>
                                    <p>{proj.desc}</p>

                                    <div className="tech-stack">
                                        {proj.tech.map(t => (
                                            <span key={t} className="tech-tag">{t}</span>
                                        ))}
                                    </div>

                                    <div className="project-links">
                                        <a href={proj.demoLink} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink size={18} /> Live Demo
                                        </a>
                                        <a href={proj.sourceLink} target="_blank" rel="noopener noreferrer">
                                            <Github size={18} /> Source
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
