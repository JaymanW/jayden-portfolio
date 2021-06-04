import React from 'react'
import './aboutMe.css'

function AboutMe() {
    return (
        <div className="about-wrapper">
            <div className="about-page">
                <div className="about-cnt">
                    <img src="./jaydenProfile230.png" />
                    <h2>about me</h2>
                    {/* <div className="socials-cnt">
                        <a href="https://github.com/JaymanW" target="_blank">
                            <img src="./github60.png" />
                        </a>
                        <a href="https://www.linkedin.com/in/jaydenwatts/" target="_blank">
                            <img src="./linkedin60.png" />
                        </a>
                    </div> */}
                    <p>Welcome to my page! My name is Jayden Watts and a I am Web Designer/Developer from Minnesota. My passion lies at the crossroads of people and technology. I am driven by using my technical skills to provide professional, real-world web solutions. Let's get in <a href="#contact">contact</a> and create something awesome together.</p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
