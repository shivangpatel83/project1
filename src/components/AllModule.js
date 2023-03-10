
import { FiArrowRight } from "react-icons/fi";
import women from '../images/homeWomen.jpg'

const AllModule=()=>{
    return (
        <div className="allModules">
            <div className="outer">
        <img className='homeImg' src={women} alt="" />
        </div>
        <div className="modules">
        <ul>
            <li>Module One</li>
            <li>Module Two</li>
            <li>Module Three</li>
            <li>Module Four</li>
            <li>Module Five</li>
        </ul>
        <button className='btn'>Select Module  <FiArrowRight/></button>
        </div>
        </div>
    )
}

export default AllModule