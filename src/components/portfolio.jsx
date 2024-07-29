import React from 'react'
import './portfolio.css'
import calculator from '../assets/calculator.jpg'
import tic from '../assets/tic-tac-toe.png'
import netflix from '../assets/not-netflix.png'

export default function Portfolio() {
    return (
       <div className="center">
            <h2 className="text">My Projects</h2>
            <div className="portfolio-container">                
                <div className="portfolio-item-wrapper">
                    <a href="https://not-netflix-site-seven.vercel.app/" className="portfolio-item">
                        <img src={netflix} alt="Not Netflix" />
                        <span className="portfolio-description">Not Netflix</span>
                    </a>
                </div>
                <div className="portfolio-item-wrapper">
                    <a href="https://tic-tac-toe-five-kappa-34.vercel.app/" className="portfolio-item" target="_blank" rel="noopener noreferrer">
                        <img src={tic} alt="Tic Tac Toe" />
                        <span className="portfolio-description">React Tic-Tac-Toe</span>
                    </a>
                </div>
                <div className="portfolio-item-wrapper">
                    <a href="https://calculatorproject-seven.vercel.app/" className="portfolio-item" target="_blank" rel="noopener noreferrer">
                        <img src={calculator} alt="Calculator" />
                        <span className="portfolio-description">Calculator App</span>
                    </a>
                </div>
            </div>
       </div>
    );
}