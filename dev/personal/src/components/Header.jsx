import pfp from '../assets/headshotNew.jpg'
import backdrop from '../assets/syracuse.jpeg'

const Header = () => {
    return(
        <div className="flex flex-col items-center p-10 "> 
                <img src={pfp} alt="Header" className="w-52 h-52 rounded-full object-cover" />   
        </div>
    )
};
export default Header;