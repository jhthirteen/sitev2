import { useState } from 'react'
import WorkLogo from '../assets/CompanyLogo.png'
import StackHacks from '../assets/StackHacks.png'
import BU from '../assets/BU.jpeg'
import CapitalOne from '../assets/cap1Logo.jpeg'

const Work = () => {

    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(true);
    const [tab3, setTab3] = useState(true);
    const [tab4, setTab4] = useState(true);

    const active = "text-sky-500 text-2xl font-bold italic block text-left";
    const notActive = "text-sky-500 text-2xl font-bold block text-left";

    return (
        <div className="text-white">
            <button className={`${tab1 ? active : notActive}`} onClick={() => setTab1(!tab1)}>Software Engineering Intern @ Capital One - Summer 2025</button>
            {tab1 && (
            <>
                <p>I will be an incoming Software Engineering Intern at Capital One through the Technology Internship Program. I will be located in the New York City Office for the Summer!</p>
                <img src={CapitalOne} className='w-128 w-72 mx-auto mt-5 mb-5'/>
            </>    
            )}
            <button className={`${tab2 ? active : notActive}`} onClick={() => setTab2(!tab2)}>Cyber Security Intern @ FoxPointe Solutions - Summer 2024</button>
            {tab2 && ( 
            <>
                <p>At FoxPointe Solutions, I have had the opportunity to learn about various aspects of the cybersecurity industry. I worked on Risk Assessments, GAP Analyses, Information Privacy Assessments, and Vendor Risk Management Programs under the guidance of the NIST SP 800-53 Framework. By working closely with my mentors, I also gained insights into the business side of cybersecurity compliance, from engaging with clients, interviews with personnel to identify and categorize risk, and making sales. Recently, I have started some programming projects to optimize portions of the risk assessment process. My first project revolves around a lightweight application written in Python to parse multiple .docx files concurrently. More information can be found under the 'Projects' tab.</p>
                <img src={WorkLogo} className="mx-auto mt-5 mb-5"/>
            </>
            )}
            <button className={`${tab3 ? active : notActive}`} onClick={() => setTab3(!tab3)}>CTO of StackHacks @ Binghamton University - Present</button>
            {tab3 && ( 
            <>
                <p>StackHacks is a club dedicated to fostering technological growth and innovation for the undergraduate student body at Binghamton University. We aim to provide project teams with real world, cutting edge problems that aid in breaking into various sectors of the tech industry. As the CTO, I help manage and plan the projects at a high level, present for club recruitment events, and conduct interviews for new members. For the 24-25 Academic Year, I am acting as a mentor for our Machine Learning division, who are working to develop a Neural Network that classifys numbers and a GUI to interact with the model in real-time. Additionally, our E-Board is developing a series of LeetCode workshops with a goal of refining students' skills for technical interviews.</p>
                <img src={StackHacks} className="w-52 h-52 mx-auto mt-5 mb-5"/>
            </>
            )}
            <button className={`${tab4 ? active : notActive}`} onClick={() => setTab4(!tab4)}>Student Advisory Committee @ Binghamton University CS Department - 2024</button>
            {tab4 && ( 
            <>
                <p>As a member of the Student Advisory Committee, I help conduct surveys and draft recommendations for members of faculty in the Computer Science Department that are up for tenure or review. This is a select team of undergraduates, graduate students, and PhD students who aim to provide an objective view of faculty member's research, teaching, and advising.</p>
                <img src={BU} className="mx-auto h-48 mt-5 mb-5"/>
            </>
            )}
        </div>
    )
};
export default Work;