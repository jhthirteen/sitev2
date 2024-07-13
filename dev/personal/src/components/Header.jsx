import pfp from '../assets/headshot.jpg'

const Header = () => {
    return(
        <div className="ml-20 mt-10">
            <img src={pfp} alt="Header" className="w-36 h-36 rounded-full" />
        </div>
    )
};
export default Header;