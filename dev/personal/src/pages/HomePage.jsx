import Header from '../components/Header'
import HomeText from '../components/HomeText'
import Options from '../components/Options'

const HomePage = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col bg-black">
                <Header />
                <HomeText />
                <Options />
            </div>
        </>
    )
};
export default HomePage;