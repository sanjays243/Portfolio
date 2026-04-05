import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme === 'dark' : true; // Default to dark as per current design
    });

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
            <div className={`icon-container ${isDark ? 'dark' : 'light'}`}>
                {isDark ? (
                    <Moon className="theme-icon moon" size={20} />
                ) : (
                    <Sun className="theme-icon sun" size={20} />
                )}
            </div>
        </button>
    );
};

export default ThemeToggle;
