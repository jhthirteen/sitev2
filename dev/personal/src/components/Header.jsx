import pfp from '../assets/headshot.jpg'
import backdrop from '../assets/syracuse.jpeg'

const Header = () => {
    return(
        <div className="flex flex-col items-center "> 
            <div className="h-[50vh] overflow-hidden">
                <img src={backdrop} className="w-screen"/> 
            </div>
                <img src={pfp} alt="Header" className="w-52 h-52 rounded-full transform -translate-y-1/2" />   
        </div>
    )
};
export default Header;