import { useState } from 'react'
import Header from '../components/Header'
import HomeText from '../components/HomeText'
import Connect from '../components/Connect'
import HeroAvatar from '../components/HeroAvatar'
import OptionsText from '../components/OptionsText'

const HomePage = () => {

    const [activeTab, setActiveTab] = useState(0);

    const [nightMode, setNightMode] = useState(false);

    const changeMode = () => {
        setNightMode(!nightMode);
    };

    const night = 'bg-black text-white';
    const day = 'bg-white text-black';

    const handleChange = (num) => {
        setActiveTab(num);
    };

    return (
        <div className={`min-h-screen flex flex-col ${nightMode ? night : day}`}>
            <Header
                tab={activeTab}
                handle={handleChange}
                nightMode={nightMode}
                stateChange={changeMode}
            />

            <main className="flex-1 w-full">
                {activeTab === 0 ? (
                    <section className="flex flex-col items-center justify-center px-6 pt-20 pb-16">
                        <HeroAvatar nightMode={nightMode} />
                        <HomeText />
                        <div className="mt-8">
                            <Connect />
                        </div>
                    </section>
                ) : (
                    <OptionsText tab={activeTab} />
                )}
            </main>
        </div>
    )
};
export default HomePage;