import { useState } from 'react'
import Header from '../components/Header'
import HomeText from '../components/HomeText'
import Options from '../components/Options'

const HomePage = () => {

    const [activeTab, setActiveTab] = useState(0);
    
    const handleChange = (num) => {
        setActiveTab(num);
    };

    return (
        <>
            <div className="min-h-screen flex flex-col bg-black">
                <Header />
                <HomeText />
                <Options tab={activeTab} handle={handleChange}/>
            </div>
        </>
    )
};
export default HomePage;