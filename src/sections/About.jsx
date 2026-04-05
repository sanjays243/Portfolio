import { motion } from 'framer-motion';
import './About.css';
import { Code, Terminal, Database, Palette } from 'lucide-react';

const cards = [
    { icon: <Code size={32} />, title: "Frontend", desc: "React, Vue, Tailwind" },
    { icon: <Terminal size={32} />, title: "Backend", desc: "Node.js, Express, Python" },
    { icon: <Database size={32} />, title: "Database", desc: "MongoDB, PostgreSQL, SQL" },
    { icon: <Palette size={32} />, title: "Design", desc: "Figma, UI/UX Principles" },
];

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <motion.h2 
                    className="section-title heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    About <span>Me</span>
                </motion.h2>

                <div className="about-content">
                    <motion.div 
                        className="about-text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-gradient-animate">I'm Sanjay, a passionate Full Stack Developer</h3>
                        <p>
                            Hello! I'm Sanjay S, a passionate and creative web developer with expertise in building modern, responsive, and user-friendly websites and web applications. I specialize in both frontend and backend technologies, including HTML, CSS, JavaScript, and backend frameworks. I also work with design tools like Figma to ensure visually appealing interfaces.
                        </p>
                        <p>
                            My goal is to create seamless digital experiences that are secure, fast, and accessible across all devices. I enjoy solving problems, turning ideas into functional solutions, and continuously learning new technologies to stay ahead in the ever-evolving world of web development.
                        </p>

                        <div className="about-stats">
                            {[
                                { val: "3+", label: "Years Experience" },
                                { val: "50+", label: "Projects Completed" },
                                { val: "15+", label: "Happy Clients" }
                            ].map((stat, i) => (
                                <motion.div 
                                    key={i} 
                                    className="stat"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 + 0.5 }}
                                >
                                    <h4>{stat.val}</h4>
                                    <p>{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="about-cards">
                        {cards.map((card, idx) => (
                            <motion.div 
                                key={idx} 
                                className="about-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.05, translateY: -5 }}
                            >
                                <div className="card-icon">{card.icon}</div>
                                <h4>{card.title}</h4>
                                <p>{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
