import { useEffect, useState } from 'react';
import { FaLaptopCode, FaPaintBrush, FaServer } from 'react-icons/fa';

interface TimelineEvent {
    year: string;
    title: string;
    description: string;
}

interface Skill {
    name: string;
    level: number;
}

const AboutPage = () => {
    const [isContentVisible, setIsContentVisible] = useState(false);

    useEffect(() => {
        setIsContentVisible(true);
    }, []);

    const timeline: TimelineEvent[] = [
        {
            year: '2023 - Present',
            title: 'Senior Developer at Tech Company',
            description: 'Leading development of cutting-edge web applications using React and Next.js.'
        },
        {
            year: '2020 - 2023',
            title: 'Full Stack Developer at Software Agency',
            description: 'Built responsive web applications and REST APIs for enterprise clients.'
        },
        {
            year: '2018 - 2020',
            title: 'Frontend Developer at Startup',
            description: 'Developed interactive user interfaces and improved UX for various platforms.'
        },
        {
            year: '2016 - 2018',
            title: 'Computer Science Degree',
            description: 'Graduated with honors, specializing in web technologies and algorithms.'
        }
    ];

    const skills: Record<string, Skill[]> = {
        frontend: [
            { name: 'React', level: 95 },
            { name: 'TypeScript', level: 90 },
            { name: 'Next.js', level: 85 },
            { name: 'TailwindCSS', level: 95 }
        ],
        backend: [
            { name: 'Node.js', level: 85 },
            { name: 'Express', level: 80 },
            { name: 'MongoDB', level: 75 },
            { name: 'GraphQL', level: 70 }
        ],
        design: [
            { name: 'Figma', level: 80 },
            { name: 'UI/UX', level: 85 },
            { name: 'Animation', level: 75 },
            { name: 'Responsive Design', level: 90 }
        ]
    };

    return (
        <div className="container mx-auto px-4 py-24 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left column - Photo and basic info */}
                <div
                    className={`md:col-span-5 lg:col-span-4 transition-all duration-1000 ${isContentVisible
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-16'
                        }`}
                >
                    <div className="sticky top-24 glass-effect rounded-lg overflow-hidden neon-border">
                        <div className="relative aspect-square overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-[#0a0a16]/80 to-[#1a1a36]/80 flex items-center justify-center text-8xl">
                                👨‍💻
                            </div>
                        </div>
                        <div className="p-6 text-center">
                            <h2 className="text-2xl font-bold mb-2">Your Name</h2>
                            <h3 className="text-lg text-gray-300 mb-4">Software Developer</h3>
                            <div className="flex justify-center space-x-4 text-gray-300">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#00ffff]">5+</div>
                                    <div className="text-sm">Years<br />Experience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#ff00ff]">20+</div>
                                    <div className="text-sm">Projects<br />Completed</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#ffff00]">10+</div>
                                    <div className="text-sm">Happy<br />Clients</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right column - Content */}
                <div
                    className={`md:col-span-7 lg:col-span-8 transition-all duration-1000 delay-300 ${isContentVisible
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-16'
                        }`}
                >
                    {/* About me section */}
                    <div className="glass-effect rounded-lg p-8 mb-8">
                        <h1 className="text-4xl font-bold mb-6">About Me</h1>
                        <div className="prose prose-invert max-w-none prose-a:text-[#00ffff] hover:prose-a:text-[#ff00ff]">
                            <p>
                                Hello! I'm a passionate software developer with over 5 years of experience in building modern web applications. 
                                I specialize in frontend technologies like React and Next.js, but I also have a solid understanding of backend development with Node.js and Express.
                            </p>
                            <p>
                                My journey in tech started with a degree in Computer Science, where I developed a strong foundation in algorithms and data structures. 
                                Since then, I've worked on various projects ranging from small startups to large enterprises, always striving to deliver high-quality code and exceptional user experiences.
                            </p>
                            <p>
                                When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing my knowledge through blog posts and tutorials.
                            </p>
                        </div>
                    </div>

                    {/* Skills section */}
                    <div className="glass-effect rounded-lg p-8 mb-8 reveal-on-scroll">
                        <h2 className="text-3xl font-bold mb-6">Skills</h2>

                        <div className="mb-8">
                            <div className="flex items-center mb-4">
                                <FaLaptopCode className="text-[#00ffff] mr-3" size={24} />
                                <h3 className="text-xl font-semibold">Frontend</h3>
                            </div>
                            <div className="space-y-4">
                                {skills.frontend.map(skill => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-1">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-[#00ffff] to-[#ff00ff]"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-center mb-4">
                                <FaServer className="text-[#ff00ff] mr-3" size={24} />
                                <h3 className="text-xl font-semibold">Backend</h3>
                            </div>
                            <div className="space-y-4">
                                {skills.backend.map(skill => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-1">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-[#ff00ff] to-[#ffff00]"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center mb-4">
                                <FaPaintBrush className="text-[#ffff00] mr-3" size={24} />
                                <h3 className="text-xl font-semibold">Design</h3>
                            </div>
                            <div className="space-y-4">
                                {skills.design.map(skill => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-1">
                                            <span>{skill.name}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-[#ffff00] to-[#00ffff]"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Timeline section */}
                    <div className="glass-effect rounded-lg p-8 reveal-on-scroll">
                        <h2 className="text-3xl font-bold mb-6">Experience</h2>

                        <div className="relative border-l-2 border-white/20 pl-8 pb-8">
                            {timeline.map((event, index) => (
                                <div
                                    key={index}
                                    className="mb-8 last:mb-0 relative"
                                >
                                    <div className="absolute -left-10 w-5 h-5 rounded-full bg-gradient-to-r from-[#00ffff] to-[#ff00ff]"></div>
                                    <div className="text-[#00ffff] text-sm mb-1">{event.year}</div>
                                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                    <p className="text-gray-300">{event.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;