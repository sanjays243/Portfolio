import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import './Chatbot.css';

// ✅ FREE AI - No API key needed! Smart local response system
const portfolioData = {
    skills: "Sanjay's skills include: React, JavaScript, Node.js, Express, MongoDB, HTML5, CSS3, UI/UX Design, Git, Figma, and Python.",
    projects: `Sanjay has built several impressive projects:\n\n1. **Online Job Portal** - React & Node.js based job listing platform with advanced filtering.\n2. **Online Course Portal** - Responsive course exploration app with real-time search.\n3. **Smart Career Development System** - AI-powered career coaching with resume tools, ATS checks, and mock interviews.`,
    experience: "Sanjay has 3+ years of experience as a Full Stack Developer, completed 50+ projects, and served 15+ happy clients.",
    contact: "You can reach Sanjay through:\n- Email: sanjays34310@gmail.com\n- GitHub: github.com/sanjays243\n- Or use the Contact form below!",
    about: "Sanjay S is a passionate Full Stack Developer and UI/UX Designer specializing in building modern, responsive, and user-friendly web applications.",
    education: "Sanjay is continuously learning and staying ahead in web development, with expertise in both frontend and backend technologies.",
    services: "Sanjay offers: Web Development, Backend Architecture, and UI/UX Implementation services.",
};

function getAIResponse(message) {
    const msg = message.toLowerCase().trim();

    if (msg.match(/hi|hello|hey|hloo|sup/)) {
        return "Hello! 👋 I'm Sanjay's AI assistant. You can ask me about his skills, projects, experience, or contact info!";
    }
    if (msg.match(/skill|tech|stack|language|tool|react|node|mongo|javascript|html|css|figma/)) {
        return portfolioData.skills;
    }
    if (msg.match(/project|work|portfolio|job portal|course|career|built|build|made/)) {
        return portfolioData.projects;
    }
    if (msg.match(/experience|year|client|how long|expert/)) {
        return portfolioData.experience;
    }
    if (msg.match(/contact|email|reach|hire|connect|github|linkedin/)) {
        return portfolioData.contact;
    }
    if (msg.match(/about|who|sanjay|tell me|introduce/)) {
        return portfolioData.about;
    }
    if (msg.match(/service|offer|do you do|provide|help/)) {
        return portfolioData.services;
    }
    if (msg.match(/education|study|learn|degree|college/)) {
        return portfolioData.education;
    }
    if (msg.match(/thank|thanks|ok|great|nice|cool|awesome/)) {
        return "You're welcome! 😊 Is there anything else you'd like to know about Sanjay?";
    }
    if (msg.match(/bye|goodbye|see you/)) {
        return "Goodbye! 👋 Feel free to come back anytime. You can also use the contact form to reach Sanjay directly!";
    }

    return "I can help you learn about Sanjay's **skills**, **projects**, **experience**, or **contact** info. What would you like to know?";
}

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! 👋 I'm Sanjay's AI assistant. Ask me about his skills, projects, experience, or how to contact him!", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userText = inputValue;
        const userMessage = { id: Date.now(), text: userText, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        // Simulate slight delay for natural feel
        setTimeout(() => {
            const reply = getAIResponse(userText);
            setMessages(prev => [
                ...prev,
                { id: Date.now() + 1, text: reply, sender: 'bot' }
            ]);
            setIsLoading(false);
        }, 600);
    };

    return (
        <div className="chatbot-container">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chat-window"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="chat-header">
                            <div className="bot-info">
                                <div className="bot-avatar">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <h4>Sanjay AI</h4>
                                    <span className="status">Online</span>
                                </div>
                            </div>
                            <button className="close-btn" onClick={() => setIsOpen(false)}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className="chat-messages">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`message ${msg.sender}`}>
                                    <div className="message-content">
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="message bot">
                                    <div className="message-content typing-indicator">
                                        <Loader2 size={16} className="spin" /> Thinking...
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <div className="chat-input">
                            <input
                                type="text"
                                placeholder="Ask about skills, projects..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            />
                            <button onClick={handleSend} disabled={isLoading}>
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                className="chat-bubble"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </motion.button>
        </div>
    );
};

export default Chatbot;
