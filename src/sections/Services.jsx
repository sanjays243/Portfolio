import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Web Development",
            desc: "Building responsive, high-performance websites from the ground up tailored to your business goals and specifications.",
            color: "var(--accent-primary)"
        },
        {
            title: "Backend Architecture",
            desc: "Designing robust database schemas and developing secure, scalable APIs to power your data-driven applications.",
            color: "var(--accent-secondary)"
        },
        {
            title: "UI/UX Implementation",
            desc: "Translating modern design mockups into pixel-perfect, interactive frontend components with sleek animations.",
            color: "var(--text-primary)"
        }
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <motion.h2 
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    My <span>Services</span>
                </motion.h2>
                <div className="services-grid">
                    {services.map((service, idx) => (
                        <motion.div 
                            key={idx} 
                            className="service-card"
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
                        >
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
