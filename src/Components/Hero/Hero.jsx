import React from 'react'
import './Hero.css'
import waving from '../../assets/waving.png'
import heroImg from '../../assets/heroimg.png'
const Hero = () => {
    return (
        <div className="hero-section">
            <div className="container">
                <div className="hero-main">
                    <div className="hero-section-content">
                        <div className="left-h">
                            <h1>Front-End React Developer <img src={waving} alt="" /></h1>
                            <p>Hi, I'm Santosh. A passionate Front-end React Developer based in Belgrade, Serbia. 📍</p>
                            <div className="portfolio-link">
                                <a href="/"><i class="fa-brands fa-linkedin"></i></a>
                                <a href="/"><i class="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                        <div className="right-h">
                            {/* <img src={heroImg} alt="" /> */}
                        </div>
                    </div>
                    <div className="skills">
                        <p>Tech Stack</p>
                        <ul className='logos'>
                            <li><img src="" alt="" /></li>
                            <li><img src="" alt="" /></li>
                            <li><img src="" alt="" /></li>
                            <li><img src="" alt="" /></li>
                            <li><img src="" alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
