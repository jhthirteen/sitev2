import { useState } from 'react'

const CurrentLearning = () => {
    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(true);
    const [tab3, setTab3] = useState(true);
    const [tab4, setTab4] = useState(true);
    const [tab5, setTab5] = useState(true);
    const [tab6, setTab6] = useState(true);

    const active = "text-sky-500 text-2xl font-bold italic block text-left";
    const notActive = "text-sky-500 text-2xl font-bold block text-left";

    return (
        <div>
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
            <button className={`${tab3 ? active : notActive}`} onClick={() => setTab3(!tab3)}>Spring 2024 Coursework</button>
            {tab3 && ( 
            <ul className="list-disc list-inside mb-5">
                <li>CS310 - Data Structures & Algorithms</li>
                <li>CS301 - Ethical, Social, & Global Issues in Computing</li>
                <li>MATH330 - Number Systems</li>
                <li>MATH304 - Linear Algebra</li>
            </ul>
            )}
            <button className={`${tab4 ? active : notActive}`} onClick={() => setTab4(!tab4)}>Fall 2023 Coursework</button>
            {tab4 && ( 
            <ul className="list-disc list-inside mb-5">
                <li>CS220 - Architecture from a Programmer's Perspective</li>
                <li>MATH314 - Discrete Mathematics</li>
                <li>MATH323 - Calculus 3</li>
            </ul>
            )}
            <button className={`${tab5 ? active : notActive}`} onClick={() => setTab5(!tab5)}>Spring 2023 Coursework</button>
            {tab5 && ( 
            <ul className="list-disc list-inside mb-5">
                <li>CS120 - Programming & Hardware Fundamentals</li>
                <li>CS140 - Programming with Objects & Data Structures</li>
                <li>MATH226/227 - Calculus 2</li>
            </ul>
            )}
            <button className={`${tab6 ? active : notActive}`} onClick={() => setTab6(!tab6)}>Fall 2022 Coursework</button>
            {tab6 && ( 
            <ul className="list-disc list-inside mb-5">
                <li>CS110 - Programming Concepts & Applications</li>
                <li>CS101 - Professional Skills, Ethics, & Trends in Computer Science</li>
                <li>MATH224/225 - Calculus 1</li>
                <li>PHIL150 - Technology, Ethics, and Policy</li>
            </ul>
            )}
        </div>
    )
};
export default CurrentLearning;