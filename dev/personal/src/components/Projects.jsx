import { useState } from 'react'
import ConnectEdDemo from '../assets/ConnectEdDemo.mp4'
import exCalendar from '../assets/exCalendar.png'
import xv6_1 from '../assets/xv61.png'
import xv6_2 from '../assets/xv62.png'
import TechTag from './TechTag'

const Projects = () => {
    
    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(true);
    const [tab3, setTab3] = useState(true);
    const [tab4, setTab4] = useState(true);

    const active = "text-sky-500 text-2xl font-bold italic block text-left";
    const notActive = "text-sky-500 text-2xl font-bold block text-left";
    
    return(
        <div>
            <button className={`${tab1 ? active : notActive}`} onClick={() => setTab1(!tab1)}>AI Powered Music Recommender</button>
            {tab1 && (
            <>
                <div className="flex-row py-2 space-x-2 ">
                    <TechTag name="React" color="bg-[#61DBFB]" />
                    <TechTag name="JavaScript" color="bg-[#F0DB4F]" />
                    <TechTag name="HTML" color="bg-[#E34C26]" />
                    <TechTag name="TailwindCSS" color="bg-[#06B6D4]" />
                    <TechTag name="LLMs" color="bg-[#00B48C]" />
                </div>
                <p>I tackled this project because I love music, and simultaneously wanted to learn more about some more advanced topics in web development. The site is mainly a wrapper of the APIs provided by OpenAI, Spotify, and LastFM. Users can type an artist, song, or mood for a playlist into a search bar, and cards with artist or song names, with images and descriptions are automatically rendered for the user to look through.</p>
                <video controls className="mx-auto mt-5 mb-5">
                    <source src={ConnectEdDemo} type="video/mp4"/>
                </video>
            </>
            )}
            <button className={`${tab4 ? active : notActive}`} onClick={() => setTab4(!tab4)}>D2L Brightspace to Google Calendar Sync Tool</button>
            {tab4 && (
                <>
                    <div className="fex-row py-2 space-x-2">
                        <TechTag name="Python" color="bg-[#4B8BBE]" />
                        <TechTag name="APIs" color="bg-[#8B0000]" />
                        <TechTag name="Google Calendar" color="bg-[#228B22]" />
                    </div>
                    <p>Binghamton University uses the software D2L Brightspace to host classes. Every class hosts its assignments on the site, and there is a nice built in calendar that shows when everything is do. However, being a person who relies on Google Calendar to stay organized with my every-day life, having two important dates and deadlines cluttered across two different calendar applications was annoying, and led to me missing assignment due dates on multiple occasions. This tool automates the process of syncing data from Brightspace Classes to Google Calendar by parsing a .ics calendar file to find assignments linked to classes, creates new Assignment objects, and adds any non-duplicate ones to our calendar instantaneously through Google's API. Every "new" assignment is automatically created and uploaded to my personal Google Calendar.</p>
                    <img src={exCalendar} className="mx-auto" />
                </>
            )}
            <button className={`${tab2 ? active : notActive}`} onClick={() => setTab2(!tab2)}>Microsoft Word .docx Parser</button>
            {tab2 && (
            <>
                <div className="flex-row py-2 space-x-2">
                    <TechTag name="Python" color="bg-[#4B8BBE]" />
                    <TechTag name="Tkinter" color="bg-[#015523]" />
                    <TechTag name="XML" color="bg-[#B965E1]" />
                </div>
                <p>As an intern at FoxPointe solutions, I noticed how time consuming it could be to manually search through an Organization's policies to find references to a specific security control. I wanted to start a personal project that would optimize this, operating under the assumption that we could use specific keywords to limit the search space. I created a lightweight Python program that allows a user to automate this search process for a command line specified set of keywords across multiple .docx files. When run, the user is prompted with a simple Graphical User Interface that contains a search bar, asking for the keywords to search for. The general logic flow is as follows: The program extracts the XML file that contains the text of each .docx file and stores the XML in a new directory called ./text_docs. Then, the program recurisvely searches the XML Tree for &lt;w:t&gt; tags, which contain the text content. While parsing through the tags, two arrays are defined, uniqueWords and textInstances. If the number of unique words matchees the number of keywords, the text instances are returned.</p>
            </>
            )}
            <button className={`${tab3 ? active : notActive}`} onClick={() => setTab3(!tab3)}>xv6 Kernel Modifications</button>
            {tab3 && (
            <>
                <div className="flex-row py-2 space-x-2">
                    <TechTag name="C" color="bg-[#004482]" />
                    <TechTag name="OS Programming" color="bg-[#720090]" />
                    <TechTag name="System Calls" color="bg-[#F47430]" />
                    <TechTag name="Process Scheduling" color="bg-[#DC0A21]" />
                </div>
                <p>For my Operating Systems class, everyone in the class was randomly divided into teams of 4 for a semester long project. Given the xv6 Operating System's Code Base, which is roughly 9,000 - 10,000 lines of C code, we had to make a series of modifications to add functionality that is seen in typical Linux distributions. First, we were tasked with locating and understanding the code and processes to implement a system call. Then, our teams were tasked with developing some custom system calls ourselves. For the second project, we were tasked with implementing a system call that chose whether or not the child or parent process ran after executing a fork system call. Then, we were tasked with understanding xv6's CPU Scheduler, and implementing both a stride scheduling policy and a system call that allowed a user to choose stride scheduling, or traditional round robin scheduling. Finally, we made modifications to xv6's shell code, implementing I/O redirection, piping between two processes, background execution of a process, and functionality to track the history of a user's shell input.</p>
                <img src={xv6_1} className="mx-auto mt-5 mb-5"/>
                <img src={xv6_2} className="mx-auto mt-5 mb-5"/>
            </>
            )}
        </div>
    )
};
export default Projects;