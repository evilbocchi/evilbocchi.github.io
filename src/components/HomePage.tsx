import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);
    const backgroundRef = useRef<HTMLImageElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const logoPaddingRef = useRef<HTMLDivElement>(null);

    // Animation effect on mount
    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Function to adjust logo margin
    const adjustLogoPadding = () => {
        if (logoRef.current && logoPaddingRef.current) {
            logoPaddingRef.current.style.paddingTop = `${logoRef.current.offsetHeight}px`;
        }
    };

    // Parallax effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // const scrollY = window.scrollY;
            // if (profileRef.current) {
            //     profileRef.current.style.transform = `translate3d(0, ${scrollY * -0.05}px, 0)`;
            // }
            // if (textRef.current) {
            //     textRef.current.style.transform = `translate3d(0, ${scrollY * -0.05}px, 0)`;
            // }

            if (backgroundRef.current) {
                backgroundRef.current.style.transform = `translate3d(0, ${scrollY * -0.05}px, 0)`;
            }
            if (logoRef.current) {
                logoRef.current.style.transform = `translate3d(0, ${scrollY * -0.1}px, 0)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Handle resize and logo load
    useEffect(() => {
        const handleResize = () => {
            adjustLogoPadding();
        };

        // Add resize listener
        window.addEventListener('resize', handleResize);

        // Initial adjustment when component mounts
        adjustLogoPadding();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="min-h-screen relative">
            <img
                ref={backgroundRef}
                src="/mood.jpg"
                alt="Background"
                className={`fixed top-0 left-0 w-full h-[110vh] object-cover transition-opacity duration-1000 parallax-element ${imageLoaded ? 'opacity-50' : 'opacity-0'
                    }`}
                onLoad={() => setImageLoaded(true)}
            />

            {/* Glitch effect overlay */}
            <div className="absolute inset-0 z-0 bg-noise opacity-5"></div>

            <img
                ref={logoRef}
                src="/evilbocchi.png"
                alt="evilbocchi"
                className="fixed top-0 left-0 w-1/2 object-cover mix-blend-difference"
                onLoad={adjustLogoPadding}
            />

            <div ref={logoPaddingRef}></div>

            <div className="grid grid-cols-4 gap-0 scaffold-top-offset">
                <div className="scaffold">
                    <div className="scaffold-spacing"></div>
                </div>
                <div className="scaffold"></div>
                <div className="scaffold"></div>
                <div className="scaffold"></div>

                <div className="scaffold"></div>
                <div className="scaffold"></div>
                <div className="scaffold scaffold-glass">
                    <h1>Who Am I?</h1>
                    <p>
                        I'm an indie developer and AI enthusiast who loves building things that
                        blend creativity with code. Whether it's training neural networks,
                        visualizing data, or crafting immersive game worlds, I thrive on turning
                        ideas into interactive experiences.
                    </p>
                    <p>
                        My journey has taken me through:
                        <ul>
                            <li>AI & Machine Learning - Building models that predict, classify, and generate.</li>
                            <li>Game Development - Designing games played by hundreds of thousands, focusing on unique mechanics and player engagement.</li>
                            <li>Data Visualization - Making data come alive through dashboards and storytelling.</li>
                            <li>Full-Stack Projects - From backend logic to pixel-perfect UI/UX.</li>
                        </ul>
                    </p>
                    <p>
                        I believe in learning by doing, experimenting boldly, and sharing what I
                        discover. My projects are driven by curiosity and a desire to solve real
                        problems-or just making something fun.
                    </p>
                    <div className='scaffold-spacing'></div>
                </div>
                <div className="scaffold"></div>

                <div className="scaffold"></div>
                <div className="scaffold scaffold-glass">
                    <h1 className='scaffold-offset'>What I Build</h1>
                    <p className='scaffold-offset'>
                        <h2>JME</h2>
                        <blockquote>Build your money-making empire. Uncover the world of Obbysia.</blockquote>
                        <p>
                            JME is an immersive Roblox game where players create and expand their
                            own virtual empires. Designed for replayability and community engagement,
                            JME blends tycoon mechanics with unique challenges and a vibrant world.
                        </p>
                        <p>Highlights: </p>
                    </p>
                </div>
                <div className="scaffold"></div>
                <div className="scaffold"></div>

            </div>


            <div className='max-w-7/12 mx-auto mix-blend-difference'>

            </div>

            {/* Profile container with animated entrance */}
            <div
                ref={profileRef}
                className={`relative z-10 flex flex-col items-center transform transition-all duration-1000 mix-blend-container parallax-element ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`}
            >
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