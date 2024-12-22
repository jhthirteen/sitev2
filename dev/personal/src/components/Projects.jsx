import { useState } from 'react'
import ConnectEdDemo from '../assets/ConnectEdDemo.mp4'

const Projects = () => {
    
    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(true);
    const [tab3, setTab3] = useState(true);

    const active = "text-sky-500 text-2xl font-bold italic block text-left";
    const notActive = "text-sky-500 text-2xl font-bold block text-left";
    
    return(
        <div className="text-white">
            <button className={`${tab1 ? active : notActive}`} onClick={() => setTab1(!tab1)}>AI Powered Music Recommender</button>
            {tab1 && (
            <>
                <p>I tackled this project because I love music, and simultaneously wanted to learn more about some more advanced topics in web development. The site is mainly a wrapper of the APIs provided by OpenAI, Spotify, and LastFM. Users can type an artist, song, or mood for a playlist into a search bar, and cards with artist or song names, with images and descriptions are automatically rendered for the user to look through. This project gave me some foundational knowledge in React, JavaScript, HTML, TailwindCSS, Vite, interacting with data from APIs, and UI design.</p>
                <video controls className="mx-auto mt-5 mb-5">
                    <source src={ConnectEdDemo} type="video/mp4"/>
                </video>
            </>
            )}
            <button className={`${tab2 ? active : notActive}`} onClick={() => setTab2(!tab2)}>xv6 Kernel Modifications</button>
            {tab2 && (
            <>
                <p>For my Operating Systems class, everyone in the class was randomly divided into teams of 4 for a semester long project. Given the xv6 Operating System's Code Base, which is roughly 9,000 - 10,000 lines of C code, we had to make a series of modifications to add functionality that is seen in typical Linux distributions. First, we were tasked with locating and understanding the code and processes to implement a system call. Then, our teams were tasked with developing some custom system calls ourselves, such as a custom instance of mkdir that created 2 directories at once. For the second project, we were tasked with implementing a system call that chose whether or not the child or parent process ran after executing a fork system call. Then, we were tasked with understanding xv6's CPU Scheduler, and implementing both a stride scheduling policy and a system call that allowed a user to choose stride scheduling, or traditional round robin scheduling. Finally, we made modifications to xv6's shell code, implementing I/O redirection, piping between two processes, background execution of a process, and functionality to track the history of a user's shell input.</p>
            </>
            )}
            <button className={`${tab3 ? active : notActive}`} onClick={() => setTab3(!tab3)}>Internship Capstone: Security Risks and Safe Use of Generative AI</button>
            {tab3 && (<p>Identified strengths of LLM's like the ability to find specific references in large text documents, and pitfalls like faithful and domain-based knowledge hallucinations. The presentation then highlighted areas within the firm that could benefit from the use of generative AI, and areas where it may be best to be avoided. Finally, the project concluded with highlighting new areas that generative AI was being used in the cybersecurity space, from complex deepfake attacks to enhanced phishing campaigns. This was presented to upper management at the end of the internsihp.</p>)}
        </div>
    )
};
export default Projects;