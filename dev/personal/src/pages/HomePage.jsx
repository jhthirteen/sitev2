import { useState, useRef, useEffect } from 'react'
import Header from '../components/Header'
import HomeText from '../components/HomeText'
import Options from '../components/Options'
import Connect from '../components/Connect'
import OptionsText from '../components/OptionsText'

const HomePage = () => {

    const [activeTab, setActiveTab] = useState(0);
    
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
            <div className="min-h-screen flex flex-col bg-black overflow-auto">
                <div className="flex flex-col items-center">
                    <Header />
                    <HomeText />
                    <Options tab={activeTab} handle={handleChange}/>
                    <Connect />
                </div>
                <div className="flex-grow">
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