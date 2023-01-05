import React from 'react'
import LINKEDIN from '../images/linkedin.png'
import FACEBOOK from '../images/facebook.png'
import GITHUB from '../images/gitpic.png'

export default function Footer () {
    return (
        <div className='links'>
            <a target="_blank" href="https://www.linkedin.com/in/jay-scott-jr-629979254/"
            className='linkedin'><img src={LINKEDIN} alt="LinkedIn" className='linkedin'/>
            </a>

            <a target="_blank" href="https://github.com/scottjaymsu" className='github'>
                <img src={GITHUB} alt="GitHub" className='github'/>
            </a>

            <a target="_blank" href="https://www.facebook.com/realjayscott10" 
            className='facebook'><img src={FACEBOOK} alt="Facebook" className='facebook'/> 
            </a>
        </div>
    )
}