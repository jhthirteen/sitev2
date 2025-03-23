import { FaSun } from 'react-icons/fa';
import { IoMoon } from 'react-icons/io5'
import { useState } from 'react';

const LightNightMode = ({ stateChange }) => {

    const [night, switchNight] = useState(true);
    const [day, switchDay] = useState(false);

    const handleClick = () => {
        stateChange();
        switchNight(!night);
        switchDay(!day);
    }

    return (
        <div>
            { night && <button onClick={() => handleClick()}><FaSun className="w-8 h-8"></FaSun></button> }
            { day && <button onClick={() => handleClick()}><IoMoon className="w-8 h-8"></IoMoon></button>}
        </div>
    )
};

export default LightNightMode;