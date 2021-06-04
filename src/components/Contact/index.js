import React, { useState } from 'react'
import './contact.css'

// COMPONENTS
import ContactForm from '../ContactForm';

function Contact() {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleFormSubmit = () => {
        console.log("W O R K I N G")
    }
    
    return (
        <div id="contact-wrapper">
            <div className="contact-page">
                <img src="hammer250.png" />
                <h2>let's create</h2>
                { isFormSubmitted ? <p>Form submitted</p> : <ContactForm onFormSubmit={handleFormSubmit} /> }
            </div>
        </div>
    )
}

export default Contact
