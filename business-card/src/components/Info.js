import React from 'react'
import PIC from '../images/me.jpg'

// functions to redirect to another page on button click 

/* function linkedIn () {
    <a id='anchorID' href='https://www.linkedin.com/in/jay-scott-jr-629979254/' target='_blank'></a>
    return(
        document.getElementById('anchorID').click()
    )
}
*/

export default function Info () {
    return (
        <div>
           <img src={PIC} alt="Myself" width="40px"></img>
           <h1>Jay Scott</h1>
           <h3>Computer Science Major</h3>
           <a href="https://github.com/scottjaymsu" target="_blank" rel="noreferrer"> https://github.com/scottjaymsu</a>
            <form>
                <button className="email">Email</button>
                <button className="linked">LinkedIn</button>
           </form>
        </div>
    )
}