import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    }); const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulating form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
        }, 1500);
    };

    return (
        <div className="container mx-auto px-4 py-24 max-w-6xl">
            <div className="text-center mb-16 reveal-on-scroll">
                <h1 className="text-5xl font-bold mb-6">Contact Me</h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Let's get in touch! Fill out the form below or reach out through any of the provided contact methods.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Contact info */}
                <div className="md:col-span-5 reveal-on-scroll">
                    <div className="glass-effect rounded-lg p-8 neon-border">
                        <h2 className="text-3xl font-bold mb-6">Contact Info</h2>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-white/10 p-3 rounded-full mr-4">
                                    <FaEnvelope className="text-[#00ffff]" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                                    <a href="mailto:your.email@example.com" className="text-gray-300 hover:text-[#00ffff] transition-colors">
                                        your.email@example.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-white/10 p-3 rounded-full mr-4">
                                    <FaPhone className="text-[#ff00ff]" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                                    <a href="tel:+15551234567" className="text-gray-300 hover:text-[#ff00ff] transition-colors">
                                        +1 (555) 123-4567
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-white/10 p-3 rounded-full mr-4">
                                    <FaMapMarkerAlt className="text-[#ffff00]" size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                                    <p className="text-gray-300">
                                        San Francisco, CA
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                            <div className="flex space-x-4">
                                <a
                                    href="https://github.com/evilbocchi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 p-3 rounded-full text-gray-300 hover:text-[#00ffff] hover:scale-110 transition-all"
                                    aria-label="GitHub"
                                >
                                    <FaGithub size={24} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/zhongjunjieelton"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 p-3 rounded-full text-gray-300 hover:text-[#ff00ff] hover:scale-110 transition-all"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none mt-10 text-sm opacity-80">
                            <p>
                                Feel free to reach out for any inquiries, collaborations, or just to say hello! I look forward to hearing from you.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact form */}
                <div className="md:col-span-7 reveal-on-scroll">
                    <div className="glass-effect rounded-lg p-8">
                        <h2 className="text-3xl font-bold mb-6">Send Me a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent transition-all"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent transition-all"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent transition-all"
                                    placeholder="Project Inquiry"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={6}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00ffff] focus:border-transparent transition-all"
                                    placeholder="Your message here..."
                                    required
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="relative neon-border glass-effect py-3 px-6 text-center font-semibold text-white group overflow-hidden w-full sm:w-auto"
                                >
                                    <span className="relative z-10 group-hover:text-white transition-colors">
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-[#00ffff] to-[#ff00ff] opacity-0 group-hover:opacity-20 transition-opacity"></span>
                                </button>

                                {submitSuccess && (
                                    <p className="mt-4 text-green-400">
                                        Your message has been sent successfully. I'll get back to you soon!
                                    </p>
                                )}

                                {submitError && (
                                    <p className="mt-4 text-red-400">
                                        {submitError}
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;