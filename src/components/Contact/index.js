import React from 'react'
import './contact.css'

// COMPONENTS
import ContactForm from '../ContactForm';

function Contact() {
    return (
        <div className="contact-wrapper">
            <div className="contact-page">
                <img src="hammer250.png" />
                <h2>let's create</h2>
                <ContactForm />
            </div>
        </div>
    )
}

export default Contact
