import About from './About.jsx'
import Work from './Work.jsx'
import Projects from './Projects.jsx'
import Connect from './Connect.jsx'

const OptionsText = ({ tab }) => {
    return(
        <div className=" ml-40 mt-20 max-w-md">
            { tab === 1 ? <About /> : tab === 2 ? <Work /> : tab === 3 ? <Projects /> : tab === 4 ? <Connect /> : <></>}
        </div>
    )
};
export default OptionsText;