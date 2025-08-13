import React from 'react'

const About = (props) => {
    return (
        <section className="wpo-about-section section-padding" id="about">
            <div className="container">
                <div className="wpo-about-content">
                    <div className="about-title">
                        <h2>Creative Professional</h2>
                        <span>(Full Stack Developer)</span>
                    </div>
                    <p>Hello everyone, I am a full stack web Developer. I specialize in creating modern, responsive
                        web applications with attention to detail and user experience. With years of experience in
                        both frontend and backend development, I bring ideas to life through clean, efficient code
                        and innovative design solutions.</p>
                    <div className="wpo-about-content-bottom">
                        <div className="wpo-about-content-bottom-left">
                            <h2>7+</h2>
                            <span>Years of
                                Experience</span>
                        </div>
                        <div className="wpo-about-content-bottom-right">
                            <p>Passionate about crafting exceptional digital experiences through innovative web solutions.
                                Committed to delivering high-quality projects that exceed client expectations and drive
                                business growth through technology and creative design.</p>
                            <div className="wpo-about-content-bottom-right-items">
                                <div className="wpo-about-content-bottom-right-item">
                                    <h3>150+</h3>
                                    <p>Projects Completed</p>
                                </div>
                                <div className="wpo-about-content-bottom-right-item">
                                    <h3>85+</h3>
                                    <p>Satisfied Clients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;