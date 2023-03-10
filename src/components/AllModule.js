import Button from './Button'
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
            <li><a href="">Module One</a></li>
            <li><a href="">Module Two</a></li>
            <li><a href="">Module Three</a></li>
            <li><a href="">Module Four</a></li>
            <li><a href="">Module Five</a></li>
        </ul>
        <Button title = 'Select Module' icon = {FiArrowRight}/>
        </div>
        </div>
    )
}

export default AllModule