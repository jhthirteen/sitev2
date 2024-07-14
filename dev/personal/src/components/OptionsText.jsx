import About from './About.jsx'
import Work from './Work.jsx'
import Projects from './Projects.jsx'

const OptionsText = ({ tab }) => {
    return(
        <div className=" ml-40 mt-20 max-w-md">
            { tab === 0 ? <About /> : tab === 1 ? <Work /> : <Projects />}
        </div>
    )
};
export default OptionsText;