import Work from './Work.jsx'
import CurrentLearning from './CurrentLearning.jsx'
import PropTypes from 'prop-types'

const OptionsText = ({ tab }) => {
    return (
        <div className="flex flex-col w-full">
            {tab === 1 ? <Work /> : tab === 2 ? <CurrentLearning /> : <></>}
        </div>
    )
};
OptionsText.propTypes = {
    tab: PropTypes.number,
};
export default OptionsText;