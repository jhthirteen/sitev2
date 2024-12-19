import About from './About.jsx'
import Work from './Work.jsx'
import Projects from './Projects.jsx'
import CurrentLearning from './CurrentLearning.jsx'

const OptionsText = ({ tab }) => {
    return(
        <div className="flex flex-col max-w-lg">
            { tab === 1 ? <Work /> : tab === 2 ? <Projects /> : tab === 3 ? <CurrentLearning /> : <></>}
        </div>
    )
};
export default OptionsText;