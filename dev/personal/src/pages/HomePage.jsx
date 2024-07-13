import Navbar from '../components/Navbar'
import HomeText from '../components/HomeText'

const HomePage = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col bg-black">
                <Navbar />
                <HomeText />
            </div>
        </>
    )
};
export default HomePage;