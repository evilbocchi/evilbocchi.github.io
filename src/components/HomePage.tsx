import { useEffect, useRef, useState } from 'react';
import PassionEffortPlot from './PassionEffortPlot';

const HomePage = () => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const backgroundRef = useRef<HTMLImageElement>(null);
    const logoRef = useRef<HTMLImageElement>(null);
    const logoPaddingRef = useRef<HTMLDivElement>(null);

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
        <div className={`min-h-screen relative duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <img
                ref={backgroundRef}
                src="/mood.jpg"
                alt="Background"
                className={`fixed top-0 left-0 w-full h-[110vh] object-cover transition-opacity duration-1000 parallax-element ${imageLoaded ? 'opacity-30' : 'opacity-0'}`}
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

            <div ref={logoPaddingRef} className='duration-1000'></div>

            <div className="grid grid-cols-4 gap-0 scaffold-top-offset">
                <div className="scaffold">
                    <div className="scaffold-spacing"></div>
                </div>
                <div className="scaffold"></div>
                <div className="scaffold"></div>
                <div className="scaffold"></div>

                <div className="scaffold"></div>
                <div className="scaffold"></div>
                <div className="scaffold">
                    <h1 className='mix-blend-difference'>Who Am I?</h1>
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
                <div className="scaffold">
                    <h1 className='mix-blend-difference'>What I Build</h1>
                    <h2>JME</h2>
                    <blockquote className='italic font-cursive text-center'>
                        Build your money-making empire. Uncover the world of Obbysia.
                    </blockquote>
                    <p>
                        JME is an immersive Roblox game where players create and expand their
                        own virtual empires. Designed for replayability and community engagement,
                        JME blends tycoon mechanics with unique challenges and a vibrant world.
                    </p>
                    <b>Highlights:</b>
                    <ul>
                        <li><b>1M+ visits</b> and hundreds of thousands of unique players</li>
                        <li>Built with Lua, TypeScript, and Roblox Studio</li>
                        <li>Features continuous updates, new content, and community-driven improvements</li>
                        <li>Automated CI/CD pipeline using GitHub Actions for stable releases</li>
                        <li>Open-source with a welcoming contributor community</li>
                    </ul>
                    <p><b>Tech Stack:</b> Lua, TypeScript, Roblox Studio</p>
                    <b>What I Did:</b>
                    <ul>
                        <li>Led end-to-end development: game design, scripting, UI/UX, deployment, and updates</li>
                        <li>Implemented core gameplay mechanics and progression systems</li>
                        <li>Managed community feedback and integrated feature requests</li>
                        <li>Maintained code quality and project stability with automated workflows</li>
                    </ul>
                    <a href="https://github.com/evilbocchi/jme" className="text-blue-500 hover:underline">View on GitHub</a>
                    <div className='scaffold-spacing'></div>
                </div>
                <div className="scaffold">
                    <h1 className='mix-blend-difference'>Other Projects</h1>
                    <ul>
                        <li>
                            <a href='https://github.com/Unreal-Works/monsters-awakening'>Monsters Awakening</a>: An innovative Roblox game featuring dungeons and monsters, featuring unique mechanics and engaging gameplay.
                        </li>
                        <li>
                            <a href='https://github.com/evilbocchi/alyanum'>AlyaNum</a>: A big number library for Lua beating every other competitor in performance, yet has an easy-to-use API.
                        </li>
                        <li>
                            <a href='https://github.com/Unreal-Works/thenilworld'>thenilworld</a>: An upcoming open-world RPG game on Roblox, featuring a world full of lore, quests, and adventures. Currently in development.
                        </li>
                    </ul>
                </div>
                <div className="scaffold"></div>

                <div className="scaffold"></div>
                <div className="scaffold"></div>
                <div className="scaffold">
                    <h1 className='mix-blend-difference'>What I Use</h1>
                    <p>
                        I love using tools that enhance my workflow and creativity. Here are some of my favorites:
                    </p>
                    <ul>
                        <li>
                            <b>Programming Languages: </b>
                            Lua <img src='lua.png' alt='Lua Logo' className='inline-block align-text-bottom' />,
                            TypeScript <img src='typescript.png' alt='TypeScript Logo' className='inline-block align-text-bottom' />,
                            Python <img src='python.png' alt='Python Logo' className='inline-block align-text-bottom' />,
                            JavaScript <img src='javascript.png' alt='JavaScript Logo' className='inline-block align-text-bottom' />,
                            Java <img src='java.png' alt='Java Logo' className='inline-block align-text-bottom' />
                        </li>
                        <li>
                            <b>Game Development: </b>
                            Roblox Studio <img src='roblox_studio.png' alt='Roblox Studio Logo' className='inline-block align-text-bottom' />,
                            Rojo <img src='rojo.png' alt='Rojo Logo' className='inline-block align-text-bottom' />,
                            Godot <img src='godot.png' alt='Godot Logo' className='inline-block align-text-bottom' />,
                            Unity <img src='unity.png' alt='Unity Logo' className='inline-block align-text-bottom' />
                        </li>
                        <li>
                            <b>AI & Machine Learning: </b>
                            PyTorch <img src='pytorch.png' alt='PyTorch Logo' className='inline-block align-text-bottom' />,
                            TensorFlow <img src='tensorflow.png' alt='TensorFlow Logo' className='inline-block align-text-bottom' />,
                            scikit-learn <img src='scikit_learn.png' alt='scikit-learn Logo' className='inline-block align-text-bottom' />,
                            Pandas <img src='pandas.png' alt='Pandas Logo' className='inline-block align-text-bottom' />,
                            Matplotlib <img src='matplotlib.png' alt='Matplotlib Logo' className='inline-block align-text-bottom' />
                        </li>
                        <li>
                            <b>Web: </b>
                            React <img src='react.png' alt='React Logo' className='inline-block align-text-bottom' />,
                            Node.js <img src='nodejs.png' alt='Node.js Logo' className='inline-block align-text-bottom' />,
                            Vite <img src='vite.png' alt='Vite Logo' className='inline-block align-text-bottom' />,
                            Tailwind CSS <img src='tailwindcss.png' alt='Tailwind CSS Logo' className='inline-block align-text-bottom' />,
                            Express <img src='expressjs.png' alt='Express Logo' className='inline-block align-text-bottom' />
                        </li>
                        <li>
                            <b>DevOps & Tools: </b>
                            GitHub Actions <img src='github_actions.png' alt='GitHub Actions Logo' className='inline-block align-text-bottom' />,
                            Docker <img src='docker.png' alt='Docker Logo' className='inline-block align-text-bottom' />,
                            VS Code <img src='vscode.png' alt='VS Code Logo' className='inline-block align-text-bottom' />
                        </li>
                        <li>
                            <b>Databases: </b>
                            MySQL <img src='mysql.png' alt='MySQL Logo' className='inline-block align-text-bottom' />,
                            MongoDB <img src='mongodb.png' alt='MongoDB Logo' className='inline-block align-text-bottom' />,
                            NoSQL <img src='nosql.png' alt='NoSQL Logo' className='inline-block align-text-bottom' />
                        </li>
                        <li>
                            <b>Data Visualization: </b>
                            Plotly <img src='plotly.png' alt='Plotly Logo' className='inline-block align-text-bottom' />,
                            Tableau <img src='tableau.png' alt='Tableau Logo' className='inline-block align-text-bottom' />
                        </li>
                        <li>
                            <b>Other Tools: </b>
                            Canva <img src='canva.png' alt='Canva Logo' className='inline-block align-text-bottom' />,
                            Figma <img src='figma.png' alt='Figma Logo' className='inline-block align-text-bottom' />,
                            Blender <img src='blender.png' alt='Blender Logo' className='inline-block align-text-bottom' />,
                            OBS <img src='obs.png' alt='OBS Logo' className='inline-block align-text-bottom' />,
                            GIMP <img src='gimp.png' alt='GIMP Logo' className='inline-block align-text-bottom' />
                        </li>
                    </ul>
                </div>
                <div className="scaffold"></div>

                <div className="scaffold"></div>
                <div className="scaffold col-span-2">
                    <h1 className='mix-blend-difference'>Project Visualization</h1>
                    <p>
                        Here's an interactive visualization of my projects plotted by passion level and effort investment. 
                        Each point represents a project I've worked on, sized by impact and colored uniquely.
                    </p>
                    <PassionEffortPlot />
                    <div className='scaffold-spacing'></div>
                </div>
                <div className="scaffold"></div>

                <div className="scaffold"></div>
                <div className="scaffold">
                    <h1 className='mix-blend-difference'>Contact Me</h1>
                    <p>I'm always open to new projects, collaborations, or just a friendly chat about tech and games.</p>
                    <p>
                        You can reach me at:
                        <ul>
                            <li>Email: <a href="mailto:kunetics888@gmail.com">kunetics888@gmail.com</a></li>
                            <li>GitHub: <a href="https://github.com/evilbocchi">evilbocchi</a></li>
                            <li>Discord: <a href="https://discord.com/users/antivivi">antivivi</a></li>
                        </ul>
                    </p>
                    <div className='scaffold-spacing'></div>
                </div>
                <div className="scaffold"></div>
                <div className="scaffold"></div>

                <div className="scaffold"></div>
                <div className="scaffold"></div>
                <div className="scaffold">
                    <h1 className='mix-blend-difference'>Thanks for Visiting!</h1>
                    <p>
                        I hope you enjoyed learning about my work and projects. If you have any questions or just want to say hi, feel free to reach out!
                    </p>
                    <div className='scaffold-spacing'></div>
                </div>
                <div className="scaffold"></div>
            </div>
            <footer className="glass-effect border-t border-white /10 text-gray-400 py-6 text-center">
                <p>© {new Date().getFullYear()} evilbocchi. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;