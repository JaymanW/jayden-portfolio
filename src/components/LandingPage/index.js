import React from 'react'

// STYLES
import './landingPage.css'
import './background.css'

// COMPONENTS
import Blinker from '../Blinker'

function LandingPage() {
    return (
        <div className="landing-wrapper">
            <div className="landing-page">
                <nav className="landing-nav">
                    <a href="https://github.com/JaymanW" target="_blank">
                        <img src="./github60.png" />
                    </a>
                    <a href="https://www.linkedin.com/in/jaydenwatts/" target="_blank">
                        <img src="./linkedin60.png" />
                    </a>
                    <a href="#contact-wrapper">contact</a>
                </nav>
                <div className="landing-text">
                    <h1>Jayden Watts</h1>
                    <Blinker text="SCROLL TO START" />
                </div>
                <img src="./cloud234.png" className="cloud-one" />
                <img src="./cloud234.png" className="cloud-two" />
                <img src="./cloudFlipped234.png" className="cloud-three" />
                <img src="./flagpole204.png" className="flagpole" />
            </div>
        </div>
    )
}

/* <div className="socials-cnt">
                        <a href="https://github.com/JaymanW" target="_blank">
                            <img src="./github60.png" />
                        </a>
                        <a href="https://www.linkedin.com/in/jaydenwatts/" target="_blank">
                            <img src="./linkedin60.png" />
                        </a>
                </div> */

export default LandingPage
