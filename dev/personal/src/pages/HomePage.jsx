import { useState } from 'react'
import Header from '../components/Header'
import HomeText from '../components/HomeText'
import Options from '../components/Options'
import OptionsText from '../components/OptionsText'

const HomePage = () => {

    const [activeTab, setActiveTab] = useState(0);
    
    const handleChange = (num) => {
        setActiveTab(num);
    };

    return (
        <>
            <div className="min-h-screen flex bg-black">
                <div className="flex flex-col">
                    <Header />
                    <HomeText />
                    <Options tab={activeTab} handle={handleChange}/>
                </div>
                <div className="flex-grow">
                    <OptionsText tab={activeTab} />
                </div>
            </div>
        </>
    )
};
export default HomePage;