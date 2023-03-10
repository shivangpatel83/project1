import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from "react-icons/fi";
import women from '../images/homeWomen.jpg'



const Home=()=>{
const navigate = useNavigate()
return (
    <div className='home'>
        <img className='homeImg' src={women} alt="" />
        <div className="info">
            <h1>Lorem ipsum dolor sit imit</h1>
            <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cumque optio eius commodi, magni recusandae. adipisicing elit. Amet excepturi, laudantium accusantium tempora molestias repellat quibusdam, atque eos suscipit, voluptates mollitia optio nihil dignissimos.</p>
            <button className='btn' onClick={()=>navigate('module-list')}>Enter <FiArrowRight/></button>
        </div>
    </div>
)
}

export default Home