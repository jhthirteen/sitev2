import { useState } from 'react'

const CurrentLearning = () => {
    const [activeCard, setActiveCard] = useState(null);

    const coursework = [
        {
            id: 1,
            semester: "Spring 2025",
            period: "Current",
            courses: [
                "CS445 - Software Engineering",
                "CS457 - Distributed Systems", 
                "CS320 - Advanced Computer Architecture",
                "MATH327 - Probability with Statistical Methods"
            ],
            color: "bg-green-500",
            year: "2025"
        },
        {
            id: 2,
            semester: "Fall 2024",
            period: "Completed",
            courses: [
                "CS375 - Design & Analysis of Algorithms",
                "CS373 - Automata Theory & Formal Languages",
                "CS350 - Operating Systems"
            ],
            color: "bg-blue-500",
            year: "2024"
        },
        {
            id: 3,
            semester: "Spring 2024",
            period: "Completed",
            courses: [
                "CS310 - Data Structures & Algorithms",
                "CS301 - Ethical, Social, & Global Issues in Computing",
                "MATH330 - Number Systems",
                "MATH304 - Linear Algebra"
            ],
            color: "bg-purple-500",
            year: "2024"
        },
        {
            id: 4,
            semester: "Fall 2023",
            period: "Completed",
            courses: [
                "CS220 - Architecture from a Programmer's Perspective",
                "MATH314 - Discrete Mathematics",
                "MATH323 - Calculus 3"
            ],
            color: "bg-orange-500",
            year: "2023"
        },
        {
            id: 5,
            semester: "Spring 2023",
            period: "Completed",
            courses: [
                "CS120 - Programming & Hardware Fundamentals",
                "CS140 - Programming with Objects & Data Structures",
                "MATH226/227 - Calculus 2"
            ],
            color: "bg-red-500",
            year: "2023"
        },
        {
            id: 6,
            semester: "Fall 2022",
            period: "Completed",
            courses: [
                "CS110 - Programming Concepts & Applications",
                "CS101 - Professional Skills, Ethics, & Trends in Computer Science",
                "MATH224/225 - Calculus 1",
                "PHIL150 - Technology, Ethics, and Policy"
            ],
            color: "bg-indigo-500",
            year: "2022"
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
                        {coursework.map((semester, index) => (
                            <div key={semester.id} className="relative flex flex-col items-center">
                                {/* Timeline dot */}
                                <div className="relative">
                                    <div className={`w-4 h-4 rounded-full ${semester.color} border-4 border-white shadow-lg z-10 relative`}></div>
                                </div>
                                
                                {/* Year label */}
                                <div className="mt-2 mb-4">
                                    <span className="text-sm font-semibold opacity-60 bg-black/10 dark:bg-white/10 px-2 py-1 rounded-full">
                                        {semester.year}
                                    </span>
                                </div>

                                {/* Course card */}
                                <div 
                                    className={`w-96 bg-black/10 dark:bg-white/10 border border-current/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                                        activeCard === semester.id ? 'ring-2 ring-sky-500 scale-105' : ''
                                    }`}
                                    onClick={() => setActiveCard(activeCard === semester.id ? null : semester.id)}
                                >
                                    <div className="p-6">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold mb-1">
                                                    {semester.semester}
                                                </h3>
                                                <p className="text-sky-600 font-semibold mb-1">
                                                    Coursework
                                                </p>
                                                <p className="text-sm opacity-60">
                                                    {semester.period} • {semester.courses.length} courses
                                                </p>
                                            </div>
                                        </div>

                                        {/* Course list (expandable) */}
                                        <div className={`transition-all duration-300 overflow-hidden ${
                                            activeCard === semester.id ? 'max-h-96 opacity-100' : 'max-h-24 opacity-75'
                                        }`}>
                                            <div className="text-sm leading-relaxed opacity-75">
                                                <ul className="list-disc list-inside space-y-1">
                                                    {semester.courses.map((course, courseIndex) => (
                                                        <li key={courseIndex}>{course}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Expand indicator */}
                                        <div className="mt-4 flex justify-center">
                                            <button className="text-sky-500 text-sm font-medium hover:text-sky-700 transition-colors">
                                                {activeCard === semester.id ? 'Show Less ▲' : 'Show More ▼'}
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
                        <span>Scroll horizontally to explore the courses i've taken at school</span>
                        <span>→</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentLearning;