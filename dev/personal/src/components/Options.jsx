import { useState } from 'react'

const Options = ({ tab, handle }) => {

    const defaultDesc = "font-bold hover:text-sky-500 hover:italic";
    const activeDesc = "text-sky-500 font-bold italic";

    const handleClick = (num) => {
        handle(num);
    };

    return(
        <div className="mt-10">
            <div className="flex flex-col items-start">
                {/*<button className={`${tab === 1 ? activeDesc : defaultDesc}`} onClick={() => handleClick(1)}>About</button> */}
                <button className={`${tab === 1 ? activeDesc : defaultDesc}`} onClick={() => handleClick(1)}>Experience</button>
                <button className={`${tab === 2 ? activeDesc : defaultDesc}`} onClick={() => handleClick(2)}>Projects</button>
                <button className={`${tab === 3 ? activeDesc : defaultDesc}`} onClick={() => handleClick(3)}>Current Learning</button>
{/*  Commenting this out until page is finished!             <button className={`${tab === 4 ? activeDesc : defaultDesc}`} onClick={() => handleClick(4)}>Writing</button> */}  
            </div>
        </div>
    )
};
export default Options;