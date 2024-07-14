import { FaGithub, FaInstagram, FaLinkedin, FaGoodreads, FaSpotify } from 'react-icons/fa'

const Connect = () => {
    return(
        <div className="text-sky-500">
            <a href="https://github.com/jhthirteen" target="_blank"><FaGithub className="w-8 h-8"/></a>
            <a href="https://www.instagram.com/jackhh_/" target="_blank"><FaInstagram className="w-8 h-8 mt-3"/></a>
            <a href="https://www.linkedin.com/in/jackhunter00/" target="_blank"><FaLinkedin className="w-8 h-8 mt-3"/></a>
            <a href="https://www.goodreads.com/user/show/153811866-jack-hunter" target="_blank"><FaGoodreads className="w-8 h-8 mt-3"/></a>
            <a href="https://open.spotify.com/user/p2zmipmxaj4qt4an7mhgl7v4y?si=cdebd484b0fc4278" target="_blank"><FaSpotify className="w-8 h-8 mt-3"/></a>
        </div>
    )
};
export default Connect;