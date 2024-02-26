import React from 'react'
import "./skills.css"
import JS from '../assets/js-logo.png'
import HTML from '../assets/html-css.png'
import REACT from '../assets/react-logo.png'
import AWS from '../assets/aws-logo.png'

export default function Skills() {
    return (
        <div className="center">
            <section className="skills">
                <h2>My Skills</h2>
                <div className="skills-container">
                    <div className="skill-box"><img src={JS} alt="" /><span> <br/>Javascript</span></div>
                    <div className="skill-box"><img src={HTML} alt="" /><br/><span>HTML & CSS</span></div>
                    <div className="skill-box"><img src={REACT} alt="" /><span><br/>React</span></div>
                    <div className="skill-box"><br/><br/><img className ="AWS" src={AWS} alt="" /><span> <br/> AWS</span></div>
                </div>
            </section>
        </div>
    )
}