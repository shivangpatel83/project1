import React, {useState} from 'react'
import Links from './Links'
import handShake from '../images/handshake.jpg'


const Module1 = () =>{
    const [preset , newDisplay] = useState(handShake)
    return (
    <div className="module1">
        <Links/>
        <div className="display">
        <img src={preset} alt="img" />
        <div className="text">
            <h1>Lorem ipsum dolor sit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam id ipsum quasi ab repudiandae quidem debitis a, voluptatum obcaecati voluptatem optio corrupti repellat sit doloribus dolore, architecto aut nostrum maiores neque ad! Placeat tenetur officia laboriosam obcaecati aliquam quidem maiores qui expedita maxime illum et sed in cumque quod perferendis eos illo eveniet consequatur, mollitia, ea non soluta! Necessitatibus architecto minus </p>
        </div>
        </div>
    </div>
)
}
export default Module1