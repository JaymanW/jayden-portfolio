import React, { useState, useEffect } from 'react'
import './style.css'

function Blinker(props) {
    const [visibility, setVisibility] = useState("visible")
    
    useEffect(() => {
        console.log(props.isBlinking)
        let visibilityInterval;

        visibilityInterval = setInterval(() => {
            let newVisibility = visibility === "visible" ? "hidden" : "visible";
            setVisibility(newVisibility);
        }, 1000);
        
        return () => clearInterval(visibilityInterval);
    }, [visibility]);
    
    return (
        <p className="subtitle" style={{visibility: visibility}}>{props.text}</p>
    )
}

export default Blinker
