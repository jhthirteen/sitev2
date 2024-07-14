import aboutImg from '../assets/aboutbg.jpg'

const About = () => {
    return(
        <div className="text-white">
            <h1 className="text-sky-500 font-bold">Background</h1>
            <p>I am a rising junior in my degree program, and I have interests in many subfields of computer science. In particular, I love learning about software development, computer and information security, data science, and machine learning. Additionally, I enjoy studying math, where I find interests in abstract algebra and statistics/probability. I am currently considering adding a concentration within my computer science degree in ML.</p>
            <h1 className="text-sky-500 font-bold">Hobbies</h1>
            <p>In my free time, I love to stay active. I love training for distance running, rock climbing, and playing pickup basketball. Being local to the Adirondack Mountains and having family in Colorado, I love to get outside and hike when I can as well. I'm always listening to new music and reading too, my Spotify and Goodreads Accounts can be found under 'Connect'</p>
            <img src={aboutImg} className="w-80 mt-5"/>
        </div>
    )
};
export default About;