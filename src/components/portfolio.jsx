import React from 'react'
import './portfolio.css'
import calculator from '../assets/calculator.jpg'
import frogger from '../assets/frogger.jpg'
import construction from '../assets/under-construction.jpg'

export default function Portfolio() {
    return (
       <div className="center">
            <h2 className="text">My Projects</h2>
            <div className="portfolio-container">
                <div className="portfolio-item-wrapper">
                    <a href="https://github.com/adamouriel/calculatorproject.git" className="portfolio-item" target="_blank" rel="noopener noreferrer">
                        <img src={calculator} alt="Calculator" />
                        <span className="portfolio-description">Calculator App</span>
                    </a>
                </div>
                <div className="portfolio-item-wrapper">
                    <a href="https://github.com/adamouriel/froggergame" className="portfolio-item" target="_blank" rel="noopener noreferrer">
                        <img src={frogger} alt="Frogger Game" />
                        <span className="portfolio-description">Frogger Game Clone</span>
                    </a>
                </div>
                <div className="portfolio-item-wrapper">
                    <a href="" className="portfolio-item">
                        <img src={construction} alt="Under Construction" />
                        <span className="portfolio-description">Not Netflix</span>
                    </a>
                </div>
            </div>
       </div>
    );
}