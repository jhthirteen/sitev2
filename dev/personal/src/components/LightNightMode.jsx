import { FaSun } from 'react-icons/fa';
import { IoMoon } from 'react-icons/io5'
import PropTypes from 'prop-types';

const LightNightMode = ({ nightMode, stateChange }) => {
    return (
        <div>
            <button onClick={stateChange}>
                {nightMode ? <FaSun className="w-8 h-8" /> : <IoMoon className="w-8 h-8" />}
            </button>
        </div>
    )
};

LightNightMode.propTypes = {
    nightMode: PropTypes.bool,
    stateChange: PropTypes.func.isRequired,
};

export default LightNightMode;