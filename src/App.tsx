import { useEffect, useLayoutEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import GlitchySquares from './components/GlitchySquares';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import ProjectsPage from './components/ProjectsPage';
import SkillsPage from './components/SkillsPage';

// ScrollToTop component to scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

// Reveal animation on scroll
function RevealOnScroll() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.reveal-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
        };
    }, []);

    return null;
}

function App() {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setCursorPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <RevealOnScroll />
            <GlitchySquares cursorPosition={cursorPosition} />

            <div className="min-h-screen text-white noise-effect">
                <div className="animated-bg"></div>
                <div
                    className="pointer-events-none fixed top-0 left-0 w-full h-full z-10 opacity-50"
                    style={{
                        background: `radial-gradient(circle 200px at ${cursorPosition.x}px ${cursorPosition.y}px, 
            rgba(255, 0, 255, 0.15), transparent)`
                    }}
                ></div>
                <Navbar />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/skills" element={<SkillsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
