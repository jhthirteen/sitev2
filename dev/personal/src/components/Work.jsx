import { useState } from 'react'
import c1Logo from '../assets/capitalOneLogo.png'
import foxPointeLogo from '../assets/foxpointeLogo.jpeg'
import StackHacks from '../assets/StackHacks.png'
import buLogo from '../assets/bingLogo.png'

const Work = () => {
    const [activeCard, setActiveCard] = useState(null);

    const workExperience = [
        {
            id: 1,
            title: "Software Engineering Intern",
            company: "Capital One",
            period: "Summer 2025",
            location: "Manhattan, NYC",
            description: "- Developed Python Scripts to identify key performance bottlenecks in internal applications.\n- Built a batch-processing pipeline in Python to generate LLM-driven insights tailored to distinct user groups\n- Designed and hosted FastAPI endpoints on AWS ECS Fargate to enable communication with internal LLMs\n- Created a reusable React component with JavaScript to present personalized insights to users",
            logo: c1Logo, // Placeholder for CapitalOne logo
            color: "bg-blue-500",
            year: "2025"
        },
        {
            id: 2,
            title: "Cyber Security Intern",
            company: "FoxPointe Solutions",
            period: "Summer 2024",
            location: "Syracuse, NY",
            description: "- Performed risk assessments, gap analyses, privacy assessments, and security plans for clients\n- Documented risks and fixes associated with clients’ technology and network infrastructure",
            logo: foxPointeLogo, // Placeholder for WorkLogo
            color: "bg-green-500",
            year: "2024"
        },
        {
            id: 3,
            title: "CTO",
            company: "StackHacks",
            period: "Present",
            location: "Binghamton, NY",
            description: "- Led the strategic planning and management of the club’s technical projects, ensuring code quality, reliability, and maintainability\n- Maintained and improved the club’s technical infrastructure to support events and growth\n- Organized and led workshops on technical skills, interviewing, leadership, and innovation in software development",
            logo: StackHacks, // Placeholder for StackHacks
            color: "bg-purple-500",
            year: "2024-25"
        },
        {
            id: 4,
            title: "Student Advisory Committee",
            company: "Binghamton University",
            period: "2024",
            location: "Binghamton, NY",
            description: "- Appointed by faculty to serve on a committee of students to provide an objective overview of faculty that are up for tenure or evaluation\n- Wrote reports that leveraged previous student’s feedback on teaching, advising, and research experiences",
            logo: buLogo, // Placeholder for BU
            color: "bg-red-500",
            year: "2024"
        }
    ];

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
                        {workExperience.map((experience, index) => (
                            <div key={experience.id} className="relative flex flex-col items-center">
                                {/* Timeline dot and line */}
                                <div className="relative">
                                    <div className={`w-4 h-4 rounded-full ${experience.color} border-4 border-white shadow-lg z-10 relative`}></div>
                                </div>
                                
                                {/* Year label */}
                                <div className="mt-2 mb-4">
                                    <span className="text-sm font-semibold opacity-60 bg-black/10 dark:bg-white/10 px-2 py-1 rounded-full">
                                        {experience.year}
                                    </span>
                                </div>

                                {/* Experience card */}
                                <div 
                                    className={`w-96 bg-black/10 dark:bg-white/10 border border-current/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                                        activeCard === experience.id ? 'ring-2 ring-sky-500 scale-105' : ''
                                    }`}
                                    onClick={() => setActiveCard(activeCard === experience.id ? null : experience.id)}
                                >
                                    <div className="p-6">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold mb-1">
                                                    {experience.title}
                                                </h3>
                                                <p className="text-sky-600 font-semibold mb-1">
                                                    {experience.company}
                                                </p>
                                                <p className="text-sm opacity-60">
                                                    {experience.period} • {experience.location}
                                                </p>
                                            </div>
                                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl ml-4`}>
                                                <img src={experience.logo} className="w-full h-full"></img>
                                            </div>
                                        </div>

                                        {/* Description (expandable) */}
                                        <div className={`transition-all duration-300 overflow-hidden ${
                                            activeCard === experience.id ? 'max-h-96 opacity-100' : 'max-h-24 opacity-75'
                                        }`}>
                                            <div className="text-sm leading-relaxed opacity-75">
                                            {experience.description.split('\n').map((line, index) => (
                                                <p key={index}>{line}</p>
                                            ))}
                                            </div>
                                        </div>

                                        {/* Expand indicator */}
                                        <div className="mt-4 flex justify-center">
                                            <button className="text-sky-500 text-sm font-medium hover:text-sky-700 transition-colors">
                                                {activeCard === experience.id ? 'Show Less ▲' : 'Show More ▼'}
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
                        <span>Scroll horizontally to my work experience</span>
                        <span>→</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;