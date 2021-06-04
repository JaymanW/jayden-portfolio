import React, { useState, useEffect } from 'react'
import Carousel, { autoplayPlugin, slidesToShowPlugin, arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './projectCarousel.css'
    
// resizeSurrounding() {
//   const width = document.querySelector('#width').value;
//   document.querySelector('#surrounding').style.width = `${width}px`;
// }

function ProjectCarousel() {
    const [windowWidth, setWindowWidth] = useState(null);
    const [slideNum, setSlideNum] = useState(3);

    useEffect(() => {
        updateWindowWidth();
        window.addEventListener("resize", updateWindowWidth);
        return () => window.removeEventListener("resize", updateWindowWidth);
    }, []);

    useEffect(() => {
        // REWORK THIS SO DEFAULT IT 1
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
                    <a href="#">
                        <img src='./projectOne.png' alt="project one" />
                        <p>sliderpuzzle.io</p>
                    </a>
                    <a href="#">
                        <img src='./projectTwo.png' alt="project two" />
                        <p>Kiernan Tollefson Music</p>
                    </a>
                    <a href="#">
                        <img src='./projectThree.png' alt="project three" />
                        <p>Value Add Services</p>
                    </a>
                    <a href="#">
                        <img src='./projectFour.png' alt="project three" />
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
