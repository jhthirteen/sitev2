import { useState } from 'react'

const CurrentLearning = () => {
    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(true);

    const active = "text-sky-500 text-2xl font-bold italic block text-left";
    const notActive = "text-sky-500 text-2xl font-bold block text-left";

    return (
        <div className="text-white">
            <button className={`${tab1 ? active : notActive}`} onClick={() => setTab1(!tab1)}>Gödel, Escher, Bach</button>
            {tab1 && ( 
            <>
                <p>A book about the nature of intelligence, examining how meaningless symbols can take on meaning under a certain level of complexity, and how self-reference contributes to this process.</p>
            </>
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