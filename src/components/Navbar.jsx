import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#home" className="logo">
                    Sanjay<span>.</span>
                </a>

                <div className="nav-right">
                    {/* Desktop Nav */}
                    <nav className="desktop-nav">
                        <ul className="nav-list">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="nav-link">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="nav-actions">
                        <ThemeToggle />
                        
                        {/* Mobile Nav Toggle */}
                        <button
                            className="mobile-toggle"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-nav-list">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="mobile-nav-link"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
