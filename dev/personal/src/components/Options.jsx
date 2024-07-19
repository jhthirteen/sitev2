import { useState } from 'react'

const Options = ({ tab, handle }) => {

    const defaultDesc = "text-white font-bold hover:text-sky-500 hover:text-2xl";
    const activeDesc = "text-sky-500 font-bold text-2xl";

    const handleClick = (num) => {
        handle(num);
    };

    return(
        <div className="mt-10">
            <div className="flex flex-col items-start">
                <button className={`${tab === 1 ? activeDesc : defaultDesc}`} onClick={() => handleClick(1)}>About</button>
                <button className={`${tab === 2 ? activeDesc : defaultDesc}`} onClick={() => handleClick(2)}>Experience</button>
                <button className={`${tab === 3 ? activeDesc : defaultDesc}`} onClick={() => handleClick(3)}>Projects</button>
                <button className={`${tab === 4 ? activeDesc : defaultDesc}`} onClick={() => handleClick(4)}>Connect</button>
{/*  Commenting this out until page is finished!             <button className={`${tab === 4 ? activeDesc : defaultDesc}`} onClick={() => handleClick(4)}>Writing</button> */}  
            </div>
        </div>
    )
};
export default Options;