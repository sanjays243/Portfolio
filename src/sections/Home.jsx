import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg.jpg';
import cvPdf from '../assets/SANJAY S.pdf';
import './Home.css';

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="container home-container">
                <motion.div 
                    className="home-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.p 
                        className="greeting"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Hello, I'm
                    </motion.p>
                    <motion.h1 
                        className="name text-gradient-animate"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Sanjay
                    </motion.h1>
                    <motion.h3 
                        className="title-animated"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        And I'm a
                        <span className="type-text" style={{ '--i': 1 }} data-text="Full Stack Developer">Full Stack Developer</span>
                        <span className="type-text" style={{ '--i': 2 }} data-text="UI/UX Designer">UI/UX Designer</span>
                    </motion.h3>
                    <motion.p 
                        className="description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        I am a Full Stack Developer and UI/UX Designer with expertise in building dynamic, responsive, and scalable web applications. Skilled in both frontend and backend technologies, as well as user interface and experience design.
                    </motion.p>

                    <motion.div 
                        className="btn-group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <motion.a 
                            href="#projects" 
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05, translateY: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Work <ArrowRight size={20} />
                        </motion.a>
                        <motion.a 
                            href={cvPdf} 
                            download="Sanjay_CV.pdf" 
                            className="btn btn-outline"
                            whileHover={{ scale: 1.05, translateY: -3 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                            <Download size={20} /> Download CV
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="home-image"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, duration: 1, ease: "backOut" }}
                >
                    <div className="image-wrapper">
                        <motion.div 
                            className="glow-effect"
                            animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{ 
                                repeat: Infinity, 
                                duration: 4, 
                                ease: "easeInOut" 
                            }}
                        />
                        <img src={profileImg} alt="Sanjay Profile" className="profile-img" />
                    </div>
                </motion.div>
            </div>

            {/* Background decorations */}
            <div className="bg-shape shape-1"></div>
            <div className="bg-shape shape-2"></div>
            <div className="scroll-indicator">
                <motion.div 
                    className="mouse"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                />
            </div>
        </section>
    );
};

export default Home;
