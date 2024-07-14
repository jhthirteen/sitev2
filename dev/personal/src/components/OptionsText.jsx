import About from './About.jsx'
import Work from './Work.jsx'
import Projects from './Projects.jsx'
import Connect from './Connect.jsx'

const OptionsText = ({ tab }) => {
    return(
        <div className=" ml-40 mt-20 max-w-md">
            { tab === 0 ? <About /> : tab === 1 ? <Work /> : tab === 2 ? <Projects /> : <Connect />}
        </div>
    )
};
export default OptionsText;