import React, { useState, useEffect } from 'react'
import Carousel, { autoplayPlugin, slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './projectCarousel.css'

function ProjectCarousel() {
    const [windowWidth, setWindowWidth] = useState(null);
    const [slideNum, setSlideNum] = useState(3);

    useEffect(() => {
        updateWindowWidth();
        window.addEventListener("resize", updateWindowWidth);
        return () => window.removeEventListener("resize", updateWindowWidth);
    }, []);

    useEffect(() => {
        if (windowWidth > 980) {
            setSlideNum(3);
        } else if (windowWidth > 680) {
            setSlideNum(2);
        } else {
            setSlideNum(1);
         }
    }, [windowWidth])

    const updateWindowWidth = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
    }

    return (
        <div className="project-carousel">
            <div id="surrounding">
                <Carousel
                    plugins={[
                        'infinite',
                        'arrows',
                       {
                         resolve: autoplayPlugin,
                         options: 
                            {
                            interval: 4000,
                            }
                       },
                       {
                        resolve: slidesToShowPlugin,
                        options: 
                            {
                                numberOfSlides: slideNum
                            }
                        },
                     ]}   
                     animationSpeed={2000}
                >
                    <a href="https://sliderpuzzle.io/" target="_blank">
                        <img src='./projectOne.png' alt="slider puzzle project" />
                        <p>sliderpuzzle.io</p>
                    </a>
                    <a href="https://kiernantollefson.com/" target="_blank">
                        <img src='./projectTwo.png' alt="Kiernan Tollefson personal site project" />
                        <p>Kiernan Tollefson Music</p>
                    </a>
                    <a href="https://valueaddservices.net/" target="_blank">
                        <img src='./projectThree.png' alt="Value Add Services site project" />
                        <p>Value Add Services</p>
                    </a>
                    <a href="https://jaymanw.github.io/hw-week-six/" target="_blank">
                        <img src='./projectFour.png' alt="Weather App Project" />
                        <p>Daily Weather App</p>
                    </a>
                    
                    {/* <img src='./projectTwo.png' />
                    <img src='./projectThree.png' /> */}
                </Carousel>
            </div>
        </div>
    )
}

export default ProjectCarousel
