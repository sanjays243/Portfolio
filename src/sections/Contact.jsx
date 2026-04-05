import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(null); // 'success' | 'error' | 'sending' | null

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    access_key: '3dc04b07-5f63-4f32-96e0-cc884319bb4c',
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    from_name: 'Portfolio Contact Form',
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
            setTimeout(() => setStatus(null), 5000);
        } catch (error) {
            console.error('Email Error:', error);
            setStatus('error');
            setTimeout(() => setStatus(null), 5000);
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Get In <span>Touch</span>
                </motion.h2>

                <motion.div
                    style={{ maxWidth: '600px', margin: '0 auto', background: 'var(--surface-color)', padding: '3rem', borderRadius: '1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={handleSubmit}>
                        <div style={{ display: 'flex', gap: '1.5rem' }}>
                            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={{ flex: 1, padding: '1rem', background: 'var(--bg-color)', border: '1px solid var(--surface-hover)', borderRadius: '0.5rem', color: 'var(--text-primary)', outline: 'none' }} />
                            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required style={{ flex: 1, padding: '1rem', background: 'var(--bg-color)', border: '1px solid var(--surface-hover)', borderRadius: '0.5rem', color: 'var(--text-primary)', outline: 'none' }} />
                        </div>

                        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required style={{ width: '100%', padding: '1rem', background: 'var(--bg-color)', border: '1px solid var(--surface-hover)', borderRadius: '0.5rem', color: 'var(--text-primary)', outline: 'none' }} />

                        <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required style={{ width: '100%', padding: '1rem', background: 'var(--bg-color)', border: '1px solid var(--surface-hover)', borderRadius: '0.5rem', color: 'var(--text-primary)', outline: 'none', resize: 'vertical' }}></textarea>

                        <button className="btn btn-primary" type="submit" disabled={status === 'sending'} style={{ width: '100%', marginTop: '1rem', padding: '1rem', opacity: status === 'sending' ? 0.7 : 1 }}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'} <Send size={20} />
                        </button>

                        {status === 'success' && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4ade80', fontSize: '0.9rem' }}>
                                <CheckCircle size={18} /> Message sent successfully! I'll get back to you soon.
                            </div>
                        )}
                        {status === 'error' && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f87171', fontSize: '0.9rem' }}>
                                <AlertCircle size={18} /> Failed to send. Please try again or email me directly.
                            </div>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
