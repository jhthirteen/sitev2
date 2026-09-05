import Options from './Options'
import LightNightMode from './LightNightMode'
import PropTypes from 'prop-types'

const Header = ({ tab, handle, nightMode, stateChange }) => {
    return (
        <header className={`sticky top-0 z-30 w-full backdrop-blur-md border-b border-current/10 ${nightMode ? 'bg-black/60' : 'bg-white/70'}`}>
            <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-center relative">
                <Options tab={tab} handle={handle} />
                <div className="absolute right-6 top-1/2 -translate-y-1/2">
                    <LightNightMode nightMode={nightMode} stateChange={stateChange} />
                </div>
            </div>
        </header>
    )
};
Header.propTypes = {
    tab: PropTypes.number,
    handle: PropTypes.func.isRequired,
    nightMode: PropTypes.bool,
    stateChange: PropTypes.func.isRequired,
};
export default Header;