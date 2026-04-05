import { motion } from 'framer-motion';
import { Blocks, Braces, Server, Layout, Database, GitBranch } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'React', level: 80, icon: <Blocks size={24} /> },
        { name: 'JavaScript', level: 85, icon: <Braces size={24} /> },
        { name: 'Node.js / Express', level: 80, icon: <Server size={24} /> },
        { name: 'HTML5 / CSS3', level: 95, icon: <Layout size={24} /> },
        { name: 'MongoDB / SQL', level: 75, icon: <Database size={24} /> },
        { name: 'Git', level: 70, icon: <GitBranch size={24} /> },
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <motion.h2 
                    className="section-title heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    My <span>Skills</span>
                </motion.h2>

                <div className="skills-grid">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            className="skill-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <div className="skill-info">
                                <div className="skill-name-wrapper">
                                    <div className="skill-icon">
                                        {skill.icon}
                                    </div>
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                                <span className="skill-percentage">{skill.level}%</span>
                            </div>
                            <div className="progress-bar-bg">
                                <motion.div
                                    className="progress-bar-fill"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
