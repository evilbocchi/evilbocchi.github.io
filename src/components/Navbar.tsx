import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#ff00ff]">
                                Portfolio
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link
                                to="/"
                                className={`relative px-4 py-2 text-sm font-medium group ${isActive('/') ? 'text-white' : 'text-gray-300'}`}
                            >
                                <span className="relative z-10">Home</span>
                                {isActive('/') && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ffff] to-[#ff00ff]"></span>
                                )}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                            <Link
                                to="/about"
                                className={`relative px-4 py-2 text-sm font-medium group ${isActive('/about') ? 'text-white' : 'text-gray-300'}`}
                            >
                                <span className="relative z-10">About</span>
                                {isActive('/about') && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ffff] to-[#ff00ff]"></span>
                                )}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                            <Link
                                to="/projects"
                                className={`relative px-4 py-2 text-sm font-medium group ${isActive('/projects') ? 'text-white' : 'text-gray-300'}`}
                            >
                                <span className="relative z-10">Projects</span>
                                {isActive('/projects') && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ffff] to-[#ff00ff]"></span>
                                )}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] transition-all duration-300 group-hover:w-full"></span>
                            </Link>              <Link
                                to="/skills"
                                className={`relative px-4 py-2 text-sm font-medium group ${isActive('/skills') ? 'text-white' : 'text-gray-300'}`}
                            >
                                <span className="relative z-10">Skills</span>
                                {isActive('/skills') && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ffff] to-[#ff00ff]"></span>
                                )}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                            <Link
                                to="/contact"
                                className={`relative px-4 py-2 text-sm font-medium group ${isActive('/contact') ? 'text-white' : 'text-gray-300'}`}
                            >
                                <span className="relative z-10">Contact</span>
                                {isActive('/contact') && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ffff] to-[#ff00ff]"></span>
                                )}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </div>
                    </div>          <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-[#00ffff] to-[#ff00ff] text-white focus:outline-none"
                            aria-expanded="false"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 glass-effect backdrop-blur-lg border-t border-white/10 animate-fade-in-down">
                    <div className="px-4 pt-2 pb-4 space-y-2">
                        <Link
                            to="/"
                            className={`block px-4 py-3 rounded-md text-base font-medium transition-all ${isActive('/') ? 'bg-white/10 text-white' : 'hover:bg-white/5'}`}
                            onClick={toggleMenu}
                        >
                            <div className="flex items-center space-x-2">
                                <span className="h-5 w-0.5 bg-gradient-to-b from-[#00ffff] to-[#ff00ff]"></span>
                                <span>Home</span>
                            </div>
                        </Link>
                        <Link
                            to="/about"
                            className={`block px-4 py-3 rounded-md text-base font-medium transition-all ${isActive('/about') ? 'bg-white/10 text-white' : 'hover:bg-white/5'}`}
                            onClick={toggleMenu}
                        >
                            <div className="flex items-center space-x-2">
                                <span className="h-5 w-0.5 bg-gradient-to-b from-[#00ffff] to-[#ff00ff]"></span>
                                <span>About</span>
                            </div>
                        </Link>
                        <Link
                            to="/projects"
                            className={`block px-4 py-3 rounded-md text-base font-medium transition-all ${isActive('/projects') ? 'bg-white/10 text-white' : 'hover:bg-white/5'}`}
                            onClick={toggleMenu}
                        >
                            <div className="flex items-center space-x-2">
                                <span className="h-5 w-0.5 bg-gradient-to-b from-[#00ffff] to-[#ff00ff]"></span>
                                <span>Projects</span>
                            </div>
                        </Link>
                        <Link
                            to="/skills"
                            className={`block px-4 py-3 rounded-md text-base font-medium transition-all ${isActive('/skills') ? 'bg-white/10 text-white' : 'hover:bg-white/5'}`}
                            onClick={toggleMenu}
                        >
                            <div className="flex items-center space-x-2">
                                <span className="h-5 w-0.5 bg-gradient-to-b from-[#00ffff] to-[#ff00ff]"></span>
                                <span>Skills</span>
                            </div>
                        </Link>            <Link
                            to="/contact"
                            className={`block px-4 py-3 rounded-md text-base font-medium transition-all ${isActive('/contact') ? 'bg-white/10 text-white' : 'hover:bg-white/5'}`}
                            onClick={toggleMenu}
                        >
                            <div className="flex items-center space-x-2">
                                <span className="h-5 w-0.5 bg-gradient-to-b from-[#00ffff] to-[#ff00ff]"></span>
                                <span>Contact</span>
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;