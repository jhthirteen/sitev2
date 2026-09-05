import pfp from '../assets/headshotNew.jpg'
import PropTypes from 'prop-types'

const HeroAvatar = ({ nightMode }) => {
    return (
        <div className="mb-8">
            <img
                src={pfp}
                alt="Jack Hunter"
                className={`w-56 h-56 rounded-full object-cover shadow-xl ring-1 ${nightMode ? 'ring-white' : 'ring-black'}`}
            />
        </div>
    )
};
HeroAvatar.propTypes = {
    nightMode: PropTypes.bool,
};
export default HeroAvatar;
