import React, { useEffect, useState } from 'react'; // Import useState here
import picture from '../assets/adam-pic.png';
import './home.css';

export default function Home() {
    const [homeMain, setHomeMain] = useState(''); // Corrected useState and variable name
    useEffect(() => { // Corrected useEffect syntax
        setHomeMain('visible'); // Removed 'value:' label
    }, []); // Dependencies array is correct but should contain variables that, when changed, trigger the effect. Empty means it runs once on mount.

    return (
        <section className={`home-main ${homeMain}`}> {/* Corrected class naming to use template string */}
            <div className="introText">
                <p>Welcome! I'm <span className="name">ADAM OURIEL</span> <br /> Fullstack JavaScript Developer, Music Producer, and Design Enthusiast</p>
                <a className="button" href="#">Download Résumé</a> {/* Added placeholder '#' for href */}
            </div>
            <div>
                <img src={picture} alt="Adam Ouriel"/> {/* Added 'alt' attribute for accessibility */}
            </div>
        </section>
    );
}