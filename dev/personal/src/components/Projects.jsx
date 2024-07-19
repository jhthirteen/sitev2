import { useState } from 'react'
import ConnectEdDemo from '../assets/ConnectEdDemo.mp4'

const Projects = () => {
    
    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(false);

    const active = "text-sky-500 text-2xl font-bold italic block text-left";
    const notActive = "text-sky-500 text-2xl font-bold block text-left";
    
    return(
        <div className="text-white">
            <button className={`${tab1 ? active : notActive}`} onClick={() => setTab1(!tab1)}>AI Powered Music Recommender</button>
            {tab1 && (
            <>
                <p>I tackled this project because I love music, and simultaneously wanted to learn more about some more advanced topics in web-dev. The site is mainly a wrapper of the APIs provided by OpenAI and Spotify. You can type an artist, song, or mood for a playlist into a search bar, and cards with artist or song names with images and descriptions are automatically rendered for the user to look through. This project gave me some foundational knowledge in React, JavaScript, HTML, TailwindCSS, Vite, fetching data from APIs, and UI design.</p>
                <video controls className="mx-auto mt-5 mb-5">
                    <source src={ConnectEdDemo} type="video/mp4"/>
                </video>
            </>
            )}
            <button className={`${tab2 ? active : notActive}`} onClick={() => setTab2(!tab2)}>Internship Capstone: Security Risks and Safe Use of AI</button>
            {tab2 && (<p>Identified strengths of LLM's like the ability to find specific references in large text documents, and pitfalls like faithful and domain-based knowledge hallucinations. The presentation then highlighted areas within the firm that could benefit from the use of generative AI, and areas where it may be best to be avoided. Finally, the project concluded with highlighting new areas that generative AI was being used in the cybersecurity space, from complex deepfake attacks to enhanced phishing campaigns. This was presented to upper management at the end of the internsihp.</p>)}
        </div>
    )
};
export default Projects;