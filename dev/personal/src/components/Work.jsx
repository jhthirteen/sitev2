import { useState } from 'react'

const Work = () => {

    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(false);
    const [tab3, setTab3] = useState(false);

    const active = "text-sky-500 font-bold italic block";
    const notActive = "text-sky-500 font-bold block";

    return (
        <div className="text-white">
            <button className={`${tab1 ? active : notActive}`} onClick={() => setTab1(!tab1)}>Security Analyst Intern, FoxPointe Solutions - 2024</button>
            {tab1 && ( <p>During my time at FoxPointe Solutions, I had the opportunity to learn about various aspects of the cybersecurity field. I worked on Risk Assessments, GAP Analyses, Information Privacy Assessments, and Vulnerability Assessments. Additionally, I had the chance to work on some SOC 2 Compliance projects. By working cloesly with my mentors, I also gained insights into the business side of cybersecurity compliance, from engaging to clients, interviews, and making sales.</p>)}
            <button className={`${tab2 ? active : notActive}`} onClick={() => setTab2(!tab2)}>CTO, StackHacks BU - 2024</button>
            {tab2 && ( <p>StackHacks is a club dedicated to fostering technological growth and innovation for the undergraduate student body at Binghamton. We aim to provide project teams with real world, cutting edge problems that aid in breaking into the tech world. As the CTO, I help manage and plan the project at a high level, plan and host technical workshops, present for club recruitment events, and conduct interviews for new members.</p>)}
            <button className={`${tab3 ? active : notActive}`} onClick={() => setTab3(!tab3)}>Student Advisory Committee - SUNY Binghamton - 2024</button>
            {tab3 && ( <p>As a member of the SAC, I help conduct surveys and draft recommendations for members of faculty in the Computer Science Department that are up for tenure. This is a select team of undergraduates, graduates, and PhD Studetns who aim to provide an objective view of faculty member's performance.</p>)}
        </div>
    )
};
export default Work;