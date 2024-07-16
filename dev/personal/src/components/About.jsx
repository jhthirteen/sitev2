import aboutImg from '../assets/aboutbg.jpg'
import { useState } from 'react'

const About = () => {

    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(false);

    const active = "text-sky-500 font-bold italic block";
    const notActive = "text-sky-500 font-bold block";

    return(
        <div className="text-white">
            <button className={`${tab1 ? active : notActive}`} onClick={() => setTab1(!tab1)}>Background</button>
            {tab1 && ( <p>I am a rising junior in my degree program, and I have interests in many subfields of computer science. In particular, I love learning about software development, computer and information security, data science, and machine learning. Additionally, I enjoy studying math, where I find interests in abstract algebra and statistics/probability. I am currently considering adding a concentration within my computer science degree in ML.</p>)}
            <button className={`${tab2 ? active : notActive}`} onClick={() => setTab2(!tab2)}>Hobbies</button>
            {tab2 && (
                <>
                    <p>In my free time, I love to stay active. I love training for distance running, rock climbing, and playing pickup basketball. Being local to the Adirondack Mountains and having family in Colorado, I love to get outside and hike when I can as well. I'm always listening to new music and reading too, my Spotify and Goodreads Accounts can be found under 'Connect'</p>
                    <img src={aboutImg} className="w-80 mt-5"/>
                </>
            )}
        </div>
    )
};
export default About;