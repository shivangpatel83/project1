import React from 'react'
import Button from './Button'
import { FiArrowRight } from "react-icons/fi";
import women from '../images/homeWomen.jpg'

const Home=()=>(
    <div className='home'>
        <img className='homeImg' src={women} alt="" />
        <div className="info">
            <h1>Lorem ipsum dolor sit imit</h1>
            <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cumque optio eius commodi, magni recusandae. adipisicing elit. Amet excepturi, laudantium accusantium tempora molestias repellat quibusdam, atque eos suscipit, voluptates mollitia optio nihil dignissimos.</p>
        <Button title = 'Enter' icon = {FiArrowRight}/>
        </div>
    </div>
)

export default Home