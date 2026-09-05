import { FaGithub, FaLinkedin, FaGoodreads, FaSpotify } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const Connect = () => {
    return (
        <div className="flex space-x-3">
            <a href="https://github.com/jhthirteen" target="_blank"><FaGithub className="w-8 h-8 transition-colors duration-200 hover:text-sky-500 text-current" /></a>
            <a href="https://www.linkedin.com/in/jackhunter00/" target="_blank"><FaLinkedin className="w-8 h-8 transition-colors duration-200 hover:text-sky-500 text-current" /></a>
            <a href="https://www.goodreads.com/user/show/153811866-jack-hunter" target="_blank"><FaGoodreads className="w-8 h-8 transition-colors duration-200 hover:text-sky-500 text-current" /></a>
            <a href="https://open.spotify.com/user/p2zmipmxaj4qt4an7mhgl7v4y?si=cdebd484b0fc4278" target="_blank"><FaSpotify className="w-8 h-8 transition-colors duration-200 hover:text-sky-500 text-current" /></a>
            <a href="https://leetcode.com/u/imperialjh/" target="_blank"><SiLeetcode className="w-8 h-8 transition-colors duration-200 hover:text-sky-500 text-current" /></a>
        </div>
    )
};
export default Connect;