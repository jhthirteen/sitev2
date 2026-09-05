import c1Logo from '../assets/capitalOneLogo.png'
import foxPointeLogo from '../assets/foxpointeLogo.jpeg'
import StackHacks from '../assets/StackHacks.png'
import buLogo from '../assets/bingLogo.png'

const Work = () => {
    const workExperience = [
        {
            id: 1,
            title: "Software Engineer I",
            company: "Capital One",
            period: "Present",
            location: "NYC",
            description: "Backend Engineer working on distributed systems and big data processing for Credit Bureau Reporting Modernization",
            logo: c1Logo,
            color: "bg-blue-500",
            year: "2026"
        },
        {
            id: 2,
            title: "Software Engineer Intern",
            company: "Capital One",
            period: "2025",
            location: "NYC",
            description: "Backend Engineer working on integrating LLMs into internal observability tooling for Capital One Cyber",
            logo: c1Logo,
            color: "bg-red-500",
            year: "2025"
        },
        {
            id: 4,
            title: "CS 102 Course Designer",
            company: "Binghamton University",
            period: "2026",
            location: "Binghamton, NY",
            description: "Helped design a curriculum and lecture for a new CS course aimed at helping undergraduate students' understand and navigate the tech industry",
            logo: buLogo,
            color: "bg-green-900",
            year: "2026"
        },
        {
            id: 4,
            title: "Vice President",
            company: "StackHacks",
            period: "2024",
            location: "Binghamton, NY",
            description: "Development leader for project-based organization at Binghamton University",
            logo: StackHacks,
            color: "bg-yellow-500",
            year: "2024"
        }
    ];

    return (
        <div className="w-full min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-6">
                <h2 className="text-3xl mb-10 text-center">Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {workExperience.map((experience) => (
                        <div
                            key={experience.id}
                            className="bg-black/10 border border-current/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <span className={`inline-block text-xs px-2 py-1 rounded-full text-white ${experience.color} mb-2`}>
                                            {experience.year}
                                        </span>
                                        <h3 className="text-lg mb-1">
                                            {experience.title}
                                        </h3>
                                        <p className="text-sky-600 mb-1">
                                            {experience.company}
                                        </p>
                                        <p className="text-sm opacity-60">
                                            {experience.period} • {experience.location}
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white ml-4 shrink-0">
                                        <img src={experience.logo} className="w-full h-full object-contain" alt={experience.company} />
                                    </div>
                                </div>

                                <div className="text-sm leading-relaxed opacity-75">
                                    {experience.description.split('\n').map((line, index) => (
                                        <p key={index}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;