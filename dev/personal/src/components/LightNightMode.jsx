import { FaSun } from 'react-icons/fa';
import { IoMoon } from 'react-icons/io5'
import PropTypes from 'prop-types';

const LightNightMode = ({ nightMode, stateChange }) => {
    return (
        <div>
            <button onClick={stateChange}>
                {nightMode ? <FaSun className="w-6 h-6" /> : <IoMoon className="w-6 h-6" />}
            </button>
        </div>
    )
};

LightNightMode.propTypes = {
    nightMode: PropTypes.bool,
    stateChange: PropTypes.func.isRequired,
};

export default LightNightMode;