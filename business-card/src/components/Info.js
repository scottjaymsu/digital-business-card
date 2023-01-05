import React from 'react'
import PIC from '../images/me.jpg'
import MAIL from '../images/mail_icon.jpg'

export default function Info () {
    return (
        <div className="information">
           <img src={PIC} alt="Myself" className="jay"></img>
           <h1>Jay Scott</h1>
           <h3>Computer Science Major</h3>
           <a href="https://github.com/scottjaymsu" target="_blank" rel="noreferrer"> 
           https://github.com/scottjaymsu
           </a>
           <div className="email">
                <button onClick={()=>{window.location.href='mailto:scottjay@msu.edu'}}>
                    Email
                </button>
                <img src={MAIL} alt="Mail"></img>
           </div>
        </div>
    )
}