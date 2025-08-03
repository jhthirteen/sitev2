import { useState } from 'react'
import ConnectEdDemo from '../assets/ConnectEdDemo.mp4'
import exCalendar from '../assets/exCalendar.png'
import xv6_1 from '../assets/xv61.png'
import xv6_2 from '../assets/xv62.png'
import TechTag from './TechTag'
import ConnectEdCover from '../assets/frankCover.jpeg'
import exCalendarCover from '../assets/mathCover.jpeg'
import policy from '../assets/policyCover.jpeg'
import xv6Cover from '../assets/osCover.jpg'

const Projects = () => {
    const [activeCard, setActiveCard] = useState(null);

    const projects = [
        {
            id: 1,
            title: "AI Powered Music Recommender",
            period: "2024",
            description: "I tackled this project because I love music, and simultaneously wanted to learn more about some more advanced topics in web development. The site is mainly a wrapper of the APIs provided by OpenAI, Spotify, and LastFM. Users can type an artist, song, or mood for a playlist into a search bar, and cards with artist or song names, with images and descriptions are automatically rendered for the user to look through.",
            technologies: [
                { name: "React", color: "bg-[#61DBFB]" },
                { name: "JavaScript", color: "bg-[#F0DB4F]" },
                { name: "HTML", color: "bg-[#E34C26]" },
                { name: "TailwindCSS", color: "bg-[#06B6D4]" },
                { name: "LLMs", color: "bg-[#00B48C]" }
            ],
            coverImage: ConnectEdCover,
            media: { type: "video", src: ConnectEdDemo },
            gradient: "from-blue-500 to-purple-600",
            year: "2024"
        },
        {
            id: 2,
            title: "Google Calendar Sync Tool",
            period: "2024",
            description: "Binghamton University uses the software D2L Brightspace to host classes. Every class hosts its assignments on the site, and there is a nice built in calendar that shows when everything is due. However, being a person who relies on Google Calendar to stay organized with my every-day life, having two important dates and deadlines cluttered across two different calendar applications was annoying, and led to me missing assignment due dates on multiple occasions. This tool automates the process of syncing data from Brightspace Classes to Google Calendar by parsing a .ics calendar file to find assignments linked to classes, creates new Assignment objects, and adds any non-duplicate ones to our calendar instantaneously through Google's API.",
            technologies: [
                { name: "Python", color: "bg-[#4B8BBE]" },
                { name: "APIs", color: "bg-[#8B0000]" },
                { name: "Google Calendar", color: "bg-[#228B22]" }
            ],
            coverImage: exCalendarCover,
            media: { type: "image", src: exCalendar },
            gradient: "from-green-500 to-blue-500",
            year: "2024"
        },
        {
            id: 3,
            title: "Microsoft Word .docx Parser",
            period: "2024",
            description: "As an intern at FoxPointe solutions, I noticed how time consuming it could be to manually search through an Organization's policies to find references to a specific security control. I wanted to start a personal project that would optimize this, operating under the assumption that we could use specific keywords to limit the search space. I created a lightweight Python program that allows a user to automate this search process for a command line specified set of keywords across multiple .docx files. When run, the user is prompted with a simple Graphical User Interface that contains a search bar, asking for the keywords to search for.",
            technologies: [
                { name: "Python", color: "bg-[#4B8BBE]" },
                { name: "Tkinter", color: "bg-[#015523]" },
                { name: "XML", color: "bg-[#B965E1]" }
            ],
            coverImage: policy,
            media: null,
            gradient: "from-purple-500 to-pink-500",
            year: "2024"
        },
        {
            id: 4,
            title: "xv6 Kernel Modifications",
            period: "2024",
            description: "For my Operating Systems class, everyone in the class was randomly divided into teams of 4 for a semester long project. Given the xv6 Operating System's Code Base, which is roughly 9,000 - 10,000 lines of C code, we had to make a series of modifications to add functionality that is seen in typical Linux distributions. First, we were tasked with locating and understanding the code and processes to implement a system call. Then, our teams were tasked with developing some custom system calls ourselves.",
            technologies: [
                { name: "C", color: "bg-[#004482]" },
                { name: "OS Programming", color: "bg-[#720090]" },
                { name: "System Calls", color: "bg-[#F47430]" }
            ],
            coverImage: xv6Cover,
            media: { type: "images", src: [xv6_1, xv6_2] },
            gradient: "from-red-500 to-orange-500",
            year: "2024"
        }
    ];

    const handleCardClick = (e, projectId) => {
        // Don't toggle if clicking on video or other interactive elements
        if (e.target.tagName === 'VIDEO' || e.target.closest('video')) {
            return;
        }
        setActiveCard(activeCard === projectId ? null : projectId);
    };

    return (
        <div className="w-screen min-h-screen py-12">
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    height: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #0ea5e9;
                    border-radius: 10px;
                    transition: background 0.3s ease;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #0284c7;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:active {
                    background: #0369a1;
                }
            `}</style>

            {/* Timeline Container */}
            <div className="relative w-full">
                {/* Horizontal scroll container */}
                <div className="overflow-x-auto pb-8 custom-scrollbar">
                    <div className="flex space-x-12 min-w-max px-8">
                        {projects.map((project, index) => (
                            <div key={project.id} className="relative flex flex-col items-center">
                                {/* Timeline dot */}
                                <div className="relative">
                                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${project.gradient} border-4 border-white shadow-lg z-10 relative`}></div>
                                </div>
                                
                                {/* Year label */}
                                <div className="mt-2 mb-4">
                                    <span className="text-sm font-semibold opacity-60 bg-black/10 dark:bg-white/10 px-2 py-1 rounded-full">
                                        {project.year}
                                    </span>
                                </div>

                                {/* Project card */}
                                <div 
                                    className={`w-[500px] bg-black/10 dark:bg-white/10 border border-current/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden ${
                                        activeCard === project.id ? 'ring-2 ring-sky-500 scale-105' : ''
                                    }`}
                                    onClick={(e) => handleCardClick(e, project.id)}
                                >
                                    {/* Cover image at the top */}
                                    <div className="w-full h-48 overflow-hidden">
                                        <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover" />
                                    </div>

                                    <div className="p-6">
                                        {/* Header */}
                                        <div className="mb-4">
                                            <h3 className="text-2xl font-bold mb-2">
                                                {project.title}
                                            </h3>
                                            
                                            {/* Technology tags */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <TechTag key={techIndex} name={tech.name} color={tech.color} />
                                                ))}
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <div className={`transition-all duration-300 overflow-hidden ${
                                            activeCard === project.id ? 'max-h-96 opacity-100' : 'max-h-20 opacity-75'
                                        }`}>
                                            <p className="text-sm leading-relaxed opacity-90">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Media content (only when expanded) */}
                                        {activeCard === project.id && project.media && (
                                            <div className="mt-4" onClick={(e) => e.stopPropagation()}>
                                                {project.media.type === "video" && (
                                                    <video controls className="w-full rounded-lg">
                                                        <source src={project.media.src} type="video/mp4"/>
                                                    </video>
                                                )}
                                                {project.media.type === "image" && (
                                                    <img src={project.media.src} alt={project.title} className="w-full rounded-lg" />
                                                )}
                                                {project.media.type === "images" && (
                                                    <div className="space-y-4">
                                                        {project.media.src.map((img, imgIndex) => (
                                                            <img key={imgIndex} src={img} alt={`${project.title} ${imgIndex + 1}`} className="w-full rounded-lg" />
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* Expand indicator */}
                                        <div className="mt-4 flex justify-center">
                                            <button className="text-sky-500 text-sm font-medium hover:text-sky-700 transition-colors">
                                                {activeCard === project.id ? 'Show Less ▲' : 'Show More ▼'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll hint */}
                <div className="flex justify-center mt-4">
                    <div className="text-sm opacity-60 flex items-center space-x-2">
                        <span>←</span>
                        <span>Scroll horizontally to explore some personal projects</span>
                        <span>→</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;