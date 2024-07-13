import About from './About.jsx'
import Work from './Work.jsx'

const OptionsText = ({ tab }) => {
    return(
        <div className=" ml-40 mt-20 max-w-md">
            { tab === 0 ? <About /> : <Work />}
        </div>
    )
};
export default OptionsText;