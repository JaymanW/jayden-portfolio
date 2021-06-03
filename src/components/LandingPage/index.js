import React from 'react'

// STYLES
import './landingPage.css'
import './background.css'

// COMPONENTS
import Blinker from '../Blinker'

function LandingPage() {
    return (
        <div className="landing-page">
            <div className="landing-text">
                <h1>Jayden Watts</h1>
                <Blinker text="SCROLL TO START" />
            </div>
            <img src="./cloud234.png" className="cloud-one" />
            <img src="./cloud234.png" className="cloud-two" />
            <img src="./cloudFlipped234.png" className="cloud-three" />
            <img src="./flagpole204.png" className="flagpole" />
        </div>
    )
}

export default LandingPage
