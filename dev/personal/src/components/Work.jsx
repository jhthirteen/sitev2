import { useState } from 'react'
import WorkLogo from '../assets/CompanyLogo.png'
import StackHacks from '../assets/StackHacks.png'
import BU from '../assets/BU.jpeg'

const Work = () => {

    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(true);
    const [tab3, setTab3] = useState(true);

    const active = "text-sky-500 text-2xl font-bold italic block text-left";
    const notActive = "text-sky-500 text-2xl font-bold block text-left";

    return (
        <div className="text-white">
            <button className={`${tab1 ? active : notActive}`} onClick={() => setTab1(!tab1)}>Security Analyst Intern, FoxPointe Solutions - Summer 2024</button>
            {tab1 && ( 
            <>
                <p>During my time at FoxPointe Solutions, I had the opportunity to learn about various aspects of the cybersecurity field. I worked on Risk Assessments, GAP Analyses, Information Privacy Assessments, and Vulnerability Assessments. Additionally, I had the chance to work on some SOC 2 Compliance projects. By working cloesly with my mentors, I also gained insights into the business side of cybersecurity compliance, from engaging to clients, interviews, and making sales.</p>
                <img src={WorkLogo} className="mx-auto mt-5 mb-5"/>
            </>
            )}
            <button className={`${tab2 ? active : notActive}`} onClick={() => setTab2(!tab2)}>CTO, StackHacks Binghamton University - 2024</button>
            {tab2 && ( 
            <>
                <p>StackHacks is a club dedicated to fostering technological growth and innovation for the undergraduate student body at Binghamton. We aim to provide project teams with real world, cutting edge problems that aid in breaking into the tech world. As the CTO, I help manage and plan the project at a high level, plan and host technical workshops, present for club recruitment events, and conduct interviews for new members.</p>
                <img src={StackHacks} className="w-52 h-52 mx-auto mt-5 mb-5"/>
            </>
            )}
            <button className={`${tab3 ? active : notActive}`} onClick={() => setTab3(!tab3)}>Student Advisory Committee Binghamton University CS Department - 2024</button>
            {tab3 && ( 
            <>
                <p>As a member of the SAC, I help conduct surveys and draft recommendations for members of faculty in the Computer Science Department that are up for tenure. This is a select team of undergraduates, graduates, and PhD Studetns who aim to provide an objective view of faculty member's performance.</p>
                <img src={BU} className="mx-auto h-48 mt-5 mb-5"/>
            </>
            )}
        </div>
    )
};
export default Work;