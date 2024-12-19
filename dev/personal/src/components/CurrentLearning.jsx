import { useState } from 'react'

const CurrentLearning = () => {
    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(true);

    const active = "text-sky-500 text-2xl font-bold italic block text-left";
    const notActive = "text-sky-500 text-2xl font-bold block text-left";

    return (
        <div className="text-white">
            <button className={`${tab1 ? active : notActive}`} onClick={() => setTab2(!tab1)}>Spring 2025 Coursework</button>
            {tab1 && (
            <ul className="list-disc list-inside mb-5">
                <li>CS445 - Software Engineering</li>
                <li>CS457 - Distributed Systems</li>
                <li>CS320 - Advanced Computer Architecture</li>
                <li>MATH327 - Probability with Statistical Methods</li>
            </ul>
            )}
            <button className={`${tab2 ? active : notActive}`} onClick={() => setTab2(!tab2)}>Fall 2024 Coursework</button>
            {tab2 && ( 
            <ul className="list-disc list-inside mb-5">
                <li>CS375 - Design & Analysis of Algorithms</li>
                <li>CS373 - Automata Theory & Formal Languages</li>
                <li>CS350 - Operating Systems</li>
            </ul>
            )}
        </div>
    )
};
export default CurrentLearning;