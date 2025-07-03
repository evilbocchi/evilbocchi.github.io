import { useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    github: string;
    demo: string;
}

const ProjectsPage = () => {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [projects, setProjects] = useState<Project[]>([]);

    // Example projects - you would typically fetch these from an API or import from a local file
    useEffect(() => {
        // Sample data
        const sampleProjects: Project[] = [
            {
                id: 1,
                title: "AI-Powered Portfolio",
                description: "A dynamic portfolio website built with React, featuring vibrant design elements and animations.",
                tags: ["React", "TypeScript", "TailwindCSS"],
                image: "https://picsum.photos/800/600?random=1",
                github: "https://github.com/evilbocchi/portfolio",
                demo: "https://yourportfolio.com"
            },
            {
                id: 2,
                title: "E-commerce Platform",
                description: "A full-featured online shopping platform with user authentication and payment processing.",
                tags: ["Next.js", "MongoDB", "Stripe"],
                image: "https://picsum.photos/800/600?random=2",
                github: "https://github.com/evilbocchi/ecommerce",
                demo: "https://your-ecommerce.com"
            },
            {
                id: 3,
                title: "Task Management App",
                description: "A collaborative task management solution with real-time updates and team features.",
                tags: ["React", "Firebase", "Redux"],
                image: "https://picsum.photos/800/600?random=3",
                github: "https://github.com/evilbocchi/taskapp",
                demo: "https://your-taskapp.com"
            },
            {
                id: 4,
                title: "Weather Forecast Dashboard",
                description: "Interactive weather visualization with forecasting and historical data analysis.",
                tags: ["JavaScript", "D3.js", "API"],
                image: "https://picsum.photos/800/600?random=4",
                github: "https://github.com/evilbocchi/weather",
                demo: "https://your-weather.com"
            }
        ];

        setProjects(sampleProjects);
    }, []);

    // Filter projects based on selected tag
    const filteredProjects = selectedTag
        ? projects.filter(project => project.tags.includes(selectedTag))
        : projects;

    // Get all unique tags
    const allTags = Array.from(
        new Set(projects.flatMap(project => project.tags))
    );

    return (
        <div className="container mx-auto px-4 py-24 max-w-6xl">
            <div className="text-center mb-16 reveal-on-scroll">
                <h1 className="text-5xl font-bold mb-6">My Projects</h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Explore my recent works and creative solutions. Each project showcases different skills and technologies.
                </p>
            </div>

            {/* Tag filter */}
            <div className="mb-12 flex flex-wrap justify-center gap-3 reveal-on-scroll">
                <button
                    onClick={() => setSelectedTag(null)}
                    className={`px-4 py-2 rounded-full transition-all ${selectedTag === null
                            ? 'bg-gradient-to-r from-[#00ffff] to-[#ff00ff] text-white'
                            : 'glass-effect text-gray-300 hover:text-white'
                        }`}
                >
                    All
                </button>
                {allTags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`px-4 py-2 rounded-full transition-all ${selectedTag === tag
                                ? 'bg-gradient-to-r from-[#00ffff] to-[#ff00ff] text-white'
                                : 'glass-effect text-gray-300 hover:text-white'
                            }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProjects.map((project, index) => (
                    <div
                        key={project.id}
                        className="glass-effect rounded-lg overflow-hidden card-hover neon-border reveal-on-scroll"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="relative aspect-video overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white bg-black/50 p-2 rounded-full hover:bg-[#ff00ff]/80 transition-colors"
                                        aria-label="GitHub Repository"
                                    >
                                        <FaGithub size={20} />
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white bg-black/50 p-2 rounded-full hover:bg-[#00ffff]/80 transition-colors"
                                        aria-label="Live Demo"
                                    >
                                        <FaExternalLinkAlt size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className="text-xs px-3 py-1 rounded-full bg-white/10"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 glass-effect p-8 rounded-lg reveal-on-scroll">
                <h2 className="text-2xl font-bold mb-4">More Projects</h2>

            </div>
        </div>
    );
};

export default ProjectsPage;