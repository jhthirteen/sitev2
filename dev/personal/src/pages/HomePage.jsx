import { useState, useRef, useEffect } from 'react'
import Header from '../components/Header'
import HomeText from '../components/HomeText'
import Options from '../components/Options'
import Connect from '../components/Connect'
import OptionsText from '../components/OptionsText'
import LightNightMode from '../components/LightNightMode'

const HomePage = () => {

    const [activeTab, setActiveTab] = useState(0);

    const [nightMode, setNightMode] = useState(true);

    const changeMode = () => {
        setNightMode(!nightMode);
    };

    const night = 'bg-black text-white';
    const day = 'bg-white text-black';
    
    const handleChange = (num) => {
        setActiveTab(num);
    };

    const optionsTextRef = useRef(null);

    useEffect(() => {
        if( optionsTextRef.current && activeTab !== 0 ){
            optionsTextRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, [activeTab]);

    return (
        <>
            <div className={`min-h-screen flex flex-col overflow-auto ${nightMode ? night : day}`}>
                <div className="flex flex-col items-center">
                    <Header />
                    <HomeText />
                    <Options tab={activeTab} handle={handleChange}/>
                    <Connect />
                    <LightNightMode stateChange={changeMode}/>
                </div>
                <div className="flex flex-col items-center p-6">
                    {activeTab !== 0 && (
                    <div ref={optionsTextRef}>
                        <OptionsText tab={activeTab} />    
                    </div>
                    )}
                </div>
            </div>
        </>
    )
};
export default HomePage;