import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <a href="#home" className="logo">
                            Sanjay<span>.</span>
                        </a>
                        <p className="footer-desc">
                            A full-stack developer dedicated to building robust and scalable web applications. Let's create something amazing together.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#projects">Projects</a></li>
                        </ul>
                    </div>

                    <div className="footer-socials">
                        <h3>Connect</h3>
                        <div className="social-icons">
                            <a href="#" aria-label="Github"><Github /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin /></a>
                            <a href="#" aria-label="Twitter"><Twitter /></a>
                            <a href="#contact" aria-label="Mail"><Mail /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Sanjay. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
