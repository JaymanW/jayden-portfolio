import React from 'react'
import './projects.css'

// COMPONENTS
import ProjectCarousel from '../ProjectCarousel'

function Projects() {
    return (
        <div className="projects-wrapper">
            <div className="projects-page">
                <h2>recent projects</h2>
                <ProjectCarousel />
            </div>
        </div>
    )
}

export default Projects
