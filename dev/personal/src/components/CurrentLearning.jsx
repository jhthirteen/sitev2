import { useState } from 'react'

const CurrentLearning = () => {
    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(true);

    const active = "text-sky-500 text-2xl font-bold italic block text-left";
    const notActive = "text-sky-500 text-2xl font-bold block text-left";

    return (
        <div className="text-white">
            <button className={`${tab1 ? active : notActive}`} onClick={() => setTab1(!tab1)}>The Elements of Statistical Learning: Data Mining, Inference, and Prediction</button>
            {tab1 && ( 
            <>
                <p>I am currently working through this book to gain foundational knowledge in the mathematics that supports data science and machine learning. So far, I have covered Linear Regression models, K-Nearest Neighbors, and an introduction to statistical decision theory. For linear regression models, this covered defining loss functions that give the best prediction for the different model types, and different prediction types, like quantitative vs. qualitative.</p>
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