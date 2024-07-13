import { useState } from 'react'

const Options = () => {

    const [activeTab, setActiveTab] = useState(0);
    const defaultDesc = "text-white font-bold hover:text-sky-500 hover:ml-5";
    const activeDesc = "text-sky-500 ml-5";

    const handleClick = (num) => {
        setActiveTab(num);
    };

    return(
        <div className="ml-20 mt-20 ">
            <div className="flex flex-col items-start">
                <button className={`${activeTab === 0 ? activeDesc : defaultDesc}`} onClick={() => handleClick(0)}>About</button>
                <button className={`${activeTab === 1 ? activeDesc : defaultDesc}`} onClick={() => handleClick(1)}>Work</button>
                <button className={`${activeTab === 2 ? activeDesc : defaultDesc}`} onClick={() => handleClick(2)}>Projects</button>
                <button className={`${activeTab === 3 ? activeDesc : defaultDesc}`} onClick={() => handleClick(3)}>Connect</button>
                <button className={`${activeTab === 4 ? activeDesc : defaultDesc}`} onClick={() => handleClick(4)}>Writing</button>
            </div>
        </div>
    )
};
export default Options;