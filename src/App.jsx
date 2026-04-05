import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  useEffect(() => {
    // ScrollReveal is now handled by Framer Motion in sections, 
    // but we can keep it as a fallback or remove if fully transitioned.
  }, []);

  return (
    <div className="app-container">
      <div className="grid-overlay"></div>
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
