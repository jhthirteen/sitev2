import pfp from '../assets/headshot.jpg'
import backdrop from '../assets/syracuse.jpeg'

const Header = () => {
    return(
        <div className="flex flex-col items-center "> 
            <div className="h-[50vh] overflow-hidden">
                <img src={backdrop} className="w-screen"/> 
            </div>
            <div className="relative top-[-50%]" >
                <img src={pfp} alt="Header" className="w-52 h-52 rounded-full" />
            </div>        
        </div>
    )
};
export default Header;