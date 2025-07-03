import { useEffect, useState } from 'react';

interface Skill {
    name: string;
    icon: string;
    level: number;
    color: string;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

const SkillsPage = () => {
    const [activeCategory, setActiveCategory] = useState('technical');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const skillCategories: Record<string, SkillCategory> = {
        technical: {
            title: "Technical Skills",
            skills: [
                { name: "React", icon: "⚛️", level: 95, color: "#61DAFB" },
                { name: "TypeScript", icon: "TS", level: 90, color: "#3178C6" },
                { name: "JavaScript", icon: "JS", level: 95, color: "#F7DF1E" },
                { name: "Node.js", icon: "🟢", level: 85, color: "#339933" },
                { name: "HTML5", icon: "🌐", level: 98, color: "#E34F26" },
                { name: "CSS3", icon: "🎨", level: 92, color: "#1572B6" },
                { name: "Next.js", icon: "▲", level: 85, color: "#ffffff" },
                { name: "GraphQL", icon: "◮", level: 80, color: "#E535AB" },
                { name: "Redux", icon: "🔄", level: 85, color: "#764ABC" },
                { name: "TailwindCSS", icon: "💨", level: 90, color: "#38B2AC" },
                { name: "MongoDB", icon: "🍃", level: 80, color: "#47A248" },
                { name: "PostgreSQL", icon: "🐘", level: 75, color: "#336791" }
            ]
        },
        tools: {
            title: "Tools & Platforms",
            skills: [
                { name: "Git", icon: "🔀", level: 90, color: "#F05032" },
                { name: "Docker", icon: "🐳", level: 80, color: "#2496ED" },
                { name: "AWS", icon: "☁️", level: 75, color: "#FF9900" },
                { name: "Firebase", icon: "🔥", level: 85, color: "#FFCA28" },
                { name: "VS Code", icon: "📝", level: 95, color: "#007ACC" },
                { name: "Figma", icon: "🎭", level: 80, color: "#F24E1E" },
                { name: "GitHub", icon: "🐙", level: 95, color: "#ffffff" },
                { name: "Webpack", icon: "📦", level: 75, color: "#8DD6F9" },
                { name: "Vercel", icon: "▲", level: 85, color: "#ffffff" },
                { name: "Jest", icon: "🃏", level: 85, color: "#C21325" },
                { name: "Netlify", icon: "🌐", level: 85, color: "#00C7B7" },
                { name: "npm", icon: "📦", level: 90, color: "#CB3837" }
            ]
        },
        soft: {
            title: "Soft Skills",
            skills: [
                { name: "Teamwork", icon: "👥", level: 95, color: "#00FFFF" },
                { name: "Communication", icon: "💬", level: 90, color: "#FF00FF" },
                { name: "Problem Solving", icon: "🧩", level: 95, color: "#FFFF00" },
                { name: "Time Management", icon: "⏰", level: 85, color: "#00FFFF" },
                { name: "Adaptability", icon: "🌊", level: 90, color: "#FF00FF" },
                { name: "Leadership", icon: "👑", level: 85, color: "#FFFF00" },
                { name: "Critical Thinking", icon: "🧠", level: 90, color: "#00FFFF" },
                { name: "Creativity", icon: "🎨", level: 90, color: "#FF00FF" }
            ]
        }
    };

    return (
        <div className="container mx-auto px-4 py-24 max-w-6xl">
            <div className="text-center mb-16 reveal-on-scroll">
                <h1 className="text-5xl font-bold mb-6">My Skills</h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    I've worked with a variety of technologies and tools throughout my career.
                    Here's an overview of my technical expertise and professional skills.
                </p>
            </div>

            {/* Category tabs */}
            <div className="flex justify-center mb-12 reveal-on-scroll">
                <div className="glass-effect rounded-full flex p-1">
                    {Object.keys(skillCategories).map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full transition-all font-medium ${activeCategory === category
                                    ? 'bg-gradient-to-r from-[#00ffff] to-[#ff00ff] text-white'
                                    : 'hover:text-white'
                                }`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Skills grid */}
            <div
                className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
            >
                <h2 className="text-3xl font-bold mb-8 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] to-[#ff00ff]">
                        {skillCategories[activeCategory].title}
                    </span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
                    {skillCategories[activeCategory].skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="glass-effect rounded-lg p-6 flex flex-col items-center card-hover reveal-on-scroll"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl"
                                style={{
                                    background: `linear-gradient(45deg, ${skill.color}40, transparent)`,
                                    border: `2px solid ${skill.color}80`
                                }}
                            >
                                {skill.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-3">{skill.name}</h3>
                            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mt-auto">
                                <div
                                    className="h-full"
                                    style={{
                                        width: `${skill.level}%`,
                                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`
                                    }}
                                ></div>
                            </div>
                            <div className="w-full flex justify-between mt-2 text-sm">
                                <span>Beginner</span>
                                <span className="font-medium">{skill.level}%</span>
                                <span>Expert</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Additional content from markdown */}
            <div className="glass-effect rounded-lg p-8 reveal-on-scroll">
                <h2 className="text-2xl font-bold mb-6">Additional Skills & Certifications</h2>
                <div className="prose prose-invert max-w-none prose-headings:text-[#00ffff]">

                </div>
            </div>
        </div>
    );
};

export default SkillsPage;