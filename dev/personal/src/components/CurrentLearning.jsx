const CurrentLearning = () => {
    const learning = [
        {
            id: 2,
            title: "AWS Solutions Architect",
            date: "May 2026",
            description: "Learned about the design of cost and performance optimized solutions for production systems",
            status: "Completed",
            color: "bg-orange-500"
        },
        {
            id: 1,
            title: "Bachelors of Science in Computer Science at Binghamton University",
            date: "December 2025",
            description: "Design and Analysis of Algorithms, Operating Systems, Distributed Systems, Linear Algebra, Number Systems, and more",
            status: "Completed",
            color: "bg-green-900"
        },
    ];

    return (
        <div className="w-full min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl mb-10 text-center">Current Learning</h2>
                <div className="flex flex-col gap-4">
                    {learning.map((item) => (
                        <div
                            key={item.id}
                            className="bg-black/10 border border-current/20 rounded-xl shadow-lg p-5 flex items-start justify-between gap-4"
                        >
                            <div>
                                <h3 className="text-base mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-sm opacity-60 mb-2">
                                    {item.date}
                                </p>
                                <p className="text-sm leading-relaxed opacity-75">
                                    {item.description}
                                </p>
                            </div>
                            <span
                                className={`shrink-0 rounded-full text-xs text-white px-3 py-1 ${item.color}`}
                            >
                                {item.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CurrentLearning;