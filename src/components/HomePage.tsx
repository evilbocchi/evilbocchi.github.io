import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    // Animation effect on mount
    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Parallax effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (profileRef.current) {
                profileRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
            }
            if (textRef.current) {
                textRef.current.style.transform = `translateY(${scrollY * 0.1}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero section with colorful dynamic background */}
            <div className="flex-grow flex flex-col items-center justify-center px-4 py-24 relative overflow-hidden">
                {/* Animated colorful circles in background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute top-[-30%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#ff00ff] opacity-20 blur-[100px] animate-float"></div>
                    <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#00ffff] opacity-20 blur-[100px] animate-float-delay"></div>
                    <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-[#ffff00] opacity-15 blur-[120px] animate-float-slow"></div>

                    {/* Animated lines */}
                    <svg className="absolute inset-0 w-full h-full z-0 opacity-30" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#lineGradient)" strokeWidth="1">
                            <animate attributeName="strokeDashoffset" from="0" to="1000" dur="20s" repeatCount="indefinite" />
                        </line>
                        <line x1="100%" y1="0" x2="0" y2="100%" stroke="url(#lineGradient)" strokeWidth="1">
                            <animate attributeName="strokeDashoffset" from="1000" to="0" dur="20s" repeatCount="indefinite" />
                        </line>
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#00ffff" />
                                <stop offset="100%" stopColor="#ff00ff" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Glitch effect overlay */}
                <div className="absolute inset-0 z-0 bg-noise opacity-5"></div>

                {/* Profile container with animated entrance */}
                <div
                    ref={profileRef}
                    className={`z-10 flex flex-col items-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                        }`}
                >
                    {/* Profile avatar with glowing border */}
                    <div className="w-40 h-40 rounded-full mb-8 overflow-hidden neon-border relative">
                        {/* Replace with your profile photo */}
                        <div className="w-full h-full bg-gradient-to-br from-[#0a0a16] to-[#1a1a36] flex items-center justify-center text-5xl">
                            👨‍💻
                        </div>
                    </div>

                    <div ref={textRef} className="text-center">
                        <h1 className="text-6xl font-bold mb-4 text-center relative inline-block">
                            <span className="relative z-10">Your Name</span>
                        </h1>

                        <h2 className="text-2xl mb-6 text-center font-light relative z-10 glitch-text" data-text="Software Developer">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] via-[#ff00ff] to-[#ffff00]">
                                Software Developer
                            </span>
                        </h2>

                        <p className="max-w-lg text-center text-gray-200 mb-10 relative z-10 opacity-80 text-lg">
                            Welcome to my portfolio! I specialize in building modern web applications with React, TypeScript, and other cutting-edge technologies.
                        </p>
                    </div>

                    {/* Social icons with hover effect */}
                    <div className="flex gap-6 mb-12 relative z-10">
                        <a
                            href="https://github.com/evilbocchi"
                            className="text-3xl text-gray-300 hover:text-[#00ffff] transition-all duration-300 hover:scale-125"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/zhongjunjieelton"
                            className="text-3xl text-gray-300 hover:text-[#ff00ff] transition-all duration-300 hover:scale-125"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                    </div>

                    {/* Call to action buttons with neon hover effect */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl mt-2">
                        <Link
                            to="/about"
                            className="relative neon-border glass-effect py-3 px-6 text-center font-semibold text-white group overflow-hidden"
                        >
                            <span className="relative z-10 group-hover:text-white transition-colors">About Me</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] opacity-0 group-hover:opacity-20 transition-opacity"></span>
                        </Link>
                        <Link
                            to="/projects"
                            className="relative neon-border glass-effect py-3 px-6 text-center font-semibold text-white group overflow-hidden"
                        >
                            <span className="relative z-10 group-hover:text-white transition-colors">View Projects</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#ffff00] opacity-0 group-hover:opacity-20 transition-opacity"></span>
                        </Link>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-70">
                        <span className="text-sm mb-2">Scroll Down</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Tech stack section */}
            <div className="py-16 px-4 relative overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center reveal-on-scroll">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#ff00ff]">
                            Tech Stack
                        </span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 reveal-on-scroll">
                        {[
                            "React", "TypeScript", "Next.js", "Node.js",
                            "TailwindCSS", "GraphQL", "MongoDB", "AWS"
                        ].map((tech, index) => (
                            <div
                                key={tech}
                                className="glass-effect p-4 aspect-square flex items-center justify-center text-center card-hover reveal-on-scroll"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <span className="font-medium text-lg">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <footer className="glass-effect border-t border-white/10 text-gray-400 py-6 text-center">
                <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;