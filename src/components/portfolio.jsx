import React from 'react'
import './portfolio.css'
import calculator from '../assets/calculator.jpg'
import frogger from '../assets/frogger.jpg'
import netflix from '../assets/not-netflix.png'

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
                    <a href="https://not-netflix-site-seven.vercel.app/" className="portfolio-item">
                        <img src={netflix} alt="Not Netflix" />
                        <span className="portfolio-description">Not Netflix</span>
                    </a>
                </div>
            </div>
       </div>
    );
}